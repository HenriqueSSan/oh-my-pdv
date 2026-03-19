import { Request, Response } from '../../../@types/express';
import { UsecaseContract } from '~/src/infra/core/contract/_usecase.contract';
import { SaleCreateDto } from '../dto/sale.create.dto';
import { prisma } from '~/src/infra/config/prisma';
import { Decimal } from '@prisma/client/runtime/library';
import { SalePaymentMethod } from '@prisma/client';

export class SaleCreateUsecase implements UsecaseContract<unknown> {
  constructor() {}

  async handle(request: Request, reply: Response) {
    const salesCreateDto = new SaleCreateDto(
      request.body.payment_method,
      request.body.items,
    ).valueOf();

    const user = await (async () => {
      let auth = request.user;

      if (auth) {
        let user = await prisma.user.findFirst({ where: { id: auth.id } });

        if (user) return user;
      }
      throw new Error('Not authorized');
    })();

    let productIds = salesCreateDto.items.map(item => item.product_id);

    let products = await prisma.product.findMany({
      where: { id: { in: productIds } },
      select: { id: true, name: true, base_price: true },
    });

    if (productIds.length !== products.length) {
      let founds = products.map(product => product.id);
      let missings = productIds.filter(id => !founds.includes(id));

      return { missings };
    }

    let basePriceMap = new Map(
      products.map(product => [product.id, product.base_price]),
    );

    let salesItens = salesCreateDto.items.map(item => {
      const unitBasePrice = basePriceMap.get(item.product_id) as Decimal;

      return {
        product_id: item.product_id,
        quantity: item.quantity,
        unit_price: unitBasePrice,
        subtotal: Decimal(item.quantity).mul(unitBasePrice),
      };
    });

    let total = salesItens.reduce(
      (acc, saleItem) => acc.add(saleItem.subtotal),
      Decimal(0),
    );

    let sale = await prisma.sale.create({
      data: {
        user: { connect: { id: user.id } },
        payment_method: salesCreateDto.payment_method as SalePaymentMethod,
        status: 'COMPLETED',
        total,
        saleItens: { create: salesItens },
      },
    });

    return { message: "Sale successfully"};
  }
}
