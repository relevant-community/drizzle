(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("deepmerge"), require("eth-block-tracker-es5"), require("is-plain-object"), require("redux"), require("redux-saga"), require("web3"));
	else if(typeof define === 'function' && define.amd)
		define(["deepmerge", "eth-block-tracker-es5", "is-plain-object", "redux", "redux-saga", "web3"], factory);
	else if(typeof exports === 'object')
		exports["drizzle"] = factory(require("deepmerge"), require("eth-block-tracker-es5"), require("is-plain-object"), require("redux"), require("redux-saga"), require("web3"));
	else
		root["drizzle"] = factory(root["deepmerge"], root["eth-block-tracker-es5"], root["is-plain-object"], root["redux"], root["redux-saga"], root["web3"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_deepmerge__, __WEBPACK_EXTERNAL_MODULE_eth_block_tracker__, __WEBPACK_EXTERNAL_MODULE_is_plain_object__, __WEBPACK_EXTERNAL_MODULE_redux__, __WEBPACK_EXTERNAL_MODULE_redux_saga__, __WEBPACK_EXTERNAL_MODULE_web3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/redux-saga/es/effects.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-saga/es/effects.js ***!
  \***********************************************/
/*! exports provided: take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["takem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["put"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["race"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["cps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["fork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["spawn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["cancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["actionChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["cancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["takeEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["takeLatest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["throttle"]; });



/***/ }),

/***/ "./node_modules/redux-saga/es/internal/buffers.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/buffers.js ***!
  \********************************************************/
/*! exports provided: BUFFER_OVERFLOW, buffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_OVERFLOW", function() { return BUFFER_OVERFLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return buffers; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");


var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: _utils__WEBPACK_IMPORTED_MODULE_0__["kTrue"], put: _utils__WEBPACK_IMPORTED_MODULE_0__["noop"], take: _utils__WEBPACK_IMPORTED_MODULE_0__["noop"] };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take,
    flush: flush
  };
}

var buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/channel.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/channel.js ***!
  \********************************************************/
/*! exports provided: END, isEnd, emitter, INVALID_BUFFER, UNDEFINED_INPUT_ERROR, channel, eventChannel, stdChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitter", function() { return emitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_BUFFER", function() { return INVALID_BUFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDEFINED_INPUT_ERROR", function() { return UNDEFINED_INPUT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return stdChannel; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler */ "./node_modules/redux-saga/es/internal/scheduler.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = { type: CHANNEL_END_TYPE };
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (true) {
  UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers__WEBPACK_IMPORTED_MODULE_1__["buffers"].fixed();

  var closed = false;
  var takers = [];

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_utils__WEBPACK_IMPORTED_MODULE_0__["internalErr"])('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw Object(_utils__WEBPACK_IMPORTED_MODULE_0__["internalErr"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(input, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[_utils__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] || cb[_utils__WEBPACK_IMPORTED_MODULE_0__["MATCH"]](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(cb, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(cb, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, "channel.flush' callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers__WEBPACK_IMPORTED_MODULE_1__["buffers"].none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(matcher, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);
  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }
      chan.close();
    }
  };
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });
  if (chan.__closed__) {
    unsubscribe();
  }

  if (!_utils__WEBPACK_IMPORTED_MODULE_0__["is"].func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[_utils__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]) {
        cb(input);
        return;
      }
      Object(_scheduler__WEBPACK_IMPORTED_MODULE_2__["asap"])(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(matcher, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, "channel.take's matcher argument must be a function");
        cb[_utils__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] = matcher;
      }
      chan.take(cb);
    }
  });
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/io.js":
/*!***************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/io.js ***!
  \***************************************************/
/*! exports provided: take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle, asEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return takem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asEffect", function() { return asEffect; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _sagaHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sagaHelpers */ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js");



var IO = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sym"])('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(arguments[0], _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["is"].pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["is"].channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(take.maybe, /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__["updateIncentive"])('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'put(channel, action): argument channel is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(action, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'put(channel, action): argument action is undefined');
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return effect(PUT, { channel: channel, action: action });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(put.resolve, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["updateIncentive"])('put.sync', 'put.resolve'));

function all(effects) {
  return effect(ALL, effects);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(fn, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["is"].array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }
  if (context && _utils__WEBPACK_IMPORTED_MODULE_0__["is"].string(fn) && _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func(context[fn])) {
    fn = context[fn];
  }
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(fn, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  var eff = fork.apply(undefined, [fn].concat(args));
  eff[FORK].detached = true;
  return eff;
}

function join() {
  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return join(t);
    }));
  }
  var task = tasks[0];
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'join(task): argument task is undefined');
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  return effect(JOIN, task);
}

function cancel() {
  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return cancel(t);
    }));
  }
  var task = tasks[0];
  if (tasks.length === 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'cancel(task): argument task is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }
  return effect(CANCEL, task || _utils__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"]);
}

function select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = _utils__WEBPACK_IMPORTED_MODULE_0__["ident"];
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(selector, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'select(selector,[...]): argument selector is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(selector, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(pattern, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function getContext(prop) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(prop, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].string, 'getContext(prop): argument ' + prop + ' is not a string');
  return effect(GET_CONTEXT, prop);
}

function setContext(props) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(props, _utils__WEBPACK_IMPORTED_MODULE_0__["is"].object, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createSetContextWarning"])(null, props));
  return effect(SET_CONTEXT, props);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    args[_key8 - 2] = arguments[_key8];
  }

  return fork.apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__["takeEveryHelper"], patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    args[_key9 - 2] = arguments[_key9];
  }

  return fork.apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__["takeLatestHelper"], patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
    args[_key10 - 3] = arguments[_key10];
  }

  return fork.apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__["throttleHelper"], ms, pattern, worker].concat(args));
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = {
  take: createAsEffectType(TAKE),
  put: createAsEffectType(PUT),
  all: createAsEffectType(ALL),
  race: createAsEffectType(RACE),
  call: createAsEffectType(CALL),
  cps: createAsEffectType(CPS),
  fork: createAsEffectType(FORK),
  join: createAsEffectType(JOIN),
  cancel: createAsEffectType(CANCEL),
  select: createAsEffectType(SELECT),
  actionChannel: createAsEffectType(ACTION_CHANNEL),
  cancelled: createAsEffectType(CANCELLED),
  flush: createAsEffectType(FLUSH),
  getContext: createAsEffectType(GET_CONTEXT),
  setContext: createAsEffectType(SET_CONTEXT)
};

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js ***!
  \************************************************************************/
/*! exports provided: qEnd, safeName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qEnd", function() { return qEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeName", function() { return safeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fsmIterator; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");


var done = { done: true, value: undefined };
var qEnd = {};

function safeName(patternOrChannel) {
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["is"].channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["makeIterator"])(next, function (error) {
    return next(null, error);
  }, name, true);
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/index.js ***!
  \******************************************************************/
/*! exports provided: takeEvery, takeLatest, throttle, takeEveryHelper, takeLatestHelper, throttleHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _takeEvery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./takeEvery */ "./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEveryHelper", function() { return _takeEvery__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _takeLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./takeLatest */ "./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatestHelper", function() { return _takeLatest__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ "./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttleHelper", function() { return _throttle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");






var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var takeEvery = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(_takeEvery__WEBPACK_IMPORTED_MODULE_0__["default"], /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(_takeLatest__WEBPACK_IMPORTED_MODULE_1__["default"], /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(_throttle__WEBPACK_IMPORTED_MODULE_2__["default"], /*#__PURE__*/deprecationWarning('throttle'));



/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js":
/*!**********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return takeEvery; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");




function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["take"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__["fork"].apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["default"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__["END"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["qEnd"]] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["safeName"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return takeLatest; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");




function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["take"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__["fork"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["cancel"])(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["default"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__["END"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["qEnd"]] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["safeName"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");






function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["actionChannel"])(pattern, _buffers__WEBPACK_IMPORTED_MODULE_3__["buffers"].sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["take"])(channel) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__["fork"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils__WEBPACK_IMPORTED_MODULE_4__["delay"], delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["default"])({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__["END"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["qEnd"]] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__["safeName"])(pattern) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/scheduler.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/scheduler.js ***!
  \**********************************************************/
/*! exports provided: asap, suspend, flush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suspend", function() { return suspend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Puts the scheduler in a `released` state.
**/
function release() {
  semaphore--;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function flush() {
  release();

  var task = void 0;
  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/utils.js ***!
  \******************************************************/
/*! exports provided: sym, TASK, HELPER, MATCH, CANCEL, SAGA_ACTION, SELF_CANCELLATION, konst, kTrue, kFalse, noop, ident, check, hasOwn, is, object, remove, array, deferred, arrayOfDeffered, delay, createMockTask, autoInc, uid, makeIterator, log, deprecate, updateIncentive, internalErr, createSetContextWarning, wrapSagaDispatch, cloneableGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sym", function() { return sym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELPER", function() { return HELPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "konst", function() { return konst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kTrue", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFalse", function() { return kFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ident", function() { return ident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferred", function() { return deferred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfDeffered", function() { return arrayOfDeffered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMockTask", function() { return createMockTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoInc", function() { return autoInc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeIterator", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIncentive", function() { return updateIncentive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalErr", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSetContextWarning", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapSagaDispatch", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneableGenerator", function() { return cloneableGenerator; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = sym('TASK');
var HELPER = sym('HELPER');
var MATCH = sym('MATCH');
var CANCEL = sym('CANCEL_PROMISE');
var SAGA_ACTION = sym('SAGA_ACTION');
var SELF_CANCELLATION = sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = konst(true);
var kFalse = konst(false);
var noop = function noop() {};
var ident = function ident(v) {
  return v;
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

var object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

var array = {
  from: function from(obj) {
    var arr = Array(obj.length);
    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }
    return arr;
  }
};

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (true) log('warn', deprecationWarning);
    return fn.apply(undefined, arguments);
  };
}

var updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(undefined, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Drizzle.js":
/*!************************!*\
  !*** ./src/Drizzle.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load as promise so that async Drizzle initialization can still resolve
var windowPromise = new _promise2.default(function (resolve, reject) {
  if (!process.env.BROWSER) resolve();
  window.addEventListener('load', resolve);
  // resolve in any case if we missed the load event and the document is already loaded
  if (document.readyState === 'complete') resolve();
});

var Drizzle = function () {
  function Drizzle(options, store) {
    var _this = this;

    (0, _classCallCheck3.default)(this, Drizzle);

    // Variables
    this.contracts = {};
    this.contractList = [];
    this.options = options;
    this.store = store;
    this.web3 = {};

    this.loadingContract = {};

    this.addContract = this.addContract.bind(this);
    // Wait for window load event in case of injected web3.
    windowPromise.then(function () {
      // Begin Drizzle initialization.
      store.dispatch({ type: 'DRIZZLE_INITIALIZING', drizzle: _this, options: options });
    });
  }

  (0, _createClass3.default)(Drizzle, [{
    key: 'addContract',
    value: function addContract(contractConfig, options) {
      options.name ? contractConfig.contractName = options.name : null;
      this.store.dispatch({ type: 'ADD_CONTRACT', drizzle: this, contractConfig: contractConfig, events: options.events, web3: this.web3, fallback: this.fallback, address: options.address });
    }
  }, {
    key: '_addContract',
    value: function _addContract(drizzleContract) {
      if (this.contracts[drizzleContract.contractName]) {
        throw 'Contract already exists: ' + drizzleContract.contractName;
      }
      this.contracts[drizzleContract.contractName] = drizzleContract;
      this.contractList.push(drizzleContract);
      return drizzleContract;
    }
  }, {
    key: 'findContractByAddress',
    value: function findContractByAddress(address) {
      return this.contractList.find(function (contract) {
        return contract.address.toLowerCase() === address.toLowerCase();
      });
    }
  }]);
  return Drizzle;
}();

exports.default = Drizzle;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/DrizzleContract.js":
/*!********************************!*\
  !*** ./src/DrizzleContract.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _deepmerge = __webpack_require__(/*! deepmerge */ "deepmerge");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrizzleContract = function () {
  function DrizzleContract(web3Contract, web3, name, store) {
    var events = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var contractArtifact = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var fallbackContract = arguments[6];
    (0, _classCallCheck3.default)(this, DrizzleContract);

    var contract = web3Contract || fallbackContract;

    this.abi = contract.options.jsonInterface;
    this.address = contract.options.address;
    this.web3 = web3;
    this.contractName = name;
    this.contractArtifact = contractArtifact;
    this.store = store;
    this.fallbackContract = fallbackContract || web3Contract;
    this.watchEvents = events;

    // Merge web3 contract instance into DrizzleContract instance.
    (0, _assign2.default)(this, contract);

    for (var i = 0; i < this.abi.length; i++) {
      var item = this.abi[i];

      if (item.type == "function" && item.constant === true) {
        this.methods[item.name].cacheCall = this.cacheCallFunction(item.name, i);
        this.methods[item.name].fromCache = this.fromCacheFunction(item.name, i);
      }

      if (item.type == "function" && item.constant === false) {
        this.methods[item.name].cacheSend = this.cacheSendFunction(item.name, i);
      }
    }
    this.syncEvents();
  }

  (0, _createClass3.default)(DrizzleContract, [{
    key: "syncEvents",
    value: function syncEvents(block) {
      console.log('sync events!');
      var events = this.watchEvents;
      // Register event listeners if any events.
      if (events.length > 0) {
        for (var i = 0; i < events.length; i++) {
          var event = events[i];

          if ((typeof event === "undefined" ? "undefined" : (0, _typeof3.default)(event)) === 'object') {
            this.store.dispatch({ type: 'LISTEN_FOR_EVENT', contract: this, eventName: event.eventName, eventOptions: event.eventOptions });
          } else {
            this.store.dispatch({ type: 'LISTEN_FOR_EVENT', contract: this, eventName: event });
          }
        }
      }
    }
  }, {
    key: "syncEvent",
    value: function syncEvent(block, event) {
      console.log('sync single event');
      // Register event listener for a given event.
      if ((typeof event === "undefined" ? "undefined" : (0, _typeof3.default)(event)) === 'object') {
        this.store.dispatch({ type: 'LISTEN_FOR_EVENT', contract: this, eventName: event.eventName, eventOptions: event.eventOptions });
      } else {
        this.store.dispatch({ type: 'LISTEN_FOR_EVENT', contract: this, eventName: event });
      }
    }
  }, {
    key: "fromCacheFunction",
    value: function fromCacheFunction(fnName, fnIndex, fn) {
      var contract = this;

      return function () {
        // Collect args and hash to use as key, 0x0 if no args
        var argsHash = '0x0';
        var args = arguments;

        if (args.length > 0) {
          argsHash = contract.generateArgsHash(args);
        }

        var contractName = contract.contractName;
        if (!contract.store.getState().contracts[contractName].state) return;
        var functionState = contract.store.getState().contracts[contractName].state[fnName];

        // If call result is in state return value instead of calling
        if (argsHash in functionState && functionState[argsHash].value) {
          return functionState[argsHash].value;
        }
      };
    }
  }, {
    key: "initContractState",
    value: function initContractState() {
      // Initial contract details
      var contractName = this.contractArtifact.contractName;

      // initialize contract state
      var initialState = {
        initialized: false,
        synced: false,
        state: {}

        // Constant getters
      };for (var i = 0; i < this.abi.length; i++) {
        var item = this.abi[i];

        if (item.type == "function" && item.constant === true) {
          initialState.state[item.name] = {};
        }
      }

      this.store.dispatch({ type: 'INIT_CONTRACT_STATE', contractName: contractName, initialState: initialState });
    }
  }, {
    key: "cacheCallFunction",
    value: function cacheCallFunction(fnName, fnIndex, fn) {
      var contract = this;

      return function () {
        // Collect args and hash to use as key, 0x0 if no args
        var argsHash = '0x0';
        var args = arguments;

        if (args.length > 0) {
          argsHash = contract.generateArgsHash(args);
        }

        var contractName = contract.contractName;
        if (!contract.store.getState().contracts[contractName].state) return;
        var functionState = contract.store.getState().contracts[contractName].state[fnName];

        // Otherwise, call function and update store
        contract.store.dispatch({ type: 'CALL_CONTRACT_FN', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash });

        // Return nothing because state is currently empty.
        return null;
      };
    }
  }, {
    key: "cacheSendFunction",
    value: function cacheSendFunction(fnName, fnIndex, fn) {
      // NOTE: May not need fn index
      var contract = this;

      return function () {
        var args = arguments;

        // Generate temporary ID
        var stackId = contract.store.getState().transactionStack.length;

        // Add ID to "transactionStack" with empty value
        contract.store.dispatch({ type: 'PUSH_TO_STACK' });

        // Dispatch tx to saga
        // When txhash received, will be value of stack ID
        contract.store.dispatch({ type: 'SEND_CONTRACT_TX', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, stackId: stackId });

        // return stack ID
        return stackId;
      };
    }
  }, {
    key: "generateArgsHash",
    value: function generateArgsHash(args) {
      var web3 = this.web3;
      var hashString = '';

      for (var i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'function') {
          var argToHash = args[i];

          // Stringify objects to allow hashing
          if ((typeof argToHash === "undefined" ? "undefined" : (0, _typeof3.default)(argToHash)) === 'object') {
            argToHash = (0, _stringify2.default)(argToHash);
          }

          // Convert number to strong to allow hashing
          if (typeof argToHash === 'number') {
            argToHash = argToHash.toString();
          }

          // This check is in place for web3 v0.x
          if ('utils' in web3) {
            var hashPiece = web3.utils.sha3(argToHash);
          } else {
            var hashPiece = web3.sha3(argToHash);
          }

          hashString += hashPiece;
        }
      }

      return web3.utils.sha3(hashString);
    }
  }]);
  return DrizzleContract;
}();

exports.default = DrizzleContract;

/***/ }),

/***/ "./src/accountBalances/accountBalancesReducer.js":
/*!*******************************************************!*\
  !*** ./src/accountBalances/accountBalancesReducer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var accountBalancesReducer = function accountBalancesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'ACCOUNT_BALANCE_FETCHED') {
    var newState = (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.account, action.accountBalance));
    // prevents from updating state and re-rendering components unnecessarily when balances are the same
    if ((0, _stringify2.default)(newState) === (0, _stringify2.default)(state)) {
      return state;
    }
    return newState;
  }

  return state;
};

exports.default = accountBalancesReducer;

/***/ }),

/***/ "./src/accountBalances/accountBalancesSaga.js":
/*!****************************************************!*\
  !*** ./src/accountBalances/accountBalancesSaga.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getAccountBalances = getAccountBalances;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getAccountBalances),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(accountBalancesSaga);

function getAccountBalances(action) {
  var accounts, web3, i, account, accountBalance;
  return _regenerator2.default.wrap(function getAccountBalances$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(getAccountsState);

        case 2:
          accounts = _context.sent;
          web3 = action.web3;


          if (!accounts) {
            console.error('No accounts found while attempting to fetch balances!');
          }

          _context.prev = 5;
          _context.t0 = _regenerator2.default.keys(accounts);

        case 7:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 17;
            break;
          }

          i = _context.t1.value;
          account = accounts[i];
          _context.next = 12;
          return (0, _effects.call)(web3.eth.getBalance, account);

        case 12:
          accountBalance = _context.sent;
          _context.next = 15;
          return (0, _effects.put)({ type: 'ACCOUNT_BALANCE_FETCHED', account: account, accountBalance: accountBalance });

        case 15:
          _context.next = 7;
          break;

        case 17:
          _context.next = 25;
          break;

        case 19:
          _context.prev = 19;
          _context.t2 = _context['catch'](5);
          _context.next = 23;
          return (0, _effects.put)({ type: 'ACCOUNT_BALANCE_FAILED', error: _context.t2 });

        case 23:
          console.error('Error fetching account ' + account + ' balance:');
          console.error(_context.t2);

        case 25:
          _context.next = 27;
          return (0, _effects.put)({ type: 'ACCOUNT_BALANCES_FETCHED' });

        case 27:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[5, 19]]);
}

var getAccountsState = function getAccountsState(state) {
  return state.accounts;
};

function accountBalancesSaga() {
  return _regenerator2.default.wrap(function accountBalancesSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)('ACCOUNT_BALANCES_FETCHING', getAccountBalances);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

exports.default = accountBalancesSaga;

/***/ }),

/***/ "./src/accounts/accountsReducer.js":
/*!*****************************************!*\
  !*** ./src/accounts/accountsReducer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

var accountsReducer = function accountsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'ACCOUNTS_FETCHING') {
    return state;
  }

  if (action.type === 'ACCOUNTS_FETCHED') {
    var needsUpdate = void 0;
    var acc = action.accounts || [];
    var intersect = acc.filter(function (x) {
      return state.includes(x);
    });
    if (intersect.length === acc.length) {
      return state;
    }
    return [].concat((0, _toConsumableArray3.default)(state), (0, _toConsumableArray3.default)(action.accounts));
  }

  return state;
};

exports.default = accountsReducer;

/***/ }),

/***/ "./src/accounts/accountsSaga.js":
/*!**************************************!*\
  !*** ./src/accounts/accountsSaga.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getAccounts = getAccounts;

var _reduxSaga = __webpack_require__(/*! redux-saga */ "redux-saga");

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _accountBalancesSaga = __webpack_require__(/*! ../accountBalances/accountBalancesSaga */ "./src/accountBalances/accountBalancesSaga.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getAccounts),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(createAccountsPollChannel),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(callCreateAccountsPollChannel),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(callGetBalances),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(callGetAccountBalance),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(accountsSaga);

/*
 * Fetch Accounts List
 */

function getAccounts(action) {
  var web3, accounts;
  return _regenerator2.default.wrap(function getAccounts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          web3 = action.web3;
          _context.prev = 1;

          if (web3) {
            _context.next = 4;
            break;
          }

          throw 'missing web3';

        case 4:
          _context.next = 6;
          return (0, _effects.call)(web3.eth.getAccounts);

        case 6:
          accounts = _context.sent;

          if (accounts) {
            _context.next = 9;
            break;
          }

          throw 'No accounts found!';

        case 9:
          _context.next = 11;
          return (0, _effects.put)({ type: 'ACCOUNTS_FETCHED', accounts: accounts });

        case 11:
          _context.next = 19;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context['catch'](1);
          _context.next = 17;
          return (0, _effects.put)({ type: 'ACCOUNTS_FAILED', error: _context.t0 });

        case 17:
          console.error('Error fetching accounts:');
          console.error(_context.t0);

        case 19:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[1, 13]]);
}

/*
 * Poll for Account Changes
 */

function createAccountsPollChannel(_ref) {
  var interval = _ref.interval,
      web3 = _ref.web3;
  return _regenerator2.default.wrap(function createAccountsPollChannel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt('return', (0, _reduxSaga.eventChannel)(function (emit) {
            var persistedWeb3 = web3;

            var accountsPoller = setInterval(function () {
              emit({ type: 'SYNCING_ACCOUNTS', persistedWeb3: persistedWeb3 });
            }, interval); // options.polls.accounts

            var unsubscribe = function unsubscribe() {
              clearInterval(accountsPoller);
            };

            return unsubscribe;
          }));

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function callCreateAccountsPollChannel(_ref2) {
  var interval = _ref2.interval,
      web3 = _ref2.web3;
  var accountsChannel, event;
  return _regenerator2.default.wrap(function callCreateAccountsPollChannel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.call)(createAccountsPollChannel, { interval: interval, web3: web3 });

        case 2:
          accountsChannel = _context3.sent;
          _context3.prev = 3;

        case 4:
          if (false) {}

          _context3.next = 7;
          return (0, _effects.take)(accountsChannel);

        case 7:
          event = _context3.sent;

          if (!(event.type === 'SYNCING_ACCOUNTS')) {
            _context3.next = 13;
            break;
          }

          _context3.next = 11;
          return (0, _effects.call)(getAccounts, { web3: event.persistedWeb3 });

        case 11:
          _context3.next = 13;
          return (0, _effects.call)(_accountBalancesSaga.getAccountBalances, { web3: event.persistedWeb3 });

        case 13:
          _context3.next = 15;
          return (0, _effects.put)(event);

        case 15:
          _context3.next = 4;
          break;

        case 17:
          _context3.prev = 17;

          accountsChannel.close();
          return _context3.finish(17);

        case 20:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[3,, 17, 20]]);
}

function callGetBalances(action) {
  var balances;
  return _regenerator2.default.wrap(function callGetBalances$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;

          if (!(!action.accounts || !action.accounts.length)) {
            _context4.next = 4;
            break;
          }

          console.error('No accounts');
          return _context4.abrupt('return');

        case 4:
          _context4.next = 6;
          return all(action.accounts.map(function (account) {
            return callGetAccountBalance((0, _extends3.default)({}, action, { account: account }));
          }));

        case 6:
          balances = _context4.sent;
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4['catch'](0);

          console.log(_context4.t0);

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 9]]);
}

function callGetAccountBalance(action) {
  var balance;
  return _regenerator2.default.wrap(function callGetAccountBalance$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _effects.call)(getBalance, action.account, action.web3);

        case 3:
          balance = _context5.sent;
          _context5.next = 6;
          return (0, _effects.put)({ type: 'ACCOUNT_BALANCE_FETCHED', balance: balance });

        case 6:
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5['catch'](0);

          console.log(_context5.t0);

        case 11:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[0, 8]]);
}

function accountsSaga() {
  return _regenerator2.default.wrap(function accountsSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeLatest)('ACCOUNTS_FETCHING', getAccounts);

        case 2:
          _context6.next = 4;
          return (0, _effects.takeLatest)('ACCOUNTS_POLLING', callCreateAccountsPollChannel);

        case 4:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

exports.default = accountsSaga;

/***/ }),

/***/ "./src/blocks/blocksSaga.js":
/*!**********************************!*\
  !*** ./src/blocks/blocksSaga.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = __webpack_require__(/*! redux-saga */ "redux-saga");

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(callCreateBlockChannel),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(callCreateBlockPollChannel),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(processBlockHeader),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(processBlock),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(blocksSaga);

var BlockTracker = __webpack_require__(/*! eth-block-tracker */ "eth-block-tracker");

/*
 * Listen for Blocks
 */

function createBlockChannel(_ref) {
  var drizzle = _ref.drizzle,
      web3 = _ref.web3,
      syncAlways = _ref.syncAlways;

  return (0, _reduxSaga.eventChannel)(function (emit) {
    var blockEvents = web3.eth.subscribe('newBlockHeaders', function (error, result) {
      if (error) {
        emit({ type: 'BLOCKS_FAILED', error: error });

        console.error('Error in block header subscription:');
        console.error(error);

        emit(_reduxSaga.END);
      }
    }).on('data', function (blockHeader) {
      emit({ type: 'BLOCK_RECEIVED', blockHeader: blockHeader, drizzle: drizzle, web3: web3, syncAlways: syncAlways });
    }).on('error', function (error) {
      emit({ type: 'BLOCKS_FAILED', error: error });
      emit(_reduxSaga.END);
    });

    var unsubscribe = function unsubscribe() {
      blockEvents.off();
    };

    return unsubscribe;
  });
}

function callCreateBlockChannel(_ref2) {
  var drizzle = _ref2.drizzle,
      web3 = _ref2.web3,
      syncAlways = _ref2.syncAlways;
  var blockChannel, event;
  return _regenerator2.default.wrap(function callCreateBlockChannel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(createBlockChannel, { drizzle: drizzle, web3: web3, syncAlways: syncAlways });

        case 2:
          blockChannel = _context.sent;
          _context.prev = 3;

        case 4:
          if (false) {}

          _context.next = 7;
          return (0, _effects.take)(blockChannel);

        case 7:
          event = _context.sent;
          _context.next = 10;
          return (0, _effects.put)(event);

        case 10:
          _context.next = 4;
          break;

        case 12:
          _context.prev = 12;

          blockChannel.close();
          return _context.finish(12);

        case 15:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[3,, 12, 15]]);
}

/*
 * Poll for Blocks
 */

function createBlockPollChannel(_ref3) {
  var drizzle = _ref3.drizzle,
      interval = _ref3.interval,
      web3 = _ref3.web3,
      syncAlways = _ref3.syncAlways;

  return (0, _reduxSaga.eventChannel)(function (emit) {
    var blockTracker = new BlockTracker({ provider: web3.currentProvider, pollingInterval: interval });

    blockTracker.on('latest', function (block) {
      emit({ type: 'BLOCK_FOUND', block: block, drizzle: drizzle, web3: web3, syncAlways: syncAlways });
    });

    blockTracker.start().catch(function (error) {
      emit({ type: 'BLOCKS_FAILED', error: error });
      emit(_reduxSaga.END);
    });

    var unsubscribe = function unsubscribe() {
      blockTracker.stop();
    };

    return unsubscribe;
  });
}

function callCreateBlockPollChannel(_ref4) {
  var drizzle = _ref4.drizzle,
      interval = _ref4.interval,
      web3 = _ref4.web3,
      syncAlways = _ref4.syncAlways;
  var blockChannel, event;
  return _regenerator2.default.wrap(function callCreateBlockPollChannel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(createBlockPollChannel, { drizzle: drizzle, interval: interval, web3: web3, syncAlways: syncAlways });

        case 2:
          blockChannel = _context2.sent;
          _context2.prev = 3;

        case 4:
          if (false) {}

          _context2.next = 7;
          return (0, _effects.take)(blockChannel);

        case 7:
          event = _context2.sent;
          _context2.next = 10;
          return (0, _effects.put)(event);

        case 10:
          _context2.next = 4;
          break;

        case 12:
          _context2.prev = 12;

          blockChannel.close();
          return _context2.finish(12);

        case 15:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[3,, 12, 15]]);
}

/*
 * Process Blocks
 */

