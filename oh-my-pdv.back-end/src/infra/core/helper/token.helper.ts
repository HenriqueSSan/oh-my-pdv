import jwt from 'jsonwebtoken';
import { FactoryTokenHelper } from './token.helper.d';

export class TokenHelper implements FactoryTokenHelper.Class {
  static sign_token(params: FactoryTokenHelper.SignTokenParam) {
    const { payload, secret, options } = params;
    return jwt.sign(payload, secret, options);
  }
  static verify_token(params: FactoryTokenHelper.VerifyTokenParam) {
    const { token, secret, options } = params;
    return jwt.verify(token, secret, options);
  }
  static decode_token(params: FactoryTokenHelper.DecodeTokenParam) {
    const { token, options } = params;
    return jwt.decode(token, options);
  }
}
