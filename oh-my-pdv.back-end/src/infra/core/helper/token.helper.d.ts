import {
  Jwt,
  JwtPayload,
  Secret,
  PublicKey,
  PrivateKey,
  SignOptions,
  VerifyOptions,
  DecodeOptions,
} from 'jsonwebtoken';

// prettier-ignore
export declare namespace FactoryTokenHelper {
  export type SignTokenParam = {
    secret : Secret | PrivateKey;
    payload: string | Buffer | object;
    options: SignOptions;
  };

  export type VerifyTokenParam = {
    token   : string;
    secret  : Secret | PublicKey;
    options?: VerifyOptions;
  };

  export type DecodeTokenParam = {
    token  : string;
    options: DecodeOptions;
  };

  
  export class Class {
    static sign_token  (params: FactoryTokenHelper.SignTokenParam)  : string;
    static verify_token(params: FactoryTokenHelper.VerifyTokenParam): string | Jwt | JwtPayload;
    static decode_token(params: FactoryTokenHelper.DecodeTokenParam): string | Jwt | JwtPayload | null;
  }
}
