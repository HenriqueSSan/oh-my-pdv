export interface IAppError extends Error {
  msg: string;
  stack: string;
  http_code: number;
}

export class AppError extends Error {
  public readonly http_code: number;
  public readonly msg: string;

  constructor(msg: string, http_code: number = 500, stack: string = '') {
    super(msg);

    this.http_code = http_code;
    this.msg = msg;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }

    Object.setPrototypeOf(this, AppError.prototype);
  }

  public static BadRequest(msg: string): AppError {
    return new AppError(msg, 400);
  }

  public static NotFound(msg: string): AppError {
    return new AppError(msg, 404);
  }

  public static Unauthorized(msg: string): AppError {
    return new AppError(msg, 401);
  }

  public static Internal(msg: string): AppError {
    return new AppError(msg, 500);
  }
}
