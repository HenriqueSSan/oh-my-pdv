import express from 'express';
import { auth_router } from '~/src/infra/routes/auth.routes';

const router = express.Router();

router.use('/auth', auth_router);

export default router;