function processBlockHeader(_ref5) {
  var blockHeader = _ref5.blockHeader,
      drizzle = _ref5.drizzle,
      web3 = _ref5.web3,
      syncAlways = _ref5.syncAlways;
  var blockNumber, block;
  return _regenerator2.default.wrap(function processBlockHeader$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          blockNumber = blockHeader.number;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _effects.call)(web3.eth.getBlock, blockNumber, true);

        case 4:
          block = _context3.sent;

          if (block) {
            _context3.next = 7;
            break;
          }

          throw new Error('missing block number ' + blockNumber);

        case 7:
          _context3.next = 9;
          return (0, _effects.call)(processBlock, { block: block, drizzle: drizzle, web3: web3, syncAlways: syncAlways });

        case 9:
          _context3.next = 18;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3['catch'](1);

          console.error('Error in block processing:');
          console.error(_context3.t0);

          _context3.next = 17;
          return (0, _effects.put)({ type: 'BLOCK_FAILED', error: _context3.t0 });

        case 17:
          return _context3.abrupt('return');

        case 18:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[1, 11]]);
}

function processBlock(_ref6) {
  var block = _ref6.block,
      drizzle = _ref6.drizzle,
      web3 = _ref6.web3,
      syncAlways = _ref6.syncAlways;
  var txs, i, from, fromContract, to, toContract;
  return _regenerator2.default.wrap(function processBlock$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;

          if (!syncAlways) {
            _context4.next = 5;
            break;
          }

          _context4.next = 4;
          return (0, _effects.all)((0, _keys2.default)(drizzle.contracts).map(function (key) {
            return (0, _effects.put)({ type: 'CONTRACT_SYNCING', contract: drizzle.contracts[key] });
          }));

        case 4:
          return _context4.abrupt('return');

        case 5:

          console.log('got new block');
          txs = block.transactions;

          if (!(txs.length > 0)) {
            _context4.next = 23;
            break;
          }

          i = 0;

        case 9:
          if (!(i < txs.length)) {
            _context4.next = 23;
            break;
          }

          from = txs[i].from || '';
          fromContract = drizzle.findContractByAddress(from.toLowerCase());

          if (!fromContract) {
            _context4.next = 15;
            break;
          }

          _context4.next = 15;
          return (0, _effects.put)({ type: 'CONTRACT_SYNCING', contract: fromContract });

        case 15:
          to = txs[i].to || '';
          toContract = drizzle.findContractByAddress(to.toLowerCase());

          if (!toContract) {
            _context4.next = 20;
            break;
          }

          _context4.next = 20;
          return (0, _effects.put)({ type: 'CONTRACT_SYNCING', contract: toContract });

        case 20:
          i++;
          _context4.next = 9;
          break;

        case 23:
          _context4.next = 32;
          break;

        case 25:
          _context4.prev = 25;
          _context4.t0 = _context4['catch'](0);

          console.error('Error in block processing:');
          console.error(_context4.t0);

          _context4.next = 31;
          return (0, _effects.put)({ type: 'BLOCK_FAILED', error: _context4.t0 });

        case 31:
          return _context4.abrupt('return');

        case 32:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 25]]);
}

function blocksSaga() {
  return _regenerator2.default.wrap(function blocksSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeLatest)('BLOCKS_LISTENING', callCreateBlockChannel);

        case 2:
          _context5.next = 4;
          return (0, _effects.takeEvery)('BLOCK_RECEIVED', processBlockHeader);

        case 4:
          _context5.next = 6;
          return (0, _effects.takeLatest)('BLOCKS_POLLING', callCreateBlockPollChannel);

        case 6:
          _context5.next = 8;
          return (0, _effects.takeEvery)('BLOCK_FOUND', processBlock);

        case 8:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

exports.default = blocksSaga;

/***/ }),

/***/ "./src/contracts/contractsReducer.js":
/*!*******************************************!*\
  !*** ./src/contracts/contractsReducer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends14 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends15 = _interopRequireDefault(_extends14);

var _generateContractInitialState = __webpack_require__(/*! ../generateContractInitialState */ "./src/generateContractInitialState.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var contractsReducer = function contractsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  /*
   * Contract Status
   */

  if (action.type === 'CONTRACT_INITIALIZING') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.contractConfig.contractName, (0, _generateContractInitialState.generateContractInitialState)(action.contractConfig)));
  }

  if (action.type === 'CONTRACT_INITIALIZED') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], {
      initialized: true,
      synced: true,
      events: [],
      methods: action.contract.methods,
      address: action.contract.address
    })));
  }

  if (action.type === 'CONTRACT_SYNCING') {
    var contractName = action.contract.contractName;

    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, contractName, (0, _extends15.default)({}, state[contractName], {
      synced: false,
      syncing: true
    })));
  }

  if (action.type === 'CONTRACT_SYNCED') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.contractName, (0, _extends15.default)({}, state[action.contractName], {
      synced: true,
      syncing: false
    })));
  }

  if (action.type === 'CONTRACT_SYNC_IND') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.contractName, (0, _extends15.default)({}, state[action.contractName], {
      synced: false
    })));
  }

  /*
   * Contract Functions
   */

  if (action.type === 'GOT_CONTRACT_VAR') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], {
      state: (0, _extends15.default)({}, state[action.name].state, (0, _defineProperty3.default)({}, action.variable, (0, _extends15.default)({}, state[action.name].state[action.variable], (0, _defineProperty3.default)({}, action.argsHash, (0, _extends15.default)({}, state[action.name].state[action.variable][action.argsHash], {
        args: action.args,
        fnIndex: action.fnIndex,
        value: action.value,
        syncing: false
      })))))
    })));
  }

  if (action.type === 'ERROR_CONTRACT_VAR') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], {
      state: (0, _extends15.default)({}, state[action.name].state, (0, _defineProperty3.default)({}, action.variable, (0, _extends15.default)({}, state[action.name].state[action.variable], (0, _defineProperty3.default)({}, action.argsHash, (0, _extends15.default)({}, state[action.name].state[action.variable][action.argsHash], {
        args: action.args,
        fnIndex: action.fnIndex,
        error: action.error,
        syncing: false
      })))))
    })));
  }

  /*
   * Contract Events
   */

  if (action.type === 'EVENT_FIRED') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], {
      events: [].concat((0, _toConsumableArray3.default)(state[action.name].events), [action.event])
    })));
  }

  return state;
};

exports.default = contractsReducer;

/***/ }),

/***/ "./src/contracts/contractsSaga.js":
/*!****************************************!*\
  !*** ./src/contracts/contractsSaga.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.addContract = addContract;
exports.instantiateWeb3Contract = instantiateWeb3Contract;
exports.instantiateContract = instantiateContract;

var _reduxSaga = __webpack_require__(/*! redux-saga */ "redux-saga");

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _DrizzleContract = __webpack_require__(/*! ../DrizzleContract */ "./src/DrizzleContract.js");

var _DrizzleContract2 = _interopRequireDefault(_DrizzleContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(addContract),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(instantiateWeb3Contract),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(instantiateContract),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(callListenForContractEvent),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(callGetContractEvent),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(callSendContractTx),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(callCallContractFn),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(callSyncContract),
    _marked9 = /*#__PURE__*/_regenerator2.default.mark(contractsSaga);

function addContract(_ref) {
  var drizzle = _ref.drizzle,
      contractConfig = _ref.contractConfig,
      events = _ref.events,
      web3 = _ref.web3,
      fallback = _ref.fallback,
      address = _ref.address;
  var drizzleContract, contract;
  return _regenerator2.default.wrap(function addContract$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (drizzle) {
            _context.next = 2;
            break;
          }

          return _context.abrupt('return');

        case 2:
          if (!drizzle.loadingContract[contractConfig.contractName]) {
            _context.next = 4;
            break;
          }

          return _context.abrupt('return', false);

        case 4:

          drizzle.loadingContract[contractConfig.contractName] = true;

          _context.next = 7;
          return (0, _effects.put)({ type: 'CONTRACT_INITIALIZING', contractConfig: contractConfig });

        case 7:
          drizzleContract = void 0;

          // if (contractConfig.web3Contract) {
          // drizzleContract = yield call(instantiateWeb3Contract, {web3Contract: contractConfig.web3Contract, name: contractConfig.contractName, events, store: drizzle.store, web3, fallback})
          // } else {

          _context.next = 10;
          return (0, _effects.call)(instantiateContract, { contractArtifact: contractConfig, events: events, store: drizzle.store, web3: web3, fallback: fallback, address: address });

        case 10:
          drizzleContract = _context.sent;

          // }
          contract = drizzle._addContract(drizzleContract);
          _context.next = 14;
          return (0, _effects.put)({ type: 'CONTRACT_INITIALIZED', name: address || contractConfig.contractName, contract: contract });

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/*
 * Instantiation
 */

function instantiateWeb3Contract(_ref2) {
  var web3Contract = _ref2.web3Contract,
      name = _ref2.name,
      events = _ref2.events,
      store = _ref2.store,
      web3 = _ref2.web3,
      fallback = _ref2.fallback;
  return _regenerator2.default.wrap(function instantiateWeb3Contract$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt('return', new _DrizzleContract2.default(web3Contract, web3, name, store, events));

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function instantiateContract(_ref3) {
  var contractArtifact = _ref3.contractArtifact,
      events = _ref3.events,
      store = _ref3.store,
      web3 = _ref3.web3,
      fallback = _ref3.fallback,
      address = _ref3.address;
  var networkId, fallbackNetworkId, web3Contract, fallbackContract;
  return _regenerator2.default.wrap(function instantiateContract$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.select)(getNetworkId);

        case 2:
          networkId = _context3.sent;
          _context3.next = 5;
          return (0, _effects.select)(getFallbackNetworkId);

        case 5:
          fallbackNetworkId = _context3.sent;


          // Instantiate the contract.
          if (web3) {
            web3Contract = new web3.eth.Contract(contractArtifact.abi, address || contractArtifact.networks[networkId].address, {
              from: store.getState().accounts[0],
              data: contractArtifact.deployedBytecode
            });
          }

          if (fallback) {
            fallbackContract = new fallback.eth.Contract(contractArtifact.abi, address || contractArtifact.networks[fallbackNetworkId].address, {
              data: contractArtifact.deployedBytecode
            });
          }

          // TODO better logic - wait for connection!
          // if websocket provider, then wait for websocket to connect;
          // if (fallback) {
          //   console.log('instantiate contract ', address);
          //   yield fallback.currentProvider.on('connect', e => {
          //     console.log('connected, get events for ', address || contractArtifact.contractName);
          //     return new DrizzleContract(web3Contract, web3, address || contractArtifact.contractName, store, events, contractArtifact, fallbackContract)
          //   });
          // }
          // this is called twice right now
          // console.log('new contract ', address || contractArtifact.contractName);
          return _context3.abrupt('return', new _DrizzleContract2.default(web3Contract, web3, address || contractArtifact.contractName, store, events, contractArtifact, fallbackContract));

        case 9:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/*
 * Events
 */

function createContractEventChannel(_ref4) {
  var contract = _ref4.contract,
      eventName = _ref4.eventName,
      eventOptions = _ref4.eventOptions;

  var name = contract.contractName;

  // if we have a ws fallback - use that for events
  var eventEnabledContract = contract.fallbackContract || contract;

  return (0, _reduxSaga.eventChannel)(function (emit) {
    var eventListener = eventEnabledContract.events[eventName](eventOptions).on('data', function (event) {
      emit({ type: 'EVENT_FIRED', name: name, event: event });
    }).on('changed', function (event) {
      emit({ type: 'EVENT_CHANGED', name: name, event: event });
    }).on('error', function (error) {
      emit({ type: 'EVENT_ERROR', name: name, error: error });
      emit(_reduxSaga.END);
    });

    var unsubscribe = function unsubscribe() {
      eventListener.removeListener(eventName);
    };

    return unsubscribe;
  });
}

function callListenForContractEvent(_ref5) {
  var contract = _ref5.contract,
      eventName = _ref5.eventName,
      eventOptions = _ref5.eventOptions;
  var contractEventChannel, event;
  return _regenerator2.default.wrap(function callListenForContractEvent$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.call)(createContractEventChannel, { contract: contract, eventName: eventName, eventOptions: eventOptions });

        case 2:
          contractEventChannel = _context4.sent;

        case 3:
          if (false) {}

          _context4.next = 6;
          return (0, _effects.take)(contractEventChannel);

        case 6:
          event = _context4.sent;
          _context4.next = 9;
          return (0, _effects.put)(event);

        case 9:
          _context4.next = 3;
          break;

        case 11:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

// function* callPollContractEvent({contract, eventName, eventOptions}) {
//   setInterval(() => {
//     console.log('polling events');
//     callGetContractEvent({contract, eventName, eventOptions});
//   }, 3000);
// }


function callGetContractEvent(_ref6) {
  var contract = _ref6.contract,
      eventName = _ref6.eventName,
      eventOptions = _ref6.eventOptions;
  var eventEnabledContract, name, events, fromBlock, i, event;
  return _regenerator2.default.wrap(function callGetContractEvent$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          eventEnabledContract = contract.fallbackContract || contract;
          name = contract.contractName || contract.address;
          events = void 0;
          fromBlock = eventOptions ? eventOptions.fromBlock : 0;
          _context5.prev = 4;
          _context5.next = 7;
          return eventEnabledContract.getPastEvents(eventName, {
            // filter: {_from: eventOptions.address},
            fromBlock: fromBlock,
            toBlock: 'latest'
          });

        case 7:
          events = _context5.sent;
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5['catch'](4);

          console.log('error getting events manually', _context5.t0);

        case 13:
          if (events) {
            _context5.next = 15;
            break;
          }

          return _context5.abrupt('return');

        case 15:
          i = 0;

        case 16:
          if (!(i < events.length)) {
            _context5.next = 23;
            break;
          }

          event = events[i];
          _context5.next = 20;
          return (0, _effects.put)({ type: 'EVENT_FIRED', name: name, event: event });

        case 20:
          i++;
          _context5.next = 16;
          break;

        case 23:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[4, 10]]);
}

/*
 * Send and Cache
 */

function createTxChannel(_ref7) {
  var txObject = _ref7.txObject,
      stackId = _ref7.stackId,
      _ref7$sendArgs = _ref7.sendArgs,
      sendArgs = _ref7$sendArgs === undefined ? {} : _ref7$sendArgs,
      contractName = _ref7.contractName;

  var persistTxHash;

  return (0, _reduxSaga.eventChannel)(function (emit) {
    var txPromiEvent = txObject.send(sendArgs).on('transactionHash', function (txHash) {
      persistTxHash = txHash;

      emit({ type: 'TX_BROADCASTED', txHash: txHash, stackId: stackId });
      emit({ type: 'CONTRACT_SYNC_IND', contractName: contractName });
    }).on('confirmation', function (confirmationNumber, receipt) {
      emit({ type: 'TX_CONFIRMAITON', confirmationReceipt: receipt, txHash: persistTxHash });
    }).on('receipt', function (receipt) {
      emit({ type: 'TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash });
      emit(_reduxSaga.END);
    }).on('error', function (error) {
      emit({ type: 'TX_ERROR', error: error, txHash: persistTxHash });
      emit(_reduxSaga.END);
    });

    var unsubscribe = function unsubscribe() {
      txPromiEvent.off();
    };

    return unsubscribe;
  });
}

function callSendContractTx(_ref8) {
  var contract = _ref8.contract,
      fnName = _ref8.fnName,
      fnIndex = _ref8.fnIndex,
      args = _ref8.args,
      stackId = _ref8.stackId;
  var finalArg, sendArgs, finalArgTest, contractName, txObject, txChannel, event;
  return _regenerator2.default.wrap(function callSendContractTx$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          // Check for type of object and properties indicative of call/send options.
          if (args.length) {
            finalArg = args.length > 1 ? args[args.length - 1] : args[0];
            sendArgs = {};
            finalArgTest = false;


            if ((typeof finalArg === 'undefined' ? 'undefined' : (0, _typeof3.default)(finalArg)) === 'object') {
              finalArgTest = (0, _effects.call)(isSendOrCallOptions, finalArg);
            }

            if (finalArgTest) {
              sendArgs = finalArg;

              args.length > 1 ? delete args[args.length - 1] : delete args[0];
              args.length = args.length - 1;
            }
          }

          // Get name to mark as desynchronized on tx creation
          contractName = contract.contractName;

          // Create the transaction object and execute the tx.

          _context6.next = 4;
          return _effects.call.apply(undefined, [contract.methods[fnName]].concat((0, _toConsumableArray3.default)(args)));

        case 4:
          txObject = _context6.sent;
          _context6.next = 7;
          return (0, _effects.call)(createTxChannel, { txObject: txObject, stackId: stackId, sendArgs: sendArgs, contractName: contractName });

        case 7:
          txChannel = _context6.sent;
          _context6.prev = 8;

        case 9:
          if (false) {}

          _context6.next = 12;
          return (0, _effects.take)(txChannel);

        case 12:
          event = _context6.sent;
          _context6.next = 15;
          return (0, _effects.put)(event);

        case 15:
          _context6.next = 9;
          break;

        case 17:
          _context6.prev = 17;

          txChannel.close();
          return _context6.finish(17);

        case 20:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this, [[8,, 17, 20]]);
}

/*
 * Call and Cache
 */

function callCallContractFn(_ref9) {
  var contract = _ref9.contract,
      fnName = _ref9.fnName,
      fnIndex = _ref9.fnIndex,
      args = _ref9.args,
      argsHash = _ref9.argsHash,
      _ref9$sync = _ref9.sync,
      sync = _ref9$sync === undefined ? false : _ref9$sync;

  var finalArg, callArgs, finalArgTest, txObject, _txObject, callResult, dispatchArgs, errorArgs;

  return _regenerator2.default.wrap(function callCallContractFn$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          if (!sync) {
            _context7.next = 2;
            break;
          }

          return _context7.abrupt('return');

        case 2:

          // Check for type of object and properties indicative of call/send options.
          if (args.length) {
            finalArg = args.length > 1 ? args[args.length - 1] : args[0];
            callArgs = {};
            finalArgTest = false;


            if ((typeof finalArg === 'undefined' ? 'undefined' : (0, _typeof3.default)(finalArg)) === 'object') {
              finalArgTest = (0, _effects.call)(isSendOrCallOptions, finalArg);
            }

            if (finalArgTest) {
              callArgs = finalArg;

              args.length > 1 ? delete args[args.length - 1] : delete args[0];
              args.length = args.length - 1;
            }
          }

          // Create the transaction object and execute the call.
          _context7.next = 5;
          return _effects.call.apply(undefined, [contract.methods[fnName]].concat((0, _toConsumableArray3.default)(args)));

        case 5:
          txObject = _context7.sent;
          _context7.prev = 6;
          _context7.next = 9;
          return _effects.call.apply(undefined, [contract.methods[fnName]].concat((0, _toConsumableArray3.default)(args)));

        case 9:
          _txObject = _context7.sent;
          _context7.next = 12;
          return (0, _effects.call)(_txObject.call, callArgs);

        case 12:
          callResult = _context7.sent;
          dispatchArgs = {
            name: contract.contractName,
            variable: contract.abi[fnIndex].name,
            argsHash: argsHash,
            args: args,
            value: callResult,
            fnIndex: fnIndex
          };
          _context7.next = 16;
          return (0, _effects.put)((0, _extends3.default)({ type: 'GOT_CONTRACT_VAR' }, dispatchArgs));

        case 16:
          _context7.next = 24;
          break;

        case 18:
          _context7.prev = 18;
          _context7.t0 = _context7['catch'](6);

          console.error(_context7.t0);

          errorArgs = {
            name: contract.contractName,
            variable: contract.abi[fnIndex].name,
            argsHash: argsHash,
            args: args,
            error: _context7.t0,
            fnIndex: fnIndex
          };
          _context7.next = 24;
          return (0, _effects.put)((0, _extends3.default)({ type: 'ERROR_CONTRACT_VAR' }, errorArgs));

        case 24:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this, [[6, 18]]);
}

/*
 * Sync Contract
 */

function callSyncContract(action) {
  var contract, contractName, contractsState, contractFnsState, fnName, argsHash, fnIndex, args;
  return _regenerator2.default.wrap(function callSyncContract$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          // Get contract state from store
          contract = action.contract;
          contractName = contract.contractName;
          _context8.next = 4;
          return (0, _effects.select)(getContractsState);

        case 4:
          contractsState = _context8.sent;
          contractFnsState = (0, _assign2.default)({}, contractsState[contractName].state);

          // Remove unnecessary keys

          delete contractFnsState.initialized;
          delete contractFnsState.synced;
          delete contractFnsState.events;

          // Iterate over functions and hashes
          _context8.t0 = _regenerator2.default.keys(contractFnsState);

        case 10:
          if ((_context8.t1 = _context8.t0()).done) {
            _context8.next = 25;
            break;
          }

          fnName = _context8.t1.value;
          _context8.t2 = _regenerator2.default.keys(contractFnsState[fnName]);

        case 13:
          if ((_context8.t3 = _context8.t2()).done) {
            _context8.next = 23;
            break;
          }

          argsHash = _context8.t3.value;
          fnIndex = contractFnsState[fnName][argsHash].fnIndex;
          args = contractFnsState[fnName][argsHash].args;

          // Pull args and call fn for each given function
          // keeping for pre-v1.1.5 compatibility with CALL_CONTRACT_FN event.

          _context8.next = 19;
          return (0, _effects.put)({ type: 'CALL_CONTRACT_FN', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash, sync: true });

        case 19:
          _context8.next = 21;
          return (0, _effects.call)(callCallContractFn, { contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash });

        case 21:
          _context8.next = 13;
          break;

        case 23:
          _context8.next = 10;
          break;

        case 25:
          _context8.next = 27;
          return (0, _effects.put)({ type: 'CONTRACT_SYNCED', contractName: contractName });

        case 27:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this);
}

var getContractsState = function getContractsState(state) {
  return state.contracts;
};
var getNetworkId = function getNetworkId(state) {
  return state.web3.networkId;
};
var getFallbackNetworkId = function getFallbackNetworkId(state) {
  return state.web3.fallbackNetworkId;
};

function isSendOrCallOptions(options) {
  if ('from' in options) return true;
  if ('gas' in options) return true;
  if ('gasPrice' in options) return true;
  if ('value' in options) return true;

  return false;
}

function contractsSaga() {
  return _regenerator2.default.wrap(function contractsSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.takeEvery)('SEND_CONTRACT_TX', callSendContractTx);

        case 2:
          _context9.next = 4;
          return (0, _effects.takeEvery)('CALL_CONTRACT_FN', callCallContractFn);

        case 4:
          _context9.next = 6;
          return (0, _effects.takeEvery)('CONTRACT_SYNCING', callSyncContract);

        case 6:
          _context9.next = 8;
          return (0, _effects.takeEvery)('LISTEN_FOR_EVENT', callGetContractEvent);

        case 8:
          _context9.next = 10;
          return (0, _effects.takeEvery)('GET_CONTRACT_EVENT', callGetContractEvent);

        case 10:
          _context9.next = 12;
          return (0, _effects.takeEvery)('ADD_CONTRACT', addContract);

        case 12:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked9, this);
}

exports.default = contractsSaga;

/***/ }),

/***/ "./src/defaultOptions.js":
/*!*******************************!*\
  !*** ./src/defaultOptions.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = {
  web3: {
    // `block` no longer needed;
    // keeping for pre-v1.1.1 compatibility with drizzle-react.
    block: false
    // fallback: {
    //   type: 'ws',
    //   url: 'ws://127.0.0.1:8545'
    // }
  },
  contracts: [],
  events: {},
  polls: {
    blocks: 3000
  },
  syncAlways: false
};

exports.default = defaultOptions;

/***/ }),

/***/ "./src/drizzleStatus/drizzleStatusReducer.js":
/*!***************************************************!*\
  !*** ./src/drizzleStatus/drizzleStatusReducer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  initialized: false
};

var drizzleStatusReducer = function drizzleStatusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  /*
   * Drizzle Status
   */

  if (action.type === 'DRIZZLE_WARNING') {
    return (0, _extends3.default)({}, state, {
      warning: action.warning
    });
  }

  if (action.type === 'DRIZZLE_FAILED') {
    return (0, _extends3.default)({}, state, {
      error: action.error.message
    });
  }

  if (action.type === 'DRIZZLE_INITIALIZED') {
    return (0, _extends3.default)({}, state, {
      initialized: true,
      error: null
    });
  }
  return state;
};

exports.default = drizzleStatusReducer;

/***/ }),

/***/ "./src/drizzleStatus/drizzleStatusSaga.js":
/*!************************************************!*\
  !*** ./src/drizzleStatus/drizzleStatusSaga.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _defaultOptions = __webpack_require__(/*! ../defaultOptions */ "./src/defaultOptions.js");

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

var _mergeOptions = __webpack_require__(/*! ../mergeOptions */ "./src/mergeOptions.js");

var _mergeOptions2 = _interopRequireDefault(_mergeOptions);

var _web3Saga = __webpack_require__(/*! ../web3/web3Saga */ "./src/web3/web3Saga.js");

var _accountsSaga = __webpack_require__(/*! ../accounts/accountsSaga */ "./src/accounts/accountsSaga.js");

var _accountBalancesSaga = __webpack_require__(/*! ../accountBalances/accountBalancesSaga */ "./src/accountBalances/accountBalancesSaga.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(initializeDrizzle),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(drizzleStatusSaga);

// Initialization Functions


function initializeDrizzle(action) {
  var options, web3Options, drizzle, _ref, web3, fallback, store, networkId, i, contractConfig, events, contractName, syncAlways, interval;

  return _regenerator2.default.wrap(function initializeDrizzle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          options = (0, _mergeOptions2.default)(_defaultOptions2.default, action.options);
          web3Options = options.web3;
          drizzle = action.drizzle;

          // Initialize web3 and get the current network ID.

          _context.next = 6;
          return (0, _effects.call)(_web3Saga.initializeWeb3, { options: web3Options });

        case 6:
          _ref = _context.sent;
          web3 = _ref.web3;
          fallback = _ref.fallback;

          if (web3) {
            _context.next = 14;
            break;
          }

          web3 = fallback;
          fallback = null;
          _context.next = 14;
          return (0, _effects.put)({ type: 'DRIZZLE_WARNING', warning: 'metamask' });

        case 14:
          drizzle.web3 = web3;
          drizzle.fallback = fallback;

          _context.next = 18;
          return (0, _effects.call)(_web3Saga.getNetworkId, { web3: web3, options: web3Options });

        case 18:
          store = drizzle.store.getState();
          networkId = store.web3.networkId;

          if (!(options.networkId !== networkId)) {
            _context.next = 23;
            break;
          }

          throw new Error('network');

        case 23:
          if (web3.currentProvider.isPortis) {
            _context.next = 28;
            break;
          }

          _context.next = 26;
          return (0, _effects.call)(_accountsSaga.getAccounts, { web3: web3 || fallback });

        case 26:
          _context.next = 28;
          return (0, _effects.call)(_accountBalancesSaga.getAccountBalances, { web3: web3 || fallback });

        case 28:
          i = 0;

        case 29:
          if (!(i < options.contracts.length)) {
            _context.next = 39;
            break;
          }

          contractConfig = options.contracts[i];
          events = [];
          contractName = contractConfig.contractName;


          if (contractName in options.events) {
            events = options.events[contractName];
          }

          _context.next = 36;
          return (0, _effects.put)({ type: 'ADD_CONTRACT', drizzle: drizzle, contractConfig: contractConfig, events: events, web3: web3, fallback: fallback });

        case 36:
          i++;
          _context.next = 29;
          break;

        case 39:
          syncAlways = options.syncAlways;

          // Accounts Polling

          if (!(web3 && web3.currentProvider.isMetaMask)) {
            _context.next = 44;
            break;
          }

          if (!('accounts' in options.polls)) {
            _context.next = 44;
            break;
          }

          _context.next = 44;
          return (0, _effects.put)({ type: 'ACCOUNTS_POLLING', interval: options.polls.accounts, web3: web3 });

        case 44:

          if (web3 && fallback) {
            web3 = !web3.currentProvider.isMetaMask ? web3 : fallback;
          } else web3 = fallback || web3;

          if (!(web3.currentProvider.isMetaMask || web3.currentProvider.isHttp)) {
            _context.next = 51;
            break;
          }

          // Using MetaMask, attempt block polling.
          interval = options.polls.blocks;
          _context.next = 49;
          return (0, _effects.put)({ type: 'BLOCKS_POLLING', drizzle: drizzle, interval: interval, web3: web3, syncAlways: syncAlways });

        case 49:
          _context.next = 53;
          break;

        case 51:
          _context.next = 53;
          return (0, _effects.put)({ type: 'BLOCKS_LISTENING', drizzle: drizzle, web3: web3, syncAlways: syncAlways });

        case 53:
          _context.next = 63;
          break;

        case 55:
          _context.prev = 55;
          _context.t0 = _context['catch'](0);


          console.error('Error initializing Drizzle:');
          console.error(_context.t0);
          if (_context.t0.message.match('web3')) _context.t0.message = 'web3';
          _context.next = 62;
          return (0, _effects.put)({ type: 'DRIZZLE_FAILED', error: _context.t0 });

        case 62:
          return _context.abrupt('return');

        case 63:
          _context.next = 65;
          return (0, _effects.put)({ type: 'DRIZZLE_INITIALIZED' });

        case 65:
          return _context.abrupt('return');

        case 66:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 55]]);
}

function drizzleStatusSaga() {
  return _regenerator2.default.wrap(function drizzleStatusSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)('DRIZZLE_INITIALIZING', initializeDrizzle);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

exports.default = drizzleStatusSaga;

/***/ }),

/***/ "./src/generateContractInitialState.js":
/*!*********************************************!*\
  !*** ./src/generateContractInitialState.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateContractInitialState = generateContractInitialState;

var _getAbi = __webpack_require__(/*! ./getAbi */ "./src/getAbi.js");

var _getAbi2 = _interopRequireDefault(_getAbi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateContractInitialState(contractConfig) {
  var state = {
    initialized: false,
    synced: false,
    state: {}

    // Constant getters
  };var abi = (0, _getAbi2.default)(contractConfig);
  for (var i2 = 0; i2 < abi.length; i2++) {
    var item = abi[i2];

    if (item.type == "function" && item.constant === true) {
      state.state[item.name] = {};
    }
  }

  return state;
}

/***/ }),

