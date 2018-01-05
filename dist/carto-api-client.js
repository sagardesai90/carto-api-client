(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("carto-api-client", [], factory);
	else if(typeof exports === 'object')
		exports["carto-api-client"] = factory();
	else
		root["carto-api-client"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicClient = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = __webpack_require__(1);

__webpack_require__(5);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Carto Public Client
 *
 * @param {Object} config
 * @param {string} config.baseUrl - User base url
 * @param {string} config.apiKey - User api key
 *
 * @namespace CartoApiClient.PublicClient
 * @return {PublicClient}
 */

var PublicClient = exports.PublicClient = {
  config: {
    baseUrl: '',
    apiKey: null
  },

  /**
   * Send a GET request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.get(['/api/v3', '/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Array} path - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} options - request options
   *
   * @returns {Promise} fetch response in json format
   */
  get: function get() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return this.request.apply(this, ['get'].concat(_toConsumableArray(args)));
  },


  /**
   * Send a PUT request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.put(['/api/v3/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Array} path - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} options - request options
   *
   * @returns {Promise} fetch response in json format
   */
  put: function put() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.request.apply(this, ['put'].concat(_toConsumableArray(args)));
  },


  /**
   * Send a POST request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.post(['/api/v3/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Array} path - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} options - request options
   *
   * @returns {Promise} fetch response in json format
   */
  post: function post() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.request.apply(this, ['post'].concat(_toConsumableArray(args)));
  },


  /**
   * Send a DELETE request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.delete(['/api/v3/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {Array} path - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} options - request options
   *
   * @returns {Promise} fetch response in json format
   */
  delete: function _delete() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return this.request.apply(this, ['delete'].concat(_toConsumableArray(args)));
  },


  /**
   * Set static config
   *
   * @memberof CartoApiClient.PublicClient
   * @param {Object} config
   * @param {string} config.baseUrl - User base url
   *
   * @returns {Object} current PublicClient
   */
  setConfig: function setConfig(config) {
    this.config = _extends({}, this.config, config);

    return this;
  },


  /**
   * Get config
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {string} Client config
   */
  getConfig: function getConfig() {
    return this.config;
  },


  /**
   * Get baseUrl
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {string} Client baseUrl
   */
  getBaseUrl: function getBaseUrl() {
    return this.config.baseUrl || '';
  },


  /**
   * Get apiKey
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {string} Client apiKey
   */
  getApiKey: function getApiKey() {
    return this.config.apiKey || '';
  },


  /**
   * Get user's api key as a URL param if there is an api key
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {string} URL api key param
   */
  getApiKeyParam: function getApiKeyParam() {
    return this.config.apiKey ? '?api_key=' + this.config.apiKey : '';
  },


  /**
   * Set user's base url from a given location
   *
   * @memberof CartoApiClient.PublicClient
   * @returns {Object} location - window.location
   * @returns {Object} location.host
   * @returns {Object} location.protocol
   * @returns {Object} location.href
   */
  setClientBaseUrlFromLocation: function setClientBaseUrlFromLocation(location) {
    var host = location.host,
        protocol = location.protocol,
        href = location.href;

    var PATH = _request.RequestUtils.getPathFromHref(href);

    this.config.baseUrl = protocol + '//' + host + PATH;

    return this;
  },


  /**
   * Send a request
   *
   * @memberof CartoApiClient.PublicClient
   * @example
   * client.request('post', ['/api/v3/me'], options)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @param {string} - request method
   * @param {Array} - an array of strings to build the request path, that will be added to the user's baseUrl
   * @param {Object} - request options
   *
   * @returns {Promise} fetch response in json format
   */
  request: function request(method, uriParts) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseUrl = arguments[3];

    var PATH = _request.RequestUtils.getRelativeURIPath(uriParts);
    var API_KEY = this.getApiKeyParam();
    var BASE_URL = baseUrl || this.getBaseUrl();

    var URL = '' + BASE_URL + PATH + API_KEY;
    var OPTIONS = _request.RequestUtils.getOptions(options, method);

    return fetch(URL, OPTIONS).then(function (response) {
      return response.json();
    });
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestUtils = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = __webpack_require__(3);

var _general = __webpack_require__(4);

var USER_REGEX = /(\/(u|user)\/[a-z0-9\-]+)\//;

