import React from 'react';
import {ManoText} from 'components';
import {useProductScreenContext} from 'contexts';

export default function ProductCategory() {
  const {product} = useProductScreenContext();
  const {brand} = product;

  if (!brand) {
    return null;
  }
  return (
    <ManoText transform="capitalize" weight="500">
      {brand}
    </ManoText>
  );
}
