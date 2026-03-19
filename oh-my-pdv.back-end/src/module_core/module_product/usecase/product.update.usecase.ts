import { Request, Response } from 'express';
import { prisma } from '~/src/infra/config/prisma';
import { ProductUpdateDto } from '~/src/module_core/module_product/dto/product.update.dto';
import { UsecaseContract } from '../../../infra/core/contract/_usecase.contract';

export class ProductUpdateUsecase implements UsecaseContract<{
  message: string;
}> {
  constructor() {}

  async handle(request: Request, reply: Response) {
    const product = await (async () => {
      let alreadyExist = await prisma.product.findFirst({
        where: { id: request.params.product_id },
      });

      if (alreadyExist) return alreadyExist;

      throw new Error('Product Not Found');
    })();

    const productUpdateDto = new ProductUpdateDto(
      request.body.name,
      request.body.description,
      request.body.base_price,
    ).valueOf();

    const productItem = await prisma.product.update({
      where: { id: product.id },
      data: {
        name: productUpdateDto.name,
        base_price: productUpdateDto.base_price,
        description: productUpdateDto.description,
      },
    });

    return { message: 'Product updated successfully' };
  }
}
