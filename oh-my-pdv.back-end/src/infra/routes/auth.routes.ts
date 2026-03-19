import { Router } from 'express';
import { AuthController } from '~/src/controller/auth.controller';

const authController = new AuthController();

const router = Router();

router.post('/sign-in', async (request, reply) => {
  await authController.signIn(request, reply);
});

export { router as auth_router };
