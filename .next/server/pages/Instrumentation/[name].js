module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("H0fC");


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

/***/ "7YAK":
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "H0fC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Instrumentation; });
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
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zXOc");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("VcBQ");
/* harmony import */ var _DrawerNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("mkpg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("RNiq");
/* harmony import */ var _components_Slidertools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Rm4c");
/* harmony import */ var _components_Zero__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("TRwk");
/* harmony import */ var _components_Functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("oqNV");





var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









function Instrumentation({
  params,
  functions,
  toolType,
  names
}) {
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
  const [question, setQuestion] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  const [result, setResult] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0);
  let vari;
  const [queryid, setQueryId] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const [a, seta] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  const [b, setb] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
    if (router && router.query) {
      setQueryId(router.query.name);
      console.log("router", router.query.id);
    }
  }, [router, router.query]);
  const [display, setDisplay] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  const [name, setName] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  const [category, setCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {
    if (queryid !== undefined) {
      let item = names.find(item => Object(___WEBPACK_IMPORTED_MODULE_10__["stringSpaceToHyphen"])(item.display) === router.query.name);
      setCategory(item.category);

      if (functions.find(item => Object(___WEBPACK_IMPORTED_MODULE_10__["stringSpaceToHyphen"])(item.display) === router.query.name) !== undefined) {
        let vari = functions.find(item => Object(___WEBPACK_IMPORTED_MODULE_10__["stringSpaceToHyphen"])(item.display) === router.query.name);
        seta(vari.a);
        setQuestion(vari.a);
        setName(vari.name);
        setb(vari.b);
        setDisplay(vari.display);
      }

      setId(item.id);
      console.log("id", id);
    }
  }, [queryid]);
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("title", null, router.query.name), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet"
  }), functions !== undefined && functions.map(item => Object(___WEBPACK_IMPORTED_MODULE_10__["stringSpaceToHyphen"])(item.display) === router.query.name && __jsx("meta", {
    key: "description",
    name: "description",
    content: item.desc
  }))), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, __jsx(_DrawerNav__WEBPACK_IMPORTED_MODULE_9__["default"], {
    names: names,
    toolType: toolType,
    onClose: () => setVisible(false)
  })), __jsx("div", {
    className: "tools-left"
  }, __jsx(_SideNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    names: names,
    toolType: toolType,
    key2: "1"
  })), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "toolbox-layout"
  }, question !== undefined && category === "instrumentation" && __jsx(_components_Slidertools__WEBPACK_IMPORTED_MODULE_11__["default"], {
    desc: "",
    display: display,
    a: a,
    b: b,
    res: result,
    qn: question,
    name: name
  }), category === "electrical" && __jsx(_components_Functions__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: id
  }), category === "zero" && __jsx(_components_Zero__WEBPACK_IMPORTED_MODULE_12__["default"], null))));
}
async function getStaticPaths() {
  const tools = [{
    display: "3-15 PSI"
  }, {
    display: "0-20 mA"
  }, {
    display: "4-20 mA"
  }, {
    display: "0-25 mA"
  }, {
    display: "0-X to % (Conversion)"
  }, {
    display: "Resistance (from temperature)"
  }, {
    display: "Linear mA to Square Root mA"
  }, {
    display: "Temperature (from resistance)"
  }, {
    display: "Temperature"
  }, {
    display: "Linear to Square Root percentage"
  }, {
    display: "Level measurement Two Seals"
  }, {
    display: "Level measurement one seal above"
  }, {
    display: "Level measurement one seal below"
  }, {
    display: "Bubble Level"
  }, {
    display: "Bubble Interface"
  }, {
    display: "Two Seal Interface"
  }, {
    display: "Open Tank"
  }, {
    display: "Interface Wet Leg"
  }, {
    display: "Liquid Purge"
  }, {
    display: "Level Transmission Closed Vessel"
  }, {
    display: "Flow Rate Calculation"
  }, {
    display: "Hydrostatic Level"
  }, {
    display: "Orifice Plate error"
  }];
  const paths = tools !== undefined && tools.map(post => ({
    params: {
      name: Object(___WEBPACK_IMPORTED_MODULE_10__["stringSpaceToHyphen"])(post.display)
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
    name: "laser",
    display: "Laser Real-Time Converter",
    id: 22,
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
    name: "frequency",
    display: "Frequency",
    id: 33,
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

/***/ "MaXC":
/***/ (function(module, exports) {



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
    href: "https://fonts.googleapis.com/icon?family=Material+Icons&display=swap",
    rel: "stylesheet"
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx("body", {
    className: "body"
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
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, array.map(item => item.type === type.type && __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "mobilecard"
  }, item.type === 'instrumentation' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Instrumentation/${stringSpaceToHyphen(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'electrical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Electrical/${stringSpaceToHyphen(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'conversions' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Conversion/${item.name}`
  }, __jsx("a", null, item.display)), item.type === 'mechanical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: `Mechanical/${stringSpaceToHyphen(item.display)}`
  }, __jsx("a", null, item.display))))))))))));
}
const stringSpaceToHyphen = string => {
  // return ((string.split(" ").join("-")).split("(").join("-")).split(")").join("-");
  return string.split(" ").join("-").split("%").join("percentage");
};
const windowSize = () => {};

/***/ }),

/***/ "Rm4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slidertools; });
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tCGa");
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7YAK");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cUip");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


