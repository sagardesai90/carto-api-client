import { PublicClient } from './public';
import { ApiDataPath, Paths } from '../constants/paths';
import { RequestUtils } from '../utils/request';

/**
 * Carto Authenticated Client
 *
 * @namespace CartoApiClient.AuthenticatedClient
 * @extends CartoApiClient.PublicClient
 * @return {AuthenticatedClient} Object that contains methods to interact directly with the API
 */
export const AuthenticatedClient = {
  ...PublicClient,

  /**
   * Get the user configuration
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getUser()
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} fetch user data in json format
   */
  getUser (params) {
    const URI_PARAMS = RequestUtils.paramsToURI(params);

    return this.get([Paths.CONFIG, URI_PARAMS]);
  },

  /**
   * Delete a user by passing a password confirmation
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.deleteUser(payload)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Object} payload
   * @param {Object} payload.deletion_password_confirmation - user's password
   * @returns {Promise<object>} fetch response in json format
   */
  deleteUser (payload) {
    const OPTIONS = {
      body: JSON.stringify(payload)
    };
    return this.delete([Paths.CONFIG], OPTIONS);
  },

  /**
   * Update a user by passing a user config
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.updateUser(payload)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Object} payload
   * @param {string} payload.user
   * @param {string} payload.user.username
   * @param {string} payload.user.email
   * @param {string} payload.user.avatar_url
   * @param {string} payload.user.old_password
   * @param {string} payload.user.new_password
   * @param {string} payload.user.confirm_password
   *
   * @returns {Promise<object>} fetch response in json format
   */
  updateUser (payload) {
    const OPTIONS = {
      body: JSON.stringify(payload)
    };
    return this.put([Paths.CONFIG], OPTIONS);
  },

  /**
   * Get a user's visualization
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualization(vizID, params)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Object} params - set the different params so they can be added to the response object
   * @param {boolean} params.fetch_related_canonical_visualizations
   * @param {boolean} params.fetch_user
   * @param {boolean} params.load_related_canonical_visualizations
   * @param {boolean} params.related
   * @param {boolean} params.show_auth_tokens
   * @param {boolean} params.show_liked
   * @param {boolean} params.show_likes
   * @param {boolean} params.show_permission
   * @param {boolean} params.show_stats
   * @param {boolean} params.show_synchronization
   * @param {boolean} params.show_table
   * @param {boolean} params.show_table_size_and_row_count
   * @param {boolean} params.show_user
   * @param {boolean} params.show_user_basemaps
   * @param {boolean} params.show_uses_builder_features
   * @param {string} params.password
   *
   * @param {Array} params.types
   * @param {boolean} params.bbox
   * @param {boolean} params.exclude_raster (default: true)
   * @param {boolean} params.exclude_shared (default: true)
   * @param {boolean} params.locked
   * @param {boolean} params.only_liked (default: true)
   * @param {boolean} params.only_shared (default: true)
   * @param {boolean} params.only_with_display_name (default: true)
   * @param {boolean} params.shared
   * @param {boolean} params.tags
   * @param {boolean} params.with_id_or_name
   * @param {number} params.page
   * @param {number} params.per_page
   * @param {string} params.order
   * @param {string} params.privacy
   * @param {string} params.type
   *
   * @returns {Promise<object>} fetch response in json format
   */
  getVisualization (vizID, params) {
    const VIZ_PATH = `/${vizID}`;
    const URI_PARAMS = RequestUtils.paramsToURI(params);

    return this.get([Paths.VIZ, VIZ_PATH, URI_PARAMS]);
  },

  /**
   * Get user's visualizations
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualizations(params)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Object} params - set the different params so they can be added to the response object
   * @param {boolean} params.fetch_related_canonical_visualizations
   * @param {boolean} params.fetch_user
   * @param {boolean} params.load_related_canonical_visualizations
   * @param {boolean} params.related
   * @param {boolean} params.show_auth_tokens
   * @param {boolean} params.show_liked
   * @param {boolean} params.show_likes
   * @param {boolean} params.show_permission
   * @param {boolean} params.show_stats
   * @param {boolean} params.show_synchronization
   * @param {boolean} params.show_table
   * @param {boolean} params.show_table_size_and_row_count
   * @param {boolean} params.show_user
   * @param {boolean} params.show_user_basemaps
   * @param {boolean} params.show_uses_builder_features
   * @param {string} params.password
   *
   * @param {Array} params.types
   * @param {boolean} params.bbox
   * @param {boolean} params.exclude_raster (default: true)
   * @param {boolean} params.exclude_shared (default: true)
   * @param {boolean} params.locked
   * @param {boolean} params.only_liked (default: true)
   * @param {boolean} params.only_shared (default: true)
   * @param {boolean} params.only_with_display_name (default: true)
   * @param {boolean} params.shared
   * @param {boolean} params.tags
   * @param {boolean} params.with_id_or_name
   * @param {number} params.page
   * @param {number} params.per_page
   * @param {string} params.order
   * @param {string} params.privacy
   * @param {string} params.type
   *
   * @returns {Promise<object>} fetch response in json format
   */
  getVisualizations (params) {
    const URI_PARAMS = RequestUtils.paramsToURI(params);

    return this.get([Paths.VIZ, URI_PARAMS]);
  },

  /**
   * Get visualization likes
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualizationLikes()
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} likes in json format
   */

  getVisualizationLikes (vizID) {
    const VIZ_PATH = `/${vizID}`;

    return this.get([Paths.VIZ, VIZ_PATH, ApiDataPath.LIKES]);
  },

  /**
   * Get visualization likes detailed list
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualizationLikesDetailed()
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} detailed likes in json format
   */
  getVisualizationLikesDetailed (vizID) {
    const VIZ_PATH = `/${vizID}`;

    return this.get([Paths.VIZ, VIZ_PATH, ApiDataPath.LIKES_DETAILED]);
  },

  /**
   * Get visualization like information
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualizationLike()
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} like information in json format
   */
  getVisualizationLike (vizID) {
    const VIZ_PATH = `/${vizID}`;

    return this.get([Paths.VIZ, VIZ_PATH, ApiDataPath.LIKE]);
  },

  /**
   * Like a visualization by id
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.likeVisualization()
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} like information in json format
   */
  likeVisualization (vizID) {
    const VIZ_PATH = `/${vizID}`;

    return this.post([Paths.VIZ, VIZ_PATH, ApiDataPath.LIKE]);
  },

  /**
   * Unlike a visualization by id
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.unlikeVisualization()
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} unlike information in json format
   */
  unlikeVisualization (vizID) {
    const VIZ_PATH = `/${vizID}`;

    return this.delete([Paths.VIZ, VIZ_PATH, ApiDataPath.LIKE]);
  },

  /**
   * Get watching information for a visualization
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.unlikeVisualization()
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} watching list in json format
   */
  getVisualizationWatching (vizID) {
    const VIZ_PATH = `/${vizID}`;

    return this.get([Paths.VIZ, VIZ_PATH, ApiDataPath.WATCHING]);
  },

  /**
   * Get watching information for a visualization
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.unlikeVisualization()
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} watching list in json format
   */
  notifyVisualizationWatching (vizID) {
    const VIZ_PATH = `/${vizID}`;

    return this.put([Paths.VIZ, VIZ_PATH, ApiDataPath.WATCHING]);
  },

  getMap (mapID, params) {
    const MAP_PATH = `/${mapID}`;
    const URI_PARAMS = RequestUtils.paramsToURI(params);

    return this.get([Paths.MAPS, MAP_PATH, URI_PARAMS]);
  }
};
