import {useMemo} from 'react';
import type {IProduct} from 'types';
import useGetProductsQuery from './useGetProductsQuery';

export default function useGetSimilarProducts(product: IProduct) {
  const {data} = useGetProductsQuery();
  return useMemo(() => {
    if (!data) {
      return [];
    }
    return data.filter(item =>
      item.categories.some(
        category =>
          category.id === product.categories.at(0)?.id &&
          item.id !== product.id,
      ),
    );
  }, [data, product.categories, product.id]);
}
