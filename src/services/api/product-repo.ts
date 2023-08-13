import {IHttpService, IProduct} from 'types';

export default function createProductRepo(httpService: IHttpService) {
  return {
    async getProducts() {
      const response = await httpService.post<{data: {items: IProduct[]}}>(
        '/products',
      );

      return response.data.items;
    },
  };
}
