import PublicClient from './public';
import Path from '../constants/paths';

export default {
  ...PublicClient,

  getConfig (params) {
    const URI_PARAMS = params ? this.paramsToURI(params) : {};

    return this.get([Path.CONFIG, URI_PARAMS]);
  },

  getVisualization (vizID, params) {
    const VIZ_PATH = `/${vizID}`;
    const URI_PARAMS = this.paramsToURI(params);

    return this.get([Path.VIZ, VIZ_PATH, URI_PARAMS]);
  },

  getTable (name, params) {
    const NAME_PATH = `/${name}`;
    const URI_PARAMS = this.paramsToURI(params);

    return this.get([Path.TABLES, NAME_PATH, URI_PARAMS]);
  },

  getTableColumns (name, params) {
    const NAME_PATH = `/${name}`;
    const URI_PARAMS = this.paramsToURI(params);

    return this.get([Path.TABLES, NAME_PATH, Path.COLUMNS, URI_PARAMS]);
  },

  deleteUser (payload) {
    const OPTIONS = {
      data: JSON.stringify(payload),
      dataType: 'json'
    };
    return this.delete([Path.CONFIG], OPTIONS);
  },

  updateUser (payload) {
    const OPTIONS = {
      data: JSON.stringify(payload),
      dataType: 'json'
    };
    return this.put([Path.CONFIG], OPTIONS);
  }
};