function Slidertools({
  a,
  b,
  name,
  qn,
  res,
  display,
  desc,
  functions,
  showDrawer
}) {
  const [question, setQuestion] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(qn);
  const [result, setResult] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(res);
  const [resultn, setResultn] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState();

  const setFn = value => {
    // setQuestion(newValue)
    setResultn(1);
    setResult((value - a) * 100 / (b - a));
    setQuestion(value);
    console.log(value);
    document.getElementById('InputID').value = '';
  };

  const setIn = e => {
    setResultn(1);
    console.log(e.target.value);

    if (e.target.value !== NaN) {
      setQuestion(Number(e.target.value));
      setResult((Number(e.target.value) - a) * 100 / (b - a));
    }
  };

  const setRn = e => {
    setResultn(1);

    if (e.target.value !== NaN) {
      setResult(e.target.value);
      setQuestion(Number(e.target.value) * (b - a) / 100 + a);
    }
  };

  const resultfn = value => {
    setResultn(1);
    setResult(value);
    setQuestion(value * (b - a) / 100 + a);
  };

  return __jsx("div", null, a !== undefined && __jsx("div", {
    className: "toolbox"
  }, __jsx("div", null, __jsx("div", {
    className: "toolbox-heading"
  }, display, " "), __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    className: "toolbox-calc"
  }, __jsx("div", {
    className: "heading"
  }, "Calculation"), __jsx("br", null), __jsx("div", {
    style: {
      marginBottom: "10px",
      display: "flex",
      alignItems: "center"
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      flex: 4,
      marginRight: "10px"
    },
    type: "number",
    className: "input",
    id: "InputID",
    placeholder: question.toString() + " " + name,
    onChange: e => setIn(e)
  }), __jsx("div", {
    style: {
      flex: 2
    }
  }, __jsx("div", {
    style: {
      float: "right"
    }
  }, a, " ", name)), __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      flex: 10
    },
    min: a,
    max: b,
    value: question,
    onChange: e => setFn(e)
  }), __jsx("div", {
    style: {
      flex: 2
    }
  }, b, " ", name)), __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      flex: 4,
      marginRight: "10px"
    },
    type: "number",
    className: "input",
    id: "InputID2",
    placeholder: result.toString() + " %",
    onChange: e => setRn(e)
  }), __jsx("div", {
    style: {
      flex: 2,
      float: "right"
    }
  }, __jsx("div", {
    style: {
      float: "right"
    }
  }, "0%")), __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      flex: 10
    },
    value: result,
    onChange: e => resultfn(e)
  }), __jsx("div", {
    style: {
      flex: 2
    }
  }, "100%")), __jsx("br", null)), resultn !== undefined && __jsx("div", null, __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    className: "toolbox-desc"
  }, __jsx("div", {
    className: "heading"
  }, "Result"), question, " ", name, " = ", result, " %")), __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    className: "toolbox-desc toolbox-calc"
  }, __jsx("div", {
    className: "heading"
  }, "Description"), desc))));
}

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TRwk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MaXC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hr7U");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cUip");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fv9D");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vsU0");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


const Zero = () => {
  const [s, sets] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(0);
  const [e, sete] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(100);
  const [r, setr] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState();

  const setS = e => {
    sets(Number(e.target.value));
    calculate();
  };

  const setE = e => {
    sete(Number(e.target.value));
    calculate();
  };

  const calculate = () => {
    setr(e - s);
  };

  const click = () => {
    calculate();
  };

  return __jsx("div", {
    className: "toolbox"
  }, __jsx("div", {
    className: "toolbox-heading"
  }, "0-X % Conversion"), __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    className: "toolbox-calc"
  }, __jsx("div", {
    className: "heading"
  }, "Calculation"), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "row"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 12
  }, "Start Value"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 12
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "input box",
    style: {
      border: "1px solid gray"
    },
    type: "text",
    value: s,
    onChange: e => setS(e)
  }))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "row"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 12
  }, "End value"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 12
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "input box",
    style: {
      border: "1px solid gray"
    },
    type: "text",
    value: e,
    onChange: e => setE(e)
  }))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "toolbox-descp"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      textAlign: "center"
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "calculate-button",
    onClick: () => click()
  }, "Calculate")))), r !== undefined && __jsx("div", {
    className: "toolbox-calc"
  }, __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    className: "heading"
  }, "RESULT"), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 12,
    className: "result-head"
  }, " 0%"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, null, " ", s, " ")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 12,
    className: "result-head"
  }, " 25%"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, null, " ", r / 4 + Number(s), " ")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 12,
    className: "result-head"
  }, " 50%"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, null, " ", r / 2 + Number(s), " ")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 12,
    className: "result-head"
  }, " 75%"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, null, " ", r * 3 / 4 + Number(s), "  ")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 12,
    className: "result-head"
  }, " 100%"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, null, " ", e, " "))), __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    className: "toolbox-descp toolbox-calc"
  }, __jsx("div", {
    className: "heading"
  }, "description"), __jsx("div", {
    className: ""
  }, "This tool is used to calculate 0% , 25% , 50% , 75% ,and 100% of range between two numbers.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Zero);

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

/***/ "UgFO":
/***/ (function(module, exports) {



/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VcBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "active", function() { return active; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("RNiq");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

const {
  TabPane
} = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9___default.a;



function SideNav({
  names,
  toolType,
  key2
}) {
  const [array, setArray] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(names);
  const [ToolType, setTooltype] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(toolType);

  const handleChangeTrue = () => {
    let newTooltype = ToolType;
    newTooltype.map(item => item.show = true);
    setTooltype(newTooltype);
  };

  react__WEBPACK_IMPORTED_MODULE_10___default.a.useEffect(() => console.log("type", ToolType));

  const handleSearch = event => {
    handleChangeTrue();
    setArray(tools.filter(item => event.target.value !== "" && item.display.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1));
    if (event.target.value === "") setArray(tools);
    console.log(array);
  };

  const [tools, setTools] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(names);
  return __jsx("div", null, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      marginTop: "60px"
    },
    tabPosition: "top",
    defaultActiveKey: key2
  }, ToolType !== undefined && ToolType.map(type => __jsx(TabPane, {
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
    onInput: e => handleSearch(e)
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, array.map(item => item.type === type.type && __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: `${item.category === "conversion" ? active(item.name) : active(item.display)}`,
    style: {
      flex: 1
    }
  }, item.type === 'instrumentation' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Instrumentation/${Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'electrical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Electrical/${Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'conversions' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Conversion/${item.name}`
  }, __jsx("a", null, item.display)), item.type === 'mechanical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Mechanical/${Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(item.display)}`
  }, __jsx("a", null, item.display)))))))))));
}
const active = name => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();

  if (router.query.name === Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(name)) {
    return "activecard";
  } else return "carditems1";
};

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

