import { Request, Response } from 'express';
import { UsecaseContract } from '../../../infra/core/contract/_usecase.contract';
import { ProductCreateDto } from '~/src/module_core/module_product/dto/product.create.dto';
import { prisma } from '~/src/infra/config/prisma';

export class ProductCreateUsecase implements UsecaseContract<{
  message: string;
}> {
  constructor() {}

  async handle(request: Request, reply: Response) {
    const productCreateDto = new ProductCreateDto(
      request.body.name,
      request.body.description,
      request.body.base_price,
    ).valueOf();

    const product = await prisma.product.create({
      data: {
        name: productCreateDto.name,
        base_price: productCreateDto.base_price,
        description: productCreateDto.description,
      },
    });

    return { message: 'Your product all ready' };
  }
}
