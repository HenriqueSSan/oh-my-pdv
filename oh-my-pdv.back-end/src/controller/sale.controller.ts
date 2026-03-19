import { Request, Response } from '../@types/express';
import { saleCreateUsecase } from '../module_core/module_sale/factory';

export class SaleController {
  async create(request: Request, reply: Response) {
    try {
      const response = await saleCreateUsecase.handle(request, reply);
      reply.json(response).status(202);
    } catch (err: unknown) {}
  }
}
