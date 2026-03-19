export class SaleCreateDto {
  constructor(
    public payment_method: string,
    public items: { product_id: string; quantity: number }[],
  ) {}

  valueOf() {
    return this;
  }
}
