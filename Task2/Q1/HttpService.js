import axios from 'axios';

// then we need to create a http service to handle the requests
export class HttpService {
  static get(url) {
    return axios.get(url);
  }
}
