import fetch from 'node-fetch';

import { ApiVersionURI } from '../apis/uris';

export default {
  apiURI: ApiVersionURI.API_DEFAULT_URI,

  staticConfig: {},

  get (...args) {
    return this.request('get', ...args);
  },

  put (...args) {
    return this.request('put', ...args);
  },

  post (...args) {
    return this.request('post', ...args);
  },

  delete (...args) {
    return this.request('delete', ...args);
  },

  setApiURI (apiURI) {
    this.apiURI = apiURI;

    return this;
  },

  setStaticConfig (staticConfig) {
    this.staticConfig = staticConfig;

    return this;
  },

  setClientConfig (location) {
    const { host, protocol, href } = location;
    const regExp = href.match(/(\/(u|user)\/[a-z0-9\-]+)\//);
    const path = (regExp && regExp[1]) || '';

    this.staticConfig.baseUrl = `${protocol}//${host}${path}`;

    return this;
  },

  addHeaders (options, method, additional) {
    Object.assign(options, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: method.toUpperCase()
    });

    return {...additional, ...options};
  },

  makeRelativeURI (parts) {
    return `${parts.join('/')}`;
  },

  makeAbsoluteURI (relativeURI) {
    return `${this.apiURI}${relativeURI}`;
  },

  getAssetsBaseUrl () {
    return this.staticConfig.baseUrl;
  },

  request (method, uriParts, options = {}) {
    const baseUrl = this.staticConfig.baseUrl;
    const url = this.makeRelativeURI(uriParts);

    this.addHeaders(options, method);

    return fetch(`${baseUrl}/${url}`, options)
      .then(response => response.json());
  }
};
