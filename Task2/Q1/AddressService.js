const {HttpService} = require('./HttpService');

// then we need to create a service to handle the requests
export class AddressesService {
  static fetchAddresses() {
    return HttpService.get('https://example-api.com/addresses');
  }
}
