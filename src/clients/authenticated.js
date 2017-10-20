import PublicClient from './public';
import CartoApi from '../apis/index';

export default {
  ...PublicClient,

  getConfig () {
    const CONFIG_PATH = CartoApi.getConfigPath();
    return this.get([CONFIG_PATH]);
  },

  getVisualization (vizUrl, params) {
    const VIZ_API_PATH = CartoApi.getVizPath();
    const uriParams = this.paramsToURI(params);

    return this.get([VIZ_API_PATH, vizUrl, uriParams]);
  },

  getDerivedMaps (mapsNumber) {
    const VIZ_API_PATH = CartoApi.getVizPath();
    const uriParams = this.paramsToURI({
      per_page: mapsNumber,
      type: 'derived'
    });

    return this.get([VIZ_API_PATH, uriParams]);
  }
};