/***/ "./src/generateContractsInitialState.js":
/*!**********************************************!*\
  !*** ./src/generateContractsInitialState.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateContractsInitialState = generateContractsInitialState;

var _generateContractInitialState = __webpack_require__(/*! ./generateContractInitialState */ "./src/generateContractInitialState.js");

function generateContractsInitialState(options) {
  // Preloaded state
  var contractsInitialState = {};

  for (var i = 0; i < options.contracts.length; i++) {
    // Initial contract details
    var contractName = options.contracts[i].contractName;
    contractsInitialState[contractName] = (0, _generateContractInitialState.generateContractInitialState)(options.contracts[i]);
  }

  return contractsInitialState;
}

/***/ }),

/***/ "./src/generateStore.js":
/*!******************************!*\
  !*** ./src/generateStore.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateStore = generateStore;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxSaga = __webpack_require__(/*! redux-saga */ "redux-saga");

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _rootSaga = __webpack_require__(/*! ./rootSaga */ "./src/rootSaga.js");

var _rootSaga2 = _interopRequireDefault(_rootSaga);

var _reducer = __webpack_require__(/*! ./reducer */ "./src/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _generateContractsInitialState = __webpack_require__(/*! ./generateContractsInitialState */ "./src/generateContractsInitialState.js");

var _getAbi = __webpack_require__(/*! ./getAbi */ "./src/getAbi.js");

var _getAbi2 = _interopRequireDefault(_getAbi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateStore(options) {
  // Redux DevTools
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

  // Preloaded state
  var preloadedState = {
    contracts: (0, _generateContractsInitialState.generateContractsInitialState)(options)

    // create the saga middleware
  };var sagaMiddleware = (0, _reduxSaga2.default)();

  var store = (0, _redux.createStore)(_reducer2.default, composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware)));

  sagaMiddleware.run(_rootSaga2.default);

  return store;
}

/***/ }),

/***/ "./src/getAbi.js":
/*!***********************!*\
  !*** ./src/getAbi.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAbi;
function getAbi(contractEntry) {
  if (contractEntry.web3Contract) {
    return contractEntry.web3Contract.options.jsonInterface;
    return contractEntry.web3Contract.abi;
  } else {
    return contractEntry.abi;
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drizzleSagas = exports.drizzleReducers = exports.generateStore = exports.generateContractsInitialState = exports.Drizzle = undefined;

var _Drizzle = __webpack_require__(/*! ./Drizzle.js */ "./src/Drizzle.js");

var _Drizzle2 = _interopRequireDefault(_Drizzle);

var _generateStore = __webpack_require__(/*! ./generateStore */ "./src/generateStore.js");

var _generateContractsInitialState = __webpack_require__(/*! ./generateContractsInitialState */ "./src/generateContractsInitialState.js");

var _accountsReducer = __webpack_require__(/*! ./accounts/accountsReducer */ "./src/accounts/accountsReducer.js");

var _accountsReducer2 = _interopRequireDefault(_accountsReducer);

var _accountBalancesReducer = __webpack_require__(/*! ./accountBalances/accountBalancesReducer */ "./src/accountBalances/accountBalancesReducer.js");

var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);

var _contractsReducer = __webpack_require__(/*! ./contracts/contractsReducer */ "./src/contracts/contractsReducer.js");

var _contractsReducer2 = _interopRequireDefault(_contractsReducer);

var _drizzleStatusReducer = __webpack_require__(/*! ./drizzleStatus/drizzleStatusReducer */ "./src/drizzleStatus/drizzleStatusReducer.js");

var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);

var _transactionsReducer = __webpack_require__(/*! ./transactions/transactionsReducer */ "./src/transactions/transactionsReducer.js");

var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);

var _transactionStackReducer = __webpack_require__(/*! ./transactions/transactionStackReducer */ "./src/transactions/transactionStackReducer.js");

var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);

var _web3Reducer = __webpack_require__(/*! ./web3/web3Reducer */ "./src/web3/web3Reducer.js");

var _web3Reducer2 = _interopRequireDefault(_web3Reducer);

var _accountsSaga = __webpack_require__(/*! ./accounts/accountsSaga */ "./src/accounts/accountsSaga.js");

var _accountsSaga2 = _interopRequireDefault(_accountsSaga);

var _accountBalancesSaga = __webpack_require__(/*! ./accountBalances/accountBalancesSaga */ "./src/accountBalances/accountBalancesSaga.js");

var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);

var _blocksSaga = __webpack_require__(/*! ./blocks/blocksSaga */ "./src/blocks/blocksSaga.js");

var _blocksSaga2 = _interopRequireDefault(_blocksSaga);

var _contractsSaga = __webpack_require__(/*! ./contracts/contractsSaga */ "./src/contracts/contractsSaga.js");

var _contractsSaga2 = _interopRequireDefault(_contractsSaga);

var _drizzleStatusSaga = __webpack_require__(/*! ./drizzleStatus/drizzleStatusSaga */ "./src/drizzleStatus/drizzleStatusSaga.js");

var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);

var _web3Saga = __webpack_require__(/*! ./web3/web3Saga */ "./src/web3/web3Saga.js");

var _web3Saga2 = _interopRequireDefault(_web3Saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drizzleReducers = {
  accounts: _accountsReducer2.default,
  accountBalances: _accountBalancesReducer2.default,
  contracts: _contractsReducer2.default,
  drizzleStatus: _drizzleStatusReducer2.default,
  transactions: _transactionsReducer2.default,
  transactionStack: _transactionStackReducer2.default,
  web3: _web3Reducer2.default

  // Sagas
};

// Reducers


var drizzleSagas = [_accountsSaga2.default, _accountBalancesSaga2.default, _blocksSaga2.default, _contractsSaga2.default, _drizzleStatusSaga2.default, _web3Saga2.default];

exports.Drizzle = _Drizzle2.default;
exports.generateContractsInitialState = _generateContractsInitialState.generateContractsInitialState;
exports.generateStore = _generateStore.generateStore;
exports.drizzleReducers = drizzleReducers;
exports.drizzleSagas = drizzleSagas;

/***/ }),

/***/ "./src/mergeOptions.js":
/*!*****************************!*\
  !*** ./src/mergeOptions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (defaultOptions, newOptions) {
  return (0, _deepmerge2.default)(defaultOptions, newOptions, {
    isMergeableObject: isPlainObject
  });
};

var _deepmerge = __webpack_require__(/*! deepmerge */ "deepmerge");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isPlainObject = __webpack_require__(/*! is-plain-object */ "is-plain-object");

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _accountsReducer = __webpack_require__(/*! ./accounts/accountsReducer */ "./src/accounts/accountsReducer.js");

var _accountsReducer2 = _interopRequireDefault(_accountsReducer);

var _accountBalancesReducer = __webpack_require__(/*! ./accountBalances/accountBalancesReducer */ "./src/accountBalances/accountBalancesReducer.js");

var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);

var _contractsReducer = __webpack_require__(/*! ./contracts/contractsReducer */ "./src/contracts/contractsReducer.js");

var _contractsReducer2 = _interopRequireDefault(_contractsReducer);

var _drizzleStatusReducer = __webpack_require__(/*! ./drizzleStatus/drizzleStatusReducer */ "./src/drizzleStatus/drizzleStatusReducer.js");

var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);

var _transactionsReducer = __webpack_require__(/*! ./transactions/transactionsReducer */ "./src/transactions/transactionsReducer.js");

var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);

var _transactionStackReducer = __webpack_require__(/*! ./transactions/transactionStackReducer */ "./src/transactions/transactionStackReducer.js");

var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);

var _web3Reducer = __webpack_require__(/*! ./web3/web3Reducer */ "./src/web3/web3Reducer.js");

var _web3Reducer2 = _interopRequireDefault(_web3Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  accounts: _accountsReducer2.default,
  accountBalances: _accountBalancesReducer2.default,
  contracts: _contractsReducer2.default,
  drizzleStatus: _drizzleStatusReducer2.default,
  transactions: _transactionsReducer2.default,
  transactionStack: _transactionStackReducer2.default,
  web3: _web3Reducer2.default
});

exports.default = reducer;

/***/ }),

/***/ "./src/rootSaga.js":
/*!*************************!*\
  !*** ./src/rootSaga.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = root;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _accountsSaga = __webpack_require__(/*! ./accounts/accountsSaga */ "./src/accounts/accountsSaga.js");

var _accountsSaga2 = _interopRequireDefault(_accountsSaga);

var _accountBalancesSaga = __webpack_require__(/*! ./accountBalances/accountBalancesSaga */ "./src/accountBalances/accountBalancesSaga.js");

var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);

var _blocksSaga = __webpack_require__(/*! ./blocks/blocksSaga */ "./src/blocks/blocksSaga.js");

var _blocksSaga2 = _interopRequireDefault(_blocksSaga);

var _contractsSaga = __webpack_require__(/*! ./contracts/contractsSaga */ "./src/contracts/contractsSaga.js");

var _contractsSaga2 = _interopRequireDefault(_contractsSaga);

var _drizzleStatusSaga = __webpack_require__(/*! ./drizzleStatus/drizzleStatusSaga */ "./src/drizzleStatus/drizzleStatusSaga.js");

var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);

var _web3Saga = __webpack_require__(/*! ./web3/web3Saga */ "./src/web3/web3Saga.js");

var _web3Saga2 = _interopRequireDefault(_web3Saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(root);

function root() {
  return _regenerator2.default.wrap(function root$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(_accountsSaga2.default), (0, _effects.fork)(_accountBalancesSaga2.default), (0, _effects.fork)(_blocksSaga2.default), (0, _effects.fork)(_contractsSaga2.default), (0, _effects.fork)(_drizzleStatusSaga2.default), (0, _effects.fork)(_web3Saga2.default)]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),

/***/ "./src/transactions/transactionStackReducer.js":
/*!*****************************************************!*\
  !*** ./src/transactions/transactionStackReducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

var transactionStackReducer = function transactionStackReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (action.type === 'PUSH_TO_TXSTACK') {
        state.push('');

        return [].concat((0, _toConsumableArray3.default)(state));
    }

    if (action.type === 'POP_FROM_TXSTACK') {
        state.pop();

        return [].concat((0, _toConsumableArray3.default)(state));
    }

    if (action.type === 'TX_BROADCASTED') {
        state[action.stackId] = action.txHash;

        return [].concat((0, _toConsumableArray3.default)(state));
    }

    return state;
};

exports.default = transactionStackReducer;

/***/ }),

/***/ "./src/transactions/transactionsReducer.js":
/*!*************************************************!*\
  !*** ./src/transactions/transactionsReducer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends6 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends7 = _interopRequireDefault(_extends6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var transactionsReducer = function transactionsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (action.type === 'TX_BROADCASTED') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, {
            status: 'pending',
            confirmations: []
        }));
    }

    if (action.type === 'TX_CONFIRMAITON') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, (0, _extends7.default)({}, state[action.txHash], {
            confirmations: [].concat((0, _toConsumableArray3.default)(state[action.txHash].confirmations), [action.confirmationReceipt])
        })));
    }

    if (action.type === 'TX_SUCCESSFUL') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, (0, _extends7.default)({}, state[action.txHash], {
            status: 'success',
            receipt: action.receipt
        })));
    }

    if (action.type === 'TX_ERROR') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, (0, _extends7.default)({}, state[action.txHash], {
            status: 'error',
            error: action.error
        })));
    }

    return state;
};

exports.default = transactionsReducer;

/***/ }),

/***/ "./src/web3/web3Reducer.js":
/*!*********************************!*\
  !*** ./src/web3/web3Reducer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  status: ''
};

var web3Reducer = function web3Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'WEB3_INITIALIZING') {
    return (0, _extends3.default)({}, state, {
      status: 'initializing'
    });
  }

  if (action.type === 'WEB3_INITIALIZED') {
    return (0, _extends3.default)({}, state, {
      status: 'initialized'
    });
  }

  if (action.type === 'WEB3_FAILED') {
    return (0, _extends3.default)({}, state, {
      status: 'failed'
    });
  }

  if (action.type === 'NETWORK_ID_FETCHED') {
    return (0, _extends3.default)({}, state, {
      networkId: action.networkId,
      fallbackNetworkId: action.fallbackNetworkId
    });
  }

  if (action.type === 'NETWORK_ID_FAILED') {
    return (0, _extends3.default)({}, state, {
      networkId: action.networkId
    });
  }

  return state;
};

exports.default = web3Reducer;

/***/ }),

/***/ "./src/web3/web3Saga.js":
/*!******************************!*\
  !*** ./src/web3/web3Saga.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.initializeWeb3 = initializeWeb3;
exports.connectWebSocket = connectWebSocket;
exports.getNetworkId = getNetworkId;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(initializeWeb3),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(getNetworkId),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(callSendTx),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(web3Saga);

var Web3 = __webpack_require__(/*! web3 */ "web3");

/*
 * Initialization
 */

function initializeWeb3(_ref) {
  var options = _ref.options;
  var web3, fallback, provider;
  return _regenerator2.default.wrap(function initializeWeb3$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;


          // Checking if Web3 has been injected by the browser (Mist/MetaMask)
          if (typeof global.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider.
            web3 = new Web3(global.web3.currentProvider);
            web3.eth.cacheSendTransaction = function (txObject) {
              return (0, _effects.put)({ type: 'SEND_WEB3_TX', txObject: txObject, stackId: stackId, web3: web3 });
            };

            console.log('Injected web3 detected.');
          }

          if (!(options.fallback && options.fallback.url)) {
            _context.next = 19;
            break;
          }

          _context.t0 = options.fallback.type;
          _context.next = _context.t0 === 'ws' ? 6 : _context.t0 === 'https' ? 15 : _context.t0 === 'http' ? 15 : 19;
          break;

        case 6:
          console.log('Connecting ws provider.');
          provider = new Web3.providers.WebsocketProvider(options.fallback.url);


          fallback = new Web3(provider);

          provider.on('error', function (e) {
            return console.log('WS Error', e);
          });
          provider.on('end', function (e) {
            console.log('WS closed');
            console.log('Attempting to reconnect...');
            provider = new Web3.providers.WebsocketProvider(options.fallback.url);

            provider.on('connect', function () {
              // TODO trigger reconnect
              console.log('WSS Reconnected');
            });

            fallback.setProvider(provider);
          });

          _context.next = 13;
          return connectWebSocket(provider);

        case 13:

          // Attach drizzle functions
          fallback.eth['cacheSendTransaction'] = function (txObject) {
            return (0, _effects.put)({ type: 'SEND_WEB3_TX', txObject: txObject, stackId: stackId, web3: web3 });
          };

          return _context.abrupt('break', 19);

        case 15:
          console.log('Connecting fallback http provider.');
          provider = new Web3.providers.HttpProvider(options.fallback.url);

          provider.isHttp = true;
          fallback = new Web3(provider);

        case 19:
          if (!(!web3 && !fallback)) {
            _context.next = 21;
            break;
          }

          throw 'missing web3 privider';

        case 21:
          _context.next = 23;
          return (0, _effects.put)({ type: 'WEB3_INITIALIZED' });

        case 23:
          return _context.abrupt('return', { web3: web3, fallback: fallback });

        case 26:
          _context.prev = 26;
          _context.t1 = _context['catch'](0);
          _context.next = 30;
          return (0, _effects.put)({ type: 'WEB3_FAILED', error: _context.t1 });

        case 30:
          console.error('Error intializing web3:');
          console.error(_context.t1);

        case 32:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 26]]);
}

function connectWebSocket(provider) {
  return new _promise2.default(function (resolve, reject) {
    provider.on('connect', function (e) {
      return resolve();
    });
    provider.on('error', function (e) {
      return reject();
    });
  });
}

/*
 * Network ID
 */

function getNetworkId(_ref2) {
  var web3 = _ref2.web3,
      options = _ref2.options;
  var networkId, fallbackNetworkId;
  return _regenerator2.default.wrap(function getNetworkId$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (!web3) {
            _context2.next = 5;
            break;
          }

          _context2.next = 4;
          return (0, _effects.call)(web3.eth.net.getId);

        case 4:
          networkId = _context2.sent;

        case 5:

          if (options.fallback && options.fallback.networkId) fallbackNetworkId = options.fallback.networkId;

          _context2.next = 8;
          return (0, _effects.put)({ type: 'NETWORK_ID_FETCHED', networkId: networkId, fallbackNetworkId: fallbackNetworkId });

        case 8:
          return _context2.abrupt('return', networkId);

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 15;
          return (0, _effects.put)({ type: 'NETWORK_ID_FAILED', error: _context2.t0 });

        case 15:

          console.error('Error fetching network ID:');
          console.error(_context2.t0);

          return _context2.abrupt('return');

        case 18:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 11]]);
}

/*
 * Send Transaction
 */

function createTxChannel(_ref3) {
  var txObject = _ref3.txObject,
      stackId = _ref3.stackId,
      web3 = _ref3.web3;

  var persistTxHash;

  return eventChannel(function (emit) {
    var txPromiEvent = web3.eth.sendTransaction(txObject).on('transactionHash', function (txHash) {
      persistTxHash = txHash;

      emit({ type: 'W3TX_BROADCASTED', txHash: txHash, stackId: stackId });
    }).on('confirmation', function (confirmationNumber, receipt) {
      emit({ type: 'W3TX_CONFIRMAITON', confirmationReceipt: receipt, txHash: persistTxHash });
    }).on('receipt', function (receipt) {
      emit({ type: 'W3TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash });
      emit(END);
    }).on('error', function (error) {
      emit({ type: 'W3TX_ERROR', error: error, txHash: persistTxHash });
      emit(END);
    });

    var unsubscribe = function unsubscribe() {
      txPromiEvent.off();
    };

    return unsubscribe;
  });
}

function callSendTx(_ref4) {
  var txObject = _ref4.txObject,
      stackId = _ref4.stackId,
      web3 = _ref4.web3;
  var txChannel, event;
  return _regenerator2.default.wrap(function callSendTx$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.call)(createTxChannel, { txObject: txObject, stackId: stackId, web3: web3 });

        case 2:
          txChannel = _context3.sent;
          _context3.prev = 3;

        case 4:
          if (false) {}

          _context3.next = 7;
          return take(txChannel);

        case 7:
          event = _context3.sent;
          _context3.next = 10;
          return (0, _effects.put)(event);

        case 10:
          _context3.next = 4;
          break;

        case 12:
          _context3.prev = 12;

          txChannel.close();
          return _context3.finish(12);

        case 15:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[3,, 12, 15]]);
}

function web3Saga() {
  return _regenerator2.default.wrap(function web3Saga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeEvery)('SEND_WEB3_TX', callSendTx);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

exports.default = web3Saga;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_deepmerge__;

/***/ }),

/***/ "eth-block-tracker":
/*!****************************************!*\
  !*** external "eth-block-tracker-es5" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_eth_block_tracker__;

/***/ }),

