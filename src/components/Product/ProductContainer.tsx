import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {productItemConfig} from 'configs';
import {useProductItemContext} from './context';

interface ProductContainerProps {
  children: React.ReactNode;
}

export default function ProductContainer({children}: ProductContainerProps) {
  const {onPress} = useProductItemContext();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: productItemConfig.itemHeight,
    marginHorizontal: productItemConfig.spacingBetween / 2,
    gap: 8,
  },
});
