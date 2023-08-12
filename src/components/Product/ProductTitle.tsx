import React from 'react';

import ManoText from '../ManoText';

import {useProductItemContext} from './context';

export default function ProductTitle() {
  const {item} = useProductItemContext();
  return (
    <ManoText transform="capitalize" size={14} numberOfLines={3}>
      {item.title}
    </ManoText>
  );
}
