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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("orri");


/***/ }),

/***/ "orri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }
const tools = [{
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
  display: "Linear % to Square Root %",
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
}];
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  res.statusCode = 200;
  res.json(tools);
});

/***/ })

/******/ });