// product.entity.ts
import { Decimal } from '@prisma/client/runtime/library';

export class ProductEntity {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public base_price: Decimal,
    public created_at: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.base_price = base_price;
    this.created_at = created_at;
  }
}