/***/ "fv9D":
/***/ (function(module, exports) {



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

/***/ "mkpg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawerNav; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("RNiq");










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

const {
  TabPane
} = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_9___default.a;


function DrawerNav({
  names,
  toolType,
  onClose
}) {
  const [array, setArray] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(names);
  const [ToolType, setTooltype] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(toolType);

  const handleChangeTrue = () => {
    let newTooltype = ToolType;
    newTooltype.map(item => item.show = true);
    setTooltype(newTooltype);
  };

  const handleShow = id => {
    let newTooltype = ToolType;
    newTooltype.map(item => item.id === id && (item.show = !item.show));
    setTooltype(newTooltype);
    console.log(ToolType);
    setBool(!bool);
  };

  const handleSearch = event => {
    handleChangeTrue();
    setArray(tools.filter(item => event.target.value !== "" && item.display.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1));
    if (event.target.value === "") setArray(tools);
    console.log(array);
  };

  const [bool, setBool] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(true);
  const [tools, setTools] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(names);
  return __jsx("div", {
    className: "body"
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
    placeholder: "Search",
    prefix: __jsx("i", {
      style: {
        marginTop: "-5px"
      },
      className: "material-icons"
    }, "search"),
    onInput: e => handleSearch(e)
  }), ToolType !== undefined && ToolType.map(type => __jsx("div", {
    key: type.type
  }, __jsx("div", {
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
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, array.map(item => item.type === type.type && __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    key: item.id,
    onClick: () => {
      onClose();
    },
    className: "mobilecard"
  }, item.type === 'instrumentation' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Instrumentation/${Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'electrical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Electrical/${Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(item.display)}`
  }, __jsx("a", null, item.display)), item.type === 'conversions' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Conversion/${item.name}`
  }, __jsx("a", null, item.display)), item.type === 'mechanical' && __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: `../../Mechanical/${Object(___WEBPACK_IMPORTED_MODULE_12__["stringSpaceToHyphen"])(item.display)}`
  }, __jsx("a", null, item.display))))))))));
}

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

/***/ "oqNV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MaXC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_image_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UgFO");
/* harmony import */ var antd_lib_image_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_image_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0Iyw");
/* harmony import */ var antd_lib_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cUip");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zXOc");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("VcBQ");
/* harmony import */ var _DrawerNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("mkpg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("RNiq");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







const Functions = ({
  names,
  toolType,
  id
}) => {
  const function_id = parseInt(id);
  const electricalList = [{
    display: "Linear mA to Square root mA",
    id: 14,
    descp: "This tool is used to convert transmitter Linear ma to Square root ma conversion. It calculates the equivalemnt square root ma for any given linear ma.",
    q1: "Linear mA",
    qc1: "mA",
    a1: "Square root",
    ac1: "mA"
  }, {
    display: "Linear % to Square root %",
    id: 17,
    descp: "This formula used to convert transmitter Linear Percentage to Square root Percentage conversion. ",
    q1: "Linear %",
    qc1: "%",
    a1: "Square root",
    ac1: "%"
  }, {
    display: "Lb In to Nm",
    id: 65,
    q1: "Lb In",
    descp: "This calculator is used to convert between Newton meter and Inch pound",
    qc1: "",
    a1: "Nm",
    ac1: ""
  }, {
    display: "Nm to LbIn",
    id: 66,
    q1: "Nm",
    descp: "This calculator is used to convert between Newton meter and Inch pound",
    qc1: "",
    a1: "Lb In",
    ac1: ""
  }, {
    display: "Time (Speed)",
    id: 28,
    descp: "This calculator is used to calculate Time from Speed and Distance.",
    q1: "Distance",
    qc1: "m",
    q2: "Speed",
    qc2: "m/s",
    a1: " Time",
    ac1: "s"
  }, {
    display: "Speed",
    id: 34,
    descp: "This calculator is used to calculate Speed from Time and Distance.",
    q1: "Distance",
    qc1: "m",
    q2: "Time",
    qc2: "s",
    a1: " Speed",
    ac1: "m/s"
  }, {
    display: "Distance",
    descp: "This calculator is used to calculate Distance from Time and Speed.",
    id: 35,
    q1: "Time",
    qc1: "s",
    q2: "Speed",
    qc2: "m/s",
    a1: " Distance",
    ac1: "m"
  }, {
    display: "Voltage Divider",
    id: 27,
    descp: "",
    q1: "V (total)",
    qc1: "V",
    q2: "R1",
    qc2: "Ohm",
    q3: "R2",
    qc3: "Ohm",
    q4: "R3",
    qc4: "Ohm",
    a1: "V1",
    ac1: "Ohm",
    a2: "V2",
    ac2: "Ohm",
    a3: "V3",
    ac3: "Ohm"
  }, {
    display: "Aircore Inductance",
    id: 21,
    q1: "Coil diameter",
    qc1: "in",
    q2: "Coil Length",
    qc2: "in",
    q3: "No: of turns",
    qc3: "",
    a1: "Inductance",
    ac1: ""
  }, {
    display: "Velocity of Sound",
    id: 25,
    q1: "Temperature",
    qc1: "K",
    q2: "Gamma",
    qc2: "",
    q3: "Gas constant",
    qc3: "J/Kg*K",
    a1: "Velocity",
    ac1: ""
  }, {
    display: "Wheatstone",
    id: 29,
    q1: "R1 (adjacent)",
    qc1: "Ohm",
    q2: "R2 (opposite)",
    qc2: "Ohm",
    q3: "R3 (adjacent)",
    qc3: "Ohm",
    a1: "R",
    ac1: "Ohm"
  }, {
    display: "Power Factor 3 Phase",
    id: 42,
    q1: "Voltage (L-L)",
    qc1: "V",
    q2: "Current",
    qc2: "A",
    q3: "Aparent Power",
    qc3: "Watt",
    a1: "Powerfactor",
    ac1: ""
  }, {
    display: "Power Factor Neutral",
    id: 43,
    q1: "Voltage (L-N)",
    qc1: "V",
    q2: "Current",
    qc2: "A",
    q3: "Aparent Power",
    qc3: "Watt",
    a1: "Powerfactor",
    ac1: ""
  }, {
    display: "Power Factor Single Phase",
    id: 44,
    q1: "Voltage",
    qc1: "V",
    q2: "Current",
    qc2: "A",
    q3: "Aparent Power",
    qc3: "Watt",
    a1: "Powerfactor",
    ac1: ""
  }, {
    display: "DC Motor Horsepower",
    id: 67,
    q1: "Volts",
    qc1: "V",
    q2: "Amps",
    qc2: "",
    q3: "Effs",
    qc3: "",
    a1: "Horsepower",
    ac1: ""
  }, {
    display: "Ohms law (R)",
    id: 19,
    q1: "Voltage",
    qc1: "V",
    q2: "Current",
    qc2: "A",
    a1: " Resistance, R",
    ac1: "Ohm"
  }, {
    display: "Ohms law (V)",
    id: 23,
    q1: "Current",
    qc1: "A",
    q2: "Resistance",
    qc2: "Ohm",
    a1: " Voltage ",
    ac1: "V"
  }, {
    display: "Ohms law (I)",
    id: 20,
    q1: "Voltage",
    qc1: "V",
    q2: "Resistance",
    qc2: "Ohm",
    a1: " Current",
    ac1: "A"
  }, {
    display: "Parallel Resistance",
    id: 24,
    q1: "R1",
    qc1: "Ohm",
    q2: "R2",
    qc2: "Ohm",
    a1: " R",
    ac1: "Ohm"
  }, {
    display: "LC Resonance",
    id: 26,
    q1: "C",
    qc1: "",
    q2: "L",
    qc2: "",
    a1: " Frequency",
    ac1: ""
  }, {
    display: "Power(I,V)",
    id: 32,
    q1: "Voltage",
    qc1: "V",
    q2: "Current",
    qc2: "A",
    a1: " P",
    ac1: "Watts"
  }, {
    display: "Power(I,R)",
    id: 40,
    q1: "Current",
    qc1: "A",
    q2: "Resistance",
    qc2: "Ohm",
    a1: " P",
    ac1: "Watts"
  }, {
    display: "Power (R,V)",
    id: 31,
    q1: "Voltage",
    qc1: "V",
    q2: "Resistance",
    qc2: "Ohm",
    a1: " P",
    ac1: "Watts"
  }, {
    display: "Speed (Horsepower)",
    id: 46,
    q1: "Power",
    qc1: "Horsepower",
    q2: "Torque",
    qc2: "PoundFoot",
    a1: "Rotating speed",
    ac1: "rpm"
  }, {
    display: "Torque (horsepower)",
    id: 47,
    q1: "Power",
    qc1: "Horsepower",
    q2: "Speed",
    qc2: "rpm",
    a1: "Torque",
    ac1: "PoundFoot"
  }, {
    display: "Horse Power",
    id: 48,
    q1: "Torque",
    qc1: "PoundFoot",
    q2: "Speed",
    qc2: "rpm",
    a1: "Horsepower",
    ac1: "horsePower"
  }, {
    display: "Effective Tension from HP & FPM",
    id: 68,
    q1: "HP",
    qc1: "",
    q2: "FPM",
    qc2: "",
    a1: "Effective Tension",
    ac1: "lbs"
  }, {
    display: "Effective Tension from Torque & Radius",
    id: 69,
    q1: "Torque",
    qc1: "",
    q2: "Radius",
    qc2: "",
    a1: "Effective Tension",
    ac1: "lbs"
  }, {
    display: "Resistance from temperature",
    id: 13,
    q1: "T(t)",
    qc1: "",
    q2: "R(0)",
    qc2: "",
    q3: "T(0)",
    qc3: "",
    q4: "C",
    qc4: "",
    a1: "Resistance",
    ac1: "Ohm"
  }, {
    display: "Temperature from resistance",
    id: 15,
    descp: "As temperature rises, the number of phonons increases and with it the likelihood that the electrons and phonons will collide. Thus when temperature goes up, resistance goes up. For some materials, resistivity is a linear function of temperature. The resistivity of a conductor increases with temperature.",
    q1: "R(t)",
    qc1: "",
    q2: "R(0)",
    qc2: "",
    q3: "Temp",
    qc3: "",
    q4: "C",
    qc4: "",
    a1: "Temperature",
    ac1: "K"
  }, {
    display: "Level Measurement Two Seals",
    img: "twoSeal.png",
    id: 49,
    q1: "h1",
    qc1: "mm",
    q2: "h0",
    qc2: "mm",
    q3: "d3",
    qc3: "",
    q4: "d2",
    qc4: "",
    q5: "d1",
    qc5: "",
    q6: "C",
    qc6: "mm",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Level Measurement One Seal Above",
    img: "onseSealAbove.png",
    id: 50,
    q1: "h2",
    qc1: "mm",
    q2: "h1",
    qc2: "mm",
    q3: "h0",
    qc3: "mm",
    q4: "d2",
    qc4: "",
    q5: "d1",
    qc5: "",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Level Measurement One Seal Below",
    img: "oneSealBelow.png",
    id: 51,
    q1: "h2",
    qc1: "mm",
    q2: "h1",
    qc2: "mm",
    q3: "h0",
    qc3: "mm",
    q4: "d2",
    qc4: "",
    q5: "d1",
    qc5: "",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Bubble Level",
    img: "bubblelevel.png",
    id: 52,
    q1: "h1",
    qc1: "mm",
    q2: "h0",
    qc2: "mm",
    q3: "d1",
    qc3: "",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Bubble Interface",
    img: "bubbleInterface.png",
    id: 53,
    q1: "h1",
    qc1: "mm",
    q2: "du",
    qc2: "",
    q3: "dl",
    qc3: "",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Two Seal Interface",
    img: "twoSealInterface.png",
    id: 54,
    q1: "h4",
    qc1: "mm",
    q2: "h1",
    qc2: "mm",
    q3: "h0",
    qc3: "mm",
    q4: "d3",
    qc4: "",
    q5: "d2",
    qc5: "",
    q6: "du",
    qc6: "",
    q7: "du",
    qc7: "",
    q8: "C",
    qc8: "mm",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Open Tank",
    img: "openTank.png",
    id: 55,
    q1: "h2",
    qc1: "mm",
    q2: "h1",
    qc2: "mm",
    q3: "h0",
    qc3: "mm",
    q4: "d1",
    qc4: "",
    q5: "d0",
    qc5: "",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Interface Wet Leg",
    img: "twoSealInterface.png",
    id: 56,
    q1: "h4",
    qc1: "mm",
    q2: "h3",
    qc2: "mm",
    q3: "h2",
    qc3: "mm",
    q4: "h1",
    qc4: "mm",
    q5: "h0",
    qc5: "mm",
    q6: "d2",
    qc6: "",
    q7: "d0",
    qc7: "",
    q8: "du",
    qc8: "",
    q9: "dl",
    qc9: "",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Liquid Purge",
    id: 57,
    img: "liquidPurge.png",
    q1: "h3",
    qc1: "mm",
    q2: "h2",
    qc2: "mm",
    q3: "h1",
    qc3: "mm",
    q4: "h0",
    qc4: "mm",
    q5: "d3",
    qc5: "",
    q6: "d2",
    qc6: "",
    q7: "d1",
    qc7: "",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Level Transmission Closed Vessel",
    img: "11LT.png",
    id: 58,
    descp: "Hydrostatic head instruments for measuring liquid level in vessels operating above atmospheric pressure uses the full capability of the differential pressure instruments with both sides of the measuring element connected to the vessel.",
    q1: "h3",
    qc1: "mm",
    q2: "h2",
    qc2: "mm",
    q3: "h1",
    qc3: "mm",
    q4: "h0",
    qc4: "mm",
    q5: "d3",
    qc5: "",
    q6: "d2",
    qc6: "",
    q7: "d1",
    qc7: "",
    q8: "d0",
    qc8: "",
    a1: "HP Side/LRV/4mA",
    ac1: "mmH20",
    a2: "LP Side/URV/20mA",
    ac2: "mmH20",
    a3: "Span",
    ac3: "mmH20"
  }, {
    display: "Flow Rate Calculation",
    id: 62,
    q1: "Pipe Diameter",
    qc1: "mm",
    q2: "Constricted Diameter",
    qc2: "mm",
    q3: "Measured Pressure Difference",
    qc3: "kPa",
    q4: "Fluid Density",
    qc4: "kg/m3",
    q5: "Meter Coefficient D",
    qc5: "",
    a1: "Constricted Area",
    ac1: "",
    a2: "Diameter Section",
    ac2: "",
    a3: "Pipe Flow Rate",
    ac3: "m3/s"
  }, {
    display: "Hydrostatic Level",
    id: 63,
    descp: "Hydrostatic level measurement is a simple and reliable method of measuring level. A submersible pressure sensor, regular pressure sensor or pressure gauge is lowered to or mounted at a specific depth (zero level). The sensor then measures the pressure caused by the weight of the liquid directly on top of it. Due to the hydrostatic paradox, the pressure sensor does not measure the complete volume in the tank above it, but only the liquid column vertically above it.",
    q1: "Max URV",
    qc1: "ft",
    q2: "Min LRV",
    qc2: "ft",
    q3: "Process Liquid Density",
    qc3: "",
    q4: "Transmitter Height Offset",
    qc4: "",
    q5: "Impulse Line Fluid Density",
    qc5: "lb/ft3",
    q6: "Actual Liquid Level",
    qc6: "ft",
    a1: "Hydrostatic Pressure @ transmitter ",
    ac1: "WC",
    a2: "Transmitter LRV",
    ac2: "",
    a3: "Transmitter URV",
    ac3: ""
  }, {
    display: "Orifice Plate Error",
    id: 64,
    q1: "Max Flow through orifice plate",
    qc1: "GPM",
    q2: "Differential pressure at that flow rate",
    qc2: "WC",
    q3: "Differential Pressure measurement errors",
    qc3: "WC",
    q4: "Current Flow",
    qc4: "GPM",
    a1: "Hydrostatic Pressure @ transmitter ",
    ac1: "WC",
    a2: "Transmitter LRV",
    ac2: "",
    a3: "Transmitter URV",
    ac3: ""
  }, {
    display: "Short Circuit Calculation",
    id: 59,
    descp: "This tool is used to find Source Impedence andTotal impedence at time of short circuit.",
    q1: "I",
    qc1: "",
    q2: "kVA",
    qc2: "mm",
    q3: "Zt",
    qc3: "",
    a1: "Source Impedence Zu",
    ac1: "",
    a2: "Total impedence Z",
    ac2: ""
  }, {
    display: "Transformer Fault Current",
    id: 60,
    descp: "This tool calculates the loop impedance at the end ofa circuit fed from the secondary winding of a transformer. When calculating Fault Loop Impedance Select the Correct Transformer Type Above. Three Phase Transformers Divide the Values for Vs secondary Voltage by √3 and the VA by 3.",
    q1: "V",
    qc1: "",
    q2: "Z% ",
    qc2: "%",
    q3: "I",
    qc3: "",
    a1: "Maximum Fault Current",
    ac1: "A",
    a2: "Impedence Voltage",
    ac2: ""
  }, {
    display: "DOL & Star Delta Starter",
    id: 61,
    descp: "DOL means the motor is connected Directly ON Line using one contactor with no starting circuit to lower the high starting current. Typically the Delta part of Star-Delta. Star-Delta uses two contactors, one to start at a lower voltage in Star and one to run at a higher voltage in Delta configuration.",
    q1: "System Voltage",
    qc1: "V",
    q2: "Phase",
    qc2: "",
    q3: "Motor Size",
    qc3: "HP",
    q4: "Motor rpm",
    qc4: "",
    q5: "Power Factor",
    qc5: "",
    a1: "Motor Rated Torque (Full Load)",
    ac1: "lb-ft",
    a2: "Motor Starting Torque",
    ac2: "mmH20",
    a3: "Lock Rotor Current IL(Min)",
    ac3: "",
    a4: "Lock Rotor Current IL(Max)",
    ac4: "",
    a5: "Motor Full load current (Live)",
    ac5: ""
  }, {
    display: "Time Period",
    id: 22,
    descp: "",
    q1: "Frequency",
    qc1: "Hz",
    a1: "Time Period",
    ac1: "ms"
  }, {
    display: "Frequency",
    id: 33,
    descp: "",
    q1: "Time Period",
    qc1: "ms",
    a1: "Frequency",
    ac1: "Hz"
  }, //MECHANICAL
  {
    display: "Belt",
    id: 80,
    descp: "",
    q1: "",
    qc1: "",
    q2: "",
    qc2: "",
    q3: "",
    qc3: "",
    a1: "",
    ac1: ""
  }, {
    display: "Belt",
    id: 80,
    descp: "",
    q1: "",
    qc1: "",
    a1: "",
    ac1: ""
  }, {
    display: "Belt length",
    id: 80,
    descp: "",
    q1: "Diameter of Large Pulley",
    qc1: "m",
    q2: "Diameter of Small pulley",
    q3: "Pulley Centre distance",
    qc3: "m",
    a1: "Belt Length",
    ac1: "m"
  }, {
    display: "Gear Pump Displacement",
    id: 81,
    descp: "",
    q1: "Gear width",
    qc1: "cm",
    q2: "Gear tip diameter",
    qc2: "cm",
    q3: "Gear centres (when meshed)",
    qc3: "cm",
    a1: "Displacement",
    ac1: "cm^3/rev"
  }, {
    display: "Stroke's Law",
    id: 82,
    descp: "",
    q1: "Acceleration of gravity",
    qc1: "m/s^2",
    q2: "Diameter of a particle",
    qc2: "m",
    q3: "Density of particle",
    qc3: "gm/m^3",
    q4: "Density of Medium",
    qc4: "gm/m^3",
    q5: "Viscoscity of Medium",
    qc5: "gm/ms",
    a1: "Terminal Velocity",
    ac1: "m/s"
  }, {
    display: "Flow Velocity",
    id: 83,
    descp: "",
    q1: "Cauchy Number",
    qc1: "N/m^2",
    q2: "Bulk Modulus Elasticity",
    qc2: "N/m^2",
    q3: "Density",
    qc3: "kg/m^3",
    a1: "Flow Velocity",
    ac1: "m/s"
  }, {
    display: "Hooke's Law (Force)",
    id: 84,
    descp: "",
    q1: "Spring Constant",
    qc1: "N/m",
    q2: "Distance from Equillibrium",
    qc2: "m",
    q3: "Spring Equillibrium Position",
    qc3: "m",
    a1: "Force",
    ac1: "N"
  }, {
    display: "Hooke's Law (Spring constant)",
    id: 85,
    descp: "",
    q1: "Force",
    qc1: "N",
    q2: "Distance",
    qc2: "m",
    q3: "Spring Equillibrium Position",
    qc3: "m",
    a1: "Spring Constant",
    ac1: "N/m"
  }, {
    display: "Strain",
    id: 86,
    descp: "",
    q1: "Change in Length",
    qc1: "m",
    q2: "Original Length",
    qc2: "m",
    a1: "Strain",
    ac1: ""
  }, {
    display: "K Value & Pipe Length",
    id: 87,
    descp: "",
    q1: "Turbulent Friction Factor",
    qc1: "",
    q2: "Length",
    qc2: "m",
    q3: "Pipe Diameter",
    qc3: "mm",
    a1: "K Value",
    ac1: ""
  }, {
    display: "Young's modulus",
    id: 88,
    descp: "",
    q1: "Stress",
    qc1: "N/m^2",
    q2: "Strain",
    qc2: "",
    a1: "Young's Modulus",
    ac1: "N/m^2"
  }, {
    display: "Weber Number",
    id: 89,
    descp: "",
    q1: "Density",
    qc1: "kg/m^3",
    q2: "Velocity",
    qc2: "m/s",
    q3: "Length",
    qc3: "m",
    q4: "Surface Tension",
    qc4: "N/m",
    a1: "Weber Number",
    ac1: ""
  }, {
    display: "Chezy Coefficient",
    id: 90,
    descp: "",
    q1: "Mean Velocity",
    qc1: "m/s",
    q2: "Hydraulic radius",
    qc2: "m",
    q3: "Slope",
    qc3: "",
    a1: "Chezy Coefficient",
    ac1: ""
  }, {
    display: "Cauchy Number",
    id: 91,
    descp: "",
    q1: "Flow Velocity",
    qc1: "m/s",
    q2: "Density",
    qc2: "kg/m^3",
    q3: "Bulk Modulus Elasticity",
    qc3: "N/m^2",
    a1: "Cauchy Number",
    ac1: ""
  }, {
    display: "Bulk Modulus Elasticity",
    id: 92,
    descp: "",
    q1: "Flow Velocity",
    qc1: "m/s",
    q2: "Density",
    qc2: "kg/m^3",
    q3: "Cauchy Number",
    qc3: "",
    a1: "Bulk Modulus Elasticity",
    ac1: "N/m^2"
  }];
  const details = [{
    id: 13,
    a1: "T(t)",
    ad1: "Temperature Value",
    a2: "R(0)",
    ad2: "Initial Resistance Value",
    a3: "C",
    ad3: "Temperature Co-efficient Value",
    a4: "T(0)",
    ad4: "Initial Temperature Value"
  }, {
    id: 15,
    a1: "R(t)",
    ad1: "Current Resistance Value",
    a2: "R(O)",
    ad2: "Initial Resistance Value",
    a3: "C",
    ad3: "Temperature Co-efficient Value",
    a4: "Temp",
    ad4: "Initial Temperature Value"
  }, {
    id: 49,
    a1: "d3",
    ad1: "Sp. Gr. vapour",
    a2: "d2",
    ad2: "Sp.Gr. sealing oil",
    a3: "d1",
    ad3: "Sp. Gr.Tank Liquid",
    a4: "C",
    ad4: "Flange C to C"
  }, {
    id: 50,
    a1: "d2",
    ad1: "Sp. Gr. Sealing Oil",
    a2: "d1",
    ad2: "Sp. Gr. Tank Oil"
  }, {
    id: 51,
    a1: "d2",
    ad1: "Sp. Gr. Sealing Oil",
    a2: "d1",
    ad2: "Sp. Gr. Tank Oil"
  }, {
    id: 52,
    a1: "d1",
    ad1: "Sp. Gr. Tank Liquid"
  }, {
    id: 53,
    a1: "du",
    ad1: "Sp.Gravity Upper Tank",
    a2: "dl",
    ad2: "Sp.Gravity Lower Tank"
  }, {
    id: 55,
    a1: "d1",
    ad1: "Sp.Gr. Tank Liquid",
    a2: "d0",
    ad2: "Sp. Gr. Tank Leg h2"
  }, {
    id: 54,
    a1: "d2",
    ad1: "Specific Gravity of wet leg",
    a2: "du",
    ad2: "Specific Gravity of Upper Tank",
    a3: "dl",
    ad3: "Specific Gravity of Lower Tank",
    a4: "d0",
    ad4: "Specific Gravity of tank leg h2"
  }, {
    id: 56,
    a1: "d2",
    ad1: "Specific Gravity of wet leg",
    a2: "du",
    ad2: "Specific Gravity of Upper Tank",
    a3: "dl",
    ad3: "Specific Gravity of Lower Tank",
    a4: "d0",
    ad4: "Specific Gravity of tank leg h2"
  }, {
    id: 57,
    a1: "d3",
    ad1: "Specific Gravity of Vapour",
    a2: "d2",
    ad2: "Specific Gravity of Purge",
    a3: "d1",
    ad3: "Specific Gravity of Tank liquid"
  }, {
    id: 58,
    a1: "d3",
    ad1: "Specific Gravity Vapour",
    a2: "d2",
    ad2: "Specific Gravity wet leg",
    a3: "d1",
    ad3: "Specific Gravity Tank Liquid",
    a4: "d0",
    ad4: "Specific Gravity Tank leg h2"
  }];
  const [answer1, setAnswer1] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [answer2, setAnswer2] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [answer3, setAnswer3] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [answer4, setAnswer4] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [answer5, setAnswer5] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [q1, setQ1] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [q2, setQ2] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [q3, setQ3] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [q4, setQ4] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [q5, setQ5] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [q6, setQ6] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [q7, setQ7] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [q8, setQ8] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();
  const [q9, setQ9] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState();

  const calculate = (q1, q2, q3, q4, q5, q6, q7, q8, q9) => {
    if (function_id === 19 || function_id === 69 || function_id === 20 || function_id === 28 || function_id === 34) setAnswer1(q1 / q2);else if (function_id === 27) {
      setAnswer1(q1 * q2 / (q4 + q2 + q3));
      setAnswer2(q1 * q3 / (q4 + q2 + q3));
      setAnswer3(q1 * q4 / (q4 + q2 + q3));
    } else if (function_id === 23 || function_id === 31 || function_id === 35) setAnswer1(q1 * q2);else if (function_id === 24) setAnswer1(1 / (1 / q1 + 1 / q2));else if (function_id === 26) setAnswer1(1 / (6.28 * Math.sqrt(q1 * q2)));else if (function_id === 32) setAnswer1(q1 * q1 * q2);else if (function_id === 33) setAnswer1(q1 * q1 / q2);else if (function_id === 46 || function_id === 48) setAnswer1(q1 * q2 / 5252);else if (function_id === 47) setAnswer1(q1 * 5252 / q2);else if (function_id === 41) setAnswer1(q1 * 33000 / q2);else if (function_id === 22) setAnswer1(q1 / q2);
    if (function_id === 21) setAnswer1(q1 * q1 * q3 * q3 / (18 * q1 + 40 * q2));else if (function_id === 25) setAnswer1(Math.sqrt(q1 * q2 * q3));else if (function_id === 29) setAnswer1(q3 * q1 / q2);else if (function_id === 42) setAnswer1(q3 / (1.732 * q1 * q2));else if (function_id === 43) setAnswer1(q3 / (3 * q1 * q2));else if (function_id === 44) setAnswer1(q3 / (q1 * q2));else if (function_id === 67) setAnswer1(q1 * q2 * q3 / 746);
    if (function_id === 17) setAnswer1(Math.sqrt(q1) * 10);else if (function_id === 16 || function_id === 14) setAnswer1(Math.sqrt((q1 - 4) / 16) * 16 + 4);else if (function_id === 65) setAnswer1(q1 * 8.8507);else if (function_id === 66) setAnswer1(q1 / 8.8507);
    if (function_id === 13) setAnswer1(q2 * (1 + q4 / q1 - q3));else if (function_id === 15) setAnswer1((q1 / q2 - 1) / q4 + q3);else if (function_id === 49) {
      setAnswer1(q2 * (q5 - q3) - q6 * (q4 - q3));
      setAnswer2((q2 + q1) * (q5 - q3) - q6 * (q4 - q3));
      setAnswer3((q2 + q1) * (q5 - q3) - q6 * (q4 - q3) - (q2 * (q5 - q3) - q6 * (q4 - q3)));
    } else if (function_id === 50) {
      setAnswer1(q3 * q5 - q1 * q4);
      setAnswer2((q2 + q3) * q5 - q1 * q4);
      setAnswer3((q2 + q3) * q5 - q1 * q4 - (q3 * q5 - q1 * q4));
    } else if (function_id === 51) {
      setAnswer1(q3 * q5 + q1 * q4);
      setAnswer2((q2 + q3) * q5 + q1 * q4);
      setAnswer3((q2 + q3) * q5 + q1 * q4 - (q3 * q5 + q1 * q4));
    } else if (function_id === 52) {
      setAnswer1(q2 * q3);
      setAnswer2((q1 + q2) * q3);
      setAnswer3((q1 + q2) * q3 - q2 * q3);
    } else if (function_id === 53) {
      setAnswer1(q1 * q2);
      setAnswer2(q1 * q3);
      setAnswer3(q1 * q3 - q1 * q2);
      console.log("Q1 Q2 Q3", q1, q2, q3);
    } else if (function_id === 54) {
      setAnswer1(q3 * q7 + (q1 + q2) * q6 - q8 * q5);
      setAnswer2((q2 + q3) * q7 + q1 * q6 - q8 * q5);
      setAnswer3((q2 + q3) * q7 + q1 * q6 - q8 * q5 - (q3 * q7 + (q1 + q2) * q6 - q8 * q5));
    } else if (function_id === 55) {
      setAnswer1(q1 * q5 + q3 * q4);
      setAnswer2(q2 * q5 + q1 * q5 + q3 * q4);
      setAnswer3(q2 * q5 + q1 * q5 + q3 * q4 - (q1 * q5 + q3 * q4));
    } else if (function_id === 56) {
      setAnswer1(q3 * q7 + q5 * q9 + (q1 + q4) * q8 - q2 * q6);
      setAnswer2(q3 * q7 + q9 * (q5 + q4) + q1 * q8 - q2 * q6);
      setAnswer3(q3 * q7 + q9 * (q5 + q4) + q1 * q8 - q2 * q6 - (q3 * q7 + q5 * q9 + (q1 + q4) * q8 - q2 * q6));
    } else if (function_id === 57) {
      setAnswer1(-(q1 - q2) * (q6 - q5) + q4 * (q7 - q5));
      setAnswer2(-(q1 - q2) * (q6 - q5) + q4 * (q7 - q5) + q3 * (q7 - q5));
      setAnswer3(-(q1 - q2) * (q6 - q5) + q4 * (q7 - q5) + q3 * (q7 - q5) - (-(q1 - q2) * (q6 - q5) + q4 * (q7 - q5)));
    } else if (function_id === 58) {
      setAnswer1(q2 * (q8 - q5) + q4 * (q7 - q5) - q1 * (q6 - q5));
      setAnswer2(q2 * (q8 - q5) + (q3 + q4) * (q7 - q5) - q5 * (q6 - q5));
      setAnswer3(q2 * (q8 - q5) + (q3 + q4) * (q7 - q5) - q5 * (q6 - q5) - (q2 * (q8 - q5) + q4 * (q7 - q5) - q1 * (q6 - q5)));
    } else if (function_id === 62) {
      setAnswer1(3.14 * q2 * q2 * 0.000001 / 4);
      setAnswer2(q2 / q1);
      setAnswer3(q5 * 3.14 * q2 * q2 * 0.000001 / 4 * Math.sqrt(2 * q3 * 1000 / q4 * (1 - Math.pow(q2 / q1, 4))));
    } else if (function_id === 63) {
      setAnswer1((q6 * q3 + q4 * q5) * 27.68 / 144);
      setAnswer2((-q4 * q5 + q2 * q6) * 27.68 / 144);
      setAnswer3((-q4 * q5 + q2 * q6) * 27.68 / 144 - (q6 * q3 + q4 * q5) * 27.68 / 144);
    } else if (function_id === 64) {
      setAnswer1(q1 / Math.sqrt(q2));
      setAnswer2(Math.pow(q4 / (q1 / Math.sqrt(q2)), 2));
      setAnswer3(Math.pow(q4 / (q1 / Math.sqrt(q2)), 2) + q3);
      setAnswer4(Math.pow(q4 / (q1 / Math.sqrt(q2)), 2) + q3 - q4);
      setAnswer5((Math.pow(q4 / (q1 / Math.sqrt(q2)), 2) + q3 - q4) / q4);
    } else if (function_id === 33 || function_id === 22) setAnswer1(1000 / q1);else if (function_id === 59) {
      setAnswer1(q2 / q1);
      setAnswer2(q2 / q1 + q3);
    } else if (function_id === 60) {
      setAnswer1(q1 * q2 / 100);
      setAnswer2(q3 * 10000 / (q1 * q2));
    } else if (function_id === 61) {
      setAnswer1(5252 * q3 / q4);

      if (0.746 * q3 < 30) {
        setAnswer2(3 * 5252 * q3 / q4);
      } else {
        setAnswer2(2 * 5252 * q3 / q4);
      }

      if (q2 === 1) {
        setAnswer3(1000 * q3 / q1);
      } else {
        setAnswer3(1000 * q3 / (1.732 * q1));
      }

      if (q2 === 1) {
        setAnswer4(1000 * q3 * 3.14 / q1);
      } else {
        setAnswer4(1000 * q3 * 3.14 / (1.732 * q1));
      }

      if (q2 === 1) {
        setAnswer5(1000 * q3 * 0.746 / (q5 * q1));
      } else {
        setAnswer5(1000 * q3 * 0.746 / (q5 * 1.732 * q1));
      }
    } else if (function_id === 80) setAnswer1((q1 + q2) * 1.57 + (q1 - q2) * Math.asin((q1 - q2) / (2 * q3)) + 2 * Math.sqrt(q3 * q3 - 0.25 * (q1 - q2) * (q1 - q2)));else if (function_id === 81) setAnswer1(3.14 * q1 * (q2 * q2 - q3 * q3) / 2);else if (function_id === 82) setAnswer1(q1 * q2 * q2 * (q3 - q4) / (18 * q5));else if (function_id === 83) setAnswer1(-q1 * (q2 - q3));else if (function_id === 84 || function_id === 85) setAnswer1(-q1 * (q2 - q3));else if (function_id === 86 || function_id === 88) setAnswer1(q1 / q2);else if (function_id === 87) setAnswer1(q1 * 1000 * q2 / q3);else if (function_id === 89) setAnswer1(q1 * q2 * q2 * q3 / q4);else if (function_id === 90) setAnswer1(q1 / Math.sqrt(q2 * q3));else if (function_id === 91 || function_id === 92) setAnswer1(q2 * q1 * q1 / q3);else if (function_id === 83) setAnswer1(Math.sqrt(q1 * q2 / q3)); //add history

    console.log("answers", answer1, answer2, answer3);

    if (function_id === 53) {
      setAnswer1(q1 * q2);
      setAnswer2(q1 * q3);
      setAnswer3(q1 * q3 - q1 * q2);
      console.log("Q1 Q2 Q3", q1, q2, q3);
    }

    console.log("calculate", q1 * q3, typeof (q1 * q3)); //add history
  };

  const value = [{
    a: 'q1',
    b: 'qc1',
    c: function (item) {
      setQ1(item.target.value);
    }
  }, {
    a: 'q2',
    b: 'qc2',
    c: function (item) {
      setQ2(item.target.value);
    }
  }, {
    a: 'q3',
    b: 'qc3',
    c: function (item) {
      setQ3(item.target.value);
    }
  }, {
    a: 'q4',
    b: 'qc4',
    c: function (item) {
      setQ4(item.target.value);
    }
  }, {
    a: 'q5',
    b: 'qc5',
    c: function (item) {
      setQ5(item.target.value);
    }
  }, {
    a: 'q6',
    b: 'qc6',
    c: function (item) {
      setQ6(item.target.value);
    }
  }, {
    a: 'q7',
    b: 'qc7',
    c: function (item) {
      setQ7(item.target.value);
    }
  }, {
    a: 'q8',
    b: 'qc8',
    c: function (item) {
      setQ8(item.target.value);
    }
  }, {
    a: 'q9',
    b: 'qc9',
    c: function (item) {
      setQ9(item.target.value);
    }
  }];
  const answer = [{
    a: 'a1',
    b: 'ac1',
    c: answer1
  }, {
    a: 'a2',
    b: 'ac2',
    c: answer2
  }, {
    a: 'a3',
    b: 'ac3',
    c: answer3
  }, {
    a: 'a4',
    b: 'ac4',
    c: answer4
  }, {
    a: 'a5',
    b: 'ac5',
    c: answer5
  }];
  const detail = [{
    a: 'a1',
    b: 'ad1'
  }, {
    a: 'a2',
    b: 'ad2'
  }, {
    a: 'a3',
    b: 'ad3'
  }, {
    a: 'a4',
    b: 'ad4'
  }, {
    a: 'a5',
    b: 'ad5'
  }, {
    a: 'a6',
    b: 'ad6'
  }];
  return __jsx("div", null, id !== undefined && __jsx("div", {
    className: "toolbox"
  }, __jsx("div", {
    className: "toolbox-heading"
  }, electricalList[electricalList.findIndex(list => list.id === id)].display), __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    className: "toolbox-calc"
  }, __jsx("div", {
    className: "heading"
  }, "Calculation"), value.map(item => electricalList[electricalList.findIndex(list => list.id === id)][item.b] !== undefined && __jsx("div", {
    className: "toolbox-calc"
  }, __jsx("div", {
    style: {
      display: "flex"
    }
  }, __jsx("div", {
    style: {
      flex: 2
    }
  }, electricalList[electricalList.findIndex(item => item.id === id)][item.a]), __jsx("div", {
    style: {
      flex: 1
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    placeholder: "input",
    className: "input box",
    type: "number",
    onChange: e => {
      item.c(e);
      console.log("input", e.target.value);
    }
  })), __jsx("div", {
    style: {
      flex: 1
    }
  }, electricalList[electricalList.findIndex(item => item.id === id)][item.b] || ""))))), electricalList[electricalList.findIndex(item => item.id === id)].img !== undefined && //<Image src="/assets/11LT.png"/>
  __jsx("div", null, __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    className: "toolbox-calc"
  }, __jsx("div", {
    className: "heading"
  }, "FIGURE"), __jsx(antd_lib_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      marginTop: "60px",
      width: "90%"
    },
    src: `/assets/${electricalList[electricalList.findIndex(item => item.id === id)].img}`
  }))), details.findIndex(list => list.id === id) !== -1 && __jsx("div", null, __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    className: "toolbox-calc"
  }, __jsx("div", {
    className: "heading"
  }, "DETAILS"), detail.map(item => details[details.findIndex(list => list.id === id)][item.a] !== undefined && __jsx("div", {
    style: {
      display: "flex",
      marginTop: "5px"
    },
    key: item.id
  }, __jsx("div", {
    style: {
      flex: 1
    }
  }, details[details.findIndex(item => item.id === id)][item.a]), __jsx("div", {
    style: {
      flex: 1
    }
  }, details[details.findIndex(item => item.id === id)][item.b]))))), __jsx("div", {
    class: "toolbox-desc"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "calculate-button",
    onClick: () => calculate(q1, q2, q3, q4, q5, q6, q7, q8, q9)
  }, "CALCULATE")), answer1 !== undefined && __jsx("div", null, __jsx("hr", {
    className: "hr"
  }), __jsx("div", {
    class: "toolbox-calc"
  }, __jsx("div", {
    className: "heading"
  }, "RESULT"), answer.map(item => electricalList[electricalList.findIndex(list => list.id === id)][item.a] !== undefined && __jsx("div", {
    style: {
      display: "flex"
    },
    key: item.id
  }, __jsx("div", {
    style: {
      flex: 2
    }
  }, " ", electricalList[electricalList.findIndex(item => item.id === id)][item.a]), __jsx("div", {
    style: {
      flex: 1
    }
  }, " ", item.c), __jsx("div", {
    style: {
      flex: 1
    }
  }, electricalList[electricalList.findIndex(item => item.id === id)][item.b])))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Functions);

/***/ }),

/***/ "ppZR":
/***/ (function(module, exports) {



/***/ }),

/***/ "tCGa":
/***/ (function(module, exports) {



/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

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

/***/ "zXOc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
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


function Navbar({
  showDrawer
}) {
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navbar"
  }, __jsx("div", null, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      background: "#F73406"
    },
    className: "menu"
  }, __jsx("i", {
    onClick: () => showDrawer(),
    className: "material-icons menu-icon"
  }, "dehaze"), __jsx("h2", {
    className: "h2-nav"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/"
  }, __jsx("a", null, "gudofConvert"))))));
}

/***/ }),

/***/ "zkM6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ })

/******/ });