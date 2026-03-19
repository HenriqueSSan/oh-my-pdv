import { Product as ProductPrisma } from '@prisma/client';
import { DomainContract } from '~/src/infra/core/contract/_domain.contract';
import { ProductEntity } from '~/src/module_core/module_product/entity/product.entity';

type ProductDB = ProductPrisma;

export class ProductDomain implements DomainContract<ProductEntity, ProductDB> {
  toEntity(db: ProductDB): ProductEntity {
    return new ProductEntity(
      db.id,
      db.name,
      db.description,
      db.base_price,
      db.created_at,
    );
  }

  toDatabase(entity: ProductEntity): ProductDB {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      base_price: entity.base_price,
      created_at: entity.created_at,
    };
  }
}
