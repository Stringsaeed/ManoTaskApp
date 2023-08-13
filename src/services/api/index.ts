import HttpService from 'services/http';
import createProductRepo from './product-repo';

const baseUrl = 'https://staging-api.manoapp.com/api/v1/users';
// headers
const defaultHeaders = new Headers();
defaultHeaders.set('Authorization', '1009c1a351683ae69c8d6f54d94fb898');
defaultHeaders.set('StoreID', '2');
defaultHeaders.set('UserAddressID', '49769');

const httpService = new HttpService(baseUrl, defaultHeaders);

export const productService = createProductRepo(httpService);
