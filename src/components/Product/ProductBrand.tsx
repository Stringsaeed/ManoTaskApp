import React from 'react';
import ManoText from 'components/ManoText';
import {useProductContext} from 'contexts';

export default function ProductBrand() {
  const {product} = useProductContext();
  const {brand} = product;

  if (!brand) {
    return null;
  }

  return (
    <ManoText transform="capitalize" size={12}>
      {brand}
    </ManoText>
  );
}
