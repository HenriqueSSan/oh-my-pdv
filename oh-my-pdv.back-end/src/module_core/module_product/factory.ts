import { ProductCreateUsecase } from '~/src/module_core/module_product/usecase/product.create.usecase';
import { ProductListUsecase } from '~/src/module_core/module_product/usecase/product.list.usecase';
import { ProductRemoveUsecase } from '~/src/module_core/module_product/usecase/product.remove';
import { ProductUpdateUsecase } from '~/src/module_core/module_product/usecase/product.update.usecase';

export const [
  productListUsecase,
  productCreateUsecase,
  productUpdateUsecase,
  productRemoveUsecase,
] = [
  new ProductListUsecase(),
  new ProductCreateUsecase(),
  new ProductUpdateUsecase(),
  new ProductRemoveUsecase(),
];
