import {Spacer} from 'components';
import {ProductProvider} from 'contexts';
import React, {PropsWithChildren} from 'react';
import {IProduct} from 'types';
import ProductActions from './ProductActions';
import ProductCarousel from './ProductCarousel';
import ProductCategory from './ProductCategory';
import ProductContainer from './ProductContainer';
import ProductPageSimilar from './ProductPageSimilar';
import ProductPrice from './ProductPrice';
import ProductTitle from './ProductTitle';

interface Props {
  product: IProduct;
}

function ProductPage({children, product}: PropsWithChildren<Props>) {
  return (
    <ProductProvider product={product}>
      <ProductContainer>{children}</ProductContainer>
    </ProductProvider>
  );
}

ProductPage.Carousel = ProductCarousel;
ProductPage.Title = ProductTitle;
ProductPage.Price = ProductPrice;
ProductPage.Actions = ProductActions;
ProductPage.Category = ProductCategory;
ProductPage.SimilarProducts = ProductPageSimilar;
ProductPage.Spacer = Spacer;

export default ProductPage;
