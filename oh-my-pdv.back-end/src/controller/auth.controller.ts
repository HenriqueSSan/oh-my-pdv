import { Response } from 'express';
import { Request } from 'express';
import { signInUsecase } from '~/src/module_core/module_auth/factory';

export class AuthController {
  async signIn(request: Request, reply: Response) {
    try {
      const response = await signInUsecase.handle(request, reply);
      reply.json(response).status(202);
    } catch (err: unknown) {}
  }
}
