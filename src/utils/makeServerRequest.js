import { isEmptyObject } from './isEmptyObject';

export default async function makeServerRequest(
  endpoint,
  config = {
    method: 'GET',
    useAuth: false,
    headers: undefined,
    body: undefined,
  }
) {
  const fetchOptions = {
    method: config.method,
  };

  if (config.useAuth) {
    fetchOptions.credentials = 'include';
    fetchOptions.mode = 'cors';
  }

  if (config.body && !isEmptyObject(config.body))
    fetchOptions.body = JSON.stringify(config.body);
  if (config.headers && !isEmptyObject(config.headers))
    fetchOptions.headers = config.headers;

  const res = await fetch('/api' + endpoint, fetchOptions);

  if (!res.ok) throw new Error('Network Error');

  return await res.json();
}
