import { ApiVersionPath } from '../constants/paths';
import Utils from '../utils/utils';

import 'whatwg-fetch';

export default {
  apiPath: ApiVersionPath.API_DEFAULT_Path,

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

  setApiPath (apiPath) {
    this.apiPath = apiPath;

    return this;
  },

  setStaticConfig (staticConfig) {
    this.staticConfig = staticConfig;

    return this;
  },

  setClientBaseUrlFromLocation (location) {
    const { host, protocol, href } = location;
    const PATH = Utils.getPathFromHref(href);

    this.staticConfig.baseUrl = `${protocol}//${host}${PATH}`;

    return this;
  },

  getAssetsBaseUrl () {
    return this.staticConfig.baseUrl;
  },

  request (method, uriParts, options = {}) {
    const baseUrl = this.staticConfig.baseUrl;
    const url = Utils.makeRelativePath(uriParts);
    const REQUEST_PATH = `${baseUrl}/${url}`;

    Utils.addHeaders(options, method);

    return fetch(REQUEST_PATH, options)
      .then(response => response.json());
  }
};
