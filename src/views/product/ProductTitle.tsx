import {ManoText} from 'components';
import {useProductContext} from 'contexts';
import React from 'react';

export default function ProductTitle() {
  const {product} = useProductContext();
  return (
    <ManoText transform="capitalize" weight="700" size={24}>
      {product.title}
    </ManoText>
  );
}
