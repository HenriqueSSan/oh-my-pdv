import { Request, Response, NextFunction } from '../@types';
import { TokenHelper } from '../infra/core/helper/token.helper';

export function AuthMiddleware(
  req: Request,
  reply: Response,
  next: NextFunction,
) {
  const authorization = req.headers.authorization;
  const authorization_token = authorization?.split(' ')[1];

  if (!authorization_token)
    return reply.status(401).json({ message: 'Credentials is missing' });

  if (authorization_token)
    try {
      const decoded = TokenHelper.verify_token({
        token: authorization_token,
        secret: process.env.TOKEN_SECRET || '',
      }) as { id: string; system_role: string; email: string };

      if (decoded) req.user = decoded;

      next();
    } catch (err) {
      return reply.status(401).json({ error: 'Invalid credentials' });
    }
}
