import {makeAutoObservable} from 'mobx';

import {ProductsService} from './ProductsService';

// then we need to use the services in the stores
export class ProductsStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  *fetchProducts() {
    const response = yield ProductsService.fetchProducts();

    this.products = response.data;
  }
}
