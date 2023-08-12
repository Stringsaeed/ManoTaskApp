import React from 'react';
import ManoText from 'components/ManoText';
import {useProductItemContext} from './context';

export default function ProductBrand() {
  const {item} = useProductItemContext();
  const {brand} = item;

  if (!brand) {
    return null;
  }

  return (
    <ManoText transform="capitalize" size={12}>
      {brand}
    </ManoText>
  );
}
