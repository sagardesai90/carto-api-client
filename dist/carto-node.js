(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("carto-node", [], factory);
	else if(typeof exports === 'object')
		exports["carto-node"] = factory();
	else
		root["carto-node"] = factory();
})(this, function() {
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _paths = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  apiPath: _paths.ApiVersionPath.API_DEFAULT_Path,

  staticConfig: {},

  get: function get() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return this.request.apply(this, ['get'].concat(_toConsumableArray(args)));
  },
  put: function put() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.request.apply(this, ['put'].concat(_toConsumableArray(args)));
  },
  post: function post() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.request.apply(this, ['post'].concat(_toConsumableArray(args)));
  },
  delete: function _delete() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return this.request.apply(this, ['delete'].concat(_toConsumableArray(args)));
  },
  setApiPath: function setApiPath(apiPath) {
    this.apiPath = apiPath;

    return this;
  },
  setStaticConfig: function setStaticConfig(staticConfig) {
    this.staticConfig = staticConfig;

    return this;
  },
  setClientConfig: function setClientConfig(location) {
    var host = location.host,
        protocol = location.protocol,
        href = location.href;

    var regExp = href.match(/(\/(u|user)\/[a-z0-9\-]+)\//);
    var path = regExp && regExp[1] || '';

    this.staticConfig.baseUrl = protocol + '//' + host + path;

    return this;
  },
  addHeaders: function addHeaders(options, method, additional) {
    Object.assign(options, {
      method: method.toUpperCase(),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Cache': 'no-cache'
      },
      credentials: 'include'
    });

    return _extends({}, additional, options);
  },
  makeRelativePath: function makeRelativePath(parts) {
    return '' + parts.join('/');
  },
  makeAbsolutePath: function makeAbsolutePath(relativePath) {
    return '' + this.apiPath + relativePath;
  },
  getAssetsBaseUrl: function getAssetsBaseUrl() {
    return this.staticConfig.baseUrl;
  },
  request: function request(method, uriParts) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var baseUrl = this.staticConfig.baseUrl;
    var url = this.makeRelativePath(uriParts);

    this.addHeaders(options, method);

    return fetch(baseUrl + '/' + url, options).then(function (response) {
      return response.json();
    });
  }
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ApiDataPath = exports.ApiDataPath = Object.freeze({
  CONFIG: '/me',
  VIZ: '/viz'
});

var ApiVersionPath = exports.ApiVersionPath = Object.freeze({
  API_DEFAULT_URI: 'api/v3',
  API_V1_URI: 'api/v1',
  API_V2_URI: 'api/v2',
  API_V3_URI: 'api/v3'
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticatedClient = exports.PublicClient = undefined;

var _public = __webpack_require__(0);

var _public2 = _interopRequireDefault(_public);

var _authenticated = __webpack_require__(3);

var _authenticated2 = _interopRequireDefault(_authenticated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PublicClient = _public2.default;
exports.AuthenticatedClient = _authenticated2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _public = __webpack_require__(0);

var _public2 = _interopRequireDefault(_public);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _public2.default, {
  getConfig: function getConfig() {
    var CONFIG_PATH = _index2.default.getConfigPath();
    return this.get([CONFIG_PATH]);
  },
  getVisualization: function getVisualization(vizUrl, params) {
    var VIZ_API_PATH = _index2.default.getVizPath();
    var uriParams = this.paramsToURI(params);

    return this.get([VIZ_API_PATH, vizUrl, uriParams]);
  },
  getDerivedMaps: function getDerivedMaps(mapsNumber) {
    var VIZ_API_PATH = _index2.default.getVizPath();
    var uriParams = this.paramsToURI({
      per_page: mapsNumber,
      type: 'derived'
    });

    return this.get([VIZ_API_PATH, uriParams]);
  }
});
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paths = __webpack_require__(1);

exports.default = {
  getConfigPath: function getConfigPath() {
    return '' + _paths.ApiVersionPath.API_V3_URI + _paths.ApiDataPath.CONFIG;
  },
  getVizPath: function getVizPath(viz) {
    return '' + _paths.ApiVersionPath.API_V1_URI + _paths.ApiDataPath.VIZ;
  }
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=carto-node.js.map