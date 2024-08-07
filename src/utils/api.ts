type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Headers = {
  'Content-Type'?: string;
  Authorization?: string;
};

export abstract class API {
  protected route;
  constructor(route: string) {
    this.route = route;
  }

  protected async request(
    method: Method,
    path: string,
    token: string | null,
    body: string | FormData | null,
    query: string | null,
    contentType = 'application/json',
  ) {
    const qp = query ? `?${query}` : '';
    const headers: Headers = {
      'Content-Type': contentType,
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    const res = await fetch(`${this.route}/${path}${qp}`, {
      method,
      headers,
      body,
    });
    if (!res.ok && res.status !== 500) {
      throw new Error('Unexpected error occurred.');
    }
    return res.json();
  }
}
