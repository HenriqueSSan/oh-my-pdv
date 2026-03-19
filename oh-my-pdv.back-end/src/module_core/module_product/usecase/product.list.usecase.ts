import { Request, Response } from 'express';
import { prisma } from '~/src/infra/config/prisma';
import { UsecaseContract } from '~/src/infra/core/contract/_usecase.contract';
import { ProductDomain } from '~/src/module_core/module_product/domain/product.domain';
import { ProductEntity } from '~/src/module_core/module_product/entity/product.entity';

export class ProductListUsecase implements UsecaseContract<{
  results: ProductEntity[];
}> {
  constructor() {}

  async handle(request: Request, reply: Response) {
    const { name } = request.query;

    const products = await (async () => {
      let list = await prisma.product.findMany({
        where: {
          ...(name && {
            name: { contains: name as string },
          }),
        },
      });

      return list.map(new ProductDomain().toEntity);
    })();

    return {
      results: products,
    };
  }
}
