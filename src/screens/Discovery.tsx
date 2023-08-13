import React from 'react';
import {ListRenderItemInfo} from '@shopify/flash-list';
import {List, Product, Separator} from 'components';
import {IProduct} from 'types';
import {useGetProductsQuery} from 'hooks';
import {productItemConfig} from 'configs';
import {MainScreenProps, Route} from 'routes';
import {StyleSheet} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

function keyExtractor(item: IProduct): string {
  return item.id.toString();
}

function renderProductItem({item, index}: ListRenderItemInfo<IProduct>) {
  return (
    <Product item={item} index={index}>
      <Product.Image />
      <Product.Brand />
      <Product.Title />
      <Product.Price />
    </Product>
  );
}

export default function DiscoveryScreen(_: MainScreenProps<Route.Discovery>) {
  const {data} = useGetProductsQuery();
  const height = useHeaderHeight();

  const contentStyle = StyleSheet.flatten([
    styles.contentContainerStyle,
    {paddingTop: height + productItemConfig.padding},
  ]);

  return (
    <List
      keyExtractor={keyExtractor}
      renderItem={renderProductItem}
      estimatedItemSize={productItemConfig.itemHeight}
      data={data}
      numColumns={productItemConfig.numColumns}
      contentContainerStyle={contentStyle}
      ItemSeparatorComponent={Separator}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: productItemConfig.padding,
    paddingHorizontal: productItemConfig.itemMarginHorizontal,
  },
});
