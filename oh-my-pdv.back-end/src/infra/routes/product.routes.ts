import { Router } from 'express';
import { ProductController } from '~/src/controller/product.controller';

const productController = new ProductController();

const router = Router();

router.get('/', async (request, reply) => {
  await productController.findAll(request, reply);
});

router.post('/', async (request, reply) => {
  await productController.create(request, reply);
});

router.put('/:product_id', async (request, reply) => {
  await productController.update(request, reply);
});

router.delete('/:product_id', async (request, reply) => {
  await productController.remove(request, reply);
});

export { router as auth_router };
