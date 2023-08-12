import {ManoText} from 'components';
import {useProductScreenContext} from 'contexts';
import React from 'react';

export default function ProductTitle() {
  const {product} = useProductScreenContext();
  return (
    <ManoText transform="capitalize" weight="700" size={24}>
      {product.title}
    </ManoText>
  );
}
