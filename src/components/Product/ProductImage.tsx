import {useProductContext} from 'contexts';
import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function ProductImage() {
  const {product} = useProductContext();
  const imageURI = product.images.at(0)?.thumbnail;

  return <FastImage source={{uri: imageURI}} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
