import { ApiDataURI, ApiVersionURI } from './uris';

export default {
  getConfigPath () {
    return `${ApiVersionURI.API_V3_URI}${ApiDataURI.CONFIG}`;
  },

  getVizPath (viz) {
    return `${ApiVersionURI.API_V1_URI}${ApiDataURI.VIZ}`;
  }
};
