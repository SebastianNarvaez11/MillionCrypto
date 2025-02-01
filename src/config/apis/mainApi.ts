import {BASE_URL} from '../constants';
import {createApiConfig} from './createApiConfig';

/**
 * Main API instance for making HTTP requests to the application's base URL.
 *
 * @description
 * This is the primary API client used throughout the application.
 * It is configured with the base URL defined in constants and default headers.
 *
 * @example
 * // Making a GET request
 * const response = await mainApi.get('/endpoint');
 *
 * // Making a POST request with data
 * const data = await mainApi.post('/endpoint', { key: 'value' });
 */
const mainApi = createApiConfig(BASE_URL);

export {mainApi};
