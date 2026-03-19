import { Request, Response } from 'express';
import { prisma } from '~/src/infra/config/prisma';

import { UsecaseContract } from '~/src/infra/core/contract/_usecase.contract';

export class ProductRemoveUsecase implements UsecaseContract {
  constructor() {}

  async handle(request: Request, reply: Response) {
    const { id } = request.params;

    await prisma.product.delete({
      where: { id },
    });

    return { message: 'Product removed successfully' };
  }
}
