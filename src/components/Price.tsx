import React, {useMemo} from 'react';
import {formatPrice} from 'i18n';
import {StyleSheet} from 'react-native';

import ManoText, {ManoTextProps} from './ManoText';

interface PriceProps extends Omit<ManoTextProps, 'children' | 'tabular'> {
  price: number | string;
  currency?: string;
  isDiscount?: boolean;
}

export default function Price({
  price,
  currency,
  isDiscount,
  ...rest
}: PriceProps) {
  const presentedValue = useMemo(() => {
    let _price = price;
    if (typeof _price === 'string') {
      _price = parseInt(_price, 10);
    }
    return formatPrice(_price, currency);
  }, [currency, price]);

  return (
    <ManoText {...rest} tabular style={isDiscount && styles.discounted}>
      {presentedValue}
    </ManoText>
  );
}

const styles = StyleSheet.create({
  discounted: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
