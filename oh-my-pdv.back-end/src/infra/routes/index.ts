import express from 'express';
import { auth_router } from '~/src/infra/routes/auth.routes';
import { product_router } from './product.routes';
import { sale_router } from './sale.routes';

const router = express.Router();

router.use('/auth', auth_router);
router.use('/products', product_router);
router.use('/sales', sale_router);

export default router;