/***/ "is-plain-object":
/*!**********************************!*\
  !*** external "is-plain-object" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_is_plain_object__;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux_saga__;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_web3__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcml6emxlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kcml6emxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2VmZmVjdHMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2J1ZmZlcnMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2lvLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy9mc21JdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VFdmVyeS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGFrZUxhdGVzdC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2RyaXp6bGUvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvRHJpenpsZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL0RyaXp6bGVDb250cmFjdC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1NhZ2EuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9hY2NvdW50cy9hY2NvdW50c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9ibG9ja3MvYmxvY2tzU2FnYS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvY29udHJhY3RzL2NvbnRyYWN0c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNTYWdhLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvZ2VuZXJhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2dldEFiaS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvbWVyZ2VPcHRpb25zLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL3Jvb3RTYWdhLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy93ZWIzL3dlYjNSZWR1Y2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvd2ViMy93ZWIzU2FnYS5qcyIsIndlYnBhY2s6Ly9kcml6emxlL2V4dGVybmFsIFwiZGVlcG1lcmdlXCIiLCJ3ZWJwYWNrOi8vZHJpenpsZS9leHRlcm5hbCBcImV0aC1ibG9jay10cmFja2VyLWVzNVwiIiwid2VicGFjazovL2RyaXp6bGUvZXh0ZXJuYWwgXCJpcy1wbGFpbi1vYmplY3RcIiIsIndlYnBhY2s6Ly9kcml6emxlL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9kcml6emxlL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovL2RyaXp6bGUvZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsid2luZG93UHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJEcml6emxlIiwib3B0aW9ucyIsInN0b3JlIiwiY29udHJhY3RzIiwiY29udHJhY3RMaXN0Iiwid2ViMyIsImxvYWRpbmdDb250cmFjdCIsImFkZENvbnRyYWN0IiwiYmluZCIsInRoZW4iLCJkaXNwYXRjaCIsInR5cGUiLCJkcml6emxlIiwiY29udHJhY3RDb25maWciLCJuYW1lIiwiY29udHJhY3ROYW1lIiwiZXZlbnRzIiwiZmFsbGJhY2siLCJhZGRyZXNzIiwiZHJpenpsZUNvbnRyYWN0IiwicHVzaCIsImZpbmQiLCJjb250cmFjdCIsInRvTG93ZXJDYXNlIiwiRHJpenpsZUNvbnRyYWN0Iiwid2ViM0NvbnRyYWN0IiwiY29udHJhY3RBcnRpZmFjdCIsImZhbGxiYWNrQ29udHJhY3QiLCJhYmkiLCJqc29uSW50ZXJmYWNlIiwid2F0Y2hFdmVudHMiLCJpIiwibGVuZ3RoIiwiaXRlbSIsImNvbnN0YW50IiwibWV0aG9kcyIsImNhY2hlQ2FsbCIsImNhY2hlQ2FsbEZ1bmN0aW9uIiwiZnJvbUNhY2hlIiwiZnJvbUNhY2hlRnVuY3Rpb24iLCJjYWNoZVNlbmQiLCJjYWNoZVNlbmRGdW5jdGlvbiIsInN5bmNFdmVudHMiLCJibG9jayIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsImV2ZW50TmFtZSIsImV2ZW50T3B0aW9ucyIsImZuTmFtZSIsImZuSW5kZXgiLCJmbiIsImFyZ3NIYXNoIiwiYXJncyIsImFyZ3VtZW50cyIsImdlbmVyYXRlQXJnc0hhc2giLCJnZXRTdGF0ZSIsInN0YXRlIiwiZnVuY3Rpb25TdGF0ZSIsInZhbHVlIiwiaW5pdGlhbFN0YXRlIiwiaW5pdGlhbGl6ZWQiLCJzeW5jZWQiLCJzdGFja0lkIiwidHJhbnNhY3Rpb25TdGFjayIsImhhc2hTdHJpbmciLCJhcmdUb0hhc2giLCJ0b1N0cmluZyIsImhhc2hQaWVjZSIsInV0aWxzIiwic2hhMyIsImFjY291bnRCYWxhbmNlc1JlZHVjZXIiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsImFjY291bnQiLCJhY2NvdW50QmFsYW5jZSIsImdldEFjY291bnRCYWxhbmNlcyIsImFjY291bnRCYWxhbmNlc1NhZ2EiLCJnZXRBY2NvdW50c1N0YXRlIiwiYWNjb3VudHMiLCJlcnJvciIsImV0aCIsImdldEJhbGFuY2UiLCJhY2NvdW50c1JlZHVjZXIiLCJuZWVkc1VwZGF0ZSIsImFjYyIsImludGVyc2VjdCIsImZpbHRlciIsImluY2x1ZGVzIiwieCIsImdldEFjY291bnRzIiwiY3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCIsImNhbGxDcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsIiwiY2FsbEdldEJhbGFuY2VzIiwiY2FsbEdldEFjY291bnRCYWxhbmNlIiwiYWNjb3VudHNTYWdhIiwiaW50ZXJ2YWwiLCJwZXJzaXN0ZWRXZWIzIiwiYWNjb3VudHNQb2xsZXIiLCJzZXRJbnRlcnZhbCIsImVtaXQiLCJ1bnN1YnNjcmliZSIsImNsZWFySW50ZXJ2YWwiLCJhY2NvdW50c0NoYW5uZWwiLCJjbG9zZSIsImFsbCIsIm1hcCIsImJhbGFuY2VzIiwiYmFsYW5jZSIsImNhbGxDcmVhdGVCbG9ja0NoYW5uZWwiLCJjYWxsQ3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCIsInByb2Nlc3NCbG9ja0hlYWRlciIsInByb2Nlc3NCbG9jayIsImJsb2Nrc1NhZ2EiLCJCbG9ja1RyYWNrZXIiLCJyZXF1aXJlIiwiY3JlYXRlQmxvY2tDaGFubmVsIiwic3luY0Fsd2F5cyIsImJsb2NrRXZlbnRzIiwic3Vic2NyaWJlIiwicmVzdWx0IiwiRU5EIiwib24iLCJibG9ja0hlYWRlciIsIm9mZiIsImJsb2NrQ2hhbm5lbCIsImNyZWF0ZUJsb2NrUG9sbENoYW5uZWwiLCJibG9ja1RyYWNrZXIiLCJwcm92aWRlciIsImN1cnJlbnRQcm92aWRlciIsInBvbGxpbmdJbnRlcnZhbCIsInN0YXJ0IiwiY2F0Y2giLCJzdG9wIiwiYmxvY2tOdW1iZXIiLCJudW1iZXIiLCJnZXRCbG9jayIsIkVycm9yIiwia2V5IiwidHhzIiwidHJhbnNhY3Rpb25zIiwiZnJvbSIsImZyb21Db250cmFjdCIsImZpbmRDb250cmFjdEJ5QWRkcmVzcyIsInRvIiwidG9Db250cmFjdCIsImNvbnRyYWN0c1JlZHVjZXIiLCJzeW5jaW5nIiwidmFyaWFibGUiLCJpbnN0YW50aWF0ZVdlYjNDb250cmFjdCIsImluc3RhbnRpYXRlQ29udHJhY3QiLCJjYWxsTGlzdGVuRm9yQ29udHJhY3RFdmVudCIsImNhbGxHZXRDb250cmFjdEV2ZW50IiwiY2FsbFNlbmRDb250cmFjdFR4IiwiY2FsbENhbGxDb250cmFjdEZuIiwiY2FsbFN5bmNDb250cmFjdCIsImNvbnRyYWN0c1NhZ2EiLCJfYWRkQ29udHJhY3QiLCJnZXROZXR3b3JrSWQiLCJuZXR3b3JrSWQiLCJnZXRGYWxsYmFja05ldHdvcmtJZCIsImZhbGxiYWNrTmV0d29ya0lkIiwiQ29udHJhY3QiLCJuZXR3b3JrcyIsImRhdGEiLCJkZXBsb3llZEJ5dGVjb2RlIiwiY3JlYXRlQ29udHJhY3RFdmVudENoYW5uZWwiLCJldmVudEVuYWJsZWRDb250cmFjdCIsImV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRyYWN0RXZlbnRDaGFubmVsIiwiZnJvbUJsb2NrIiwiZ2V0UGFzdEV2ZW50cyIsInRvQmxvY2siLCJjcmVhdGVUeENoYW5uZWwiLCJ0eE9iamVjdCIsInNlbmRBcmdzIiwicGVyc2lzdFR4SGFzaCIsInR4UHJvbWlFdmVudCIsInNlbmQiLCJ0eEhhc2giLCJjb25maXJtYXRpb25OdW1iZXIiLCJyZWNlaXB0IiwiY29uZmlybWF0aW9uUmVjZWlwdCIsImZpbmFsQXJnIiwiZmluYWxBcmdUZXN0IiwiaXNTZW5kT3JDYWxsT3B0aW9ucyIsImNhbGwiLCJ0eENoYW5uZWwiLCJzeW5jIiwiY2FsbEFyZ3MiLCJjYWxsUmVzdWx0IiwiZGlzcGF0Y2hBcmdzIiwiZXJyb3JBcmdzIiwiZ2V0Q29udHJhY3RzU3RhdGUiLCJjb250cmFjdHNTdGF0ZSIsImNvbnRyYWN0Rm5zU3RhdGUiLCJkZWZhdWx0T3B0aW9ucyIsInBvbGxzIiwiYmxvY2tzIiwiZHJpenpsZVN0YXR1c1JlZHVjZXIiLCJ3YXJuaW5nIiwibWVzc2FnZSIsImluaXRpYWxpemVEcml6emxlIiwiZHJpenpsZVN0YXR1c1NhZ2EiLCJ3ZWIzT3B0aW9ucyIsImluaXRpYWxpemVXZWIzIiwiaXNQb3J0aXMiLCJpc01ldGFNYXNrIiwiaXNIdHRwIiwibWF0Y2giLCJnZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlIiwiaTIiLCJnZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSIsImNvbnRyYWN0c0luaXRpYWxTdGF0ZSIsImdlbmVyYXRlU3RvcmUiLCJjb21wb3NlRW5oYW5jZXJzIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiY29tcG9zZSIsInByZWxvYWRlZFN0YXRlIiwic2FnYU1pZGRsZXdhcmUiLCJyZWR1Y2VyIiwicnVuIiwicm9vdFNhZ2EiLCJnZXRBYmkiLCJjb250cmFjdEVudHJ5IiwiZHJpenpsZVJlZHVjZXJzIiwiYWNjb3VudEJhbGFuY2VzIiwiZHJpenpsZVN0YXR1cyIsInRyYW5zYWN0aW9uc1JlZHVjZXIiLCJ0cmFuc2FjdGlvblN0YWNrUmVkdWNlciIsIndlYjNSZWR1Y2VyIiwiZHJpenpsZVNhZ2FzIiwid2ViM1NhZ2EiLCJuZXdPcHRpb25zIiwiaXNNZXJnZWFibGVPYmplY3QiLCJpc1BsYWluT2JqZWN0Iiwicm9vdCIsInBvcCIsInN0YXR1cyIsImNvbmZpcm1hdGlvbnMiLCJjb25uZWN0V2ViU29ja2V0IiwiY2FsbFNlbmRUeCIsIldlYjMiLCJnbG9iYWwiLCJjYWNoZVNlbmRUcmFuc2FjdGlvbiIsInVybCIsInByb3ZpZGVycyIsIldlYnNvY2tldFByb3ZpZGVyIiwiZSIsInNldFByb3ZpZGVyIiwiSHR0cFByb3ZpZGVyIiwibmV0IiwiZ2V0SWQiLCJldmVudENoYW5uZWwiLCJzZW5kVHJhbnNhY3Rpb24iLCJ0YWtlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsc0ZBQStCLHNCOzs7Ozs7Ozs7OztBQ0FyRSxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLDhGQUFtQyxzQjs7Ozs7Ozs7Ozs7QUNBekUsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQyw0RkFBa0Msc0I7Ozs7Ozs7Ozs7O0FDQXhFLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsOEdBQTJDLHNC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Q0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFL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QUFzQixFQUFDQyxrQkFBRCxFQUFXaEgsZ0JBQVgsRUFBb0IxRCxVQUFwQixFQUF0QixDQUQxQjs7QUFBQTtBQUNRdUwsbUJBRFI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBS3dCb0UsS0FBS3BFLFNBQUwsQ0FMeEI7O0FBQUE7QUFLVTlJLGVBTFY7QUFBQTtBQUFBLGlCQU1ZLGtCQUFJQSxLQUFKLENBTlo7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBU0k4SSxvQkFBVXBGLEtBQVY7QUFUSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQSxTQUFVaUksUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFUSx3QkFBVSxjQUFWLEVBQTBCUyxVQUExQixDQUZSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztrQkFLZVQsUTs7Ozs7Ozs7Ozs7O0FDeEtmLHVEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6ImRyaXp6bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkZWVwbWVyZ2VcIiksIHJlcXVpcmUoXCJldGgtYmxvY2stdHJhY2tlci1lczVcIiksIHJlcXVpcmUoXCJpcy1wbGFpbi1vYmplY3RcIiksIHJlcXVpcmUoXCJyZWR1eFwiKSwgcmVxdWlyZShcInJlZHV4LXNhZ2FcIiksIHJlcXVpcmUoXCJ3ZWIzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImRlZXBtZXJnZVwiLCBcImV0aC1ibG9jay10cmFja2VyLWVzNVwiLCBcImlzLXBsYWluLW9iamVjdFwiLCBcInJlZHV4XCIsIFwicmVkdXgtc2FnYVwiLCBcIndlYjNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpenpsZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImRlZXBtZXJnZVwiKSwgcmVxdWlyZShcImV0aC1ibG9jay10cmFja2VyLWVzNVwiKSwgcmVxdWlyZShcImlzLXBsYWluLW9iamVjdFwiKSwgcmVxdWlyZShcInJlZHV4XCIpLCByZXF1aXJlKFwicmVkdXgtc2FnYVwiKSwgcmVxdWlyZShcIndlYjNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXp6bGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJkZWVwbWVyZ2VcIl0sIHJvb3RbXCJldGgtYmxvY2stdHJhY2tlci1lczVcIl0sIHJvb3RbXCJpcy1wbGFpbi1vYmplY3RcIl0sIHJvb3RbXCJyZWR1eFwiXSwgcm9vdFtcInJlZHV4LXNhZ2FcIl0sIHJvb3RbXCJ3ZWIzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2RlZXBtZXJnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2V0aF9ibG9ja190cmFja2VyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfaXNfcGxhaW5fb2JqZWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVkdXhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWR1eF9zYWdhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd2ViM19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImV4cG9ydCB7IHRha2UsIHRha2VtLCBwdXQsIGFsbCwgcmFjZSwgY2FsbCwgYXBwbHksIGNwcywgZm9yaywgc3Bhd24sIGpvaW4sIGNhbmNlbCwgc2VsZWN0LCBhY3Rpb25DaGFubmVsLCBjYW5jZWxsZWQsIGZsdXNoLCBnZXRDb250ZXh0LCBzZXRDb250ZXh0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAnLi9pbnRlcm5hbC9pbyc7IiwiaW1wb3J0IHsga1RydWUsIG5vb3AgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IHZhciBCVUZGRVJfT1ZFUkZMT1cgPSBcIkNoYW5uZWwncyBCdWZmZXIgb3ZlcmZsb3chXCI7XG5cbnZhciBPTl9PVkVSRkxPV19USFJPVyA9IDE7XG52YXIgT05fT1ZFUkZMT1dfRFJPUCA9IDI7XG52YXIgT05fT1ZFUkZMT1dfU0xJREUgPSAzO1xudmFyIE9OX09WRVJGTE9XX0VYUEFORCA9IDQ7XG5cbnZhciB6ZXJvQnVmZmVyID0geyBpc0VtcHR5OiBrVHJ1ZSwgcHV0OiBub29wLCB0YWtlOiBub29wIH07XG5cbmZ1bmN0aW9uIHJpbmdCdWZmZXIoKSB7XG4gIHZhciBsaW1pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMTA7XG4gIHZhciBvdmVyZmxvd0FjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgYXJyID0gbmV3IEFycmF5KGxpbWl0KTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBwdXNoSW5kZXggPSAwO1xuICB2YXIgcG9wSW5kZXggPSAwO1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChpdCkge1xuICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgcHVzaEluZGV4ID0gKHB1c2hJbmRleCArIDEpICUgbGltaXQ7XG4gICAgbGVuZ3RoKys7XG4gIH07XG5cbiAgdmFyIHRha2UgPSBmdW5jdGlvbiB0YWtlKCkge1xuICAgIGlmIChsZW5ndGggIT0gMCkge1xuICAgICAgdmFyIGl0ID0gYXJyW3BvcEluZGV4XTtcbiAgICAgIGFycltwb3BJbmRleF0gPSBudWxsO1xuICAgICAgbGVuZ3RoLS07XG4gICAgICBwb3BJbmRleCA9IChwb3BJbmRleCArIDEpICUgbGltaXQ7XG4gICAgICByZXR1cm4gaXQ7XG4gICAgfVxuICB9O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHdoaWxlIChsZW5ndGgpIHtcbiAgICAgIGl0ZW1zLnB1c2godGFrZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNFbXB0eTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICAgIHJldHVybiBsZW5ndGggPT0gMDtcbiAgICB9LFxuICAgIHB1dDogZnVuY3Rpb24gcHV0KGl0KSB7XG4gICAgICBpZiAobGVuZ3RoIDwgbGltaXQpIHtcbiAgICAgICAgcHVzaChpdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZG91YmxlZExpbWl0ID0gdm9pZCAwO1xuICAgICAgICBzd2l0Y2ggKG92ZXJmbG93QWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19USFJPVzpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihCVUZGRVJfT1ZFUkZMT1cpO1xuICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfU0xJREU6XG4gICAgICAgICAgICBhcnJbcHVzaEluZGV4XSA9IGl0O1xuICAgICAgICAgICAgcHVzaEluZGV4ID0gKHB1c2hJbmRleCArIDEpICUgbGltaXQ7XG4gICAgICAgICAgICBwb3BJbmRleCA9IHB1c2hJbmRleDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfRVhQQU5EOlxuICAgICAgICAgICAgZG91YmxlZExpbWl0ID0gMiAqIGxpbWl0O1xuXG4gICAgICAgICAgICBhcnIgPSBmbHVzaCgpO1xuXG4gICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcHVzaEluZGV4ID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gMDtcblxuICAgICAgICAgICAgYXJyLmxlbmd0aCA9IGRvdWJsZWRMaW1pdDtcbiAgICAgICAgICAgIGxpbWl0ID0gZG91YmxlZExpbWl0O1xuXG4gICAgICAgICAgICBwdXNoKGl0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gRFJPUFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWtlOiB0YWtlLFxuICAgIGZsdXNoOiBmbHVzaFxuICB9O1xufVxuXG5leHBvcnQgdmFyIGJ1ZmZlcnMgPSB7XG4gIG5vbmU6IGZ1bmN0aW9uIG5vbmUoKSB7XG4gICAgcmV0dXJuIHplcm9CdWZmZXI7XG4gIH0sXG4gIGZpeGVkOiBmdW5jdGlvbiBmaXhlZChsaW1pdCkge1xuICAgIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19USFJPVyk7XG4gIH0sXG4gIGRyb3BwaW5nOiBmdW5jdGlvbiBkcm9wcGluZyhsaW1pdCkge1xuICAgIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19EUk9QKTtcbiAgfSxcbiAgc2xpZGluZzogZnVuY3Rpb24gc2xpZGluZyhsaW1pdCkge1xuICAgIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19TTElERSk7XG4gIH0sXG4gIGV4cGFuZGluZzogZnVuY3Rpb24gZXhwYW5kaW5nKGluaXRpYWxTaXplKSB7XG4gICAgcmV0dXJuIHJpbmdCdWZmZXIoaW5pdGlhbFNpemUsIE9OX09WRVJGTE9XX0VYUEFORCk7XG4gIH1cbn07IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuaW1wb3J0IHsgaXMsIGNoZWNrLCByZW1vdmUsIE1BVENILCBpbnRlcm5hbEVyciwgU0FHQV9BQ1RJT04gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGJ1ZmZlcnMgfSBmcm9tICcuL2J1ZmZlcnMnO1xuaW1wb3J0IHsgYXNhcCB9IGZyb20gJy4vc2NoZWR1bGVyJztcblxudmFyIENIQU5ORUxfRU5EX1RZUEUgPSAnQEByZWR1eC1zYWdhL0NIQU5ORUxfRU5EJztcbmV4cG9ydCB2YXIgRU5EID0geyB0eXBlOiBDSEFOTkVMX0VORF9UWVBFIH07XG5leHBvcnQgdmFyIGlzRW5kID0gZnVuY3Rpb24gaXNFbmQoYSkge1xuICByZXR1cm4gYSAmJiBhLnR5cGUgPT09IENIQU5ORUxfRU5EX1RZUEU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdHRlcigpIHtcbiAgdmFyIHN1YnNjcmliZXJzID0gW107XG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKHN1Yikge1xuICAgIHN1YnNjcmliZXJzLnB1c2goc3ViKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlbW92ZShzdWJzY3JpYmVycywgc3ViKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChpdGVtKSB7XG4gICAgdmFyIGFyciA9IHN1YnNjcmliZXJzLnNsaWNlKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJyW2ldKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZW1pdDogZW1pdFxuICB9O1xufVxuXG5leHBvcnQgdmFyIElOVkFMSURfQlVGRkVSID0gJ2ludmFsaWQgYnVmZmVyIHBhc3NlZCB0byBjaGFubmVsIGZhY3RvcnkgZnVuY3Rpb24nO1xuZXhwb3J0IHZhciBVTkRFRklORURfSU5QVVRfRVJST1IgPSAnU2FnYSB3YXMgcHJvdmlkZWQgd2l0aCBhbiB1bmRlZmluZWQgYWN0aW9uJztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVU5ERUZJTkVEX0lOUFVUX0VSUk9SICs9ICdcXG5IaW50czpcXG4gICAgLSBjaGVjayB0aGF0IHlvdXIgQWN0aW9uIENyZWF0b3IgcmV0dXJucyBhIG5vbi11bmRlZmluZWQgdmFsdWVcXG4gICAgLSBpZiB0aGUgU2FnYSB3YXMgc3RhcnRlZCB1c2luZyBydW5TYWdhLCBjaGVjayB0aGF0IHlvdXIgc3Vic2NyaWJlIHNvdXJjZSBwcm92aWRlcyB0aGUgYWN0aW9uIHRvIGl0cyBsaXN0ZW5lcnNcXG4gICc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFubmVsKCkge1xuICB2YXIgYnVmZmVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBidWZmZXJzLmZpeGVkKCk7XG5cbiAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICB2YXIgdGFrZXJzID0gW107XG5cbiAgY2hlY2soYnVmZmVyLCBpcy5idWZmZXIsIElOVkFMSURfQlVGRkVSKTtcblxuICBmdW5jdGlvbiBjaGVja0ZvcmJpZGRlblN0YXRlcygpIHtcbiAgICBpZiAoY2xvc2VkICYmIHRha2Vycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyKCdDYW5ub3QgaGF2ZSBhIGNsb3NlZCBjaGFubmVsIHdpdGggcGVuZGluZyB0YWtlcnMnKTtcbiAgICB9XG4gICAgaWYgKHRha2Vycy5sZW5ndGggJiYgIWJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyKCdDYW5ub3QgaGF2ZSBwZW5kaW5nIHRha2VycyB3aXRoIG5vbiBlbXB0eSBidWZmZXInKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwdXQoaW5wdXQpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgIGNoZWNrKGlucHV0LCBpcy5ub3RVbmRlZiwgVU5ERUZJTkVEX0lOUFVUX0VSUk9SKTtcbiAgICBpZiAoY2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGFrZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGJ1ZmZlci5wdXQoaW5wdXQpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRha2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNiID0gdGFrZXJzW2ldO1xuICAgICAgaWYgKCFjYltNQVRDSF0gfHwgY2JbTUFUQ0hdKGlucHV0KSkge1xuICAgICAgICB0YWtlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gY2IoaW5wdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRha2UoY2IpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgIGNoZWNrKGNiLCBpcy5mdW5jLCBcImNoYW5uZWwudGFrZSdzIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcblxuICAgIGlmIChjbG9zZWQgJiYgYnVmZmVyLmlzRW1wdHkoKSkge1xuICAgICAgY2IoRU5EKTtcbiAgICB9IGVsc2UgaWYgKCFidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICBjYihidWZmZXIudGFrZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFrZXJzLnB1c2goY2IpO1xuICAgICAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlKHRha2VycywgY2IpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaChjYikge1xuICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7IC8vIFRPRE86IGNoZWNrIGlmIHNvbWUgbmV3IHN0YXRlIHNob3VsZCBiZSBmb3JiaWRkZW4gbm93XG4gICAgY2hlY2soY2IsIGlzLmZ1bmMsIFwiY2hhbm5lbC5mbHVzaCcgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIGlmIChjbG9zZWQgJiYgYnVmZmVyLmlzRW1wdHkoKSkge1xuICAgICAgY2IoRU5EKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2IoYnVmZmVyLmZsdXNoKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICBpZiAoIWNsb3NlZCkge1xuICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh0YWtlcnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBhcnIgPSB0YWtlcnM7XG4gICAgICAgIHRha2VycyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgYXJyW2ldKEVORCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRha2U6IHRha2UsXG4gICAgcHV0OiBwdXQsXG4gICAgZmx1c2g6IGZsdXNoLFxuICAgIGNsb3NlOiBjbG9zZSxcbiAgICBnZXQgX190YWtlcnNfXygpIHtcbiAgICAgIHJldHVybiB0YWtlcnM7XG4gICAgfSxcbiAgICBnZXQgX19jbG9zZWRfXygpIHtcbiAgICAgIHJldHVybiBjbG9zZWQ7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRDaGFubmVsKHN1YnNjcmliZSkge1xuICB2YXIgYnVmZmVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBidWZmZXJzLm5vbmUoKTtcbiAgdmFyIG1hdGNoZXIgPSBhcmd1bWVudHNbMl07XG5cbiAgLyoqXG4gICAgc2hvdWxkIGJlIGlmKHR5cGVvZiBtYXRjaGVyICE9PSB1bmRlZmluZWQpIGluc3RlYWQ/XG4gICAgc2VlIFBSICMyNzMgZm9yIGEgYmFja2dyb3VuZCBkaXNjdXNzaW9uXG4gICoqL1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICBjaGVjayhtYXRjaGVyLCBpcy5mdW5jLCAnSW52YWxpZCBtYXRjaCBmdW5jdGlvbiBwYXNzZWQgdG8gZXZlbnRDaGFubmVsJyk7XG4gIH1cblxuICB2YXIgY2hhbiA9IGNoYW5uZWwoYnVmZmVyKTtcbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgaWYgKCFjaGFuLl9fY2xvc2VkX18pIHtcbiAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgY2hhbi5jbG9zZSgpO1xuICAgIH1cbiAgfTtcbiAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmIChpc0VuZChpbnB1dCkpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtYXRjaGVyICYmICFtYXRjaGVyKGlucHV0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaGFuLnB1dChpbnB1dCk7XG4gIH0pO1xuICBpZiAoY2hhbi5fX2Nsb3NlZF9fKSB7XG4gICAgdW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGlmICghaXMuZnVuYyh1bnN1YnNjcmliZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2luIGV2ZW50Q2hhbm5lbDogc3Vic2NyaWJlIHNob3VsZCByZXR1cm4gYSBmdW5jdGlvbiB0byB1bnN1YnNjcmliZScpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YWtlOiBjaGFuLnRha2UsXG4gICAgZmx1c2g6IGNoYW4uZmx1c2gsXG4gICAgY2xvc2U6IGNsb3NlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGRDaGFubmVsKHN1YnNjcmliZSkge1xuICB2YXIgY2hhbiA9IGV2ZW50Q2hhbm5lbChmdW5jdGlvbiAoY2IpIHtcbiAgICByZXR1cm4gc3Vic2NyaWJlKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgaWYgKGlucHV0W1NBR0FfQUNUSU9OXSkge1xuICAgICAgICBjYihpbnB1dCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2IoaW5wdXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgY2hhbiwge1xuICAgIHRha2U6IGZ1bmN0aW9uIHRha2UoY2IsIG1hdGNoZXIpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBjaGVjayhtYXRjaGVyLCBpcy5mdW5jLCBcImNoYW5uZWwudGFrZSdzIG1hdGNoZXIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICBjYltNQVRDSF0gPSBtYXRjaGVyO1xuICAgICAgfVxuICAgICAgY2hhbi50YWtlKGNiKTtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IHN5bSwgaXMsIGlkZW50LCBjaGVjaywgZGVwcmVjYXRlLCB1cGRhdGVJbmNlbnRpdmUsIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nLCBTRUxGX0NBTkNFTExBVElPTiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgdGFrZUV2ZXJ5SGVscGVyLCB0YWtlTGF0ZXN0SGVscGVyLCB0aHJvdHRsZUhlbHBlciB9IGZyb20gJy4vc2FnYUhlbHBlcnMnO1xuXG52YXIgSU8gPSBzeW0oJ0lPJyk7XG52YXIgVEFLRSA9ICdUQUtFJztcbnZhciBQVVQgPSAnUFVUJztcbnZhciBBTEwgPSAnQUxMJztcbnZhciBSQUNFID0gJ1JBQ0UnO1xudmFyIENBTEwgPSAnQ0FMTCc7XG52YXIgQ1BTID0gJ0NQUyc7XG52YXIgRk9SSyA9ICdGT1JLJztcbnZhciBKT0lOID0gJ0pPSU4nO1xudmFyIENBTkNFTCA9ICdDQU5DRUwnO1xudmFyIFNFTEVDVCA9ICdTRUxFQ1QnO1xudmFyIEFDVElPTl9DSEFOTkVMID0gJ0FDVElPTl9DSEFOTkVMJztcbnZhciBDQU5DRUxMRUQgPSAnQ0FOQ0VMTEVEJztcbnZhciBGTFVTSCA9ICdGTFVTSCc7XG52YXIgR0VUX0NPTlRFWFQgPSAnR0VUX0NPTlRFWFQnO1xudmFyIFNFVF9DT05URVhUID0gJ1NFVF9DT05URVhUJztcblxudmFyIFRFU1RfSElOVCA9ICdcXG4oSElOVDogaWYgeW91IGFyZSBnZXR0aW5nIHRoaXMgZXJyb3JzIGluIHRlc3RzLCBjb25zaWRlciB1c2luZyBjcmVhdGVNb2NrVGFzayBmcm9tIHJlZHV4LXNhZ2EvdXRpbHMpJztcblxudmFyIGVmZmVjdCA9IGZ1bmN0aW9uIGVmZmVjdCh0eXBlLCBwYXlsb2FkKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbSU9dID0gdHJ1ZSwgX3JlZlt0eXBlXSA9IHBheWxvYWQsIF9yZWY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGFrZSgpIHtcbiAgdmFyIHBhdHRlcm5PckNoYW5uZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcqJztcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNoZWNrKGFyZ3VtZW50c1swXSwgaXMubm90VW5kZWYsICd0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBwYXR0ZXJuT3JDaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICB9XG4gIGlmIChpcy5wYXR0ZXJuKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIGVmZmVjdChUQUtFLCB7IHBhdHRlcm46IHBhdHRlcm5PckNoYW5uZWwgfSk7XG4gIH1cbiAgaWYgKGlzLmNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gZWZmZWN0KFRBS0UsIHsgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbCB9KTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3Rha2UocGF0dGVybk9yQ2hhbm5lbCk6IGFyZ3VtZW50ICcgKyBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCkgKyAnIGlzIG5vdCB2YWxpZCBjaGFubmVsIG9yIGEgdmFsaWQgcGF0dGVybicpO1xufVxuXG50YWtlLm1heWJlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWZmID0gdGFrZS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIGVmZltUQUtFXS5tYXliZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuXG5leHBvcnQgdmFyIHRha2VtID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZSh0YWtlLm1heWJlLCAvKiNfX1BVUkVfXyovdXBkYXRlSW5jZW50aXZlKCd0YWtlbScsICd0YWtlLm1heWJlJykpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHV0KGNoYW5uZWwsIGFjdGlvbikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBjaGVjayhjaGFubmVsLCBpcy5ub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBjaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICAgIGNoZWNrKGNoYW5uZWwsIGlzLmNoYW5uZWwsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCBhIHZhbGlkIGNoYW5uZWwnKTtcbiAgICBjaGVjayhhY3Rpb24sIGlzLm5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVjayhjaGFubmVsLCBpcy5ub3RVbmRlZiwgJ3B1dChhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gICAgYWN0aW9uID0gY2hhbm5lbDtcbiAgICBjaGFubmVsID0gbnVsbDtcbiAgfVxuICByZXR1cm4gZWZmZWN0KFBVVCwgeyBjaGFubmVsOiBjaGFubmVsLCBhY3Rpb246IGFjdGlvbiB9KTtcbn1cblxucHV0LnJlc29sdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZmYgPSBwdXQuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICBlZmZbUFVUXS5yZXNvbHZlID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn07XG5cbnB1dC5zeW5jID0gZGVwcmVjYXRlKHB1dC5yZXNvbHZlLCB1cGRhdGVJbmNlbnRpdmUoJ3B1dC5zeW5jJywgJ3B1dC5yZXNvbHZlJykpO1xuXG5leHBvcnQgZnVuY3Rpb24gYWxsKGVmZmVjdHMpIHtcbiAgcmV0dXJuIGVmZmVjdChBTEwsIGVmZmVjdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFjZShlZmZlY3RzKSB7XG4gIHJldHVybiBlZmZlY3QoUkFDRSwgZWZmZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGdldEZuQ2FsbERlc2MobWV0aCwgZm4sIGFyZ3MpIHtcbiAgY2hlY2soZm4sIGlzLm5vdFVuZGVmLCBtZXRoICsgJzogYXJndW1lbnQgZm4gaXMgdW5kZWZpbmVkJyk7XG5cbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICBpZiAoaXMuYXJyYXkoZm4pKSB7XG4gICAgdmFyIF9mbiA9IGZuO1xuICAgIGNvbnRleHQgPSBfZm5bMF07XG4gICAgZm4gPSBfZm5bMV07XG4gIH0gZWxzZSBpZiAoZm4uZm4pIHtcbiAgICB2YXIgX2ZuMiA9IGZuO1xuICAgIGNvbnRleHQgPSBfZm4yLmNvbnRleHQ7XG4gICAgZm4gPSBfZm4yLmZuO1xuICB9XG4gIGlmIChjb250ZXh0ICYmIGlzLnN0cmluZyhmbikgJiYgaXMuZnVuYyhjb250ZXh0W2ZuXSkpIHtcbiAgICBmbiA9IGNvbnRleHRbZm5dO1xuICB9XG4gIGNoZWNrKGZuLCBpcy5mdW5jLCBtZXRoICsgJzogYXJndW1lbnQgJyArIGZuICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXG4gIHJldHVybiB7IGNvbnRleHQ6IGNvbnRleHQsIGZuOiBmbiwgYXJnczogYXJncyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbChmbikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3QoQ0FMTCwgZ2V0Rm5DYWxsRGVzYygnY2FsbCcsIGZuLCBhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseShjb250ZXh0LCBmbikge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG5cbiAgcmV0dXJuIGVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjKCdhcHBseScsIHsgY29udGV4dDogY29udGV4dCwgZm46IGZuIH0sIGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNwcyhmbikge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3QoQ1BTLCBnZXRGbkNhbGxEZXNjKCdjcHMnLCBmbiwgYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yayhmbikge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3QoRk9SSywgZ2V0Rm5DYWxsRGVzYygnZm9yaycsIGZuLCBhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGF3bihmbikge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHZhciBlZmYgPSBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW2ZuXS5jb25jYXQoYXJncykpO1xuICBlZmZbRk9SS10uZGV0YWNoZWQgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9pbigpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCB0YXNrcyA9IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgdGFza3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIGlmICh0YXNrcy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIGFsbCh0YXNrcy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBqb2luKHQpO1xuICAgIH0pKTtcbiAgfVxuICB2YXIgdGFzayA9IHRhc2tzWzBdO1xuICBjaGVjayh0YXNrLCBpcy5ub3RVbmRlZiwgJ2pvaW4odGFzayk6IGFyZ3VtZW50IHRhc2sgaXMgdW5kZWZpbmVkJyk7XG4gIGNoZWNrKHRhc2ssIGlzLnRhc2ssICdqb2luKHRhc2spOiBhcmd1bWVudCAnICsgdGFzayArICcgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgJyArIFRFU1RfSElOVCk7XG4gIHJldHVybiBlZmZlY3QoSk9JTiwgdGFzayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgdGFza3MgPSBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgIHRhc2tzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICBpZiAodGFza3MubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiBhbGwodGFza3MubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gY2FuY2VsKHQpO1xuICAgIH0pKTtcbiAgfVxuICB2YXIgdGFzayA9IHRhc2tzWzBdO1xuICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgY2hlY2sodGFzaywgaXMubm90VW5kZWYsICdjYW5jZWwodGFzayk6IGFyZ3VtZW50IHRhc2sgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2sodGFzaywgaXMudGFzaywgJ2NhbmNlbCh0YXNrKTogYXJndW1lbnQgJyArIHRhc2sgKyAnIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0ICcgKyBURVNUX0hJTlQpO1xuICB9XG4gIHJldHVybiBlZmZlY3QoQ0FOQ0VMLCB0YXNrIHx8IFNFTEZfQ0FOQ0VMTEFUSU9OKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNyA+IDEgPyBfbGVuNyAtIDEgOiAwKSwgX2tleTcgPSAxOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXJnc1tfa2V5NyAtIDFdID0gYXJndW1lbnRzW19rZXk3XTtcbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgc2VsZWN0b3IgPSBpZGVudDtcbiAgfSBlbHNlIHtcbiAgICBjaGVjayhzZWxlY3RvciwgaXMubm90VW5kZWYsICdzZWxlY3Qoc2VsZWN0b3IsWy4uLl0pOiBhcmd1bWVudCBzZWxlY3RvciBpcyB1bmRlZmluZWQnKTtcbiAgICBjaGVjayhzZWxlY3RvciwgaXMuZnVuYywgJ3NlbGVjdChzZWxlY3RvcixbLi4uXSk6IGFyZ3VtZW50ICcgKyBzZWxlY3RvciArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0KFNFTEVDVCwgeyBzZWxlY3Rvcjogc2VsZWN0b3IsIGFyZ3M6IGFyZ3MgfSk7XG59XG5cbi8qKlxuICBjaGFubmVsKHBhdHRlcm4sIFtidWZmZXJdKSAgICA9PiBjcmVhdGVzIGFuIGV2ZW50IGNoYW5uZWwgZm9yIHN0b3JlIGFjdGlvbnNcbioqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKSB7XG4gIGNoZWNrKHBhdHRlcm4sIGlzLm5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLC4uLik6IGFyZ3VtZW50IHBhdHRlcm4gaXMgdW5kZWZpbmVkJyk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGNoZWNrKGJ1ZmZlciwgaXMubm90VW5kZWYsICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50IGJ1ZmZlciBpcyB1bmRlZmluZWQnKTtcbiAgICBjaGVjayhidWZmZXIsIGlzLmJ1ZmZlciwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKTogYXJndW1lbnQgJyArIGJ1ZmZlciArICcgaXMgbm90IGEgdmFsaWQgYnVmZmVyJyk7XG4gIH1cbiAgcmV0dXJuIGVmZmVjdChBQ1RJT05fQ0hBTk5FTCwgeyBwYXR0ZXJuOiBwYXR0ZXJuLCBidWZmZXI6IGJ1ZmZlciB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbGxlZCgpIHtcbiAgcmV0dXJuIGVmZmVjdChDQU5DRUxMRUQsIHt9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoKGNoYW5uZWwpIHtcbiAgY2hlY2soY2hhbm5lbCwgaXMuY2hhbm5lbCwgJ2ZsdXNoKGNoYW5uZWwpOiBhcmd1bWVudCAnICsgY2hhbm5lbCArICcgaXMgbm90IHZhbGlkIGNoYW5uZWwnKTtcbiAgcmV0dXJuIGVmZmVjdChGTFVTSCwgY2hhbm5lbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0KHByb3ApIHtcbiAgY2hlY2socHJvcCwgaXMuc3RyaW5nLCAnZ2V0Q29udGV4dChwcm9wKTogYXJndW1lbnQgJyArIHByb3AgKyAnIGlzIG5vdCBhIHN0cmluZycpO1xuICByZXR1cm4gZWZmZWN0KEdFVF9DT05URVhULCBwcm9wKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcbiAgY2hlY2socHJvcHMsIGlzLm9iamVjdCwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcobnVsbCwgcHJvcHMpKTtcbiAgcmV0dXJuIGVmZmVjdChTRVRfQ09OVEVYVCwgcHJvcHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuOCA+IDIgPyBfbGVuOCAtIDIgOiAwKSwgX2tleTggPSAyOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgYXJnc1tfa2V5OCAtIDJdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3Rha2VFdmVyeUhlbHBlciwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjkgPiAyID8gX2xlbjkgLSAyIDogMCksIF9rZXk5ID0gMjsgX2tleTkgPCBfbGVuOTsgX2tleTkrKykge1xuICAgIGFyZ3NbX2tleTkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh1bmRlZmluZWQsIFt0YWtlTGF0ZXN0SGVscGVyLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShtcywgcGF0dGVybiwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMTAgPiAzID8gX2xlbjEwIC0gMyA6IDApLCBfa2V5MTAgPSAzOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgYXJnc1tfa2V5MTAgLSAzXSA9IGFyZ3VtZW50c1tfa2V5MTBdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbdGhyb3R0bGVIZWxwZXIsIG1zLCBwYXR0ZXJuLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5cbnZhciBjcmVhdGVBc0VmZmVjdFR5cGUgPSBmdW5jdGlvbiBjcmVhdGVBc0VmZmVjdFR5cGUodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGVmZmVjdCkge1xuICAgIHJldHVybiBlZmZlY3QgJiYgZWZmZWN0W0lPXSAmJiBlZmZlY3RbdHlwZV07XG4gIH07XG59O1xuXG5leHBvcnQgdmFyIGFzRWZmZWN0ID0ge1xuICB0YWtlOiBjcmVhdGVBc0VmZmVjdFR5cGUoVEFLRSksXG4gIHB1dDogY3JlYXRlQXNFZmZlY3RUeXBlKFBVVCksXG4gIGFsbDogY3JlYXRlQXNFZmZlY3RUeXBlKEFMTCksXG4gIHJhY2U6IGNyZWF0ZUFzRWZmZWN0VHlwZShSQUNFKSxcbiAgY2FsbDogY3JlYXRlQXNFZmZlY3RUeXBlKENBTEwpLFxuICBjcHM6IGNyZWF0ZUFzRWZmZWN0VHlwZShDUFMpLFxuICBmb3JrOiBjcmVhdGVBc0VmZmVjdFR5cGUoRk9SSyksXG4gIGpvaW46IGNyZWF0ZUFzRWZmZWN0VHlwZShKT0lOKSxcbiAgY2FuY2VsOiBjcmVhdGVBc0VmZmVjdFR5cGUoQ0FOQ0VMKSxcbiAgc2VsZWN0OiBjcmVhdGVBc0VmZmVjdFR5cGUoU0VMRUNUKSxcbiAgYWN0aW9uQ2hhbm5lbDogY3JlYXRlQXNFZmZlY3RUeXBlKEFDVElPTl9DSEFOTkVMKSxcbiAgY2FuY2VsbGVkOiBjcmVhdGVBc0VmZmVjdFR5cGUoQ0FOQ0VMTEVEKSxcbiAgZmx1c2g6IGNyZWF0ZUFzRWZmZWN0VHlwZShGTFVTSCksXG4gIGdldENvbnRleHQ6IGNyZWF0ZUFzRWZmZWN0VHlwZShHRVRfQ09OVEVYVCksXG4gIHNldENvbnRleHQ6IGNyZWF0ZUFzRWZmZWN0VHlwZShTRVRfQ09OVEVYVClcbn07IiwiaW1wb3J0IHsgaXMsIG1ha2VJdGVyYXRvciB9IGZyb20gJy4uL3V0aWxzJztcblxudmFyIGRvbmUgPSB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfTtcbmV4cG9ydCB2YXIgcUVuZCA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkge1xuICBpZiAoaXMuY2hhbm5lbChwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiAnY2hhbm5lbCc7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbC5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGVudHJ5KTtcbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmc21JdGVyYXRvcihmc20sIHEwKSB7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnaXRlcmF0b3InO1xuXG4gIHZhciB1cGRhdGVTdGF0ZSA9IHZvaWQgMCxcbiAgICAgIHFOZXh0ID0gcTA7XG5cbiAgZnVuY3Rpb24gbmV4dChhcmcsIGVycm9yKSB7XG4gICAgaWYgKHFOZXh0ID09PSBxRW5kKSB7XG4gICAgICByZXR1cm4gZG9uZTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHFOZXh0ID0gcUVuZDtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVTdGF0ZSAmJiB1cGRhdGVTdGF0ZShhcmcpO1xuXG4gICAgICB2YXIgX2ZzbSRxTmV4dCA9IGZzbVtxTmV4dF0oKSxcbiAgICAgICAgICBxID0gX2ZzbSRxTmV4dFswXSxcbiAgICAgICAgICBvdXRwdXQgPSBfZnNtJHFOZXh0WzFdLFxuICAgICAgICAgIF91cGRhdGVTdGF0ZSA9IF9mc20kcU5leHRbMl07XG5cbiAgICAgIHFOZXh0ID0gcTtcbiAgICAgIHVwZGF0ZVN0YXRlID0gX3VwZGF0ZVN0YXRlO1xuICAgICAgcmV0dXJuIHFOZXh0ID09PSBxRW5kID8gZG9uZSA6IG91dHB1dDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFrZUl0ZXJhdG9yKG5leHQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KG51bGwsIGVycm9yKTtcbiAgfSwgbmFtZSwgdHJ1ZSk7XG59IiwiaW1wb3J0IHRha2VFdmVyeUhlbHBlciBmcm9tICcuL3Rha2VFdmVyeSc7XG5pbXBvcnQgdGFrZUxhdGVzdEhlbHBlciBmcm9tICcuL3Rha2VMYXRlc3QnO1xuaW1wb3J0IHRocm90dGxlSGVscGVyIGZyb20gJy4vdGhyb3R0bGUnO1xuXG5pbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi91dGlscyc7XG5cbnZhciBkZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiBkZXByZWNhdGlvbldhcm5pbmcoaGVscGVyTmFtZSkge1xuICByZXR1cm4gJ2ltcG9ydCB7ICcgKyBoZWxwZXJOYW1lICsgJyB9IGZyb20gXFwncmVkdXgtc2FnYVxcJyBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mIGltcG9ydCB7ICcgKyBoZWxwZXJOYW1lICsgJyB9IGZyb20gXFwncmVkdXgtc2FnYS9lZmZlY3RzXFwnLlxcblRoZSBsYXR0ZXIgd2lsbCBub3Qgd29yayB3aXRoIHlpZWxkKiwgYXMgaGVscGVyIGVmZmVjdHMgYXJlIHdyYXBwZWQgYXV0b21hdGljYWxseSBmb3IgeW91IGluIGZvcmsgZWZmZWN0LlxcblRoZXJlZm9yZSB5aWVsZCAnICsgaGVscGVyTmFtZSArICcgd2lsbCByZXR1cm4gdGFzayBkZXNjcmlwdG9yIHRvIHlvdXIgc2FnYSBhbmQgZXhlY3V0ZSBuZXh0IGxpbmVzIG9mIGNvZGUuJztcbn07XG5cbnZhciB0YWtlRXZlcnkgPSAvKiNfX1BVUkVfXyovZGVwcmVjYXRlKHRha2VFdmVyeUhlbHBlciwgLyojX19QVVJFX18qL2RlcHJlY2F0aW9uV2FybmluZygndGFrZUV2ZXJ5JykpO1xudmFyIHRha2VMYXRlc3QgPSAvKiNfX1BVUkVfXyovZGVwcmVjYXRlKHRha2VMYXRlc3RIZWxwZXIsIC8qI19fUFVSRV9fKi9kZXByZWNhdGlvbldhcm5pbmcoJ3Rha2VMYXRlc3QnKSk7XG52YXIgdGhyb3R0bGUgPSAvKiNfX1BVUkVfXyovZGVwcmVjYXRlKHRocm90dGxlSGVscGVyLCAvKiNfX1BVUkVfXyovZGVwcmVjYXRpb25XYXJuaW5nKCd0aHJvdHRsZScpKTtcblxuZXhwb3J0IHsgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgdGFrZUV2ZXJ5SGVscGVyLCB0YWtlTGF0ZXN0SGVscGVyLCB0aHJvdHRsZUhlbHBlciB9OyIsImltcG9ydCBmc21JdGVyYXRvciwgeyBxRW5kLCBzYWZlTmFtZSB9IGZyb20gJy4vZnNtSXRlcmF0b3InO1xuaW1wb3J0IHsgdGFrZSwgZm9yayB9IGZyb20gJy4uL2lvJztcbmltcG9ydCB7IEVORCB9IGZyb20gJy4uL2NoYW5uZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWtlRXZlcnkocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlUYWtlID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbCkgfTtcbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpIH07XG4gIH07XG5cbiAgdmFyIGFjdGlvbiA9IHZvaWQgMCxcbiAgICAgIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiBbJ3EyJywgeVRha2UsIHNldEFjdGlvbl07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4gYWN0aW9uID09PSBFTkQgPyBbcUVuZF0gOiBbJ3ExJywgeUZvcmsoYWN0aW9uKV07XG4gICAgfVxuICB9LCAncTEnLCAndGFrZUV2ZXJ5KCcgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArICcsICcgKyB3b3JrZXIubmFtZSArICcpJyk7XG59IiwiaW1wb3J0IGZzbUl0ZXJhdG9yLCB7IHFFbmQsIHNhZmVOYW1lIH0gZnJvbSAnLi9mc21JdGVyYXRvcic7XG5pbXBvcnQgeyBjYW5jZWwsIHRha2UsIGZvcmsgfSBmcm9tICcuLi9pbyc7XG5pbXBvcnQgeyBFTkQgfSBmcm9tICcuLi9jaGFubmVsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKSB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcbiAgfTtcbiAgdmFyIHlDYW5jZWwgPSBmdW5jdGlvbiB5Q2FuY2VsKHRhc2spIHtcbiAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IGNhbmNlbCh0YXNrKSB9O1xuICB9O1xuXG4gIHZhciB0YXNrID0gdm9pZCAwLFxuICAgICAgYWN0aW9uID0gdm9pZCAwO1xuICB2YXIgc2V0VGFzayA9IGZ1bmN0aW9uIHNldFRhc2sodCkge1xuICAgIHJldHVybiB0YXNrID0gdDtcbiAgfTtcbiAgdmFyIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiBbJ3EyJywgeVRha2UsIHNldEFjdGlvbl07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4gYWN0aW9uID09PSBFTkQgPyBbcUVuZF0gOiB0YXNrID8gWydxMycsIHlDYW5jZWwodGFzayldIDogWydxMScsIHlGb3JrKGFjdGlvbiksIHNldFRhc2tdO1xuICAgIH0sXG4gICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuICAgICAgcmV0dXJuIFsncTEnLCB5Rm9yayhhY3Rpb24pLCBzZXRUYXNrXTtcbiAgICB9XG4gIH0sICdxMScsICd0YWtlTGF0ZXN0KCcgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArICcsICcgKyB3b3JrZXIubmFtZSArICcpJyk7XG59IiwiaW1wb3J0IGZzbUl0ZXJhdG9yLCB7IHFFbmQsIHNhZmVOYW1lIH0gZnJvbSAnLi9mc21JdGVyYXRvcic7XG5pbXBvcnQgeyB0YWtlLCBmb3JrLCBhY3Rpb25DaGFubmVsLCBjYWxsIH0gZnJvbSAnLi4vaW8nO1xuaW1wb3J0IHsgRU5EIH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5pbXBvcnQgeyBidWZmZXJzIH0gZnJvbSAnLi4vYnVmZmVycyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZGVsYXlMZW5ndGgsIHBhdHRlcm4sIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhY3Rpb24gPSB2b2lkIDAsXG4gICAgICBjaGFubmVsID0gdm9pZCAwO1xuXG4gIHZhciB5QWN0aW9uQ2hhbm5lbCA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiBhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcnMuc2xpZGluZygxKSkgfTtcbiAgdmFyIHlUYWtlID0gZnVuY3Rpb24geVRha2UoKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0YWtlKGNoYW5uZWwpIH07XG4gIH07XG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKSB9O1xuICB9O1xuICB2YXIgeURlbGF5ID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IGNhbGwoZGVsYXksIGRlbGF5TGVuZ3RoKSB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG4gIHZhciBzZXRDaGFubmVsID0gZnVuY3Rpb24gc2V0Q2hhbm5lbChjaCkge1xuICAgIHJldHVybiBjaGFubmVsID0gY2g7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlBY3Rpb25DaGFubmVsLCBzZXRDaGFubmVsXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBbJ3EzJywgeVRha2UoKSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IEVORCA/IFtxRW5kXSA6IFsncTQnLCB5Rm9yayhhY3Rpb24pXTtcbiAgICB9LFxuICAgIHE0OiBmdW5jdGlvbiBxNCgpIHtcbiAgICAgIHJldHVybiBbJ3EyJywgeURlbGF5XTtcbiAgICB9XG4gIH0sICdxMScsICd0aHJvdHRsZSgnICsgc2FmZU5hbWUocGF0dGVybikgKyAnLCAnICsgd29ya2VyLm5hbWUgKyAnKScpO1xufSIsInZhciBxdWV1ZSA9IFtdO1xuLyoqXG4gIFZhcmlhYmxlIHRvIGhvbGQgYSBjb3VudGluZyBzZW1hcGhvcmVcbiAgLSBJbmNyZW1lbnRpbmcgYWRkcyBhIGxvY2sgYW5kIHB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGBzdXNwZW5kZWRgIHN0YXRlIChpZiBpdCdzIG5vdFxuICAgIGFscmVhZHkgc3VzcGVuZGVkKVxuICAtIERlY3JlbWVudGluZyByZWxlYXNlcyBhIGxvY2suIFplcm8gbG9ja3MgcHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHJlbGVhc2VkYCBzdGF0ZS4gVGhpc1xuICAgIHRyaWdnZXJzIGZsdXNoaW5nIHRoZSBxdWV1ZWQgdGFza3MuXG4qKi9cbnZhciBzZW1hcGhvcmUgPSAwO1xuXG4vKipcbiAgRXhlY3V0ZXMgYSB0YXNrICdhdG9taWNhbGx5Jy4gVGFza3Mgc2NoZWR1bGVkIGR1cmluZyB0aGlzIGV4ZWN1dGlvbiB3aWxsIGJlIHF1ZXVlZFxuICBhbmQgZmx1c2hlZCBhZnRlciB0aGlzIHRhc2sgaGFzIGZpbmlzaGVkIChhc3N1bWluZyB0aGUgc2NoZWR1bGVyIGVuZHVwIGluIGEgcmVsZWFzZWRcbiAgc3RhdGUpLlxuKiovXG5mdW5jdGlvbiBleGVjKHRhc2spIHtcbiAgdHJ5IHtcbiAgICBzdXNwZW5kKCk7XG4gICAgdGFzaygpO1xuICB9IGZpbmFsbHkge1xuICAgIHJlbGVhc2UoKTtcbiAgfVxufVxuXG4vKipcbiAgRXhlY3V0ZXMgb3IgcXVldWVzIGEgdGFzayBkZXBlbmRpbmcgb24gdGhlIHN0YXRlIG9mIHRoZSBzY2hlZHVsZXIgKGBzdXNwZW5kZWRgIG9yIGByZWxlYXNlZGApXG4qKi9cbmV4cG9ydCBmdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgcXVldWUucHVzaCh0YXNrKTtcblxuICBpZiAoIXNlbWFwaG9yZSkge1xuICAgIHN1c3BlbmQoKTtcbiAgICBmbHVzaCgpO1xuICB9XG59XG5cbi8qKlxuICBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZS4gU2NoZWR1bGVkIHRhc2tzIHdpbGwgYmUgcXVldWVkIHVudGlsIHRoZVxuICBzY2hlZHVsZXIgaXMgcmVsZWFzZWQuXG4qKi9cbmV4cG9ydCBmdW5jdGlvbiBzdXNwZW5kKCkge1xuICBzZW1hcGhvcmUrKztcbn1cblxuLyoqXG4gIFB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuXG4qKi9cbmZ1bmN0aW9uIHJlbGVhc2UoKSB7XG4gIHNlbWFwaG9yZS0tO1xufVxuXG4vKipcbiAgUmVsZWFzZXMgdGhlIGN1cnJlbnQgbG9jay4gRXhlY3V0ZXMgYWxsIHF1ZXVlZCB0YXNrcyBpZiB0aGUgc2NoZWR1bGVyIGlzIGluIHRoZSByZWxlYXNlZCBzdGF0ZS5cbioqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoKCkge1xuICByZWxlYXNlKCk7XG5cbiAgdmFyIHRhc2sgPSB2b2lkIDA7XG4gIHdoaWxlICghc2VtYXBob3JlICYmICh0YXNrID0gcXVldWUuc2hpZnQoKSkgIT09IHVuZGVmaW5lZCkge1xuICAgIGV4ZWModGFzayk7XG4gIH1cbn0iLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydCB2YXIgc3ltID0gZnVuY3Rpb24gc3ltKGlkKSB7XG4gIHJldHVybiAnQEByZWR1eC1zYWdhLycgKyBpZDtcbn07XG5cbmV4cG9ydCB2YXIgVEFTSyA9IHN5bSgnVEFTSycpO1xuZXhwb3J0IHZhciBIRUxQRVIgPSBzeW0oJ0hFTFBFUicpO1xuZXhwb3J0IHZhciBNQVRDSCA9IHN5bSgnTUFUQ0gnKTtcbmV4cG9ydCB2YXIgQ0FOQ0VMID0gc3ltKCdDQU5DRUxfUFJPTUlTRScpO1xuZXhwb3J0IHZhciBTQUdBX0FDVElPTiA9IHN5bSgnU0FHQV9BQ1RJT04nKTtcbmV4cG9ydCB2YXIgU0VMRl9DQU5DRUxMQVRJT04gPSBzeW0oJ1NFTEZfQ0FOQ0VMTEFUSU9OJyk7XG5leHBvcnQgdmFyIGtvbnN0ID0gZnVuY3Rpb24ga29uc3Qodikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB2O1xuICB9O1xufTtcbmV4cG9ydCB2YXIga1RydWUgPSBrb25zdCh0cnVlKTtcbmV4cG9ydCB2YXIga0ZhbHNlID0ga29uc3QoZmFsc2UpO1xuZXhwb3J0IHZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuZXhwb3J0IHZhciBpZGVudCA9IGZ1bmN0aW9uIGlkZW50KHYpIHtcbiAgcmV0dXJuIHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2sodmFsdWUsIHByZWRpY2F0ZSwgZXJyb3IpIHtcbiAgaWYgKCFwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgbG9nKCdlcnJvcicsICd1bmNhdWdodCBhdCBjaGVjaycsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIGlzLm5vdFVuZGVmKG9iamVjdCkgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbn1cblxuZXhwb3J0IHZhciBpcyA9IHtcbiAgdW5kZWY6IGZ1bmN0aW9uIHVuZGVmKHYpIHtcbiAgICByZXR1cm4gdiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQ7XG4gIH0sXG4gIG5vdFVuZGVmOiBmdW5jdGlvbiBub3RVbmRlZih2KSB7XG4gICAgcmV0dXJuIHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkO1xuICB9LFxuICBmdW5jOiBmdW5jdGlvbiBmdW5jKGYpIHtcbiAgICByZXR1cm4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbic7XG4gIH0sXG4gIG51bWJlcjogZnVuY3Rpb24gbnVtYmVyKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInO1xuICB9LFxuICBzdHJpbmc6IGZ1bmN0aW9uIHN0cmluZyhzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJztcbiAgfSxcbiAgYXJyYXk6IEFycmF5LmlzQXJyYXksXG4gIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgIWlzLmFycmF5KG9iaikgJiYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iaikpID09PSAnb2JqZWN0JztcbiAgfSxcbiAgcHJvbWlzZTogZnVuY3Rpb24gcHJvbWlzZShwKSB7XG4gICAgcmV0dXJuIHAgJiYgaXMuZnVuYyhwLnRoZW4pO1xuICB9LFxuICBpdGVyYXRvcjogZnVuY3Rpb24gaXRlcmF0b3IoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXMuZnVuYyhpdC5uZXh0KSAmJiBpcy5mdW5jKGl0LnRocm93KTtcbiAgfSxcbiAgaXRlcmFibGU6IGZ1bmN0aW9uIGl0ZXJhYmxlKGl0KSB7XG4gICAgcmV0dXJuIGl0ICYmIGlzLmZ1bmMoU3ltYm9sKSA/IGlzLmZ1bmMoaXRbU3ltYm9sLml0ZXJhdG9yXSkgOiBpcy5hcnJheShpdCk7XG4gIH0sXG4gIHRhc2s6IGZ1bmN0aW9uIHRhc2sodCkge1xuICAgIHJldHVybiB0ICYmIHRbVEFTS107XG4gIH0sXG4gIG9ic2VydmFibGU6IGZ1bmN0aW9uIG9ic2VydmFibGUob2IpIHtcbiAgICByZXR1cm4gb2IgJiYgaXMuZnVuYyhvYi5zdWJzY3JpYmUpO1xuICB9LFxuICBidWZmZXI6IGZ1bmN0aW9uIGJ1ZmZlcihidWYpIHtcbiAgICByZXR1cm4gYnVmICYmIGlzLmZ1bmMoYnVmLmlzRW1wdHkpICYmIGlzLmZ1bmMoYnVmLnRha2UpICYmIGlzLmZ1bmMoYnVmLnB1dCk7XG4gIH0sXG4gIHBhdHRlcm46IGZ1bmN0aW9uIHBhdHRlcm4ocGF0KSB7XG4gICAgcmV0dXJuIHBhdCAmJiAoaXMuc3RyaW5nKHBhdCkgfHwgKHR5cGVvZiBwYXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdCkpID09PSAnc3ltYm9sJyB8fCBpcy5mdW5jKHBhdCkgfHwgaXMuYXJyYXkocGF0KSk7XG4gIH0sXG4gIGNoYW5uZWw6IGZ1bmN0aW9uIGNoYW5uZWwoY2gpIHtcbiAgICByZXR1cm4gY2ggJiYgaXMuZnVuYyhjaC50YWtlKSAmJiBpcy5mdW5jKGNoLmNsb3NlKTtcbiAgfSxcbiAgaGVscGVyOiBmdW5jdGlvbiBoZWxwZXIoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXRbSEVMUEVSXTtcbiAgfSxcbiAgc3RyaW5nYWJsZUZ1bmM6IGZ1bmN0aW9uIHN0cmluZ2FibGVGdW5jKGYpIHtcbiAgICByZXR1cm4gaXMuZnVuYyhmKSAmJiBoYXNPd24oZiwgJ3RvU3RyaW5nJyk7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgb2JqZWN0ID0ge1xuICBhc3NpZ246IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaGFzT3duKHNvdXJjZSwgaSkpIHtcbiAgICAgICAgdGFyZ2V0W2ldID0gc291cmNlW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuZXhwb3J0IHZhciBhcnJheSA9IHtcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShvYmopIHtcbiAgICB2YXIgYXJyID0gQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIGlmIChoYXNPd24ob2JqLCBpKSkge1xuICAgICAgICBhcnJbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcnJlZCgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgZGVmID0gX2V4dGVuZHMoe30sIHByb3BzKTtcbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZGVmLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGRlZi5yZWplY3QgPSByZWplY3Q7XG4gIH0pO1xuICBkZWYucHJvbWlzZSA9IHByb21pc2U7XG4gIHJldHVybiBkZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheU9mRGVmZmVyZWQobGVuZ3RoKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFyci5wdXNoKGRlZmVycmVkKCkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxheShtcykge1xuICB2YXIgdmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gIHZhciB0aW1lb3V0SWQgPSB2b2lkIDA7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKHZhbCk7XG4gICAgfSwgbXMpO1xuICB9KTtcblxuICBwcm9taXNlW0NBTkNFTF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9O1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9ja1Rhc2soKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciBydW5uaW5nID0gdHJ1ZTtcbiAgdmFyIF9yZXN1bHQgPSB2b2lkIDAsXG4gICAgICBfZXJyb3IgPSB2b2lkIDA7XG5cbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltUQVNLXSA9IHRydWUsIF9yZWYuaXNSdW5uaW5nID0gZnVuY3Rpb24gaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiBydW5uaW5nO1xuICB9LCBfcmVmLnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICByZXR1cm4gX3Jlc3VsdDtcbiAgfSwgX3JlZi5lcnJvciA9IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgIHJldHVybiBfZXJyb3I7XG4gIH0sIF9yZWYuc2V0UnVubmluZyA9IGZ1bmN0aW9uIHNldFJ1bm5pbmcoYikge1xuICAgIHJldHVybiBydW5uaW5nID0gYjtcbiAgfSwgX3JlZi5zZXRSZXN1bHQgPSBmdW5jdGlvbiBzZXRSZXN1bHQocikge1xuICAgIHJldHVybiBfcmVzdWx0ID0gcjtcbiAgfSwgX3JlZi5zZXRFcnJvciA9IGZ1bmN0aW9uIHNldEVycm9yKGUpIHtcbiAgICByZXR1cm4gX2Vycm9yID0gZTtcbiAgfSwgX3JlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9JbmMoKSB7XG4gIHZhciBzZWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICsrc2VlZDtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciB1aWQgPSBhdXRvSW5jKCk7XG5cbnZhciBrVGhyb3cgPSBmdW5jdGlvbiBrVGhyb3coZXJyKSB7XG4gIHRocm93IGVycjtcbn07XG52YXIga1JldHVybiA9IGZ1bmN0aW9uIGtSZXR1cm4odmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiB0cnVlIH07XG59O1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJdGVyYXRvcihuZXh0KSB7XG4gIHZhciB0aHJvID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBrVGhyb3c7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnJztcbiAgdmFyIGlzSGVscGVyID0gYXJndW1lbnRzWzNdO1xuXG4gIHZhciBpdGVyYXRvciA9IHsgbmFtZTogbmFtZSwgbmV4dDogbmV4dCwgdGhyb3c6IHRocm8sIHJldHVybjoga1JldHVybiB9O1xuXG4gIGlmIChpc0hlbHBlcikge1xuICAgIGl0ZXJhdG9yW0hFTFBFUl0gPSB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykge1xuICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gaXRlcmF0b3I7XG59XG5cbi8qKlxuICBQcmludCBlcnJvciBpbiBhIHVzZWZ1bCB3YXkgd2hldGhlciBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAgKHdpdGggZXhwYW5kYWJsZSBlcnJvciBzdGFjayB0cmFjZXMpLCBvciBpbiBhIG5vZGUuanMgZW52aXJvbm1lbnRcbiAgKHRleHQtb25seSBsb2cgb3V0cHV0KVxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZyhsZXZlbCwgbWVzc2FnZSkge1xuICB2YXIgZXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKCdyZWR1eC1zYWdhICcgKyBsZXZlbCArICc6ICcgKyBtZXNzYWdlICsgJ1xcbicgKyAoZXJyb3IgJiYgZXJyb3Iuc3RhY2sgfHwgZXJyb3IpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlW2xldmVsXShtZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZShmbiwgZGVwcmVjYXRpb25XYXJuaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSBsb2coJ3dhcm4nLCBkZXByZWNhdGlvbldhcm5pbmcpO1xuICAgIHJldHVybiBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgdXBkYXRlSW5jZW50aXZlID0gZnVuY3Rpb24gdXBkYXRlSW5jZW50aXZlKGRlcHJlY2F0ZWQsIHByZWZlcnJlZCkge1xuICByZXR1cm4gZGVwcmVjYXRlZCArICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAnICsgcHJlZmVycmVkICsgJywgcGxlYXNlIHVwZGF0ZSB5b3VyIGNvZGUnO1xufTtcblxuZXhwb3J0IHZhciBpbnRlcm5hbEVyciA9IGZ1bmN0aW9uIGludGVybmFsRXJyKGVycikge1xuICByZXR1cm4gbmV3IEVycm9yKCdcXG4gIHJlZHV4LXNhZ2E6IEVycm9yIGNoZWNraW5nIGhvb2tzIGRldGVjdGVkIGFuIGluY29uc2lzdGVudCBzdGF0ZS4gVGhpcyBpcyBsaWtlbHkgYSBidWdcXG4gIGluIHJlZHV4LXNhZ2EgY29kZSBhbmQgbm90IHlvdXJzLiBUaGFua3MgZm9yIHJlcG9ydGluZyB0aGlzIGluIHRoZSBwcm9qZWN0XFwncyBnaXRodWIgcmVwby5cXG4gIEVycm9yOiAnICsgZXJyICsgJ1xcbicpO1xufTtcblxuZXhwb3J0IHZhciBjcmVhdGVTZXRDb250ZXh0V2FybmluZyA9IGZ1bmN0aW9uIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKGN0eCwgcHJvcHMpIHtcbiAgcmV0dXJuIChjdHggPyBjdHggKyAnLicgOiAnJykgKyAnc2V0Q29udGV4dChwcm9wcyk6IGFyZ3VtZW50ICcgKyBwcm9wcyArICcgaXMgbm90IGEgcGxhaW4gb2JqZWN0Jztcbn07XG5cbmV4cG9ydCB2YXIgd3JhcFNhZ2FEaXNwYXRjaCA9IGZ1bmN0aW9uIHdyYXBTYWdhRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjdGlvbiwgU0FHQV9BQ1RJT04sIHsgdmFsdWU6IHRydWUgfSkpO1xuICB9O1xufTtcblxuZXhwb3J0IHZhciBjbG9uZWFibGVHZW5lcmF0b3IgPSBmdW5jdGlvbiBjbG9uZWFibGVHZW5lcmF0b3IoZ2VuZXJhdG9yRnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBoaXN0b3J5ID0gW107XG4gICAgdmFyIGdlbiA9IGdlbmVyYXRvckZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChhcmcpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGFyZyk7XG4gICAgICAgIHJldHVybiBnZW4ubmV4dChhcmcpO1xuICAgICAgfSxcbiAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgICAgdmFyIGNsb25lZEdlbiA9IGNsb25lYWJsZUdlbmVyYXRvcihnZW5lcmF0b3JGdW5jKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICBoaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgIHJldHVybiBjbG9uZWRHZW4ubmV4dChhcmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb25lZEdlbjtcbiAgICAgIH0sXG4gICAgICByZXR1cm46IGZ1bmN0aW9uIF9yZXR1cm4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdlbi5yZXR1cm4odmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHRocm93OiBmdW5jdGlvbiBfdGhyb3coZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBnZW4udGhyb3coZXhjZXB0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCIvLyBMb2FkIGFzIHByb21pc2Ugc28gdGhhdCBhc3luYyBEcml6emxlIGluaXRpYWxpemF0aW9uIGNhbiBzdGlsbCByZXNvbHZlXG52YXIgd2luZG93UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5CUk9XU0VSKSByZXNvbHZlKCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSlcbiAgLy8gcmVzb2x2ZSBpbiBhbnkgY2FzZSBpZiB3ZSBtaXNzZWQgdGhlIGxvYWQgZXZlbnQgYW5kIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IGxvYWRlZFxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gYGNvbXBsZXRlYCkgcmVzb2x2ZSgpXG59KVxuXG5jbGFzcyBEcml6emxlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmUpIHtcbiAgICAvLyBWYXJpYWJsZXNcbiAgICB0aGlzLmNvbnRyYWN0cyA9IHt9XG4gICAgdGhpcy5jb250cmFjdExpc3QgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcbiAgICB0aGlzLndlYjMgPSB7fVxuXG4gICAgdGhpcy5sb2FkaW5nQ29udHJhY3QgPSB7fVxuXG4gICAgdGhpcy5hZGRDb250cmFjdCA9IHRoaXMuYWRkQ29udHJhY3QuYmluZCh0aGlzKTtcbiAgICAvLyBXYWl0IGZvciB3aW5kb3cgbG9hZCBldmVudCBpbiBjYXNlIG9mIGluamVjdGVkIHdlYjMuXG4gICAgd2luZG93UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIC8vIEJlZ2luIERyaXp6bGUgaW5pdGlhbGl6YXRpb24uXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0RSSVpaTEVfSU5JVElBTElaSU5HJywgZHJpenpsZTogdGhpcywgb3B0aW9uc30pXG4gICAgfSlcbiAgfVxuXG4gIGFkZENvbnRyYWN0IChjb250cmFjdENvbmZpZywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMubmFtZSA/IGNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZSA9IG9wdGlvbnMubmFtZSA6IG51bGw7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0FERF9DT05UUkFDVCcsIGRyaXp6bGU6IHRoaXMsIGNvbnRyYWN0Q29uZmlnLCBldmVudHM6IG9wdGlvbnMuZXZlbnRzLCB3ZWIzOiB0aGlzLndlYjMsIGZhbGxiYWNrOiB0aGlzLmZhbGxiYWNrLCBhZGRyZXNzOiBvcHRpb25zLmFkZHJlc3N9KVxuICB9XG5cbiAgX2FkZENvbnRyYWN0IChkcml6emxlQ29udHJhY3QpIHtcbiAgICBpZiAodGhpcy5jb250cmFjdHNbZHJpenpsZUNvbnRyYWN0LmNvbnRyYWN0TmFtZV0pIHsgdGhyb3cgYENvbnRyYWN0IGFscmVhZHkgZXhpc3RzOiAke2RyaXp6bGVDb250cmFjdC5jb250cmFjdE5hbWV9YCB9XG4gICAgdGhpcy5jb250cmFjdHNbZHJpenpsZUNvbnRyYWN0LmNvbnRyYWN0TmFtZV0gPSBkcml6emxlQ29udHJhY3RcbiAgICB0aGlzLmNvbnRyYWN0TGlzdC5wdXNoKGRyaXp6bGVDb250cmFjdClcbiAgICByZXR1cm4gZHJpenpsZUNvbnRyYWN0O1xuICB9XG5cbiAgZmluZENvbnRyYWN0QnlBZGRyZXNzIChhZGRyZXNzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RMaXN0LmZpbmQoKGNvbnRyYWN0KSA9PiB7XG4gICAgICByZXR1cm4gY29udHJhY3QuYWRkcmVzcy50b0xvd2VyQ2FzZSgpID09PSBhZGRyZXNzLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyaXp6bGVcbiIsImltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXG5cbmNsYXNzIERyaXp6bGVDb250cmFjdCB7XG4gIGNvbnN0cnVjdG9yKHdlYjNDb250cmFjdCwgd2ViMywgbmFtZSwgc3RvcmUsIGV2ZW50cyA9IFtdLCBjb250cmFjdEFydGlmYWN0ID0ge30sIGZhbGxiYWNrQ29udHJhY3QpIHtcbiAgICB2YXIgY29udHJhY3QgPSB3ZWIzQ29udHJhY3QgfHwgZmFsbGJhY2tDb250cmFjdDtcblxuICAgIHRoaXMuYWJpID0gY29udHJhY3Qub3B0aW9ucy5qc29uSW50ZXJmYWNlXG4gICAgdGhpcy5hZGRyZXNzID0gY29udHJhY3Qub3B0aW9ucy5hZGRyZXNzXG4gICAgdGhpcy53ZWIzID0gd2ViM1xuICAgIHRoaXMuY29udHJhY3ROYW1lID0gbmFtZVxuICAgIHRoaXMuY29udHJhY3RBcnRpZmFjdCA9IGNvbnRyYWN0QXJ0aWZhY3RcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcbiAgICB0aGlzLmZhbGxiYWNrQ29udHJhY3QgPSBmYWxsYmFja0NvbnRyYWN0IHx8IHdlYjNDb250cmFjdDtcbiAgICB0aGlzLndhdGNoRXZlbnRzID0gZXZlbnRzO1xuXG4gICAgLy8gTWVyZ2Ugd2ViMyBjb250cmFjdCBpbnN0YW5jZSBpbnRvIERyaXp6bGVDb250cmFjdCBpbnN0YW5jZS5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbnRyYWN0KVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFiaS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLmFiaVtpXVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09IFwiZnVuY3Rpb25cIiAmJiBpdGVtLmNvbnN0YW50ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMubWV0aG9kc1tpdGVtLm5hbWVdLmNhY2hlQ2FsbCA9IHRoaXMuY2FjaGVDYWxsRnVuY3Rpb24oaXRlbS5uYW1lLCBpKVxuICAgICAgICB0aGlzLm1ldGhvZHNbaXRlbS5uYW1lXS5mcm9tQ2FjaGUgPSB0aGlzLmZyb21DYWNoZUZ1bmN0aW9uKGl0ZW0ubmFtZSwgaSlcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PSBcImZ1bmN0aW9uXCIgJiYgaXRlbS5jb25zdGFudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5tZXRob2RzW2l0ZW0ubmFtZV0uY2FjaGVTZW5kID0gdGhpcy5jYWNoZVNlbmRGdW5jdGlvbihpdGVtLm5hbWUsIGkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3luY0V2ZW50cygpO1xuICB9XG5cbiAgc3luY0V2ZW50cyhibG9jaykge1xuICAgIGNvbnNvbGUubG9nKCdzeW5jIGV2ZW50cyEnKTtcbiAgICBsZXQgZXZlbnRzID0gdGhpcy53YXRjaEV2ZW50cztcbiAgICAvLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgaWYgYW55IGV2ZW50cy5cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBldmVudCA9IGV2ZW50c1tpXVxuXG4gICAgICAgIGlmICggdHlwZW9mIGV2ZW50ID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnTElTVEVOX0ZPUl9FVkVOVCcsIGNvbnRyYWN0OiB0aGlzLCBldmVudE5hbWU6IGV2ZW50LmV2ZW50TmFtZSwgZXZlbnRPcHRpb25zOiBldmVudC5ldmVudE9wdGlvbnN9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdMSVNURU5fRk9SX0VWRU5UJywgY29udHJhY3Q6IHRoaXMsIGV2ZW50TmFtZTogZXZlbnR9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3luY0V2ZW50KGJsb2NrLCBldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdzeW5jIHNpbmdsZSBldmVudCcpO1xuICAgIC8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICAgIGlmICggdHlwZW9mIGV2ZW50ID09PSAnb2JqZWN0JyApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdMSVNURU5fRk9SX0VWRU5UJywgY29udHJhY3Q6IHRoaXMsIGV2ZW50TmFtZTogZXZlbnQuZXZlbnROYW1lLCBldmVudE9wdGlvbnM6IGV2ZW50LmV2ZW50T3B0aW9uc30pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdMSVNURU5fRk9SX0VWRU5UJywgY29udHJhY3Q6IHRoaXMsIGV2ZW50TmFtZTogZXZlbnR9KVxuICAgIH1cbiAgfVxuXG4gIGZyb21DYWNoZUZ1bmN0aW9uKGZuTmFtZSwgZm5JbmRleCwgZm4pIHtcbiAgICB2YXIgY29udHJhY3QgPSB0aGlzXG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBDb2xsZWN0IGFyZ3MgYW5kIGhhc2ggdG8gdXNlIGFzIGtleSwgMHgwIGlmIG5vIGFyZ3NcbiAgICAgIHZhciBhcmdzSGFzaCA9ICcweDAnXG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFyZ3NIYXNoID0gY29udHJhY3QuZ2VuZXJhdGVBcmdzSGFzaChhcmdzKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250cmFjdE5hbWUgPSBjb250cmFjdC5jb250cmFjdE5hbWVcbiAgICAgIGlmICghY29udHJhY3Quc3RvcmUuZ2V0U3RhdGUoKS5jb250cmFjdHNbY29udHJhY3ROYW1lXS5zdGF0ZSkgcmV0dXJuO1xuICAgICAgY29uc3QgZnVuY3Rpb25TdGF0ZSA9IGNvbnRyYWN0LnN0b3JlLmdldFN0YXRlKCkuY29udHJhY3RzW2NvbnRyYWN0TmFtZV0uc3RhdGVbZm5OYW1lXVxuXG4gICAgICAvLyBJZiBjYWxsIHJlc3VsdCBpcyBpbiBzdGF0ZSByZXR1cm4gdmFsdWUgaW5zdGVhZCBvZiBjYWxsaW5nXG4gICAgICBpZiAoYXJnc0hhc2ggaW4gZnVuY3Rpb25TdGF0ZSAmJiBmdW5jdGlvblN0YXRlW2FyZ3NIYXNoXS52YWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25TdGF0ZVthcmdzSGFzaF0udmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5pdENvbnRyYWN0U3RhdGUoKSB7XG4gICAgLy8gSW5pdGlhbCBjb250cmFjdCBkZXRhaWxzXG4gICAgdmFyIGNvbnRyYWN0TmFtZSA9IHRoaXMuY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWVcblxuICAgIC8vIGluaXRpYWxpemUgY29udHJhY3Qgc3RhdGVcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgc3luY2VkOiBmYWxzZSxcbiAgICAgIHN0YXRlOiB7fVxuICAgIH1cblxuICAgIC8vIENvbnN0YW50IGdldHRlcnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuYWJpW2ldXG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT0gXCJmdW5jdGlvblwiICYmIGl0ZW0uY29uc3RhbnQgPT09IHRydWUpIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlLnN0YXRlW2l0ZW0ubmFtZV0gPSB7fVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnSU5JVF9DT05UUkFDVF9TVEFURScsIGNvbnRyYWN0TmFtZSwgaW5pdGlhbFN0YXRlIH0pO1xuICB9XG5cbiAgY2FjaGVDYWxsRnVuY3Rpb24oZm5OYW1lLCBmbkluZGV4LCBmbikge1xuICAgIHZhciBjb250cmFjdCA9IHRoaXNcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIENvbGxlY3QgYXJncyBhbmQgaGFzaCB0byB1c2UgYXMga2V5LCAweDAgaWYgbm8gYXJnc1xuICAgICAgdmFyIGFyZ3NIYXNoID0gJzB4MCdcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzXG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXJnc0hhc2ggPSBjb250cmFjdC5nZW5lcmF0ZUFyZ3NIYXNoKGFyZ3MpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuICAgICAgaWYgKCFjb250cmFjdC5zdG9yZS5nZXRTdGF0ZSgpLmNvbnRyYWN0c1tjb250cmFjdE5hbWVdLnN0YXRlKSByZXR1cm47XG4gICAgICBjb25zdCBmdW5jdGlvblN0YXRlID0gY29udHJhY3Quc3RvcmUuZ2V0U3RhdGUoKS5jb250cmFjdHNbY29udHJhY3ROYW1lXS5zdGF0ZVtmbk5hbWVdXG5cbiAgICAgIC8vIE90aGVyd2lzZSwgY2FsbCBmdW5jdGlvbiBhbmQgdXBkYXRlIHN0b3JlXG4gICAgICBjb250cmFjdC5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0NBTExfQ09OVFJBQ1RfRk4nLCBjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaH0pXG5cbiAgICAgIC8vIFJldHVybiBub3RoaW5nIGJlY2F1c2Ugc3RhdGUgaXMgY3VycmVudGx5IGVtcHR5LlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2FjaGVTZW5kRnVuY3Rpb24oZm5OYW1lLCBmbkluZGV4LCBmbikge1xuICAgIC8vIE5PVEU6IE1heSBub3QgbmVlZCBmbiBpbmRleFxuICAgIHZhciBjb250cmFjdCA9IHRoaXNcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzXG5cbiAgICAgIC8vIEdlbmVyYXRlIHRlbXBvcmFyeSBJRFxuICAgICAgdmFyIHN0YWNrSWQgPSBjb250cmFjdC5zdG9yZS5nZXRTdGF0ZSgpLnRyYW5zYWN0aW9uU3RhY2subGVuZ3RoXG5cbiAgICAgIC8vIEFkZCBJRCB0byBcInRyYW5zYWN0aW9uU3RhY2tcIiB3aXRoIGVtcHR5IHZhbHVlXG4gICAgICBjb250cmFjdC5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ1BVU0hfVE9fU1RBQ0snfSlcblxuICAgICAgLy8gRGlzcGF0Y2ggdHggdG8gc2FnYVxuICAgICAgLy8gV2hlbiB0eGhhc2ggcmVjZWl2ZWQsIHdpbGwgYmUgdmFsdWUgb2Ygc3RhY2sgSURcbiAgICAgIGNvbnRyYWN0LnN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnU0VORF9DT05UUkFDVF9UWCcsIGNvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIHN0YWNrSWR9KVxuXG4gICAgICAvLyByZXR1cm4gc3RhY2sgSURcbiAgICAgIHJldHVybiBzdGFja0lkXG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVBcmdzSGFzaChhcmdzKSB7XG4gICAgdmFyIHdlYjMgPSB0aGlzLndlYjNcbiAgICB2YXIgaGFzaFN0cmluZyA9ICcnXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldICE9PSAnZnVuY3Rpb24nKVxuICAgICAge1xuICAgICAgICB2YXIgYXJnVG9IYXNoID0gYXJnc1tpXVxuXG4gICAgICAgIC8vIFN0cmluZ2lmeSBvYmplY3RzIHRvIGFsbG93IGhhc2hpbmdcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdUb0hhc2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgYXJnVG9IYXNoID0gSlNPTi5zdHJpbmdpZnkoYXJnVG9IYXNoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udmVydCBudW1iZXIgdG8gc3Ryb25nIHRvIGFsbG93IGhhc2hpbmdcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdUb0hhc2ggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgYXJnVG9IYXNoID0gYXJnVG9IYXNoLnRvU3RyaW5nKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgaW4gcGxhY2UgZm9yIHdlYjMgdjAueFxuICAgICAgICBpZiAoJ3V0aWxzJyBpbiB3ZWIzKSB7XG4gICAgICAgICAgdmFyIGhhc2hQaWVjZSA9IHdlYjMudXRpbHMuc2hhMyhhcmdUb0hhc2gpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGhhc2hQaWVjZSA9IHdlYjMuc2hhMyhhcmdUb0hhc2gpXG4gICAgICAgIH1cblxuICAgICAgICBoYXNoU3RyaW5nICs9IGhhc2hQaWVjZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3ZWIzLnV0aWxzLnNoYTMoaGFzaFN0cmluZylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcml6emxlQ29udHJhY3RcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IGFjY291bnRCYWxhbmNlc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBQ0NPVU5UX0JBTEFOQ0VfRkVUQ0hFRCcpXG4gIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFthY3Rpb24uYWNjb3VudF06IGFjdGlvbi5hY2NvdW50QmFsYW5jZVxuICAgIH1cbiAgICAvLyBwcmV2ZW50cyBmcm9tIHVwZGF0aW5nIHN0YXRlIGFuZCByZS1yZW5kZXJpbmcgY29tcG9uZW50cyB1bm5lY2Vzc2FyaWx5IHdoZW4gYmFsYW5jZXMgYXJlIHRoZSBzYW1lXG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KG5ld1N0YXRlKSA9PT0gSlNPTi5zdHJpbmdpZnkoc3RhdGUpKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXdTdGF0ZVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRCYWxhbmNlc1JlZHVjZXJcbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldEFjY291bnRCYWxhbmNlcyhhY3Rpb24pIHtcbiAgY29uc3QgYWNjb3VudHMgPSB5aWVsZCBzZWxlY3QoZ2V0QWNjb3VudHNTdGF0ZSlcbiAgY29uc3Qgd2ViMyA9IGFjdGlvbi53ZWIzXG5cbiAgaWYgKCFhY2NvdW50cykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIGFjY291bnRzIGZvdW5kIHdoaWxlIGF0dGVtcHRpbmcgdG8gZmV0Y2ggYmFsYW5jZXMhJylcbiAgfVxuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgaSBpbiBhY2NvdW50cykge1xuICAgICAgdmFyIGFjY291bnQgPSBhY2NvdW50c1tpXVxuICAgICAgdmFyIGFjY291bnRCYWxhbmNlID0geWllbGQgY2FsbCh3ZWIzLmV0aC5nZXRCYWxhbmNlLCBhY2NvdW50KVxuXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UX0JBTEFOQ0VfRkVUQ0hFRCcsIGFjY291bnQsIGFjY291bnRCYWxhbmNlfSlcbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHt0eXBlOiAnQUNDT1VOVF9CQUxBTkNFX0ZBSUxFRCcsIGVycm9yfSlcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhY2NvdW50ICcgKyBhY2NvdW50ICsgJyBiYWxhbmNlOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgfVxuXG4gIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRfQkFMQU5DRVNfRkVUQ0hFRCd9KVxufVxuXG5jb25zdCBnZXRBY2NvdW50c1N0YXRlID0gKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50c1xuXG5mdW5jdGlvbiogYWNjb3VudEJhbGFuY2VzU2FnYSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdCgnQUNDT1VOVF9CQUxBTkNFU19GRVRDSElORycsIGdldEFjY291bnRCYWxhbmNlcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudEJhbGFuY2VzU2FnYTsiLCJjb25zdCBpbml0aWFsU3RhdGUgPSBbXVxuXG5jb25zdCBhY2NvdW50c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBQ0NPVU5UU19GRVRDSElORycpXG4gIHtcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FDQ09VTlRTX0ZFVENIRUQnKVxuICB7XG4gICAgbGV0IG5lZWRzVXBkYXRlO1xuICAgIGxldCBhY2MgPSBhY3Rpb24uYWNjb3VudHMgfHwgW107XG4gICAgbGV0IGludGVyc2VjdCA9IGFjYy5maWx0ZXIoeCA9PiBzdGF0ZS5pbmNsdWRlcyh4KSk7XG4gICAgaWYgKGludGVyc2VjdC5sZW5ndGggPT09IGFjYy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4uYWN0aW9uLmFjY291bnRzXG4gICAgXVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudHNSZWR1Y2VyXG4iLCJpbXBvcnQgeyBFTkQsIGV2ZW50Q2hhbm5lbCB9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgeyBnZXRBY2NvdW50QmFsYW5jZXMgfSBmcm9tICcuLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcblxuLypcbiAqIEZldGNoIEFjY291bnRzIExpc3RcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldEFjY291bnRzKGFjdGlvbikge1xuICBjb25zdCB3ZWIzID0gYWN0aW9uLndlYjNcblxuICB0cnkge1xuICAgIGlmICghd2ViMykgdGhyb3cgJ21pc3Npbmcgd2ViMyc7XG4gICAgY29uc3QgYWNjb3VudHMgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLmdldEFjY291bnRzKVxuXG4gICAgaWYgKCFhY2NvdW50cykge1xuICAgICAgdGhyb3cgJ05vIGFjY291bnRzIGZvdW5kISdcbiAgICB9XG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UU19GRVRDSEVEJywgYWNjb3VudHN9KVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRTX0ZBSUxFRCcsIGVycm9yfSlcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhY2NvdW50czonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuLypcbiAqIFBvbGwgZm9yIEFjY291bnQgQ2hhbmdlc1xuICovXG5cbmZ1bmN0aW9uKiBjcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsKHtpbnRlcnZhbCwgd2ViM30pIHtcbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCBwZXJzaXN0ZWRXZWIzID0gd2ViM1xuXG4gICAgY29uc3QgYWNjb3VudHNQb2xsZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnU1lOQ0lOR19BQ0NPVU5UUycsIHBlcnNpc3RlZFdlYjN9KVxuICAgIH0sIGludGVydmFsKSAvLyBvcHRpb25zLnBvbGxzLmFjY291bnRzXG4gICAgXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGFjY291bnRzUG9sbGVyKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuICBcbmZ1bmN0aW9uKiBjYWxsQ3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCh7aW50ZXJ2YWwsIHdlYjN9KSB7XG4gIGNvbnN0IGFjY291bnRzQ2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCwge2ludGVydmFsLCB3ZWIzfSlcbiAgXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UoYWNjb3VudHNDaGFubmVsKVxuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ1NZTkNJTkdfQUNDT1VOVFMnKSB7ICAgICAgXG4gICAgICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudHMsIHt3ZWIzOiBldmVudC5wZXJzaXN0ZWRXZWIzfSlcbiAgICAgICAgeWllbGQgY2FsbChnZXRBY2NvdW50QmFsYW5jZXMsIHt3ZWIzOiBldmVudC5wZXJzaXN0ZWRXZWIzfSkgIFxuICAgICAgfVxuXG4gICAgICB5aWVsZCBwdXQoZXZlbnQpXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGFjY291bnRzQ2hhbm5lbC5jbG9zZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24qIGNhbGxHZXRCYWxhbmNlcyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgaWYgKCFhY3Rpb24uYWNjb3VudHMgfHwgIWFjdGlvbi5hY2NvdW50cy5sZW5ndGgpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBhY2NvdW50cycpXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJhbGFuY2VzID0geWllbGQgYWxsKGFjdGlvbi5hY2NvdW50cy5tYXAoYWNjb3VudCA9PiB7XG4gICAgcmV0dXJuIGNhbGxHZXRBY2NvdW50QmFsYW5jZSh7IC4uLmFjdGlvbiwgYWNjb3VudCB9KVxuICB9KSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogY2FsbEdldEFjY291bnRCYWxhbmNlKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IGJhbGFuY2UgPSB5aWVsZCBjYWxsKGdldEJhbGFuY2UsIGFjdGlvbi5hY2NvdW50LCBhY3Rpb24ud2ViMylcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UX0JBTEFOQ0VfRkVUQ0hFRCcsIGJhbGFuY2V9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBhY2NvdW50c1NhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoJ0FDQ09VTlRTX0ZFVENISU5HJywgZ2V0QWNjb3VudHMpXG4gIHlpZWxkIHRha2VMYXRlc3QoJ0FDQ09VTlRTX1BPTExJTkcnLCBjYWxsQ3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudHNTYWdhO1xuIiwiaW1wb3J0IHsgRU5ELCBldmVudENoYW5uZWwgfSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlLCB0YWtlRXZlcnksIHRha2VMYXRlc3QsIGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmNvbnN0IEJsb2NrVHJhY2tlciA9IHJlcXVpcmUoJ2V0aC1ibG9jay10cmFja2VyJylcblxuLypcbiAqIExpc3RlbiBmb3IgQmxvY2tzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQmxvY2tDaGFubmVsKHtkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSkge1xuICByZXR1cm4gZXZlbnRDaGFubmVsKGVtaXQgPT4ge1xuICAgIGNvbnN0IGJsb2NrRXZlbnRzID0gd2ViMy5ldGguc3Vic2NyaWJlKCduZXdCbG9ja0hlYWRlcnMnLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGVycm9yKVxuICAgICAge1xuICAgICAgICBlbWl0KHt0eXBlOiAnQkxPQ0tTX0ZBSUxFRCcsIGVycm9yfSlcblxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBibG9jayBoZWFkZXIgc3Vic2NyaXB0aW9uOicpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICAgICAgZW1pdChFTkQpXG4gICAgICB9XG4gICAgfSlcbiAgICAub24oJ2RhdGEnLCAoYmxvY2tIZWFkZXIpID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS19SRUNFSVZFRCcsIGJsb2NrSGVhZGVyLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgICB9KVxuICAgIC5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnQkxPQ0tTX0ZBSUxFRCcsIGVycm9yfSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIGJsb2NrRXZlbnRzLm9mZigpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXG4gIH0pXG59XG5cbmZ1bmN0aW9uKiBjYWxsQ3JlYXRlQmxvY2tDaGFubmVsKHtkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSkge1xuICBjb25zdCBibG9ja0NoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZUJsb2NrQ2hhbm5lbCwge2RyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KVxuXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UoYmxvY2tDaGFubmVsKVxuICAgICAgeWllbGQgcHV0KGV2ZW50KVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBibG9ja0NoYW5uZWwuY2xvc2UoKVxuICB9XG59XG5cbi8qXG4gKiBQb2xsIGZvciBCbG9ja3NcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVCbG9ja1BvbGxDaGFubmVsKHtkcml6emxlLCBpbnRlcnZhbCwgd2ViMywgc3luY0Fsd2F5c30pIHtcbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCBibG9ja1RyYWNrZXIgPSBuZXcgQmxvY2tUcmFja2VyKHsgcHJvdmlkZXI6IHdlYjMuY3VycmVudFByb3ZpZGVyLCBwb2xsaW5nSW50ZXJ2YWw6IGludGVydmFsfSlcblxuICAgIGJsb2NrVHJhY2tlci5vbignbGF0ZXN0JywgKGJsb2NrKSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnQkxPQ0tfRk9VTkQnLCBibG9jaywgZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pXG4gICAgfSlcblxuICAgIGJsb2NrVHJhY2tlclxuICAgIC5zdGFydCgpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLU19GQUlMRUQnLCBlcnJvcn0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICBibG9ja1RyYWNrZXIuc3RvcCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXG4gIH0pXG59XG5cbmZ1bmN0aW9uKiBjYWxsQ3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCh7ZHJpenpsZSwgaW50ZXJ2YWwsIHdlYjMsIHN5bmNBbHdheXN9KSB7XG4gIGNvbnN0IGJsb2NrQ2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCwge2RyaXp6bGUsIGludGVydmFsLCB3ZWIzLCBzeW5jQWx3YXlzfSlcblxuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKGJsb2NrQ2hhbm5lbClcbiAgICAgIHlpZWxkIHB1dChldmVudClcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgYmxvY2tDaGFubmVsLmNsb3NlKClcbiAgfVxufVxuXG4vKlxuICogUHJvY2VzcyBCbG9ja3NcbiAqL1xuXG5mdW5jdGlvbiogcHJvY2Vzc0Jsb2NrSGVhZGVyKHtibG9ja0hlYWRlciwgZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pIHtcbiAgY29uc3QgYmxvY2tOdW1iZXIgPSBibG9ja0hlYWRlci5udW1iZXJcblxuICB0cnkge1xuICAgIGxldCBibG9jayA9IHlpZWxkIGNhbGwod2ViMy5ldGguZ2V0QmxvY2ssIGJsb2NrTnVtYmVyLCB0cnVlKVxuXG4gICAgaWYgKCFibG9jaykge1xuICAgICAgLy8gc29tZXRpbWVzIGJsb2NrIGlzIG51bGwgd2l0aCB3cyA6KFxuICAgICAgLy8gYmxvY2sgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLmdldEJsb2NrLCBibG9ja051bWJlciwgdHJ1ZSlcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBibG9jayBudW1iZXIgJyArIGJsb2NrTnVtYmVyKTtcbiAgICB9XG4gICAgeWllbGQgY2FsbChwcm9jZXNzQmxvY2ssIHtibG9jaywgZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYmxvY2sgcHJvY2Vzc2luZzonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS19GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICByZXR1cm5cbiAgfVxufVxuXG5mdW5jdGlvbiogcHJvY2Vzc0Jsb2NrKHtibG9jaywgZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pIHtcblxuICB0cnkge1xuICAgIGlmIChzeW5jQWx3YXlzKVxuICAgIHtcbiAgICAgIHlpZWxkIGFsbChPYmplY3Qua2V5cyhkcml6emxlLmNvbnRyYWN0cykubWFwKGtleSA9PiB7XG4gICAgICAgIHJldHVybiBwdXQoe3R5cGU6ICdDT05UUkFDVF9TWU5DSU5HJywgY29udHJhY3Q6IGRyaXp6bGUuY29udHJhY3RzW2tleV19KVxuICAgICAgfSkpXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdnb3QgbmV3IGJsb2NrJyk7XG4gICAgY29uc3QgdHhzID0gYmxvY2sudHJhbnNhY3Rpb25zXG5cbiAgICBpZiAodHhzLmxlbmd0aCA+IDApXG4gICAge1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIHR4cyBsb29raW5nIGZvciBhbnkgY29udHJhY3QgYWRkcmVzcyBvZiBpbnRlcmVzdFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eHMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHZhciBmcm9tID0gdHhzW2ldLmZyb20gfHwgJydcbiAgICAgICAgdmFyIGZyb21Db250cmFjdCA9IGRyaXp6bGUuZmluZENvbnRyYWN0QnlBZGRyZXNzKGZyb20udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgaWYgKGZyb21Db250cmFjdCkge1xuICAgICAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNJTkcnLCBjb250cmFjdDogZnJvbUNvbnRyYWN0fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0byA9IHR4c1tpXS50byB8fCAnJ1xuICAgICAgICB2YXIgdG9Db250cmFjdCA9IGRyaXp6bGUuZmluZENvbnRyYWN0QnlBZGRyZXNzKHRvLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmICh0b0NvbnRyYWN0KSB7XG4gICAgICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQ09OVFJBQ1RfU1lOQ0lORycsIGNvbnRyYWN0OiB0b0NvbnRyYWN0fSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBibG9jayBwcm9jZXNzaW5nOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0JMT0NLX0ZBSUxFRCcsIGVycm9yfSlcblxuICAgIHJldHVyblxuICB9XG59XG5cbmZ1bmN0aW9uKiBibG9ja3NTYWdhKCkge1xuICAvLyBCbG9jayBTdWJzY3JpcHRpb25zXG4gIHlpZWxkIHRha2VMYXRlc3QoJ0JMT0NLU19MSVNURU5JTkcnLCBjYWxsQ3JlYXRlQmxvY2tDaGFubmVsKVxuICB5aWVsZCB0YWtlRXZlcnkoJ0JMT0NLX1JFQ0VJVkVEJywgcHJvY2Vzc0Jsb2NrSGVhZGVyKVxuXG4gIC8vIEJsb2NrIFBvbGxpbmdcbiAgeWllbGQgdGFrZUxhdGVzdCgnQkxPQ0tTX1BPTExJTkcnLCBjYWxsQ3JlYXRlQmxvY2tQb2xsQ2hhbm5lbClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdCTE9DS19GT1VORCcsIHByb2Nlc3NCbG9jaylcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmxvY2tzU2FnYVxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL2dlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IGNvbnRyYWN0c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAvKlxuICAgKiBDb250cmFjdCBTdGF0dXNcbiAgICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfSU5JVElBTElaSU5HJykge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFthY3Rpb24uY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lXTogZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZShhY3Rpb24uY29udHJhY3RDb25maWcpXG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfSU5JVElBTElaRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5uYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXG4gICAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgICBzeW5jZWQ6IHRydWUsXG4gICAgICAgIGV2ZW50czogW10sXG4gICAgICAgIG1ldGhvZHM6IGFjdGlvbi5jb250cmFjdC5tZXRob2RzLFxuICAgICAgICBhZGRyZXNzOiBhY3Rpb24uY29udHJhY3QuYWRkcmVzcyxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DSU5HJylcbiAge1xuICAgIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGFjdGlvbi5jb250cmFjdC5jb250cmFjdE5hbWVcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFtjb250cmFjdE5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2NvbnRyYWN0TmFtZV0sXG4gICAgICAgIHN5bmNlZDogZmFsc2UsXG4gICAgICAgIHN5bmNpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5jb250cmFjdE5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5jb250cmFjdE5hbWVdLFxuICAgICAgICBzeW5jZWQ6IHRydWUsXG4gICAgICAgIHN5bmNpbmc6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfU1lOQ19JTkQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5jb250cmFjdE5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5jb250cmFjdE5hbWVdLFxuICAgICAgICBzeW5jZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogQ29udHJhY3QgRnVuY3Rpb25zXG4gICAqL1xuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0dPVF9DT05UUkFDVF9WQVInKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5uYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXG4gICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdLnN0YXRlLFxuICAgICAgICAgIFthY3Rpb24udmFyaWFibGVdOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0uc3RhdGVbYWN0aW9uLnZhcmlhYmxlXSxcbiAgICAgICAgICAgIFthY3Rpb24uYXJnc0hhc2hdOiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXS5zdGF0ZVthY3Rpb24udmFyaWFibGVdW2FjdGlvbi5hcmdzSGFzaF0sXG4gICAgICAgICAgICAgIGFyZ3M6IGFjdGlvbi5hcmdzLFxuICAgICAgICAgICAgICBmbkluZGV4OiBhY3Rpb24uZm5JbmRleCxcbiAgICAgICAgICAgICAgdmFsdWU6IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgc3luY2luZzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdFUlJPUl9DT05UUkFDVF9WQVInKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5uYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXG4gICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdLnN0YXRlLFxuICAgICAgICAgIFthY3Rpb24udmFyaWFibGVdOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0uc3RhdGVbYWN0aW9uLnZhcmlhYmxlXSxcbiAgICAgICAgICAgIFthY3Rpb24uYXJnc0hhc2hdOiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXS5zdGF0ZVthY3Rpb24udmFyaWFibGVdW2FjdGlvbi5hcmdzSGFzaF0sXG4gICAgICAgICAgICAgIGFyZ3M6IGFjdGlvbi5hcmdzLFxuICAgICAgICAgICAgICBmbkluZGV4OiBhY3Rpb24uZm5JbmRleCxcbiAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgICAgICAgc3luY2luZzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBDb250cmFjdCBFdmVudHNcbiAgICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnRVZFTlRfRklSRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5uYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXG4gICAgICAgIGV2ZW50czogW1xuICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXS5ldmVudHMsXG4gICAgICAgICAgYWN0aW9uLmV2ZW50XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3RzUmVkdWNlclxuIiwiaW1wb3J0IHsgRU5ELCBldmVudENoYW5uZWwgfSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2UsIHRha2VMYXRlc3QsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCBEcml6emxlQ29udHJhY3QgZnJvbSAnLi4vRHJpenpsZUNvbnRyYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24qIGFkZENvbnRyYWN0KHtkcml6emxlLCBjb250cmFjdENvbmZpZywgZXZlbnRzLCB3ZWIzLCBmYWxsYmFjaywgYWRkcmVzc30pIHtcbiAgLy8gUHJldmVudHMgZG91YmxlLWFkZGluZyBjb250cmFjdHNcbiAgaWYgKCFkcml6emxlKSByZXR1cm47XG4gIGlmIChkcml6emxlLmxvYWRpbmdDb250cmFjdFtjb250cmFjdENvbmZpZy5jb250cmFjdE5hbWVdKSB7IHJldHVybiBmYWxzZSB9XG5cbiAgZHJpenpsZS5sb2FkaW5nQ29udHJhY3RbY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lXSA9IHRydWVcblxuICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9JTklUSUFMSVpJTkcnLCBjb250cmFjdENvbmZpZ30pXG5cbiAgbGV0IGRyaXp6bGVDb250cmFjdFxuXG4gIC8vIGlmIChjb250cmFjdENvbmZpZy53ZWIzQ29udHJhY3QpIHtcbiAgICAvLyBkcml6emxlQ29udHJhY3QgPSB5aWVsZCBjYWxsKGluc3RhbnRpYXRlV2ViM0NvbnRyYWN0LCB7d2ViM0NvbnRyYWN0OiBjb250cmFjdENvbmZpZy53ZWIzQ29udHJhY3QsIG5hbWU6IGNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZSwgZXZlbnRzLCBzdG9yZTogZHJpenpsZS5zdG9yZSwgd2ViMywgZmFsbGJhY2t9KVxuICAvLyB9IGVsc2Uge1xuICBkcml6emxlQ29udHJhY3QgPSB5aWVsZCBjYWxsKGluc3RhbnRpYXRlQ29udHJhY3QsIHtjb250cmFjdEFydGlmYWN0OiBjb250cmFjdENvbmZpZywgZXZlbnRzLCBzdG9yZTogZHJpenpsZS5zdG9yZSwgd2ViMywgZmFsbGJhY2ssIGFkZHJlc3M6IGFkZHJlc3N9KVxuICAvLyB9XG4gIGxldCBjb250cmFjdCA9IGRyaXp6bGUuX2FkZENvbnRyYWN0KGRyaXp6bGVDb250cmFjdClcbiAgeWllbGQgcHV0KHt0eXBlOiAnQ09OVFJBQ1RfSU5JVElBTElaRUQnLCBuYW1lOiBhZGRyZXNzIHx8IGNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZSwgY29udHJhY3R9KVxufVxuXG4vKlxuICogSW5zdGFudGlhdGlvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogaW5zdGFudGlhdGVXZWIzQ29udHJhY3Qoe3dlYjNDb250cmFjdCwgbmFtZSwgZXZlbnRzLCBzdG9yZSwgd2ViMywgZmFsbGJhY2t9KSB7XG4gIHJldHVybiBuZXcgRHJpenpsZUNvbnRyYWN0KHdlYjNDb250cmFjdCwgd2ViMywgbmFtZSwgc3RvcmUsIGV2ZW50cylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBpbnN0YW50aWF0ZUNvbnRyYWN0KHtjb250cmFjdEFydGlmYWN0LCBldmVudHMsIHN0b3JlLCB3ZWIzLCBmYWxsYmFjaywgYWRkcmVzc30pIHtcbiAgY29uc3QgbmV0d29ya0lkID0geWllbGQgc2VsZWN0KGdldE5ldHdvcmtJZClcbiAgY29uc3QgZmFsbGJhY2tOZXR3b3JrSWQgPSB5aWVsZCBzZWxlY3QoZ2V0RmFsbGJhY2tOZXR3b3JrSWQpXG4gIHZhciB3ZWIzQ29udHJhY3RcbiAgdmFyIGZhbGxiYWNrQ29udHJhY3Q7XG5cbiAgLy8gSW5zdGFudGlhdGUgdGhlIGNvbnRyYWN0LlxuICBpZiAod2ViMykge1xuICAgIHdlYjNDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICAgIGNvbnRyYWN0QXJ0aWZhY3QuYWJpLFxuICAgICAgYWRkcmVzcyB8fCBjb250cmFjdEFydGlmYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF0uYWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgZnJvbTogc3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50c1swXSxcbiAgICAgICAgZGF0YTogY29udHJhY3RBcnRpZmFjdC5kZXBsb3llZEJ5dGVjb2RlXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgaWYgKGZhbGxiYWNrKSB7XG4gICAgZmFsbGJhY2tDb250cmFjdCA9IG5ldyBmYWxsYmFjay5ldGguQ29udHJhY3QoXG4gICAgICBjb250cmFjdEFydGlmYWN0LmFiaSxcbiAgICAgIGFkZHJlc3MgfHwgY29udHJhY3RBcnRpZmFjdC5uZXR3b3Jrc1tmYWxsYmFja05ldHdvcmtJZF0uYWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgZGF0YTogY29udHJhY3RBcnRpZmFjdC5kZXBsb3llZEJ5dGVjb2RlXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgLy8gVE9ETyBiZXR0ZXIgbG9naWMgLSB3YWl0IGZvciBjb25uZWN0aW9uIVxuICAvLyBpZiB3ZWJzb2NrZXQgcHJvdmlkZXIsIHRoZW4gd2FpdCBmb3Igd2Vic29ja2V0IHRvIGNvbm5lY3Q7XG4gIC8vIGlmIChmYWxsYmFjaykge1xuICAvLyAgIGNvbnNvbGUubG9nKCdpbnN0YW50aWF0ZSBjb250cmFjdCAnLCBhZGRyZXNzKTtcbiAgLy8gICB5aWVsZCBmYWxsYmFjay5jdXJyZW50UHJvdmlkZXIub24oJ2Nvbm5lY3QnLCBlID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQsIGdldCBldmVudHMgZm9yICcsIGFkZHJlc3MgfHwgY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWUpO1xuICAvLyAgICAgcmV0dXJuIG5ldyBEcml6emxlQ29udHJhY3Qod2ViM0NvbnRyYWN0LCB3ZWIzLCBhZGRyZXNzIHx8IGNvbnRyYWN0QXJ0aWZhY3QuY29udHJhY3ROYW1lLCBzdG9yZSwgZXZlbnRzLCBjb250cmFjdEFydGlmYWN0LCBmYWxsYmFja0NvbnRyYWN0KVxuICAvLyAgIH0pO1xuICAvLyB9XG4gIC8vIHRoaXMgaXMgY2FsbGVkIHR3aWNlIHJpZ2h0IG5vd1xuICAvLyBjb25zb2xlLmxvZygnbmV3IGNvbnRyYWN0ICcsIGFkZHJlc3MgfHwgY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWUpO1xuICByZXR1cm4gbmV3IERyaXp6bGVDb250cmFjdCh3ZWIzQ29udHJhY3QsIHdlYjMsIGFkZHJlc3MgfHwgY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWUsIHN0b3JlLCBldmVudHMsIGNvbnRyYWN0QXJ0aWZhY3QsIGZhbGxiYWNrQ29udHJhY3QpXG5cbn1cblxuLypcbiAqIEV2ZW50c1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyYWN0RXZlbnRDaGFubmVsKHtjb250cmFjdCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnN9KSB7XG4gIGNvbnN0IG5hbWUgPSBjb250cmFjdC5jb250cmFjdE5hbWVcblxuICAvLyBpZiB3ZSBoYXZlIGEgd3MgZmFsbGJhY2sgLSB1c2UgdGhhdCBmb3IgZXZlbnRzXG4gIGNvbnN0IGV2ZW50RW5hYmxlZENvbnRyYWN0ID0gY29udHJhY3QuZmFsbGJhY2tDb250cmFjdCB8fCBjb250cmFjdFxuXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGV2ZW50RW5hYmxlZENvbnRyYWN0LmV2ZW50c1tldmVudE5hbWVdKGV2ZW50T3B0aW9ucylcbiAgICAub24oJ2RhdGEnLCBldmVudCA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnRVZFTlRfRklSRUQnLCBuYW1lLCBldmVudH0pXG4gICAgfSlcbiAgICAub24oJ2NoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnRVZFTlRfQ0hBTkdFRCcsIG5hbWUsIGV2ZW50fSlcbiAgICB9KVxuICAgIC5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnRVZFTlRfRVJST1InLCBuYW1lLCBlcnJvcn0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICBldmVudExpc3RlbmVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSlcbn1cblxuZnVuY3Rpb24qIGNhbGxMaXN0ZW5Gb3JDb250cmFjdEV2ZW50KHtjb250cmFjdCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnN9KSB7XG4gIGNvbnN0IGNvbnRyYWN0RXZlbnRDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVDb250cmFjdEV2ZW50Q2hhbm5lbCwge2NvbnRyYWN0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9uc30pXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShjb250cmFjdEV2ZW50Q2hhbm5lbClcbiAgICB5aWVsZCBwdXQoZXZlbnQpXG4gIH1cbn1cblxuLy8gZnVuY3Rpb24qIGNhbGxQb2xsQ29udHJhY3RFdmVudCh7Y29udHJhY3QsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zfSkge1xuLy8gICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ3BvbGxpbmcgZXZlbnRzJyk7XG4vLyAgICAgY2FsbEdldENvbnRyYWN0RXZlbnQoe2NvbnRyYWN0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9uc30pO1xuLy8gICB9LCAzMDAwKTtcbi8vIH1cblxuXG5mdW5jdGlvbiogY2FsbEdldENvbnRyYWN0RXZlbnQoe2NvbnRyYWN0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9uc30pIHtcbiAgY29uc3QgZXZlbnRFbmFibGVkQ29udHJhY3QgPSBjb250cmFjdC5mYWxsYmFja0NvbnRyYWN0IHx8IGNvbnRyYWN0XG4gIGNvbnN0IG5hbWUgPSBjb250cmFjdC5jb250cmFjdE5hbWUgfHwgY29udHJhY3QuYWRkcmVzc1xuICBsZXQgZXZlbnRzO1xuXG4gIGxldCBmcm9tQmxvY2sgPSBldmVudE9wdGlvbnMgPyBldmVudE9wdGlvbnMuZnJvbUJsb2NrIDogMDtcblxuICB0cnkge1xuICAgIGV2ZW50cyA9IHlpZWxkIGV2ZW50RW5hYmxlZENvbnRyYWN0LmdldFBhc3RFdmVudHMoZXZlbnROYW1lLCB7XG4gICAgICAvLyBmaWx0ZXI6IHtfZnJvbTogZXZlbnRPcHRpb25zLmFkZHJlc3N9LFxuICAgICAgZnJvbUJsb2NrLFxuICAgICAgdG9CbG9jazogJ2xhdGVzdCdcbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yIGdldHRpbmcgZXZlbnRzIG1hbnVhbGx5JywgZSk7XG4gIH1cblxuICBpZiAoIWV2ZW50cykgcmV0dXJuO1xuXG4gIGZvcihsZXQgaSA9IDA7IGk8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBldmVudCA9IGV2ZW50c1tpXTtcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdFVkVOVF9GSVJFRCcsIG5hbWUsIGV2ZW50fSlcbiAgfVxufVxuXG5cblxuLypcbiAqIFNlbmQgYW5kIENhY2hlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlVHhDaGFubmVsKHt0eE9iamVjdCwgc3RhY2tJZCwgc2VuZEFyZ3MgPSB7fSwgY29udHJhY3ROYW1lfSkge1xuICB2YXIgcGVyc2lzdFR4SGFzaFxuXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgdHhQcm9taUV2ZW50ID0gdHhPYmplY3Quc2VuZChzZW5kQXJncykub24oJ3RyYW5zYWN0aW9uSGFzaCcsIHR4SGFzaCA9PiB7XG4gICAgICBwZXJzaXN0VHhIYXNoID0gdHhIYXNoXG5cbiAgICAgIGVtaXQoe3R5cGU6ICdUWF9CUk9BRENBU1RFRCcsIHR4SGFzaCwgc3RhY2tJZH0pXG4gICAgICBlbWl0KHt0eXBlOiAnQ09OVFJBQ1RfU1lOQ19JTkQnLCBjb250cmFjdE5hbWV9KVxuICAgIH0pXG4gICAgLm9uKCdjb25maXJtYXRpb24nLCAoY29uZmlybWF0aW9uTnVtYmVyLCByZWNlaXB0KSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVFhfQ09ORklSTUFJVE9OJywgY29uZmlybWF0aW9uUmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICB9KVxuICAgIC5vbigncmVjZWlwdCcsIHJlY2VpcHQgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1RYX1NVQ0NFU1NGVUwnLCByZWNlaXB0OiByZWNlaXB0LCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcbiAgICAub24oJ2Vycm9yJywgZXJyb3IgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1RYX0VSUk9SJywgZXJyb3I6IGVycm9yLCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgdHhQcm9taUV2ZW50Lm9mZigpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXG4gIH0pXG59XG5cbmZ1bmN0aW9uKiBjYWxsU2VuZENvbnRyYWN0VHgoe2NvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIHN0YWNrSWR9KSB7XG4gIC8vIENoZWNrIGZvciB0eXBlIG9mIG9iamVjdCBhbmQgcHJvcGVydGllcyBpbmRpY2F0aXZlIG9mIGNhbGwvc2VuZCBvcHRpb25zLlxuICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaW5hbEFyZyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6IGFyZ3NbMF1cbiAgICB2YXIgc2VuZEFyZ3MgPSB7fVxuICAgIHZhciBmaW5hbEFyZ1Rlc3QgPSBmYWxzZVxuXG4gICAgaWYgKHR5cGVvZiBmaW5hbEFyZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmaW5hbEFyZ1Rlc3QgPSBjYWxsKGlzU2VuZE9yQ2FsbE9wdGlvbnMsIGZpbmFsQXJnKVxuICAgIH1cblxuICAgIGlmIChmaW5hbEFyZ1Rlc3QpIHtcbiAgICAgIHNlbmRBcmdzID0gZmluYWxBcmdcblxuICAgICAgYXJncy5sZW5ndGggPiAxID8gZGVsZXRlIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6IGRlbGV0ZSBhcmdzWzBdXG4gICAgICBhcmdzLmxlbmd0aCA9IGFyZ3MubGVuZ3RoIC0gMVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBuYW1lIHRvIG1hcmsgYXMgZGVzeW5jaHJvbml6ZWQgb24gdHggY3JlYXRpb25cbiAgY29uc3QgY29udHJhY3ROYW1lID0gY29udHJhY3QuY29udHJhY3ROYW1lXG5cbiAgLy8gQ3JlYXRlIHRoZSB0cmFuc2FjdGlvbiBvYmplY3QgYW5kIGV4ZWN1dGUgdGhlIHR4LlxuICBjb25zdCB0eE9iamVjdCA9IHlpZWxkIGNhbGwoY29udHJhY3QubWV0aG9kc1tmbk5hbWVdLCAuLi5hcmdzKVxuICBjb25zdCB0eENoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZVR4Q2hhbm5lbCwge3R4T2JqZWN0LCBzdGFja0lkLCBzZW5kQXJncywgY29udHJhY3ROYW1lfSlcblxuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKHR4Q2hhbm5lbClcbiAgICAgIHlpZWxkIHB1dChldmVudClcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgdHhDaGFubmVsLmNsb3NlKClcbiAgfVxufVxuXG4vKlxuICogQ2FsbCBhbmQgQ2FjaGVcbiAqL1xuXG5mdW5jdGlvbiogY2FsbENhbGxDb250cmFjdEZuKHtjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaCwgc3luYyA9IGZhbHNlfSkge1xuICAvLyBrZWVwaW5nIGZvciBwcmUtdjEuMS41IGNvbXBhdGliaWxpdHkgd2l0aCBDQUxMX0NPTlRSQUNUX0ZOIGV2ZW50LlxuICBpZiAoc3luYykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIHR5cGUgb2Ygb2JqZWN0IGFuZCBwcm9wZXJ0aWVzIGluZGljYXRpdmUgb2YgY2FsbC9zZW5kIG9wdGlvbnMuXG4gIGlmIChhcmdzLmxlbmd0aCkge1xuICAgIGNvbnN0IGZpbmFsQXJnID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogYXJnc1swXVxuICAgIHZhciBjYWxsQXJncyA9IHt9XG4gICAgdmFyIGZpbmFsQXJnVGVzdCA9IGZhbHNlXG5cbiAgICBpZiAodHlwZW9mIGZpbmFsQXJnID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZpbmFsQXJnVGVzdCA9IGNhbGwoaXNTZW5kT3JDYWxsT3B0aW9ucywgZmluYWxBcmcpXG4gICAgfVxuXG4gICAgaWYgKGZpbmFsQXJnVGVzdCkge1xuICAgICAgY2FsbEFyZ3MgPSBmaW5hbEFyZ1xuXG4gICAgICBhcmdzLmxlbmd0aCA+IDEgPyBkZWxldGUgYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogZGVsZXRlIGFyZ3NbMF1cbiAgICAgIGFyZ3MubGVuZ3RoID0gYXJncy5sZW5ndGggLSAxXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSB0cmFuc2FjdGlvbiBvYmplY3QgYW5kIGV4ZWN1dGUgdGhlIGNhbGwuXG4gIGNvbnN0IHR4T2JqZWN0ID0geWllbGQgY2FsbChjb250cmFjdC5tZXRob2RzW2ZuTmFtZV0sIC4uLmFyZ3MpXG5cbiAgdHJ5IHtcbiAgICAvLyBDcmVhdGUgdGhlIHRyYW5zYWN0aW9uIG9iamVjdCBhbmQgZXhlY3V0ZSB0aGUgY2FsbC5cbiAgICBjb25zdCB0eE9iamVjdCA9IHlpZWxkIGNhbGwoY29udHJhY3QubWV0aG9kc1tmbk5hbWVdLCAuLi5hcmdzKVxuXG4gICAgY29uc3QgY2FsbFJlc3VsdCA9IHlpZWxkIGNhbGwodHhPYmplY3QuY2FsbCwgY2FsbEFyZ3MpXG5cbiAgICB2YXIgZGlzcGF0Y2hBcmdzID0ge1xuICAgICAgbmFtZTogY29udHJhY3QuY29udHJhY3ROYW1lLFxuICAgICAgdmFyaWFibGU6IGNvbnRyYWN0LmFiaVtmbkluZGV4XS5uYW1lLFxuICAgICAgYXJnc0hhc2g6IGFyZ3NIYXNoLFxuICAgICAgYXJnczogYXJncyxcbiAgICAgIHZhbHVlOiBjYWxsUmVzdWx0LFxuICAgICAgZm5JbmRleDogZm5JbmRleFxuICAgIH1cblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0dPVF9DT05UUkFDVF9WQVInLCAuLi5kaXNwYXRjaEFyZ3N9KVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICB2YXIgZXJyb3JBcmdzID0ge1xuICAgICAgbmFtZTogY29udHJhY3QuY29udHJhY3ROYW1lLFxuICAgICAgdmFyaWFibGU6IGNvbnRyYWN0LmFiaVtmbkluZGV4XS5uYW1lLFxuICAgICAgYXJnc0hhc2g6IGFyZ3NIYXNoLFxuICAgICAgYXJnczogYXJncyxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIGZuSW5kZXg6IGZuSW5kZXhcbiAgICB9XG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdFUlJPUl9DT05UUkFDVF9WQVInLCAuLi5lcnJvckFyZ3N9KVxuICB9XG59XG5cbi8qXG4gKiBTeW5jIENvbnRyYWN0XG4gKi9cblxuZnVuY3Rpb24qIGNhbGxTeW5jQ29udHJhY3QoYWN0aW9uKSB7XG4gIC8vIEdldCBjb250cmFjdCBzdGF0ZSBmcm9tIHN0b3JlXG4gIGNvbnN0IGNvbnRyYWN0ID0gYWN0aW9uLmNvbnRyYWN0XG4gIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuXG4gIGNvbnN0IGNvbnRyYWN0c1N0YXRlID0geWllbGQgc2VsZWN0KGdldENvbnRyYWN0c1N0YXRlKVxuICB2YXIgY29udHJhY3RGbnNTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRyYWN0c1N0YXRlW2NvbnRyYWN0TmFtZV0uc3RhdGUpXG5cbiAgLy8gUmVtb3ZlIHVubmVjZXNzYXJ5IGtleXNcbiAgZGVsZXRlIGNvbnRyYWN0Rm5zU3RhdGUuaW5pdGlhbGl6ZWRcbiAgZGVsZXRlIGNvbnRyYWN0Rm5zU3RhdGUuc3luY2VkXG4gIGRlbGV0ZSBjb250cmFjdEZuc1N0YXRlLmV2ZW50c1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciBmdW5jdGlvbnMgYW5kIGhhc2hlc1xuICBmb3IgKHZhciBmbk5hbWUgaW4gY29udHJhY3RGbnNTdGF0ZSlcbiAge1xuICAgIGZvciAodmFyIGFyZ3NIYXNoIGluIGNvbnRyYWN0Rm5zU3RhdGVbZm5OYW1lXSlcbiAgICB7XG4gICAgICBjb25zdCBmbkluZGV4ID0gY29udHJhY3RGbnNTdGF0ZVtmbk5hbWVdW2FyZ3NIYXNoXS5mbkluZGV4XG4gICAgICBjb25zdCBhcmdzID0gY29udHJhY3RGbnNTdGF0ZVtmbk5hbWVdW2FyZ3NIYXNoXS5hcmdzXG5cbiAgICAgIC8vIFB1bGwgYXJncyBhbmQgY2FsbCBmbiBmb3IgZWFjaCBnaXZlbiBmdW5jdGlvblxuICAgICAgLy8ga2VlcGluZyBmb3IgcHJlLXYxLjEuNSBjb21wYXRpYmlsaXR5IHdpdGggQ0FMTF9DT05UUkFDVF9GTiBldmVudC5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0NBTExfQ09OVFJBQ1RfRk4nLCBjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaCwgc3luYzogdHJ1ZX0pXG4gICAgICB5aWVsZCBjYWxsKGNhbGxDYWxsQ29udHJhY3RGbiwge2NvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIGFyZ3NIYXNofSlcbiAgICB9XG4gIH1cblxuICAvLyBXaGVuIGNvbXBsZXRlLCBkaXNwYXRjaCBDT05UUkFDVF9TWU5DRURcbiAgeWllbGQgcHV0KHt0eXBlOiAnQ09OVFJBQ1RfU1lOQ0VEJywgY29udHJhY3ROYW1lfSlcbn1cblxuY29uc3QgZ2V0Q29udHJhY3RzU3RhdGUgPSAoc3RhdGUpID0+IHN0YXRlLmNvbnRyYWN0c1xuY29uc3QgZ2V0TmV0d29ya0lkID0gKHN0YXRlKSA9PiBzdGF0ZS53ZWIzLm5ldHdvcmtJZFxuY29uc3QgZ2V0RmFsbGJhY2tOZXR3b3JrSWQgPSAoc3RhdGUpID0+IHN0YXRlLndlYjMuZmFsbGJhY2tOZXR3b3JrSWRcblxuZnVuY3Rpb24gaXNTZW5kT3JDYWxsT3B0aW9ucyhvcHRpb25zKSB7XG4gIGlmICgnZnJvbScgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcbiAgaWYgKCdnYXMnIGluIG9wdGlvbnMpIHJldHVybiB0cnVlXG4gIGlmICgnZ2FzUHJpY2UnIGluIG9wdGlvbnMpIHJldHVybiB0cnVlXG4gIGlmICgndmFsdWUnIGluIG9wdGlvbnMpIHJldHVybiB0cnVlXG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uKiBjb250cmFjdHNTYWdhKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoJ1NFTkRfQ09OVFJBQ1RfVFgnLCBjYWxsU2VuZENvbnRyYWN0VHgpXG4gIHlpZWxkIHRha2VFdmVyeSgnQ0FMTF9DT05UUkFDVF9GTicsIGNhbGxDYWxsQ29udHJhY3RGbilcbiAgeWllbGQgdGFrZUV2ZXJ5KCdDT05UUkFDVF9TWU5DSU5HJywgY2FsbFN5bmNDb250cmFjdClcblxuICAvLyB5aWVsZCB0YWtlRXZlcnkoJ0xJU1RFTl9GT1JfRVZFTlQnLCBjYWxsTGlzdGVuRm9yQ29udHJhY3RFdmVudClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdMSVNURU5fRk9SX0VWRU5UJywgY2FsbEdldENvbnRyYWN0RXZlbnQpXG5cbiAgeWllbGQgdGFrZUV2ZXJ5KCdHRVRfQ09OVFJBQ1RfRVZFTlQnLCBjYWxsR2V0Q29udHJhY3RFdmVudClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdBRERfQ09OVFJBQ1QnLCBhZGRDb250cmFjdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3RzU2FnYTtcbiIsImNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICB3ZWIzOiB7XG4gICAgLy8gYGJsb2NrYCBubyBsb25nZXIgbmVlZGVkO1xuICAgIC8vIGtlZXBpbmcgZm9yIHByZS12MS4xLjEgY29tcGF0aWJpbGl0eSB3aXRoIGRyaXp6bGUtcmVhY3QuXG4gICAgYmxvY2s6IGZhbHNlLFxuICAgIC8vIGZhbGxiYWNrOiB7XG4gICAgLy8gICB0eXBlOiAnd3MnLFxuICAgIC8vICAgdXJsOiAnd3M6Ly8xMjcuMC4wLjE6ODU0NSdcbiAgICAvLyB9XG4gIH0sXG4gIGNvbnRyYWN0czogW10sXG4gIGV2ZW50czoge30sXG4gIHBvbGxzOiB7XG4gICAgYmxvY2tzOiAzMDAwXG4gIH0sXG4gIHN5bmNBbHdheXM6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRPcHRpb25zIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpbml0aWFsaXplZDogZmFsc2Vcbn1cblxuY29uc3QgZHJpenpsZVN0YXR1c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAvKlxuICAgKiBEcml6emxlIFN0YXR1c1xuICAgKi9cblxuICAgaWYgKGFjdGlvbi50eXBlID09PSAnRFJJWlpMRV9XQVJOSU5HJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHdhcm5pbmc6IGFjdGlvbi53YXJuaW5nLFxuICAgICAgfVxuICAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0RSSVpaTEVfRkFJTEVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IubWVzc2FnZSxcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdEUklaWkxFX0lOSVRJQUxJWkVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBkcml6emxlU3RhdHVzUmVkdWNlclxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSAnLi4vZGVmYXVsdE9wdGlvbnMnXG5pbXBvcnQgbWVyZ2UgZnJvbSAnLi4vbWVyZ2VPcHRpb25zJ1xuXG4vLyBJbml0aWFsaXphdGlvbiBGdW5jdGlvbnNcbmltcG9ydCB7IGluaXRpYWxpemVXZWIzLCBnZXROZXR3b3JrSWQgfSBmcm9tICcuLi93ZWIzL3dlYjNTYWdhJ1xuaW1wb3J0IHsgZ2V0QWNjb3VudHMgfSBmcm9tICcuLi9hY2NvdW50cy9hY2NvdW50c1NhZ2EnXG5pbXBvcnQgeyBnZXRBY2NvdW50QmFsYW5jZXMgfSBmcm9tICcuLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcblxuZnVuY3Rpb24qIGluaXRpYWxpemVEcml6emxlKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgYWN0aW9uLm9wdGlvbnMpXG4gICAgY29uc3Qgd2ViM09wdGlvbnMgPSBvcHRpb25zLndlYjNcbiAgICBjb25zdCBkcml6emxlID0gYWN0aW9uLmRyaXp6bGVcblxuICAgIC8vIEluaXRpYWxpemUgd2ViMyBhbmQgZ2V0IHRoZSBjdXJyZW50IG5ldHdvcmsgSUQuXG4gICAgdmFyIHt3ZWIzLCBmYWxsYmFja30gPSB5aWVsZCBjYWxsKGluaXRpYWxpemVXZWIzLCB7b3B0aW9uczogd2ViM09wdGlvbnN9KVxuICAgIGlmICghd2ViMykge1xuICAgICAgd2ViMyA9IGZhbGxiYWNrO1xuICAgICAgZmFsbGJhY2sgPSBudWxsO1xuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnRFJJWlpMRV9XQVJOSU5HJywgd2FybmluZzogJ21ldGFtYXNrJ30pXG4gICAgfVxuICAgIGRyaXp6bGUud2ViMyA9IHdlYjNcbiAgICBkcml6emxlLmZhbGxiYWNrID0gZmFsbGJhY2tcblxuICAgIHlpZWxkIGNhbGwoZ2V0TmV0d29ya0lkLCB7d2ViMywgb3B0aW9uczogd2ViM09wdGlvbnN9KVxuXG4gICAgbGV0IHN0b3JlID0gZHJpenpsZS5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGxldCBuZXR3b3JrSWQgPSBzdG9yZS53ZWIzLm5ldHdvcmtJZDtcblxuICAgIGlmIChvcHRpb25zLm5ldHdvcmtJZCAhPT0gbmV0d29ya0lkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25ldHdvcmsnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXQgaW5pdGlhbCBhY2NvdW50cyBsaXN0IGFuZCBiYWxhbmNlcy5cbiAgICBpZiAoIXdlYjMuY3VycmVudFByb3ZpZGVyLmlzUG9ydGlzKSB7XG4gICAgICB5aWVsZCBjYWxsKGdldEFjY291bnRzLCB7d2ViMzogd2ViMyB8fCBmYWxsYmFja30pXG4gICAgICB5aWVsZCBjYWxsKGdldEFjY291bnRCYWxhbmNlcywge3dlYjM6IHdlYjMgfHwgZmFsbGJhY2t9KVxuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlIGNvbnRyYWN0cyBwYXNzZWQgdGhyb3VnaCB2aWEgb3B0aW9ucy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuY29udHJhY3RzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBjb250cmFjdENvbmZpZyA9IG9wdGlvbnMuY29udHJhY3RzW2ldXG4gICAgICB2YXIgZXZlbnRzID0gW11cbiAgICAgIHZhciBjb250cmFjdE5hbWUgPSBjb250cmFjdENvbmZpZy5jb250cmFjdE5hbWVcblxuICAgICAgaWYgKGNvbnRyYWN0TmFtZSBpbiBvcHRpb25zLmV2ZW50cykge1xuICAgICAgICBldmVudHMgPSBvcHRpb25zLmV2ZW50c1tjb250cmFjdE5hbWVdXG4gICAgICB9XG5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FERF9DT05UUkFDVCcsIGRyaXp6bGUsIGNvbnRyYWN0Q29uZmlnLCBldmVudHMsIHdlYjMsIGZhbGxiYWNrfSlcbiAgICB9XG5cbiAgICBjb25zdCBzeW5jQWx3YXlzID0gb3B0aW9ucy5zeW5jQWx3YXlzXG5cbiAgICAvLyBBY2NvdW50cyBQb2xsaW5nXG4gICAgaWYgKHdlYjMgJiYgd2ViMy5jdXJyZW50UHJvdmlkZXIuaXNNZXRhTWFzaykge1xuICAgICAgaWYgKCdhY2NvdW50cycgaW4gb3B0aW9ucy5wb2xscykge1xuICAgICAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UU19QT0xMSU5HJywgaW50ZXJ2YWw6IG9wdGlvbnMucG9sbHMuYWNjb3VudHMsIHdlYjN9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh3ZWIzICYmIGZhbGxiYWNrKSB7XG4gICAgICB3ZWIzID0gIXdlYjMuY3VycmVudFByb3ZpZGVyLmlzTWV0YU1hc2sgPyB3ZWIzIDogZmFsbGJhY2s7XG4gICAgfSBlbHNlIHdlYjMgPSBmYWxsYmFjayB8fCB3ZWIzO1xuXG4gICAgaWYgKHdlYjMuY3VycmVudFByb3ZpZGVyLmlzTWV0YU1hc2sgfHwgd2ViMy5jdXJyZW50UHJvdmlkZXIuaXNIdHRwKSB7XG4gICAgICAvLyBVc2luZyBNZXRhTWFzaywgYXR0ZW1wdCBibG9jayBwb2xsaW5nLlxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBvcHRpb25zLnBvbGxzLmJsb2Nrc1xuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQkxPQ0tTX1BPTExJTkcnLCBkcml6emxlLCBpbnRlcnZhbCwgd2ViMywgc3luY0Fsd2F5c30pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gTm90IHVzaW5nIE1ldGFNYXNrLCBhdHRlbXB0IHN1YnNjcmlwdGlvbiBibG9jayBsaXN0ZW5pbmcuXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS1NfTElTVEVOSU5HJywgZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pXG4gICAgfVxuXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG5cbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgRHJpenpsZTonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgaWYgKGVycm9yLm1lc3NhZ2UubWF0Y2goJ3dlYjMnKSkgZXJyb3IubWVzc2FnZSA9ICd3ZWIzJztcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdEUklaWkxFX0ZBSUxFRCcsIGVycm9yfSlcblxuICAgIHJldHVyblxuICB9XG5cbiAgeWllbGQgcHV0KHt0eXBlOiAnRFJJWlpMRV9JTklUSUFMSVpFRCd9KVxuXG4gIHJldHVyblxufVxuXG5mdW5jdGlvbiogZHJpenpsZVN0YXR1c1NhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoJ0RSSVpaTEVfSU5JVElBTElaSU5HJywgaW5pdGlhbGl6ZURyaXp6bGUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyaXp6bGVTdGF0dXNTYWdhO1xuIiwiaW1wb3J0IGdldEFiaSBmcm9tICcuL2dldEFiaSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUgKGNvbnRyYWN0Q29uZmlnKSB7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgc3luY2VkOiBmYWxzZSxcbiAgICBzdGF0ZToge31cbiAgfVxuXG4gIC8vIENvbnN0YW50IGdldHRlcnNcbiAgdmFyIGFiaSA9IGdldEFiaShjb250cmFjdENvbmZpZylcbiAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IGFiaS5sZW5ndGg7IGkyKyspIHtcbiAgICB2YXIgaXRlbSA9IGFiaVtpMl07XG5cbiAgICBpZiAoaXRlbS50eXBlID09IFwiZnVuY3Rpb25cIiAmJiBpdGVtLmNvbnN0YW50ID09PSB0cnVlKSB7XG4gICAgICBzdGF0ZS5zdGF0ZVtpdGVtLm5hbWVdID0ge31cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUgfSBmcm9tICcuL2dlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZShvcHRpb25zKSB7XG4gIC8vIFByZWxvYWRlZCBzdGF0ZVxuICB2YXIgY29udHJhY3RzSW5pdGlhbFN0YXRlID0ge31cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuY29udHJhY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gSW5pdGlhbCBjb250cmFjdCBkZXRhaWxzXG4gICAgdmFyIGNvbnRyYWN0TmFtZSA9IG9wdGlvbnMuY29udHJhY3RzW2ldLmNvbnRyYWN0TmFtZVxuICAgIGNvbnRyYWN0c0luaXRpYWxTdGF0ZVtjb250cmFjdE5hbWVdID0gZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZShvcHRpb25zLmNvbnRyYWN0c1tpXSlcbiAgfVxuXG4gIHJldHVybiBjb250cmFjdHNJbml0aWFsU3RhdGVcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcbmltcG9ydCByb290U2FnYSBmcm9tICcuL3Jvb3RTYWdhJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUgfSBmcm9tICcuL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlJ1xuaW1wb3J0IGdldEFiaSBmcm9tICcuL2dldEFiaSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3RvcmUob3B0aW9ucykge1xuICAvLyBSZWR1eCBEZXZUb29sc1xuICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG4gIC8vIFByZWxvYWRlZCBzdGF0ZVxuICB2YXIgcHJlbG9hZGVkU3RhdGUgPSB7XG4gICAgY29udHJhY3RzOiBnZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZShvcHRpb25zKVxuICB9XG5cbiAgLy8gY3JlYXRlIHRoZSBzYWdhIG1pZGRsZXdhcmVcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGNvbXBvc2VFbmhhbmNlcnMoXG4gICAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICAgIHNhZ2FNaWRkbGV3YXJlXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxuXG4gIHJldHVybiBzdG9yZVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWJpKGNvbnRyYWN0RW50cnkpIHtcbiAgaWYgKGNvbnRyYWN0RW50cnkud2ViM0NvbnRyYWN0KSB7XG4gICAgcmV0dXJuIGNvbnRyYWN0RW50cnkud2ViM0NvbnRyYWN0Lm9wdGlvbnMuanNvbkludGVyZmFjZVxuICAgIHJldHVybiBjb250cmFjdEVudHJ5LndlYjNDb250cmFjdC5hYmlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29udHJhY3RFbnRyeS5hYmlcbiAgfVxufVxuIiwiaW1wb3J0IERyaXp6bGUgZnJvbSAnLi9Ecml6emxlLmpzJ1xuaW1wb3J0IHsgZ2VuZXJhdGVTdG9yZSB9IGZyb20gJy4vZ2VuZXJhdGVTdG9yZSdcbmltcG9ydCB7IGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9nZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSdcblxuLy8gUmVkdWNlcnNcbmltcG9ydCBhY2NvdW50c1JlZHVjZXIgZnJvbSAnLi9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXInXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzUmVkdWNlciBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyJ1xuaW1wb3J0IGNvbnRyYWN0c1JlZHVjZXIgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzUmVkdWNlcidcbmltcG9ydCBkcml6emxlU3RhdHVzUmVkdWNlciBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXInXG5pbXBvcnQgdHJhbnNhY3Rpb25zUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyIGZyb20gJy4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyJ1xuaW1wb3J0IHdlYjNSZWR1Y2VyIGZyb20gJy4vd2ViMy93ZWIzUmVkdWNlcidcblxuY29uc3QgZHJpenpsZVJlZHVjZXJzID0ge1xuICBhY2NvdW50czogYWNjb3VudHNSZWR1Y2VyLFxuICBhY2NvdW50QmFsYW5jZXM6IGFjY291bnRCYWxhbmNlc1JlZHVjZXIsXG4gIGNvbnRyYWN0czogY29udHJhY3RzUmVkdWNlcixcbiAgZHJpenpsZVN0YXR1czogZHJpenpsZVN0YXR1c1JlZHVjZXIsXG4gIHRyYW5zYWN0aW9uczogdHJhbnNhY3Rpb25zUmVkdWNlcixcbiAgdHJhbnNhY3Rpb25TdGFjazogdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIsXG4gIHdlYjM6IHdlYjNSZWR1Y2VyXG59XG5cbi8vIFNhZ2FzXG5pbXBvcnQgYWNjb3VudHNTYWdhIGZyb20gJy4vYWNjb3VudHMvYWNjb3VudHNTYWdhJ1xuaW1wb3J0IGFjY291bnRCYWxhbmNlc1NhZ2EgZnJvbSAnLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcbmltcG9ydCBibG9ja3NTYWdhIGZyb20gJy4vYmxvY2tzL2Jsb2Nrc1NhZ2EnXG5pbXBvcnQgY29udHJhY3RzU2FnYSBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNTYWdhJ1xuaW1wb3J0IGRyaXp6bGVTdGF0dXNTYWdhIGZyb20gJy4vZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzU2FnYSdcbmltcG9ydCB3ZWIzU2FnYSBmcm9tICcuL3dlYjMvd2ViM1NhZ2EnXG5cbmNvbnN0IGRyaXp6bGVTYWdhcyA9IFtcbiAgYWNjb3VudHNTYWdhLFxuICBhY2NvdW50QmFsYW5jZXNTYWdhLFxuICBibG9ja3NTYWdhLFxuICBjb250cmFjdHNTYWdhLFxuICBkcml6emxlU3RhdHVzU2FnYSxcbiAgd2ViM1NhZ2Fcbl1cblxuZXhwb3J0IHtcbiAgRHJpenpsZSxcbiAgZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUsXG4gIGdlbmVyYXRlU3RvcmUsXG4gIGRyaXp6bGVSZWR1Y2VycyxcbiAgZHJpenpsZVNhZ2FzXG59XG4iLCJpbXBvcnQgbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJ1xuY29uc3QgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2lzLXBsYWluLW9iamVjdCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkZWZhdWx0T3B0aW9ucywgbmV3T3B0aW9ucykge1xuICByZXR1cm4gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG5ld09wdGlvbnMsIHtcbiAgICBpc01lcmdlYWJsZU9iamVjdDogaXNQbGFpbk9iamVjdFxuICB9KVxufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBhY2NvdW50c1JlZHVjZXIgZnJvbSAnLi9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXInXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzUmVkdWNlciBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyJ1xuaW1wb3J0IGNvbnRyYWN0c1JlZHVjZXIgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzUmVkdWNlcidcbmltcG9ydCBkcml6emxlU3RhdHVzUmVkdWNlciBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXInXG5pbXBvcnQgdHJhbnNhY3Rpb25zUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyIGZyb20gJy4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyJ1xuaW1wb3J0IHdlYjNSZWR1Y2VyIGZyb20gJy4vd2ViMy93ZWIzUmVkdWNlcidcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFjY291bnRzOiBhY2NvdW50c1JlZHVjZXIsXG4gIGFjY291bnRCYWxhbmNlczogYWNjb3VudEJhbGFuY2VzUmVkdWNlcixcbiAgY29udHJhY3RzOiBjb250cmFjdHNSZWR1Y2VyLFxuICBkcml6emxlU3RhdHVzOiBkcml6emxlU3RhdHVzUmVkdWNlcixcbiAgdHJhbnNhY3Rpb25zOiB0cmFuc2FjdGlvbnNSZWR1Y2VyLFxuICB0cmFuc2FjdGlvblN0YWNrOiB0cmFuc2FjdGlvblN0YWNrUmVkdWNlcixcbiAgd2ViMzogd2ViM1JlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0IGFjY291bnRzU2FnYSBmcm9tICcuL2FjY291bnRzL2FjY291bnRzU2FnYSdcbmltcG9ydCBhY2NvdW50QmFsYW5jZXNTYWdhIGZyb20gJy4vYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1NhZ2EnXG5pbXBvcnQgYmxvY2tzU2FnYSBmcm9tICcuL2Jsb2Nrcy9ibG9ja3NTYWdhJ1xuaW1wb3J0IGNvbnRyYWN0c1NhZ2EgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzU2FnYSdcbmltcG9ydCBkcml6emxlU3RhdHVzU2FnYSBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1NhZ2EnXG5pbXBvcnQgd2ViM1NhZ2EgZnJvbSAnLi93ZWIzL3dlYjNTYWdhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdCgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKGFjY291bnRzU2FnYSksXG4gICAgZm9yayhhY2NvdW50QmFsYW5jZXNTYWdhKSxcbiAgICBmb3JrKGJsb2Nrc1NhZ2EpLFxuICAgIGZvcmsoY29udHJhY3RzU2FnYSksXG4gICAgZm9yayhkcml6emxlU3RhdHVzU2FnYSksXG4gICAgZm9yayh3ZWIzU2FnYSlcbiAgXSlcbn1cbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdXG4gIFxuY29uc3QgdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1BVU0hfVE9fVFhTVEFDSycpXG4gICAge1xuICAgICAgICBzdGF0ZS5wdXNoKCcnKVxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUE9QX0ZST01fVFhTVEFDSycpXG4gICAge1xuICAgICAgICBzdGF0ZS5wb3AoKVxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfQlJPQURDQVNURUQnKVxuICAgIHtcbiAgICAgICAgc3RhdGVbYWN0aW9uLnN0YWNrSWRdID0gYWN0aW9uLnR4SGFzaFxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7fVxuICBcbmNvbnN0IHRyYW5zYWN0aW9uc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX0JST0FEQ0FTVEVEJylcbiAgICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIFthY3Rpb24udHhIYXNoXToge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdUWF9DT05GSVJNQUlUT04nKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLnR4SGFzaF0sXG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXS5jb25maXJtYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY29uZmlybWF0aW9uUmVjZWlwdFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX1NVQ0NFU1NGVUwnKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLnR4SGFzaF0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgcmVjZWlwdDogYWN0aW9uLnJlY2VpcHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfRVJST1InKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLnR4SGFzaF0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2FjdGlvbnNSZWR1Y2VyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHN0YXR1czogJydcbn1cblxuY29uc3Qgd2ViM1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdXRUIzX0lOSVRJQUxJWklORycpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICdpbml0aWFsaXppbmcnXG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnV0VCM19JTklUSUFMSVpFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICdpbml0aWFsaXplZCdcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdXRUIzX0ZBSUxFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICdmYWlsZWQnXG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnTkVUV09SS19JRF9GRVRDSEVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG5ldHdvcmtJZDogYWN0aW9uLm5ldHdvcmtJZCxcbiAgICAgIGZhbGxiYWNrTmV0d29ya0lkOiBhY3Rpb24uZmFsbGJhY2tOZXR3b3JrSWQsXG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnTkVUV09SS19JRF9GQUlMRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbmV0d29ya0lkOiBhY3Rpb24ubmV0d29ya0lkXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjNSZWR1Y2VyXG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG52YXIgV2ViMyA9IHJlcXVpcmUoJ3dlYjMnKVxuXG4vKlxuICogSW5pdGlhbGl6YXRpb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIGluaXRpYWxpemVXZWIzKHtvcHRpb25zfSkge1xuXG4gIHRyeSB7XG4gICAgdmFyIHdlYjM7XG4gICAgdmFyIGZhbGxiYWNrO1xuXG4gICAgLy8gQ2hlY2tpbmcgaWYgV2ViMyBoYXMgYmVlbiBpbmplY3RlZCBieSB0aGUgYnJvd3NlciAoTWlzdC9NZXRhTWFzaylcbiAgICBpZiAodHlwZW9mIGdsb2JhbC53ZWIzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVXNlIE1pc3QvTWV0YU1hc2sncyBwcm92aWRlci5cbiAgICAgIHdlYjMgPSBuZXcgV2ViMyhnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIpXG4gICAgICB3ZWIzLmV0aC5jYWNoZVNlbmRUcmFuc2FjdGlvbiA9ICh0eE9iamVjdCkgPT4gcHV0KHt0eXBlOiAnU0VORF9XRUIzX1RYJywgdHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KVxuXG4gICAgICBjb25zb2xlLmxvZygnSW5qZWN0ZWQgd2ViMyBkZXRlY3RlZC4nKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmZhbGxiYWNrICYmIG9wdGlvbnMuZmFsbGJhY2sudXJsKSB7XG4gICAgICAvLyBBdHRlbXB0IGZhbGxiYWNrIGlmIG5vIHdlYjMgaW5qZWN0aW9uLlxuXG4gICAgICBzd2l0Y2ggKG9wdGlvbnMuZmFsbGJhY2sudHlwZSkge1xuICAgICAgICBjYXNlICd3cyc6XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpbmcgd3MgcHJvdmlkZXIuJylcbiAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuV2Vic29ja2V0UHJvdmlkZXIob3B0aW9ucy5mYWxsYmFjay51cmwpXG5cbiAgICAgICAgICBmYWxsYmFjayA9IG5ldyBXZWIzKHByb3ZpZGVyKVxuXG4gICAgICAgICAgcHJvdmlkZXIub24oJ2Vycm9yJywgZSA9PiBjb25zb2xlLmxvZygnV1MgRXJyb3InLCBlKSk7XG4gICAgICAgICAgcHJvdmlkZXIub24oJ2VuZCcsIGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTIGNsb3NlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gcmVjb25uZWN0Li4uJyk7XG4gICAgICAgICAgICBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5XZWJzb2NrZXRQcm92aWRlcihvcHRpb25zLmZhbGxiYWNrLnVybCk7XG5cbiAgICAgICAgICAgIHByb3ZpZGVyLm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE8gdHJpZ2dlciByZWNvbm5lY3RcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV1NTIFJlY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmFsbGJhY2suc2V0UHJvdmlkZXIocHJvdmlkZXIpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgeWllbGQgY29ubmVjdFdlYlNvY2tldChwcm92aWRlcik7XG5cbiAgICAgICAgICAvLyBBdHRhY2ggZHJpenpsZSBmdW5jdGlvbnNcbiAgICAgICAgICBmYWxsYmFjay5ldGhbJ2NhY2hlU2VuZFRyYW5zYWN0aW9uJ10gPSAodHhPYmplY3QpID0+IHB1dCh7dHlwZTogJ1NFTkRfV0VCM19UWCcsIHR4T2JqZWN0LCBzdGFja0lkLCB3ZWIzfSlcblxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2h0dHBzJzpcbiAgICAgICAgY2FzZSAnaHR0cCc6XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RpbmcgZmFsbGJhY2sgaHR0cCBwcm92aWRlci4nKVxuICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgICAgICAgICBvcHRpb25zLmZhbGxiYWNrLnVybCxcbiAgICAgICAgICApXG4gICAgICAgICAgcHJvdmlkZXIuaXNIdHRwID0gdHJ1ZTtcbiAgICAgICAgICBmYWxsYmFjayA9IG5ldyBXZWIzKHByb3ZpZGVyKVxuICAgICAgICAgIC8vIHdlYjMuZXRoLmNhY2hlU2VuZFRyYW5zYWN0aW9uID0gKHR4T2JqZWN0KSA9PiBwdXQoe3R5cGU6ICdTRU5EX1dFQjNfVFgnLCB0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gSW52YWxpZCBvcHRpb25zOyB0aHJvdy5cbiAgICAgICAgICAvLyB0aHJvdyBcIkludmFsaWQgd2ViMyBmYWxsYmFjayBwcm92aWRlZC5cIlxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXdlYjMgJiYgIWZhbGxiYWNrKSB7XG4gICAgICB0aHJvdyAnbWlzc2luZyB3ZWIzIHByaXZpZGVyJ1xuICAgIH1cblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ1dFQjNfSU5JVElBTElaRUQnfSlcblxuICAgIHJldHVybiB7IHdlYjMsIGZhbGxiYWNrIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdXRUIzX0ZBSUxFRCcsIGVycm9yfSlcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbnRpYWxpemluZyB3ZWIzOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdFdlYlNvY2tldChwcm92aWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBwcm92aWRlci5vbignY29ubmVjdCcsIGUgPT4gcmVzb2x2ZSgpKTtcbiAgICAgIHByb3ZpZGVyLm9uKCdlcnJvcicsIGUgPT4gcmVqZWN0KCkpO1xuICAgIH0pO1xufVxuXG4vKlxuICogTmV0d29yayBJRFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0TmV0d29ya0lkKHt3ZWIzLCBvcHRpb25zfSkge1xuICB0cnkge1xuICAgIHZhciBuZXR3b3JrSWQ7XG4gICAgdmFyIGZhbGxiYWNrTmV0d29ya0lkO1xuICAgIGlmICh3ZWIzKVxuICAgICAgbmV0d29ya0lkID0geWllbGQgY2FsbCh3ZWIzLmV0aC5uZXQuZ2V0SWQpXG5cbiAgICBpZiAob3B0aW9ucy5mYWxsYmFjayAmJiBvcHRpb25zLmZhbGxiYWNrLm5ldHdvcmtJZClcbiAgICAgIGZhbGxiYWNrTmV0d29ya0lkID0gb3B0aW9ucy5mYWxsYmFjay5uZXR3b3JrSWRcblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ05FVFdPUktfSURfRkVUQ0hFRCcsIG5ldHdvcmtJZCwgZmFsbGJhY2tOZXR3b3JrSWR9KVxuXG4gICAgcmV0dXJuIG5ldHdvcmtJZFxuICB9XG4gIGNhdGNoKGVycm9yKXtcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdORVRXT1JLX0lEX0ZBSUxFRCcsIGVycm9yfSlcblxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5ldHdvcmsgSUQ6JylcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLypcbiAqIFNlbmQgVHJhbnNhY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVUeENoYW5uZWwoe3R4T2JqZWN0LCBzdGFja0lkLCB3ZWIzfSkge1xuICB2YXIgcGVyc2lzdFR4SGFzaFxuXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgdHhQcm9taUV2ZW50ID0gd2ViMy5ldGguc2VuZFRyYW5zYWN0aW9uKHR4T2JqZWN0KS5vbigndHJhbnNhY3Rpb25IYXNoJywgdHhIYXNoID0+IHtcbiAgICAgIHBlcnNpc3RUeEhhc2ggPSB0eEhhc2hcblxuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfQlJPQURDQVNURUQnLCB0eEhhc2gsIHN0YWNrSWR9KVxuICAgIH0pXG4gICAgLm9uKCdjb25maXJtYXRpb24nLCAoY29uZmlybWF0aW9uTnVtYmVyLCByZWNlaXB0KSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVzNUWF9DT05GSVJNQUlUT04nLCBjb25maXJtYXRpb25SZWNlaXB0OiByZWNlaXB0LCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgIH0pXG4gICAgLm9uKCdyZWNlaXB0JywgcmVjZWlwdCA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVzNUWF9TVUNDRVNTRlVMJywgcmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdXM1RYX0VSUk9SJywgZXJyb3I6IGVycm9yLCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgdHhQcm9taUV2ZW50Lm9mZigpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXG4gIH0pXG59XG5cbmZ1bmN0aW9uKiBjYWxsU2VuZFR4KHt0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pIHtcbiAgY29uc3QgdHhDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVUeENoYW5uZWwsIHt0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pXG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZSh0eENoYW5uZWwpXG4gICAgICB5aWVsZCBwdXQoZXZlbnQpXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHR4Q2hhbm5lbC5jbG9zZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24qIHdlYjNTYWdhKCkge1xuICAvLyB5aWVsZCB0YWtlTGF0ZXN0KCdORVRXT1JLX0lEX0ZBSUxFRCcsIGdldE5ldHdvcmtJZClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdTRU5EX1dFQjNfVFgnLCBjYWxsU2VuZFR4KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzU2FnYVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2RlZXBtZXJnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9ldGhfYmxvY2tfdHJhY2tlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9pc19wbGFpbl9vYmplY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVkdXhfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVkdXhfc2FnYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV93ZWIzX187Il0sInNvdXJjZVJvb3QiOiIifQ==