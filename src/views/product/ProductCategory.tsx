import React from 'react';
import {ManoText} from 'components';
import {useProductContext} from 'contexts';

export default function ProductCategory() {
  const {product} = useProductContext();
  const {brand} = product;

  if (!brand) {
    return null;
  }
  return (
    <ManoText color="#e71233" transform="capitalize" weight="500">
      {brand}
    </ManoText>
  );
}
