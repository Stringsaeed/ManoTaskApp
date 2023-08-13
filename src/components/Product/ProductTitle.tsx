import {useProductContext} from 'contexts';
import React from 'react';

import ManoText from '../ManoText';

export default function ProductTitle() {
  const {product} = useProductContext();
  return (
    <ManoText transform="capitalize" size={14} numberOfLines={3}>
      {product.title}
    </ManoText>
  );
}
