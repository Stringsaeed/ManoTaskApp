import {useQuery} from '@tanstack/react-query';
import {Logger, productService} from 'services';
import {IProduct} from 'types';

async function fetchProducts(): Promise<IProduct[]> {
  try {
    Logger.info('starting getting products request');
    const items = await productService.getProducts();
    Logger.info('ending getting products request');
    return items;
  } catch (e) {
    if (e instanceof Error) {
      Logger.error(`error while getting products ${e.message}`);
    }
    throw e;
  }
}

export default function useGetProductsQuery() {
  return useQuery(['products'], fetchProducts);
}
