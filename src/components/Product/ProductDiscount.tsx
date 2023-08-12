import React from 'react';
import Price from 'components/Price';

import {useProductItemContext} from './context';

export default function ProductDiscount() {
  const {item} = useProductItemContext();
  const {discounted_price, original_price} = item;
  const originalPriceValue = parseInt(original_price ?? '0', 10);
  const discountedPriceValue = parseInt(discounted_price ?? '0', 10);
  const hasDiscount =
    discountedPriceValue > 0 && discountedPriceValue < originalPriceValue;

  if (!hasDiscount) {
    return null;
  }

  return <Price isDiscount price={original_price} size={14} />;
}
