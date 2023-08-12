import React from 'react';
import {Button} from 'components';
import {PlatformColor} from 'react-native';
import {useProductScreenContext} from 'contexts';

export default function ProductActions() {
  const {product} = useProductScreenContext();
  const isDisabled = !product.quantity;
  const label = isDisabled ? 'Out of stock' : 'Add to cart';

  return (
    <Button
      color={PlatformColor('systemBlue')}
      disabled={isDisabled}
      label={label}
    />
  );
}
