import { Request, Response } from 'express';

export interface UsecaseContract<TR = unknown> {
  handle(request: Request, reply: Response): Promise<TR>;
}
