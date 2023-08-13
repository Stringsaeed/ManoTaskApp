import {useNavigation} from '@react-navigation/native';
import {productItemConfig} from 'configs';
import {useProductContext} from 'contexts';
import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Route, MainScreenProps} from 'routes';

interface ProductContainerProps {
  children: React.ReactNode;
}

export default function ProductContainer({children}: ProductContainerProps) {
  const {product, onPress} = useProductContext();
  const navigation =
    useNavigation<MainScreenProps<Route.Discovery>['navigation']>();

  const handleOnPress = useCallback(() => {
    // this for making the product as convenient as possible
    if (onPress) {
      onPress();
    } else {
      // if we gonna navigate to product
      // it's recommended to preload the first image of the product
      // so when we navigate to the product screen
      // the image will be loaded instantly
      // we have to make sure that we have
      // at least one image in the product
      if (product.images.length) {
        const {original} = product.images[0];
        FastImage.preload([{uri: original, priority: FastImage.priority.high}]);
      }
      navigation.push(Route.Product, {product});
    }
  }, [product, navigation, onPress]);

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: productItemConfig.itemHeight,
    width: productItemConfig.itemWidth,
    marginHorizontal: productItemConfig.itemMarginHorizontal,
    gap: 8,
  },
});
