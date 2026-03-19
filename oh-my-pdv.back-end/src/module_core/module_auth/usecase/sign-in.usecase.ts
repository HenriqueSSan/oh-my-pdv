import { Request, Response } from 'express';
import { TokenHelper } from '../../../infra/core/helper/token.helper';
import { UserDomain } from '../../module_user/domain/user.domain';

import { prisma } from '~/src/infra/config/prisma';
import { SignInDto } from '~/src/module_core/module_auth/dto/sign-in.dto';

export class SignInUsecase {
  constructor() {}

  async handle(request: Request, reply: Response) {
    const signInDto = new SignInDto(
      request.body.email,
      request.body.password,
    ).valueOf();

    const user = new UserDomain().toEntity(
      await (async () => {
        let alreadyExist = await prisma.user.findFirst({
          where: { email: signInDto.email },
        });

        if (alreadyExist) return alreadyExist;

        throw new Error('Invalid credentials');
      })(),
    );

    if (await user.comparePasswordHash(signInDto.password)) {
      let secret = process.env.TOKEN_SECRET || '';

      const access_token = TokenHelper.sign_token({
        secret,
        payload: { id: user.id, email: user.email },
        options: { expiresIn: '2h' },
      });

      const refresh_token = TokenHelper.sign_token({
        secret,
        payload: { id: user.id, email: user.email, access_token },
        options: { expiresIn: '8h' },
      });

      return { access_token, refresh_token };
    }

    throw new Error('Invalid credentials');
  }
}
