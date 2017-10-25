import { ApiDataPath, ApiVersionPath } from './paths';

export default {
  getConfigPath () {
    return `${ApiVersionPath.API_V3_URI}${ApiDataPath.CONFIG}`;
  },

  getVizPath (viz) {
    return `${ApiVersionPath.API_V1_URI}${ApiDataPath.VIZ}`;
  }
};
