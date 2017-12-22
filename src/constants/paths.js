export const ApiDataPath = Object.freeze({
  COLUMNS: '/columns',
  CONFIG: '/me',
  TABLES: '/tables',
  VIZ: '/viz',
  MAPS: '/maps'
});

export const ApiVersionPath = Object.freeze({
  API_V1_URI: '/api/v1',
  API_V2_URI: '/api/v2',
  API_V3_URI: '/api/v3'
});

export const Paths = Object.freeze({
  COLUMNS: ApiDataPath.COLUMNS,
  CONFIG: `${ApiVersionPath.API_V3_URI}${ApiDataPath.CONFIG}`,
  TABLES: `${ApiVersionPath.API_V1_URI}${ApiDataPath.TABLES}`,
  VIZ: `${ApiVersionPath.API_V1_URI}${ApiDataPath.VIZ}`,
  MAPS: `${ApiVersionPath.API_V1_URI}${ApiDataPath.MAPS}`
});
