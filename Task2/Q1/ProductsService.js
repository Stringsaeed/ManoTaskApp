import {HttpService} from './HttpService';

export class ProductsService {
  static fetchProducts() {
    return HttpService.get('https://example-api.com/products');
  }
}
