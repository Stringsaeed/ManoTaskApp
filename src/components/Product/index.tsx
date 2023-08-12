import React from 'react';
import {IListRenderItemInfo, IProduct} from 'types';

import ProductItemProvider from './context';
import ProductBrand from './ProductBrand';
import ProductContainer from './ProductContainer';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import ProductTitle from './ProductTitle';

type ProductItemProps = IListRenderItemInfo<IProduct> & {
  children: React.ReactNode;
  onPress?: () => void;
};

function ProductItem({item, index, onPress, children}: ProductItemProps) {
  return (
    <ProductItemProvider onPress={onPress} item={item} index={index}>
      <ProductContainer>{children}</ProductContainer>
    </ProductItemProvider>
  );
}

ProductItem.Image = ProductImage;
ProductItem.Brand = ProductBrand;
ProductItem.Title = ProductTitle;
ProductItem.Price = ProductPrice;

export default ProductItem;
