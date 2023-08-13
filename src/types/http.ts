export interface IHttpService {
  get<Response extends unknown>(url: string): Promise<Response>;
  post<Response extends unknown, Data extends unknown = undefined>(
    url: string,
    data?: Data,
  ): Promise<Response>;
}
