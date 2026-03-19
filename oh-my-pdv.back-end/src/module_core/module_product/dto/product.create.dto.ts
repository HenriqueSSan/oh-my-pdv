import { Decimal } from '@prisma/client/runtime/library';

export class ProductCreateDto {
  constructor(
    public name: string,
    public description: string,
    public base_price: Decimal,
  ) {}

  valueOf() {
    return this;
  }
}
