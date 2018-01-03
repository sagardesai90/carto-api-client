/**
 * Carto Api Error Emitter
 *
 *
 * @namespace CartoApiClient.ApiClientError
 * @return {ApiClientError}
 */

export const ApiClientError = {
  /**
   * Send a custom ApiClientError response
   *
   * @memberof CartoApiClient.ApiClientError
   * @example
   * client
   *   .getUser()
   *   .then((data) => {
   *     throw CartoApiClient.ApiClientError.send(data);
   *   })
   *   .catch((error) => {
   *     // Handle custom error
   *   });
   *
   * @param {Object} data - information about the error
   * @param {Object} data.errors - list of errors, with the format { errorType: ['error_1', 'error_2'] }
   * @param {string} data.message - description of the error
   *
   * @returns {Object} errors - list of errors, with the format {}
   * @returns {Object} message - description of the error
   * @returns {Object} name - ApiClientError
   * @returns {Object} stack - stack trace of the current error
   */

  send (data) {
    return {
      errors: data.errors || {},
      message: data.message || '',
      name: 'ApiClientError',
      stack: (new Error()).stack
    };
  }
};
