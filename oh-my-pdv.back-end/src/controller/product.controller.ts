import { Request, Response } from 'express';

import {
  productCreateUsecase,
  productListUsecase,
  productRemoveUsecase,
  productUpdateUsecase,
} from '../module_core/module_product/factory';

export class ProductController {
  async findAll(request: Request, reply: Response) {
    try {
      const response = await productListUsecase.handle(request, reply);
      reply.json(response).status(202);
    } catch (err: unknown) {}
  }

  async create(request: Request, reply: Response) {
    try {
      const response = await productCreateUsecase.handle(request, reply);
      reply.json(response).status(202);
    } catch (err: unknown) {}
  }

  async update(request: Request, reply: Response) {
    try {
      const response = await productUpdateUsecase.handle(request, reply);
      reply.json(response).status(202);
    } catch (err: unknown) {}
  }

  async remove(request: Request, reply: Response) {
    try {
      const response = await productRemoveUsecase.handle(request, reply);
      reply.json(response).status(202);
    } catch (err: unknown) {}
  }
}
