import { PublicClient } from './public';
import { Paths } from '../constants/paths';
import { Utils } from '../utils/utils';

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
   *   .then(function (data) {
   *     console.log(data);
   *   })
   *   .catch(function (error) {
   *     console.log(error);
   *   });
   *
   * @returns {Promise<object>} fetch user data in json format
   */
  getUser (params) {
    const URI_PARAMS = params ? Utils.paramsToURI(params) : {};

    return this.get([Paths.CONFIG, URI_PARAMS]);
  },

  /**
   * Delete a user by passing a password confirmation
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.deleteUser(payload)
   *   .then(function (data) {
   *     console.log(data);
   *   })
   *   .catch(function (error) {
   *     console.log(error);
   *   });
   *
   * @param {Object} payload
   * @param {Object} payload.deletion_password_confirmation - user's password
   * @returns {Promise<object>} fetch response in json format
   */
  deleteUser (payload) {
    const OPTIONS = {
      data: JSON.stringify(payload),
      dataType: 'json'
    };
    return this.delete([Paths.CONFIG], OPTIONS);
  },

  /**
   * Update a user by passing a user config
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.updateUser(payload)
   *   .then(function (data) {
   *     console.log(data);
   *   })
   *   .catch(function (error) {
   *     console.log(error);
   *   });
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
      data: JSON.stringify(payload),
      dataType: 'json'
    };
    return this.put([Paths.CONFIG], OPTIONS);
  },

  /**
   * Get a visualization
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualization(vizID, params)
   *   .then(function (data) {
   *     console.log(data);
   *   })
   *   .catch(function (error) {
   *     console.log(error);
   *   });
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
    const URI_PARAMS = Utils.paramsToURI(params);

    return this.get([Paths.VIZ, VIZ_PATH, URI_PARAMS]);
  }
};
