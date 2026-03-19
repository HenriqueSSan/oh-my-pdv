import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNextFunction,
} from 'express';

export interface Request extends ExpressRequest {
  user?: { id: string; email: string };
}

export interface Response extends ExpressResponse {}

export interface NextFunction extends ExpressNextFunction {}
