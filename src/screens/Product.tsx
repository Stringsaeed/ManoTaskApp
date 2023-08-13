import React from 'react';
import {ProductPage} from 'views';
import {MainScreenProps, Route} from 'routes';

export default function ProductScreen({route}: MainScreenProps<Route.Product>) {
  const {product} = route.params;

  return (
    <ProductPage product={product}>
      <ProductPage.Carousel />
      <ProductPage.Category />
      <ProductPage.Price />
      <ProductPage.Title />
      <ProductPage.Spacer />
      <ProductPage.SimilarProducts />
      <ProductPage.Actions />
    </ProductPage>
  );
}
