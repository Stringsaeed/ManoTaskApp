import React from 'react';
import {Price} from 'components';
import {useProductScreenContext} from 'contexts';

export default function ProductPrice() {
  const {product} = useProductScreenContext();
  const {price} = product;

  return <Price price={price} weight="600" size={24} />;
}
