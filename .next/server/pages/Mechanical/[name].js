module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"21":"d91056c80dc656968a9b","22":"a1c5390b2388d89c5439","23":"32a23ae006b83c5fc35a","24":"e80161ce750273a7bdb2"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0Iyw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/image");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zT1d");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5rRV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PFYH":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringSpaceToHyphen", function() { return stringSpaceToHyphen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowSize", function() { return windowSize; });
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ppZR");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VzA1");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hr7U");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mN36");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5rRV");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cUip");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Z8Mf");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zkM6");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _NavbarMain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("aJgq");










var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;


const {
  TabPane
} = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9___default.a;


function Home() {
  const names = [{
    name: "frequency",
    display: "Frequency",
    id: 33,
    type: "electrical",
    category: "electrical"
  }, {
    name: "timeperiod",
    display: "Time Period",
    id: 22,
    type: "electrical",
    category: "electrical"
  }, {
    name: "3-15 PSI",
    display: "3-15 PSI",
    id: 0,
    type: "instrumentation",
    category: "instrumentation"
  }, {
    name: "0-20mA",
    display: "0-20 mA",
    id: 1,
    type: "instrumentation",
    category: "instrumentation"
  }, {
    name: "4-20mA",
    display: "4-20 mA",
    id: 2,
    type: "instrumentation",
    category: "instrumentation"
  }, {
    name: "0-25mA",
    display: "0-25 mA",
    id: 3,
    type: "instrumentation",
    category: "instrumentation"
  }, {
    name: "zero",
    display: "0-X to % (Conversion)",
    id: 4,
    type: "instrumentation",
    category: "zero"
  }, {
    children: "brightness_1",
    name: "area",
    display: "Area",
    id: 5,
    type: "conversions",
    category: "conversion"
  }, {
    children: "chat",
    name: "force",
    display: "Force",
    id: 6,
    type: "conversions",
    category: "conversion"
  }, {
    name: "energy",
    display: "Energy",
    id: 7,
    type: "conversions",
    category: "conversion"
  }, {
    name: "fuel_consumption",
    display: "Fuel Consumption",
    id: 8,
    type: "conversions",
    category: "conversion"
  }, {
    name: "time",
    display: "Time",
    id: 9,
    type: "conversions",
    category: "conversion"
  }, {
    name: "mass",
    display: "Mass",
    id: 10,
    type: "conversions",
    category: "conversion"
  }, {
    name: "length",
    display: "Length",
    id: 11,
    type: "conversions",
    category: "conversion"
  }, {
    name: "digital_storage",
    display: "Data Storage",
    id: 12,
    type: "conversions",
    category: "conversion"
  }, {
    name: "resistancetemp",
    display: "Resistance (from temperature)",
    id: 13,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "linearma",
    display: "Linear mA to Square Root mA",
    id: 14,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "temperature",
    display: "Temperature (from resistance)",
    id: 15,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "temperature",
    display: "Temperature",
    id: 16,
    type: "conversions",
    category: "conversion"
  }, {
    name: "linear",
    display: "Linear to Square Root percentage",
    id: 17,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "electric_current",
    display: "Current",
    id: 18,
    type: "conversions",
    category: "conversion"
  }, {
    name: "ohms",
    display: "Ohms law (R)",
    id: 19,
    stringId: "19",
    type: "electrical",
    category: "electrical"
  }, {
    name: "ohmsi",
    display: "Ohms law (I)",
    id: 20,
    type: "electrical",
    category: "electrical"
  }, {
    name: "aircore",
    display: "Air Core Inductance",
    id: 21,
    type: "electrical",
    category: "electrical"
  }, {
    // name:"laser",display:"Laser Real-Time Converter",id:22,type:"electrical",category:"electrical"},{
    name: "ohmsv",
    display: "Ohms Law (V)",
    id: 23,
    type: "electrical",
    category: "electrical"
  }, {
    name: "parallel",
    display: "Parallel Resistance",
    id: 24,
    type: "electrical",
    category: "electrical"
  }, {
    name: "velocitysound",
    display: "Velocity of Sound",
    id: 25,
    type: "electrical",
    category: "electrical"
  }, {
    name: "lcresonance",
    display: "LC Resonance",
    id: 26,
    type: "electrical",
    category: "electrical"
  }, {
    name: "voltagediv",
    display: "Voltage Divider",
    id: 27,
    type: "electrical",
    category: "electrical"
  }, {
    name: "speedtime",
    display: "Time (Speed)",
    id: 28,
    type: "extra",
    category: "electrical"
  }, {
    name: "wheat",
    display: "Wheatstone bridge",
    id: 29,
    type: "electrical",
    category: "electrical"
  }, {
    name: "color",
    display: "Color code Resistance",
    id: 30,
    type: "electrical",
    category: "color"
  }, {
    name: "powerrv",
    display: "Power (with R,V)",
    id: 31,
    stringId: "31",
    type: "electrical",
    category: "electrical"
  }, {
    name: "powervi",
    display: "Power (with V,I)",
    id: 32,
    type: "electrical",
    category: "electrical"
  }, // {name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical"},
  {
    name: "speedspeed",
    display: "Speed",
    id: 34,
    type: "extra",
    category: "electrical"
  }, {
    name: "distance",
    display: "Distance (Speed)",
    id: 35,
    type: "extra",
    category: "electrical"
  }, {
    name: "volume",
    display: "Volume",
    id: 36,
    type: "conversions",
    category: "conversion"
  }, {
    name: "pressure",
    display: "Pressure",
    id: 37,
    type: "conversions",
    category: "conversion"
  }, {
    name: "speed",
    display: "Speed",
    id: 38,
    type: "conversions",
    category: "conversion"
  }, {
    name: "power",
    display: "Power",
    id: 39,
    type: "conversions",
    category: "conversion"
  }, {
    name: "powerir",
    display: "Power (with R,I)",
    id: 40,
    type: "electrical",
    category: "electrical"
  }, {
    name: "wavelength",
    display: "Wavelength",
    id: 41,
    type: "extra",
    category: "electrical"
  }, {
    name: "powerline",
    display: "Power Factor 3Phase (Line)",
    id: 42,
    type: "electrical",
    category: "electrical"
  }, {
    name: "powerneutral",
    display: "Power Factor 3Phase (neutral)",
    id: 43,
    type: "electrical",
    category: "electrical"
  }, {
    name: "power",
    display: "Power Factor Single Phase",
    id: 44,
    stringId: "44",
    type: "electrical",
    category: "electrical"
  }, {
    name: "charge",
    display: "Charge",
    id: 45,
    type: "conversions",
    category: "conversion"
  }, {
    name: "speedhorse",
    display: "Speed (Horsepower)",
    id: 46,
    stringId: "46",
    type: "electrical",
    category: "electrical"
  }, {
    name: "torque",
    display: "Torque (HorsePower)",
    id: 47,
    type: "electrical",
    category: "electrical"
  }, {
    name: "horsepower",
    display: "HorsePower",
    id: 48,
    type: "electrical",
    category: "electrical"
  }, {
    name: "twoseals",
    display: "Level measurement Two Seals",
    id: 49,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "onesealabove",
    display: "Level measurement one seal above",
    id: 50,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "onesealbelow",
    display: "Level measurement one seal below",
    id: 51,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "bubblelevel",
    display: "Bubble Level",
    id: 52,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "bubbleinterface",
    display: "Bubble Interface",
    id: 53,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "twosealint",
    display: "Two Seal Interface",
    id: 54,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "opentank",
    display: "Open Tank",
    id: 55,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "intwet",
    display: "Interface Wet Leg",
    id: 56,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "liquidpurge",
    display: "Liquid Purge",
    id: 57,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "LT3",
    display: "Level Transmission Closed Vessel",
    id: 58,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "short",
    display: "Short Circuit Calculation",
    id: 59,
    type: "electrical",
    category: "electrical"
  }, {
    name: "transformer",
    display: "Transformer Fault Current",
    id: 60,
    type: "electrical",
    category: "electrical"
  }, {
    name: "DOL",
    display: "DOL Star & Delta",
    id: 61,
    type: "electrical",
    category: "electrical"
  }, {
    name: "flowrate",
    display: "Flow Rate Calculation",
    id: 62,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "hydrost",
    display: "Hydrostatic Level",
    id: 63,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "orifice",
    display: "Orifice Plate error",
    id: 64,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "lb",
    display: "LbIn to Nm",
    id: 65,
    type: "electrical",
    category: "electrical"
  }, {
    name: "nm",
    display: "Nm to LbIn",
    id: 66,
    type: "electrical",
    category: "electrical"
  }, {
    name: "dcmotor",
    display: "DC Motor horsepower",
    id: 67,
    type: "electrical",
    category: "electrical"
  }, {
    name: "eff1",
    display: "Eff Tension from HP & FPM",
    id: 68,
    type: "electrical",
    category: "electrical"
  }, {
    name: "eff2",
    display: "Eff Tension from Torque and Radius",
    id: 69,
    type: "electrical",
    category: "electrical"
  }, {
    name: "",
    display: "Gear Pump Displacement",
    id: 81,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Stroke's Law",
    id: 82,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Flow Velocity",
    id: 83,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Hooke's Law (Force)",
    id: 84,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Hooke's Law (Spring constant)",
    id: 85,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Strain",
    id: 86,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "K Value & Pipe Length",
    id: 87,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Young's modulus",
    id: 88,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Weber Number",
    id: 89,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Chezy Coefficient",
    id: 90,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Cauchy Number",
    id: 91,
    type: "mechanical",
    category: "electrical"
  }, {
    name: "",
    display: "Bulk Modulus Elasticity",
    id: 92,
    type: "mechanical",
    category: "electrical"
  }];
  const toolType = [{
    id: 1,
    type: "instrumentation",
    name: "INSTRUMENTATION",
    show: false
  }, {
    id: 2,
    type: "electrical",
    name: "ELECTRICAL",
    show: false
  }, {
    id: 3,
    type: "conversions",
    name: "UNIT CONVERSION",
    show: false
  }, {
    id: 4,
    type: "mechanical",
    name: "MECHANICAL",
    show: false
  }];
  const [array, setArray] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(names);
  const [tooltype, setTooltype] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(toolType);

  const handleChangeTrue = () => {
    let newTooltype = tooltype;
    newTooltype.map(item => item.show = true);
    setTooltype(newTooltype);
  };

  const [tools, setTools] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(names);

  const handleSearch = key => {
    console.log("key", key);
    handleChangeTrue();
    setArray(tools.filter(item => key !== "" && item.display.toLowerCase().indexOf(key.toLowerCase()) !== -1));
    if (key === "") setArray(tools);
    console.log(array);
  };

  const handleShow = id => {
    let newTooltype = tooltype;
    newTooltype.map(item => item.id === id && (item.show = !item.show));
    setTooltype(newTooltype);
    console.log(tooltype);
    setBool(!bool);
  };

  const [bool, setBool] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(true);
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, __jsx("title", null, "gudofConvert"), __jsx("link", {
    rel: "preload"
  }), __jsx("link", {
    media: "print",
    onload: "this.media='all'",
    rel: "preload",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons&display=swap",
    rel: "stylesheet"
  })), __jsx("body", {
    style: {
      fontFamily: 'Nexalight'
    }
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(_NavbarMain__WEBPACK_IMPORTED_MODULE_13__["default"], null), __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: "desktopview",
    style: {
      marginTop: "60px"
    },
    defaultActiveKey: "1"
  }, tooltype !== undefined && tooltype.map(type => __jsx(TabPane, {
    tab: type.name,
    key: type.id
  }, __jsx("div", {
    style: {
      marginLeft: "20px",
      marginRight: "20px"
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      marginLeft: "10px",
      marginRight: "30px"
    },
    placeholder: "Search",
    prefix: __jsx("i", {
      style: {
        marginTop: "-5px"
      },
      className: "material-icons"
    }, "search"),
    onInput: e => handleSearch(e.target.value)
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, array.map(item => item.type === type.type && __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "carditems",
    style: {
      flex: 1
    }
  }, item.type === 'instrumentation' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Instrumentation/${stringSpaceToHyphen(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'electrical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Electrical/${stringSpaceToHyphen(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'conversions' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Conversion/${item.name}`
  }, __jsx("a", null, item.display)), item.type === 'mechanical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Mechanical/${stringSpaceToHyphen(item.display)}`
  }, __jsx("a", null, item.display))))))))), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "mobileview"
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
    placeholder: "Search",
    style: {
      marginTop: "10px",
      marginBottom: "10px"
    },
    prefix: __jsx("i", {
      style: {
        marginTop: "-5px"
      },
      className: "material-icons"
    }, "search"),
    onInput: e => handleSearch(e.target.value)
  }), tooltype !== undefined && tooltype.map(type => __jsx("div", null, __jsx("div", {
    onClick: () => {
      handleShow(type.id);
    },
    style: {
      display: "flex",
      height: "45px"
    }
  }, __jsx("div", {
    style: {
      flex: 1
    }
  }), __jsx("div", {
    style: {
      flex: 10
    }
  }, type.name), __jsx("i", {
    style: {
      flex: 1
    },
    className: "material-icons"
  }, "arrow_drop_down")), type.show && __jsx("div", {
    style: {
      marginLeft: "20px",
      marginRight: "20px"
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, array.map(item => item.type === type.type && __jsx("div", {
    style: {
      width: "100%",
      border: "0px",
      marginBottom: "5px",
      padding: "0px",
      paddingLeft: "15px",
      height: "40px"
    }
  }, __jsx("div", {
    style: {
      margin: "auto"
    }
  }, item.type === 'instrumentation' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Instrumentation/${stringSpaceToHyphen(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'electrical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Electrical/${stringSpaceToHyphen(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'conversions' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Conversion/${item.name}`
  }, __jsx("a", null, item.display)), item.type === 'mechanical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Mechanical/${stringSpaceToHyphen(item.display)}`
  }, __jsx("a", null, item.display)))))))))))));
}
const stringSpaceToHyphen = string => {
  // return ((string.split(" ").join("-")).split("(").join("-")).split(")").join("-");
  return string.split(" ").join("-").split("%").join("percentage");
};
const windowSize = () => {};

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Z8Mf":
/***/ (function(module, exports) {



/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "aJgq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavbarMain; });
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ppZR");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VzA1");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PFYH");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a5Fm");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


