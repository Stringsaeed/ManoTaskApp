import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useProductItemContext} from './context';

export default function ProductImage() {
  const {item} = useProductItemContext();
  const imageURI = item.images.at(0)?.thumbnail;

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
