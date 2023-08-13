import {IHttpService} from 'types';

export default class HttpService implements IHttpService {
  private baseUrl: string;
  private headers?: Headers;

  constructor(baseUrl: string, headers?: Headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async get<Response extends unknown>(path: string): Promise<Response> {
    const url = this.buildUrl(path);
    const response = await fetch(url, {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return (await response.json()) as Response;
  }

  async post<Response extends unknown, Data extends unknown = undefined>(
    path: string,
    data?: Data,
  ): Promise<Response> {
    const url = this.buildUrl(path);
    const response = await fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: data && JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return (await response.json()) as Response;
  }

  private buildUrl(path: string) {
    const url = new URL(`${this.baseUrl}${path}`);

    return url.toString();
  }
}
