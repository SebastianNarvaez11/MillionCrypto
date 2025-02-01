import axios, {
  AxiosHeaders,
  AxiosInstance,
  HeadersDefaults,
  RawAxiosRequestHeaders,
} from 'axios';

/**
 * Creates and configures an Axios instance with custom settings.
 *
 * @description
 * This utility function creates a new Axios instance with specified base URL and headers.
 * It provides a standardized way to create API clients across the application.
 *
 * @param {string} baseURL - The base URL that will be prepended to all request paths
 * @param {AxiosHeaders | Partial<HeadersDefaults> | Partial<RawAxiosRequestHeaders>} [headers] - Optional custom headers to be included in all requests
 *
 * @returns {AxiosInstance} A configured Axios instance ready to make HTTP requests
 *
 * @example
 * // Create basic API client
 * const api = createApiConfig('https://api.example.com');
 *
 * // Create API client with custom headers
 * const apiWithHeaders = createApiConfig('https://api.example.com', {
 *   'Authorization': 'Bearer token123',
 *   'Custom-Header': 'value'
 * });
 *
 * // Make requests
 * const data = await api.get('/users');
 */
const createApiConfig = (
  baseURL: string,
  headers?:
    | AxiosHeaders
    | Partial<HeadersDefaults>
    | Partial<RawAxiosRequestHeaders>,
): AxiosInstance => {
  const api = axios.create({
    baseURL: baseURL,
    headers: headers || {
      'Content-Type': 'application/json',
    },
  });

  return api;
};

export {createApiConfig};
