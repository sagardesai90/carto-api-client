import { Request } from '../constants/request';

const USER_REGEX = /(\/(u|user)\/[a-z0-9\-]+)\//;

export const Utils = {
  addHeaders (options, method, additional) {
    Object.assign(options, {
      method: method.toUpperCase(),
      headers: Request.Default.HEADERS,
      credentials: Request.Default.CREDENTIALS
    });

    return {...additional, ...options};
  },

  paramsToURI (params) {
    const DEFAULT_PARAMS = '';

    return this.checkParams(params)
      ? `?${Object
        .keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&')}`
      : DEFAULT_PARAMS;
  },

  checkParams (params) {
    const OBJECT_TYPE = '[object Object]';

    return params &&
      Object.prototype.toString.call(params) === OBJECT_TYPE &&
      Object.keys(params).length;
  },

  makeRelativePath (parts) {
    return `${parts.join('/')}`;
  },

  getPathFromHref (href) {
    const regExp = href.match(USER_REGEX);
    return (regExp && regExp[1]) || '';
  }
};
