export class SignInDto {
  constructor(
    public email: string,
    public password: string,
  ) {}

  valueOf() {
    return this;
  }
}
