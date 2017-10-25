import { ApiVersionPath } from '../apis/paths';

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

  setClientConfig (location) {
    const { host, protocol, href } = location;
    const regExp = href.match(/(\/(u|user)\/[a-z0-9\-]+)\//);
    const path = (regExp && regExp[1]) || '';

    this.staticConfig.baseUrl = `${protocol}//${host}${path}`;

    return this;
  },

  addHeaders (options, method, additional) {
    Object.assign(options, {
      method: method.toUpperCase(),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Cache': 'no-cache'
      },
      credentials: 'include'
    });

    return {...additional, ...options};
  },

  makeRelativePath (parts) {
    return `${parts.join('/')}`;
  },

  makeAbsolutePath (relativePath) {
    return `${this.apiPath}${relativePath}`;
  },

  getAssetsBaseUrl () {
    return this.staticConfig.baseUrl;
  },

  request (method, uriParts, options = {}) {
    const baseUrl = this.staticConfig.baseUrl;
    const url = this.makeRelativePath(uriParts);

    this.addHeaders(options, method);

    return fetch(`${baseUrl}/${url}`, options)
      .then(response => response.json());
  }
};
