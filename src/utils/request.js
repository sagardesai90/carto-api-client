import { Request } from '../constants/request';
import { Utils } from '../utils/general';

const USER_REGEX = /(\/(u|user)\/[a-z0-9\-]+)\//;

export const RequestUtils = {
  getOptions (options, method, additional) {
    return {
      ...additional,
      ...options,
      method: method.toUpperCase(),
      headers: Request.Default.HEADERS,
      credentials: Request.Default.CREDENTIALS
    };
  },

  paramsToURI (params) {
    const DEFAULT_PARAMS = '';

    return Utils.isObject(params)
      ? this.stringifyParams(params)
      : DEFAULT_PARAMS;
  },

  stringifyParams (params) {
    return `?${Object
      .keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&')}`;
  },

  getRelativeURIPath (uriParts) {
    return Utils.isArray(uriParts)
      ? `${uriParts.join('/')}`
      : '';
  },

  getPathFromHref (href) {
    const regExp = href.match(USER_REGEX);
    return (regExp && regExp[1]) || '';
  }
};
