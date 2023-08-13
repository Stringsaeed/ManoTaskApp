import {ProductProvider} from 'contexts';
import React from 'react';
import {IListRenderItemInfo, IProduct} from 'types';

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
    <ProductProvider onPress={onPress} product={item} index={index}>
      <ProductContainer>{children}</ProductContainer>
    </ProductProvider>
  );
}

ProductItem.Image = ProductImage;
ProductItem.Brand = ProductBrand;
ProductItem.Title = ProductTitle;
ProductItem.Price = ProductPrice;

export default ProductItem;
