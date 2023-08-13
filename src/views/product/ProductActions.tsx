import React from 'react';
import {Button} from 'components';
import {useProductContext} from 'contexts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function ProductActions() {
  const {bottom} = useSafeAreaInsets();
  const {product} = useProductContext();
  const isDisabled = !product.quantity;
  const label = isDisabled ? 'Out of stock' : 'Add to cart';

  return (
    <Button
      color="#e71233"
      disabled={isDisabled}
      label={label}
      labelProps={{color: 'white'}}
      style={{marginBottom: bottom}}
    />
  );
}
