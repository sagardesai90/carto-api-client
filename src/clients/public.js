import { Utils } from '../utils/utils';

import 'whatwg-fetch';

/**
 * Carto Public Client
 *
 * @param {Object} staticConfig
 * @param {string} staticConfig.baseUrl - User base url
 *
 * @namespace CartoApiClient.PublicClient
 * @return {PublicClient}
 */

export const PublicClient = {
  staticConfig: {},

  /**
   * Send a GET request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.get(['/api/v3', '/me'], options)
   *   .then(function (data) {
   *     console.log(data);
   *   })
   *   .catch(function (error) {
   *     console.log(error);
   *   });
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
   *   .then(function (data) {
   *     console.log(data);
   *   })
   *   .catch(function (error) {
   *     console.log(error);
   *   });
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
   *   .then(function (data) {
   *     console.log(data);
   *   })
   *   .catch(function (error) {
   *     console.log(error);
   *   });
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
   *   .then(function (data) {
   *     console.log(data);
   *   })
   *   .catch(function (error) {
   *     console.log(error);
   *   });
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
   * @param {Object} staticConfig
   * @param {string} staticConfig.baseUrl - User base url
   *
   * @returns {Object} current PublicClient
   */
  setStaticConfig (staticConfig) {
    this.staticConfig = staticConfig;

    return this;
  },

  /**
   * Get user's base url
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {string} User's base url
   */
  getBaseUrl () {
    return this.staticConfig.baseUrl || '';
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
    const PATH = Utils.getPathFromHref(href);

    this.staticConfig.baseUrl = `${protocol}//${host}${PATH}`;

    return this;
  },

  /**
   * Send a request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.request('post', ['/api/v3/me'], options)
   *   .then(function (data) {
   *     console.log(data);
   *   })
   *   .catch(function (error) {
   *     console.log(error);
   *   });
   * @param {string} - request method
   * @param {Array} - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} - request options
   *
   * @returns {Promise} fetch response in json format
   */
  request (method, uriParts, options = {}) {
    const baseUrl = this.getBaseUrl();
    const url = Utils.makeRelativePath(uriParts);
    const REQUEST_PATH = `${baseUrl}${url}`;

    Utils.addHeaders(options, method);

    return fetch(REQUEST_PATH, options)
      .then(response => response.json());
  }
};
