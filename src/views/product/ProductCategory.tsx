import React from 'react';
import {ManoText} from 'components';
import {useProductContext} from 'contexts';
import {theme} from 'themes';

export default function ProductCategory() {
  const {product} = useProductContext();
  const {brand} = product;

  if (!brand) {
    return null;
  }
  return (
    <ManoText color={theme.colors.primary} transform="capitalize" weight="500">
      {brand}
    </ManoText>
  );
}
