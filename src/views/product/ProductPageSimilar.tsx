import {ListRenderItemInfo} from '@shopify/flash-list';
import List from 'components/List';
import ProductItem from 'components/Product';
import {productItemConfig} from 'constants/product';
import {useProductContext} from 'contexts';
import {useGetSimilarProducts} from 'hooks';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IProduct} from 'types/product';

function renderProductItem(props: ListRenderItemInfo<IProduct>) {
  return (
    <ProductItem {...props}>
      <ProductItem.Image />
      <ProductItem.Brand />
      <ProductItem.Title />
      <ProductItem.Price />
    </ProductItem>
  );
}

export default function ProductPageSimilar() {
  const {product} = useProductContext();
  const similarProducts = useGetSimilarProducts(product);

  if (!similarProducts?.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <List
        data={similarProducts}
        renderItem={renderProductItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentContainer}
        estimatedItemSize={productItemConfig.itemWidth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -16,
  },
  contentContainer: {
    paddingHorizontal: productItemConfig.itemMarginHorizontal,
  },
});
