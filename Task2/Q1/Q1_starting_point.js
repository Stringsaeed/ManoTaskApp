import {makeObservable} from 'mobx';
import axios from 'axios';

class ProductsStore {
  products = [];
  cartItems = [];
  addresses = [];

  constructor() {
    makeObservable(this);
  }

  fetchProducts() {
    axios
      .get('https://example-api.com/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => console.error('Error fetching products: ', error));
  }
  fetchAddresses() {
    axios
      .get('https://example-api.com/addresses')
      .then(response => {
        this.addresses = response.data;
      })
      .catch(error => console.error('Error fetching addresses: ', error));
  }
  addToCart(product) {
    this.cartItems.push(product);
  }

  removeFromCart(productId) {
    const index = this.cartItems.findIndex(item => item.id === productId);
    this.cartItems.splice(index, 1);
  }
}

const store = new ProductsStore();
export default store;
