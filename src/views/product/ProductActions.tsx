import React, {useMemo} from 'react';
import {Button} from 'components';
import {useProductContext} from 'contexts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from 'themes';

export default function ProductActions() {
  const {bottom} = useSafeAreaInsets();
  const style = useMemo(
    () => ({
      marginBottom: Math.max(16, bottom),
    }),
    [bottom],
  );

  const {product} = useProductContext();
  const isDisabled = !product.quantity;
  const label = isDisabled ? 'Out of stock' : 'Add to cart';

  return (
    <Button
      color={theme.colors.primary}
      disabled={isDisabled}
      label={label}
      labelProps={{color: theme.colors.onPrimary}}
      style={style}
    />
  );
}
