import {useProductScreenContext} from 'contexts';
import React, {useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {Dimensions, FlatList, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IImage, IListRenderItemInfo} from 'types';

export default function ProductCarousel() {
  const {top} = useSafeAreaInsets();
  const {product} = useProductScreenContext();
  const renderImage = useCallback(({item}: IListRenderItemInfo<IImage>) => {
    return (
      <FastImage
        resizeMode="contain"
        source={{uri: item.original}}
        style={styles.image}
      />
    );
  }, []);

  return (
    <FlatList
      data={product.images}
      renderItem={renderImage}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{paddingTop: top}}
      scrollEnabled={product.images.length > 1}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    flexGrow: 0,
    marginHorizontal: -16,
  },
  image: {
    width: Dimensions.get('window').width,
    aspectRatio: 1.5,
  },
});
