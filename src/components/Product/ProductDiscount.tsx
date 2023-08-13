import React from 'react';
import Price from 'components/Price';

import {useProductContext} from 'contexts';

interface Props {
  size?: number;
}

export default function ProductDiscount({size = 14}: Props) {
  const {product} = useProductContext();
  const {discounted_price, original_price} = product;
  const originalPriceValue = parseInt(original_price ?? '0', 10);
  const discountedPriceValue = parseInt(discounted_price ?? '0', 10);
  const hasDiscount =
    discountedPriceValue > 0 && discountedPriceValue < originalPriceValue;

  if (!hasDiscount) {
    return null;
  }

  return <Price isDiscount price={original_price} size={size} />;
}
