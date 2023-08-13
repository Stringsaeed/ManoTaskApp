import {makeAutoObservable} from 'mobx';

export class CartStore {
  cartItems = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product) {
    this.cartItems.push(product);
  }

  removeFromCart(productId) {
    const index = this.cartItems.findIndex(item => item.id === productId);
    this.cartItems.splice(index, 1);
  }
}
