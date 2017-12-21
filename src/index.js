import { PublicClient } from './clients/public';
import { AuthenticatedClient } from './clients/authenticated';

/**
 *
 * @namespace CartoApiClient
 * @summary JavaScript client for cartodb API
 *
 * @description
 *
 * This is the entry point for carto-api-client.
 *
 * This client enables interaction with the cartodb API by using REST requests.
 * There are two clients: PublicClient and AuthenticatedClient.
 * To interact with the API, you need to have a CARTO account.
 * In order to do so, you have to provide your account base url, which has the format https://username.carto.com or https://organization.carto.com/u/username.
 * In addition, you have to be authenticated to obtain private information.
 *
 * It can be used both in the server and the client side.
 *
 * @param {Object} staticConfig
 * @param {string} staticConfig.baseUrl - User base url
 *
 * @requires module:whatwg-fetch
 *
 * @example
 * var CartoApiClient = require('carto-api-client');
 * var client = CartoApiClient.AuthenticatedClient.setStaticConfig({
 *   baseUrl: 'foobar.com'
 * });
 *
 * client.getUser()
 *   .then(function (data) {
 *     console.log(data);
 *   })
 *   .catch(function (error) {
 *     console.log(error);
 *   });
 *
 */

export const CartoApiClient = Object.freeze({
  PublicClient,
  AuthenticatedClient
});
