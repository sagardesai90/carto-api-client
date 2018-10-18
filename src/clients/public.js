import { RequestUtils } from '../utils/request';

import 'whatwg-fetch';

import * as xapiEvents from '@elearntics/xapi-events';
console.log('!!!!!!!!', xapiEvents);

/**
 * Carto Public Client
 *
 * @param {Object} config
 * @param {string} config.baseUrl - User base url
 * @param {string} config.apiKey - User api key
 *
 * @namespace CartoApiClient.PublicClient
 * @return {PublicClient}
 */

export const PublicClient = {
  config: {
    baseUrl: '',
    apiKey: null
  },

  /**
   * Send a GET request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.get(['/api/v3', '/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Array} path - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} options - request options
   *
   * @returns {Promise} fetch response in json format
   */
  get (...args) {
    return this.request('get', ...args);
  },

  /**
   * Send a PUT request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.put(['/api/v3/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Array} path - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} options - request options
   *
   * @returns {Promise} fetch response in json format
   */
  put (...args) {
    return this.request('put', ...args);
  },

  /**
   * Send a POST request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.post(['/api/v3/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Array} path - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} options - request options
   *
   * @returns {Promise} fetch response in json format
   */
  post (...args) {
    return this.request('post', ...args);
  },

  /**
   * Send a DELETE request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.delete(['/api/v3/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Array} path - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} options - request options
   *
   * @returns {Promise} fetch response in json format
   */
  delete (...args) {
    return this.request('delete', ...args);
  },

  /**
   * Set static config
   *
   * @memberof CartoApiClient.PublicClient
   * @param {Object} config
   * @param {string} config.baseUrl - User base url
   *
   * @returns {Object} current PublicClient
   */
  setConfig (config) {
    this.config = {
      ...this.config,
      ...config
    };

    return this;
  },

  /**
   * Get config
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {string} Client config
   */
  getConfig () {
    return this.config;
  },

  /**
   * Get baseUrl
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {string} Client baseUrl
   */
  getBaseUrl () {
    return this.config.baseUrl || '';
  },

  /**
   * Get apiKey
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {string} Client apiKey
   */
  getApiKey () {
    return this.config.apiKey || '';
  },

  /**
   * Get user's api key as a URL param if there is an api key
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {string} URL api key param
   */
  getApiKeyParam () {
    return this.config.apiKey
      ? `?api_key=${this.config.apiKey}`
      : '';
  },

  /**
   * Set user's base url from a given location
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {Object} location - window.location
   * @returns {Object} location.host
   * @returns {Object} location.protocol
   * @returns {Object} location.href
   */
  setClientBaseUrlFromLocation (location) {
    const { host, protocol, href } = location;
    const PATH = RequestUtils.getPathFromHref(href);

    this.config.baseUrl = `${protocol}//${host}${PATH}`;

    return this;
  },

  /**
   * Send a request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.request('post', ['/api/v3/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {string} - request method
   * @param {Array} - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} - request options
   *
   * @returns {Promise} fetch response in json format
   */
  request (method, uriParts, options = {}, baseUrl) {
    const PATH = RequestUtils.getRelativeURIPath(uriParts);
    const API_KEY = this.getApiKeyParam();
    const BASE_URL = baseUrl || this.getBaseUrl();

    const URL = `${BASE_URL}${PATH}${API_KEY}`;
    const OPTIONS = RequestUtils.getOptions(options, method);

    return fetch(URL, OPTIONS)
      .then(function (response) {
        return response.json();
      });
  }
};
