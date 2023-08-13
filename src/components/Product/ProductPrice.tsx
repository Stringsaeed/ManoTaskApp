import React from 'react';
import Price from 'components/Price';
import RowWrapContainer from 'components/RowWrapContainer';
import {useProductContext} from 'contexts';

import ProductDiscount from './ProductDiscount';

export default function ProductPrice() {
  const {product} = useProductContext();
  const {price} = product;

  return (
    <RowWrapContainer gap={8}>
      <Price price={price} weight="500" size={16} />
      <ProductDiscount />
    </RowWrapContainer>
  );
}
