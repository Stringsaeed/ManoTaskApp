import React from 'react';
import {Price, RowWrapContainer} from 'components';
import {useProductContext} from 'contexts';
import ProductDiscount from 'components/Product/ProductDiscount';

export default function ProductPrice() {
  const {product} = useProductContext();
  const {price} = product;

  return (
    <RowWrapContainer>
      <Price price={price} weight="600" size={24} />
      <ProductDiscount size={14} />
    </RowWrapContainer>
  );
}
