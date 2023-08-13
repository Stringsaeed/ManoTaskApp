import {useQuery} from '@tanstack/react-query';
import {Logger} from 'services';
import {IProduct} from 'types';

async function fetchProducts(): Promise<IProduct[]> {
  try {
    Logger.info('starting getting products request');
    const headers = new Headers();
    headers.set('Authorization', '1009c1a351683ae69c8d6f54d94fb898');
    headers.set('StoreID', '2');
    headers.set('UserAddressID', '49769');

    const response = await fetch(
      'https://staging-api.manoapp.com/api/v1/users/products',
      {
        method: 'POST',
        headers,
      },
    );
    const {
      data: {items},
    } = await response.json();

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