var RequestUtils = exports.RequestUtils = {
  getOptions: function getOptions(options, method, additional) {
    return _extends({}, additional, options, {
      method: method.toUpperCase(),
      headers: _request.Request.Default.HEADERS,
      credentials: _request.Request.Default.CREDENTIALS
    });
  },
  paramsToURI: function paramsToURI(params) {
    var DEFAULT_PARAMS = '';

    return _general.Utils.isObject(params) ? this.stringifyParams(params) : DEFAULT_PARAMS;
  },
  stringifyParams: function stringifyParams(params) {
    return '?' + Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
  },
  getRelativeURIPath: function getRelativeURIPath(uriParts) {
    return _general.Utils.isArray(uriParts) ? '' + uriParts.join('/') : '';
  },
  getPathFromHref: function getPathFromHref(href) {
    var regExp = href.match(USER_REGEX);
    return regExp && regExp[1] || '';
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _public = __webpack_require__(0);

var _authenticated = __webpack_require__(6);

var _apiClient = __webpack_require__(8);

/**
 *
 * @namespace CartoApiClient
 * @summary JavaScript client for cartodb API
 *
 * @description
 *
 * This is the entry point for carto-api-client.
 *
 * This client enables interaction with the cartodb API by using REST requests.
 * There are two clients: PublicClient and AuthenticatedClient.
 * To interact with the API, you need to have a CARTO account.
 * In order to do so, you have to provide your account base url, which has the format https://username.carto.com or https://organization.carto.com/u/username.
 * In addition, you have to be authenticated to obtain private information.
 *
 * It can be used both in the server and the client side.
 *
 * @param {Object} staticConfig
 * @param {string} staticConfig.baseUrl - User base url
 *
 * @requires module:whatwg-fetch
 *
 * @example
 * var CartoApiClient = require('carto-api-client');
 * var client = CartoApiClient.AuthenticatedClient.setConfig({
 *   baseUrl: 'foobar.com',
 *   apiKey: '1234567' // optional
 * });
 *
 * client.getUser()
 *   .then(console.log)
 *   .catch(console.error);
 *
 */

exports.default = { PublicClient: _public.PublicClient, AuthenticatedClient: _authenticated.AuthenticatedClient, ApiClientError: _apiClient.ApiClientError };
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Request = exports.Request = Object.freeze({
  Default: Object.freeze({
    HEADERS: Object.freeze({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Cache': 'no-cache'
    }),
    CREDENTIALS: 'include'
  })
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Utils = exports.Utils = {
  isObject: function isObject(value) {
    var OBJECT_TYPE = '[object Object]';

    return value && Object.prototype.toString.call(value) === OBJECT_TYPE && Object.keys(value).length;
  },
  isArray: function isArray(value) {
    var OBJECT_TYPE = '[object Array]';

    return value && Object.prototype.toString.call(value) === OBJECT_TYPE;
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticatedClient = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _public = __webpack_require__(0);

var _paths = __webpack_require__(7);

var _request = __webpack_require__(1);

/**
 * Carto Authenticated Client
 *
 * @namespace CartoApiClient.AuthenticatedClient
 * @extends CartoApiClient.PublicClient
 * @return {AuthenticatedClient} Object that contains methods to interact directly with the API
 */
var AuthenticatedClient = exports.AuthenticatedClient = _extends({}, _public.PublicClient, {

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
  getUser: function getUser(params) {
    var URI_PARAMS = _request.RequestUtils.paramsToURI(params);

    return this.get([_paths.Paths.CONFIG, URI_PARAMS]);
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
  deleteUser: function deleteUser(payload) {
    var OPTIONS = {
      body: JSON.stringify(payload)
    };
    return this.delete([_paths.Paths.CONFIG], OPTIONS);
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
  updateUser: function updateUser(payload) {
    var OPTIONS = {
      body: JSON.stringify(payload)
    };
    return this.put([_paths.Paths.CONFIG], OPTIONS);
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
  getVisualization: function getVisualization(vizID, params) {
    var VIZ_PATH = '/' + vizID;
    var URI_PARAMS = _request.RequestUtils.paramsToURI(params);

    return this.get([_paths.Paths.VIZ, VIZ_PATH, URI_PARAMS]);
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
  getVisualizations: function getVisualizations(params) {
    var URI_PARAMS = _request.RequestUtils.paramsToURI(params);

    return this.get([_paths.Paths.VIZ, URI_PARAMS]);
  },


  /**
   * Get visualization likes
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualizationLikes('vizID')
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} likes in json format
   */

  getVisualizationLikes: function getVisualizationLikes(vizID) {
    var VIZ_PATH = '/' + vizID;

    return this.get([_paths.Paths.VIZ, VIZ_PATH, _paths.ApiDataPath.LIKES]);
  },


  /**
   * Get visualization likes detailed list
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualizationLikesDetailed('vizID')
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} detailed likes in json format
   */
  getVisualizationLikesDetailed: function getVisualizationLikesDetailed(vizID) {
    var VIZ_PATH = '/' + vizID;

    return this.get([_paths.Paths.VIZ, VIZ_PATH, _paths.ApiDataPath.LIKES_DETAILED]);
  },


  /**
   * Get visualization like information
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualizationLike('vizID')
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} like information in json format
   */
  getVisualizationLike: function getVisualizationLike(vizID) {
    var VIZ_PATH = '/' + vizID;

    return this.get([_paths.Paths.VIZ, VIZ_PATH, _paths.ApiDataPath.LIKE]);
  },


  /**
   * Like a visualization by id
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.likeVisualization('vizID')
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} like information in json format
   */
  likeVisualization: function likeVisualization(vizID) {
    var VIZ_PATH = '/' + vizID;

    return this.post([_paths.Paths.VIZ, VIZ_PATH, _paths.ApiDataPath.LIKE]);
  },


  /**
   * Unlike a visualization by id
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.unlikeVisualization('vizID')
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} unlike information in json format
   */
  unlikeVisualization: function unlikeVisualization(vizID) {
    var VIZ_PATH = '/' + vizID;

    return this.delete([_paths.Paths.VIZ, VIZ_PATH, _paths.ApiDataPath.LIKE]);
  },


  /**
   * Get watching information for a visualization
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.unlikeVisualization('vizID')
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} watching list in json format
   */
  getVisualizationWatching: function getVisualizationWatching(vizID) {
    var VIZ_PATH = '/' + vizID;

    return this.get([_paths.Paths.VIZ, VIZ_PATH, _paths.ApiDataPath.WATCHING]);
  },


  /**
   * Get watching information for a visualization
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.unlikeVisualization('vizID')
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} watching list in json format
   */
  notifyVisualizationWatching: function notifyVisualizationWatching(vizID) {
    var VIZ_PATH = '/' + vizID;

    return this.put([_paths.Paths.VIZ, VIZ_PATH, _paths.ApiDataPath.WATCHING]);
  },


  /**
   * Get a preview of a visualization
   *
   * @memberof CartoApiClient.AuthenticatedClient
   * @example
   * client.getVisualizationPreview('vizID', 200, 200)
   *   .then(console.log)
   *   .catch(console.error);
   *
   * @returns {Promise<object>} visualization image
   */
  getVisualizationPreview: function getVisualizationPreview(vizID, width, height) {
    var VIZ_PATH = '/' + vizID;
    var WIDTH_PATH = '/' + width;
    var HEIGHT_PATH = '/' + height;

    return this.get([_paths.Paths.VIZ_PREVIEW, VIZ_PATH, _paths.ApiDataPath.STATIC, WIDTH_PATH, HEIGHT_PATH, _paths.ApiDataPath.PNG_EXTENSION]);
  },
  getMap: function getMap(mapID, params) {
    var MAP_PATH = '/' + mapID;
    var URI_PARAMS = _request.RequestUtils.paramsToURI(params);

    return this.get([_paths.Paths.MAPS, MAP_PATH, URI_PARAMS]);
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ApiDataPath = exports.ApiDataPath = Object.freeze({
  COLUMNS: '/columns',
  CONFIG: '/me',
  TABLES: '/tables',
  VIZ: '/viz',
  MAPS: '/maps',
  LIKE: '/like',
  LIKES: '/likes',
  LIKES_DETAILED: '/likes/detailed',
  WATCHING: '/watching',
  STATIC: '/static',
  PNG_EXTENSION: '.png'
});

var ApiVersionPath = exports.ApiVersionPath = Object.freeze({
  API_V1_URI: '/api/v1',
  API_V2_URI: '/api/v2',
  API_V3_URI: '/api/v3'
});

var Paths = exports.Paths = Object.freeze({
  COLUMNS: ApiDataPath.COLUMNS,
  CONFIG: '' + ApiVersionPath.API_V3_URI + ApiDataPath.CONFIG,
  TABLES: '' + ApiVersionPath.API_V1_URI + ApiDataPath.TABLES,
  VIZ: '' + ApiVersionPath.API_V1_URI + ApiDataPath.VIZ,
  MAPS: '' + ApiVersionPath.API_V1_URI + ApiDataPath.MAPS,
  VIZ_PREVIEW: '' + ApiVersionPath.API_V2_URI
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Carto Api Error Emitter
 *
 *
 * @namespace CartoApiClient.ApiClientError
 * @return {ApiClientError}
 */

var ApiClientError = exports.ApiClientError = {
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

  send: function send(data) {
    return {
      errors: data.errors || {},
      message: data.message || '',
      name: 'ApiClientError',
      stack: new Error().stack
    };
  }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=carto-api-client.js.map