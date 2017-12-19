import { Request } from '../constants/request';

const USER_REGEX = /(\/(u|user)\/[a-z0-9\-]+)\//;

export default {
  addHeaders (options, method, additional) {
    Object.assign(options, {
      method: method.toUpperCase(),
      headers: Request.Default.HEADERS,
      credentials: Request.Default.CREDENTIALS
    });

    return {...additional, ...options};
  },

  makeRelativePath (parts) {
    return `${parts.join('/')}`;
  },

  getPathFromHref (href) {
    const regExp = href.match(USER_REGEX);
    return (regExp && regExp[1]) || '';
  }
};
