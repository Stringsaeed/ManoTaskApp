import {makeAutoObservable} from 'mobx';

import {AddressesService} from './AddressService';

export class AddressesStore {
  addresses = [];

  constructor() {
    makeAutoObservable(this);
  }

  *fetchAddresses() {
    const response = yield AddressesService.fetchAddresses();

    this.addresses = response.data;
  }
}