function NavbarMain() {
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navbar"
  }, __jsx("div", null, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      background: "#F73406"
    },
    className: "menu"
  }, __jsx("h2", {
    className: "h2-nav"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/"
  }, __jsx("a", null, "gudofConvert"))))));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cUip":
/***/ (function(module, exports) {



/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dc+4":
/***/ (function(module, exports) {



/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "hr7U":
/***/ (function(module, exports) {



/***/ }),

/***/ "mN36":
/***/ (function(module, exports) {



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "ppZR":
/***/ (function(module, exports) {



/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wvHv":
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zT1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mechanical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ppZR");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VzA1");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dc+4");
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wvHv");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("RNiq");





var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




const Navbar = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "zXOc")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("zXOc")],
    modules: ['../Navbar']
  }
});
const DrawerNav = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, "mkpg")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("mkpg")],
    modules: ['../DrawerNav']
  }
});
const SideNav = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "VcBQ")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("VcBQ")],
    modules: ['../SideNav']
  }
});
const Functions = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, "oqNV")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("oqNV")],
    modules: ['../components/Functions']
  }
});
function Mechanical({
  params,
  functions,
  toolType,
  names
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false);

  const showDrawer = () => {
    if (window.innerWidth <= 700) setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
    if (window.innerWidth > 700) setVisible(false);
  });
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  const [category, setCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
    if (router && router.query) {
      names.map(item => {
        if (Object(___WEBPACK_IMPORTED_MODULE_8__["stringSpaceToHyphen"])(item.display) === router.query.name) {
          setId(item.id);
          setCategory(item.category);
          console.log(item.category);
        }
      });
    }
  }, [router, router.query]);
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("title", null, router.query.name, " Mechanical Tools"), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet"
  }), functions !== undefined && functions.map(item => Object(___WEBPACK_IMPORTED_MODULE_8__["stringSpaceToHyphen"])(item.display) === router.query.name && __jsx("meta", {
    key: "description",
    name: "description",
    content: item.desc
  }))), __jsx(Navbar, {
    showDrawer: showDrawer
  }), __jsx("div", {
    className: "tools-container"
  }, __jsx(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: 350,
    title: "gudofConvert",
    placement: "left",
    closable: true,
    onClose: onClose,
    visible: visible
  }, __jsx(DrawerNav, {
    names: names,
    toolType: toolType,
    onClose: () => setVisible(false)
  })), __jsx("div", {
    className: "tools-left"
  }, __jsx(SideNav, {
    names: names,
    toolType: toolType,
    key2: "4"
  })), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "toolbox-layout"
  }, __jsx(Functions, {
    id: id
  }))));
}
async function getStaticPaths() {
  const tools = [{
    display: "Belt Length"
  }, {
    display: "Gear Pump Displacement"
  }, {
    display: "Stroke's Law"
  }, {
    display: "Flow Velocity"
  }, {
    display: "Hooke's Law (Force)"
  }, {
    display: "Hooke's Law (Spring constant)"
  }, {
    display: "Strain"
  }, {
    display: "K Value & Pipe Length"
  }, {
    display: "Young's modulus"
  }, {
    display: "Weber Number"
  }, {
    display: "Chezy Coefficient"
  }, {
    display: "Cauchy Number"
  }, {
    display: "Bulk Modulus Elasticity"
  }];
  const paths = tools.map(post => ({
    params: {
      name: Object(___WEBPACK_IMPORTED_MODULE_8__["stringSpaceToHyphen"])(post.display)
    }
  }));
  return {
    paths: paths,
    fallback: false // See the "fallback" section below

  };
}
async function getStaticProps({
  params
}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = [{
    stringId: "1",
    a: 0,
    b: 20,
    name: "mA",
    display: "0-20 mA",
    desc: "This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 20 milliamps, and display a 0-20mA conversion scale for the chosen measurement range."
  }, {
    stringId: "2",
    a: 4,
    b: 20,
    name: "mA",
    display: "4-20 mA",
    desc: "This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 4 to 20 milliamps, and display a 4-20mA conversion scale for the chosen measurement range."
  }, {
    stringId: "3",
    a: 0,
    b: 25,
    name: "mA",
    display: "0-25 mA",
    desc: "This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 25 milliamps, and display a 0-25mA conversion scale for the chosen measurement range."
  }, {
    stringId: "0",
    a: 3,
    b: 15,
    name: "PSI",
    display: "3-15 PSI",
    desc: "This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 20 milliamps, and display a 0-20mA conversion scale for the chosen measurement range."
  }];
  const tools = [{
    name: "frequency",
    display: "Frequency",
    id: 33,
    type: "electrical",
    category: "electrical"
  }, {
    name: "timeperiod",
    display: "Time Period",
    id: 22,
    type: "electrical",
    category: "electrical"
  }, {
    name: "3-15 PSI",
    display: "3-15 PSI",
    id: 0,
    type: "instrumentation",
    category: "instrumentation"
  }, {
    name: "0-20mA",
    display: "0-20 mA",
    id: 1,
    type: "instrumentation",
    category: "instrumentation"
  }, {
    name: "4-20mA",
    display: "4-20 mA",
    id: 2,
    type: "instrumentation",
    category: "instrumentation"
  }, {
    name: "0-25mA",
    display: "0-25 mA",
    id: 3,
    type: "instrumentation",
    category: "instrumentation"
  }, {
    name: "zero",
    display: "0-X to % (Conversion)",
    id: 4,
    type: "instrumentation",
    category: "zero"
  }, {
    children: "brightness_1",
    name: "area",
    display: "Area",
    id: 5,
    type: "conversions",
    category: "conversion"
  }, {
    children: "chat",
    name: "force",
    display: "Force",
    id: 6,
    type: "conversions",
    category: "conversion"
  }, {
    name: "energy",
    display: "Energy",
    id: 7,
    type: "conversions",
    category: "conversion"
  }, {
    name: "fuel_consumption",
    display: "Fuel Consumption",
    id: 8,
    type: "conversions",
    category: "conversion"
  }, {
    name: "time",
    display: "Time",
    id: 9,
    type: "conversions",
    category: "conversion"
  }, {
    name: "mass",
    display: "Mass",
    id: 10,
    type: "conversions",
    category: "conversion"
  }, {
    name: "length",
    display: "Length",
    id: 11,
    type: "conversions",
    category: "conversion"
  }, {
    name: "digital_storage",
    display: "Data Storage",
    id: 12,
    type: "conversions",
    category: "conversion"
  }, {
    name: "resistancetemp",
    display: "Resistance (from temperature)",
    id: 13,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "linearma",
    display: "Linear mA to Square Root mA",
    id: 14,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "temperature",
    display: "Temperature (from resistance)",
    id: 15,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "temperature",
    display: "Temperature",
    id: 16,
    type: "conversions",
    category: "conversion"
  }, {
    name: "linear",
    display: "Linear to Square Root percentage",
    id: 17,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "electric_current",
    display: "Current",
    id: 18,
    type: "conversions",
    category: "conversion"
  }, {
    name: "ohms",
    display: "Ohms law (R)",
    id: 19,
    stringId: "19",
    type: "electrical",
    category: "electrical"
  }, {
    name: "ohmsi",
    display: "Ohms law (I)",
    id: 20,
    type: "electrical",
    category: "electrical"
  }, {
    name: "aircore",
    display: "Air Core Inductance",
    id: 21,
    type: "electrical",
    category: "electrical"
  }, {
    name: "ohmsv",
    display: "Ohms Law (V)",
    id: 23,
    type: "electrical",
    category: "electrical"
  }, {
    name: "parallel",
    display: "Parallel Resistance",
    id: 24,
    type: "electrical",
    category: "electrical"
  }, {
    name: "velocitysound",
    display: "Velocity of Sound",
    id: 25,
    type: "electrical",
    category: "electrical"
  }, {
    name: "lcresonance",
    display: "LC Resonance",
    id: 26,
    type: "electrical",
    category: "electrical"
  }, {
    name: "voltagediv",
    display: "Voltage Divider",
    id: 27,
    type: "electrical",
    category: "electrical"
  }, {
    name: "speedtime",
    display: "Time (Speed)",
    id: 28,
    type: "extra",
    category: "electrical"
  }, {
    name: "wheat",
    display: "Wheatstone bridge",
    id: 29,
    type: "electrical",
    category: "electrical"
  }, {
    name: "color",
    display: "Color code Resistance",
    id: 30,
    type: "electrical",
    category: "color"
  }, {
    name: "powerrv",
    display: "Power (with R,V)",
    id: 31,
    stringId: "31",
    type: "electrical",
    category: "electrical"
  }, {
    name: "powervi",
    display: "Power (with V,I)",
    id: 32,
    type: "electrical",
    category: "electrical"
  }, {
    name: "speedspeed",
    display: "Speed",
    id: 34,
    type: "extra",
    category: "electrical"
  }, {
    name: "distance",
    display: "Distance (Speed)",
    id: 35,
    type: "extra",
    category: "electrical"
  }, {
    name: "volume",
    display: "Volume",
    id: 36,
    type: "conversions",
    category: "conversion"
  }, {
    name: "pressure",
    display: "Pressure",
    id: 37,
    type: "conversions",
    category: "conversion"
  }, {
    name: "speed",
    display: "Speed",
    id: 38,
    type: "conversions",
    category: "conversion"
  }, {
    name: "power",
    display: "Power",
    id: 39,
    type: "conversions",
    category: "conversion"
  }, {
    name: "powerir",
    display: "Power (with R,I)",
    id: 40,
    type: "electrical",
    category: "electrical"
  }, {
    name: "wavelength",
    display: "Wavelength",
    id: 41,
    type: "extra",
    category: "electrical"
  }, {
    name: "powerline",
    display: "Power Factor 3Phase (Line)",
    id: 42,
    type: "electrical",
    category: "electrical"
  }, {
    name: "powerneutral",
    display: "Power Factor 3Phase (neutral)",
    id: 43,
    type: "electrical",
    category: "electrical"
  }, {
    name: "power",
    display: "Power Factor Single Phase",
    id: 44,
    stringId: "44",
    type: "electrical",
    category: "electrical"
  }, {
    name: "charge",
    display: "Charge",
    id: 45,
    type: "conversions",
    category: "conversion"
  }, {
    name: "speedhorse",
    display: "Speed (Horsepower)",
    id: 46,
    stringId: "46",
    type: "electrical",
    category: "electrical"
  }, {
    name: "torque",
    display: "Torque (HorsePower)",
    id: 47,
    type: "electrical",
    category: "electrical"
  }, {
    name: "horsepower",
    display: "HorsePower",
    id: 48,
    type: "electrical",
    category: "electrical"
  }, {
    name: "twoseals",
    display: "Level measurement Two Seals",
    id: 49,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "onesealabove",
    display: "Level measurement one seal above",
    id: 50,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "onesealbelow",
    display: "Level measurement one seal below",
    id: 51,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "bubblelevel",
    display: "Bubble Level",
    id: 52,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "bubbleinterface",
    display: "Bubble Interface",
    id: 53,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "twosealint",
    display: "Two Seal Interface",
    id: 54,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "opentank",
    display: "Open Tank",
    id: 55,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "intwet",
    display: "Interface Wet Leg",
    id: 56,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "liquidpurge",
    display: "Liquid Purge",
    id: 57,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "LT3",
    display: "Level Transmission Closed Vessel",
    id: 58,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "short",
    display: "Short Circuit Calculation",
    id: 59,
    type: "electrical",
    category: "electrical"
  }, {
    name: "transformer",
    display: "Transformer Fault Current",
    id: 60,
    type: "electrical",
    category: "electrical"
  }, {
    name: "DOL",
    display: "DOL Star & Delta",
    id: 61,
    type: "electrical",
    category: "electrical"
  }, {
    name: "flowrate",
    display: "Flow Rate Calculation",
    id: 62,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "hydrost",
    display: "Hydrostatic Level",
    id: 63,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "orifice",
    display: "Orifice Plate error",
    id: 64,
    type: "instrumentation",
    category: "electrical"
  }, {
    name: "lb",
    display: "LbIn to Nm",
    id: 65,
    type: "electrical",
    category: "electrical"
  }, {
    name: "nm",
    display: "Nm to LbIn",
    id: 66,
    type: "electrical",
    category: "electrical"
  }, {
    name: "dcmotor",
    display: "DC Motor horsepower",
    id: 67,
    type: "electrical",
    category: "electrical"
  }, {
    name: "eff1",
    display: "Eff Tension from HP & FPM",
    id: 68,
    type: "electrical",
    category: "electrical"
  }, {
    name: "eff2",
    display: "Eff Tension from Torque and Radius",
    id: 69,
    type: "electrical",
    category: "electrical"
  }, {
    display: "Gear Pump Displacement",
    id: 81,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Stroke's Law",
    id: 82,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Flow Velocity",
    id: 83,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Hooke's Law (Force)",
    id: 84,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Hooke's Law (Spring constant)",
    id: 85,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Strain",
    id: 86,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "K Value & Pipe Length",
    id: 87,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Young's modulus",
    id: 88,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Weber Number",
    id: 89,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Chezy Coefficient",
    id: 90,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Cauchy Number",
    id: 91,
    type: "mechanical",
    category: "electrical"
  }, {
    display: "Bulk Modulus Elasticity",
    id: 92,
    type: "mechanical",
    category: "electrical"
  }];
  const tooltype = [{
    id: 1,
    type: "instrumentation",
    name: "INSTRUMENTATION",
    show: false
  }, {
    id: 2,
    type: "electrical",
    name: "ELECTRICAL",
    show: false
  }, {
    id: 3,
    type: "conversions",
    name: "UNIT CONVERSION",
    show: false
  }, {
    id: 4,
    type: "mechanical",
    name: "MECHANICAL",
    show: false
  }]; // Pass post data to the page via props

  return {
    props: {
      functions: res,
      names: tools,
      toolType: tooltype,
      params: params
    }
  };
}

/***/ }),

/***/ "zkM6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ })

/******/ });