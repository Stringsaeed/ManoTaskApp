import React from 'react';
import {StyleSheet, View} from 'react-native';
import Price from 'components/Price';

import {useProductItemContext} from './context';
import ProductDiscount from './ProductDiscount';

export default function ProductPrice() {
  const {item} = useProductItemContext();
  const {price} = item;

  return (
    <View style={styles.container}>
      <Price price={price} weight="500" size={16} />
      <ProductDiscount />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
