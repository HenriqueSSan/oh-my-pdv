import { Router } from 'express';
import { SaleController } from '~/src/controller/sale.controller';
import { AuthMiddleware } from '~/src/module_middleware/auth.middleware';

const saleController = new SaleController();

const router = Router();

router.post('/', AuthMiddleware, async (request, reply) => {
  await saleController.create(request, reply);
});

export { router as sale_router };
