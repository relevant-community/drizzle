(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("deepmerge"), require("eth-block-tracker-es5"), require("is-plain-object"), require("redux"), require("redux-saga"), require("web3"));
	else if(typeof define === 'function' && define.amd)
		define(["deepmerge", "eth-block-tracker-es5", "is-plain-object", "redux", "redux-saga", "web3"], factory);
	else if(typeof exports === 'object')
		exports["drizzle"] = factory(require("deepmerge"), require("eth-block-tracker-es5"), require("is-plain-object"), require("redux"), require("redux-saga"), require("web3"));
	else
		root["drizzle"] = factory(root["deepmerge"], root["eth-block-tracker-es5"], root["is-plain-object"], root["redux"], root["redux-saga"], root["web3"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_deepmerge__, __WEBPACK_EXTERNAL_MODULE_eth_block_tracker__, __WEBPACK_EXTERNAL_MODULE_is_plain_object__, __WEBPACK_EXTERNAL_MODULE_redux__, __WEBPACK_EXTERNAL_MODULE_redux_saga__, __WEBPACK_EXTERNAL_MODULE_web3__) {
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
/*! exports provided: detach, take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle, asEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
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



var IO = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sym"])('IO');
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

var detach = function detach(eff) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["check"])(asEffect.fork(eff), _utils__WEBPACK_IMPORTED_MODULE_0__["is"].object, 'detach(eff): argument must be a fork effect');
  eff[FORK].detached = true;
  return eff;
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

put.sync = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(put.resolve, /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__["updateIncentive"])('put.sync', 'put.resolve'));

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

  return detach(fork.apply(undefined, [fn].concat(args)));
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
  take: /*#__PURE__*/createAsEffectType(TAKE),
  put: /*#__PURE__*/createAsEffectType(PUT),
  all: /*#__PURE__*/createAsEffectType(ALL),
  race: /*#__PURE__*/createAsEffectType(RACE),
  call: /*#__PURE__*/createAsEffectType(CALL),
  cps: /*#__PURE__*/createAsEffectType(CPS),
  fork: /*#__PURE__*/createAsEffectType(FORK),
  join: /*#__PURE__*/createAsEffectType(JOIN),
  cancel: /*#__PURE__*/createAsEffectType(CANCEL),
  select: /*#__PURE__*/createAsEffectType(SELECT),
  actionChannel: /*#__PURE__*/createAsEffectType(ACTION_CHANNEL),
  cancelled: /*#__PURE__*/createAsEffectType(CANCELLED),
  flush: /*#__PURE__*/createAsEffectType(FLUSH),
  getContext: /*#__PURE__*/createAsEffectType(GET_CONTEXT),
  setContext: /*#__PURE__*/createAsEffectType(SET_CONTEXT)
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

var TASK = /*#__PURE__*/sym('TASK');
var HELPER = /*#__PURE__*/sym('HELPER');
var MATCH = /*#__PURE__*/sym('MATCH');
var CANCEL = /*#__PURE__*/sym('CANCEL_PROMISE');
var SAGA_ACTION = /*#__PURE__*/sym('SAGA_ACTION');
var SELF_CANCELLATION = /*#__PURE__*/sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = /*#__PURE__*/konst(true);
var kFalse = /*#__PURE__*/konst(false);
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

var uid = /*#__PURE__*/autoInc();

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

/***/ "./src/Drizzle.js":
/*!************************!*\
  !*** ./src/Drizzle.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  window.addEventListener('load', resolve);
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
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(accountsSaga);

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

function accountsSaga() {
  return _regenerator2.default.wrap(function accountsSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)('ACCOUNTS_FETCHING', getAccounts);

        case 2:
          _context4.next = 4;
          return (0, _effects.takeLatest)('ACCOUNTS_POLLING', callCreateAccountsPollChannel);

        case 4:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
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
  var eventEnabledContract, name, events, i, event;
  return _regenerator2.default.wrap(function callGetContractEvent$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          eventEnabledContract = contract.fallbackContract || contract;
          name = contract.contractName || contract.address;
          events = void 0;
          _context5.prev = 3;
          _context5.next = 6;
          return eventEnabledContract.getPastEvents(eventName, {
            // filter: {_from: addr},
            fromBlock: 0,
            toBlock: 'latest'
          });

        case 6:
          events = _context5.sent;
          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5['catch'](3);

          console.log('error getting events manually', _context5.t0);

        case 12:
          if (events) {
            _context5.next = 14;
            break;
          }

          return _context5.abrupt('return');

        case 14:
          i = 0;

        case 15:
          if (!(i < events.length)) {
            _context5.next = 22;
            break;
          }

          event = events[i];
          _context5.next = 19;
          return (0, _effects.put)({ type: 'EVENT_FIRED', name: name, event: event });

        case 19:
          i++;
          _context5.next = 15;
          break;

        case 22:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[3, 9]]);
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
  var finalArg, callArgs, finalArgTest, txObject, callResult, dispatchArgs, errorArgs;
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
          return (0, _effects.call)(txObject.call, callArgs);

        case 9:
          callResult = _context7.sent;
          dispatchArgs = {
            name: contract.contractName,
            variable: contract.abi[fnIndex].name,
            argsHash: argsHash,
            args: args,
            value: callResult,
            fnIndex: fnIndex
          };
          _context7.next = 13;
          return (0, _effects.put)((0, _extends3.default)({ type: 'GOT_CONTRACT_VAR' }, dispatchArgs));

        case 13:
          _context7.next = 21;
          break;

        case 15:
          _context7.prev = 15;
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
          _context7.next = 21;
          return (0, _effects.put)((0, _extends3.default)({ type: 'ERROR_CONTRACT_VAR' }, errorArgs));

        case 21:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this, [[6, 15]]);
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
          return (0, _effects.takeEvery)('ADD_CONTRACT', addContract);

        case 10:
          _context9.next = 12;
          return (0, _effects.takeEvery)('GET_CONTRACT_EVENT', callGetContractEvent);

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

  var store = (0, _redux.createStore)(_reducer2.default, preloadedState, composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware)));

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
          if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider.
            web3 = new Web3(window.web3.currentProvider);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcml6emxlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kcml6emxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2VmZmVjdHMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2J1ZmZlcnMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2lvLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy9mc21JdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VFdmVyeS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGFrZUxhdGVzdC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvRHJpenpsZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL0RyaXp6bGVDb250cmFjdC5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1NhZ2EuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9hY2NvdW50cy9hY2NvdW50c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9ibG9ja3MvYmxvY2tzU2FnYS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvY29udHJhY3RzL2NvbnRyYWN0c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNTYWdhLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvZ2VuZXJhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2dldEFiaS5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvbWVyZ2VPcHRpb25zLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9kcml6emxlLy4vc3JjL3Jvb3RTYWdhLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZHJpenpsZS8uL3NyYy93ZWIzL3dlYjNSZWR1Y2VyLmpzIiwid2VicGFjazovL2RyaXp6bGUvLi9zcmMvd2ViMy93ZWIzU2FnYS5qcyIsIndlYnBhY2s6Ly9kcml6emxlL2V4dGVybmFsIFwiZGVlcG1lcmdlXCIiLCJ3ZWJwYWNrOi8vZHJpenpsZS9leHRlcm5hbCBcImV0aC1ibG9jay10cmFja2VyLWVzNVwiIiwid2VicGFjazovL2RyaXp6bGUvZXh0ZXJuYWwgXCJpcy1wbGFpbi1vYmplY3RcIiIsIndlYnBhY2s6Ly9kcml6emxlL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9kcml6emxlL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovL2RyaXp6bGUvZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsid2luZG93UHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiRHJpenpsZSIsIm9wdGlvbnMiLCJzdG9yZSIsImNvbnRyYWN0cyIsImNvbnRyYWN0TGlzdCIsIndlYjMiLCJsb2FkaW5nQ29udHJhY3QiLCJhZGRDb250cmFjdCIsImJpbmQiLCJ0aGVuIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZHJpenpsZSIsImNvbnRyYWN0Q29uZmlnIiwibmFtZSIsImNvbnRyYWN0TmFtZSIsImV2ZW50cyIsImZhbGxiYWNrIiwiYWRkcmVzcyIsImRyaXp6bGVDb250cmFjdCIsInB1c2giLCJmaW5kIiwiY29udHJhY3QiLCJ0b0xvd2VyQ2FzZSIsIkRyaXp6bGVDb250cmFjdCIsIndlYjNDb250cmFjdCIsImNvbnRyYWN0QXJ0aWZhY3QiLCJmYWxsYmFja0NvbnRyYWN0IiwiYWJpIiwianNvbkludGVyZmFjZSIsIndhdGNoRXZlbnRzIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJjb25zdGFudCIsIm1ldGhvZHMiLCJjYWNoZUNhbGwiLCJjYWNoZUNhbGxGdW5jdGlvbiIsImZyb21DYWNoZSIsImZyb21DYWNoZUZ1bmN0aW9uIiwiY2FjaGVTZW5kIiwiY2FjaGVTZW5kRnVuY3Rpb24iLCJzeW5jRXZlbnRzIiwiYmxvY2siLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJldmVudE5hbWUiLCJldmVudE9wdGlvbnMiLCJmbk5hbWUiLCJmbkluZGV4IiwiZm4iLCJhcmdzSGFzaCIsImFyZ3MiLCJhcmd1bWVudHMiLCJnZW5lcmF0ZUFyZ3NIYXNoIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImZ1bmN0aW9uU3RhdGUiLCJ2YWx1ZSIsInN0YWNrSWQiLCJ0cmFuc2FjdGlvblN0YWNrIiwiaGFzaFN0cmluZyIsImFyZ1RvSGFzaCIsInRvU3RyaW5nIiwiaGFzaFBpZWNlIiwidXRpbHMiLCJzaGEzIiwiaW5pdGlhbFN0YXRlIiwiYWNjb3VudEJhbGFuY2VzUmVkdWNlciIsImFjdGlvbiIsIm5ld1N0YXRlIiwiYWNjb3VudCIsImFjY291bnRCYWxhbmNlIiwiZ2V0QWNjb3VudEJhbGFuY2VzIiwiYWNjb3VudEJhbGFuY2VzU2FnYSIsImdldEFjY291bnRzU3RhdGUiLCJhY2NvdW50cyIsImVycm9yIiwiZXRoIiwiZ2V0QmFsYW5jZSIsImFjY291bnRzUmVkdWNlciIsIm5lZWRzVXBkYXRlIiwiYWNjIiwiaW50ZXJzZWN0IiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJ4IiwiZ2V0QWNjb3VudHMiLCJjcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsIiwiY2FsbENyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwiLCJhY2NvdW50c1NhZ2EiLCJpbnRlcnZhbCIsInBlcnNpc3RlZFdlYjMiLCJhY2NvdW50c1BvbGxlciIsInNldEludGVydmFsIiwiZW1pdCIsInVuc3Vic2NyaWJlIiwiY2xlYXJJbnRlcnZhbCIsImFjY291bnRzQ2hhbm5lbCIsImNsb3NlIiwiY2FsbENyZWF0ZUJsb2NrQ2hhbm5lbCIsImNhbGxDcmVhdGVCbG9ja1BvbGxDaGFubmVsIiwicHJvY2Vzc0Jsb2NrSGVhZGVyIiwicHJvY2Vzc0Jsb2NrIiwiYmxvY2tzU2FnYSIsIkJsb2NrVHJhY2tlciIsInJlcXVpcmUiLCJjcmVhdGVCbG9ja0NoYW5uZWwiLCJzeW5jQWx3YXlzIiwiYmxvY2tFdmVudHMiLCJzdWJzY3JpYmUiLCJyZXN1bHQiLCJFTkQiLCJvbiIsImJsb2NrSGVhZGVyIiwib2ZmIiwiYmxvY2tDaGFubmVsIiwiY3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCIsImJsb2NrVHJhY2tlciIsInByb3ZpZGVyIiwiY3VycmVudFByb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwic3RhcnQiLCJjYXRjaCIsInN0b3AiLCJibG9ja051bWJlciIsIm51bWJlciIsImdldEJsb2NrIiwiRXJyb3IiLCJtYXAiLCJrZXkiLCJ0eHMiLCJ0cmFuc2FjdGlvbnMiLCJmcm9tIiwiZnJvbUNvbnRyYWN0IiwiZmluZENvbnRyYWN0QnlBZGRyZXNzIiwidG8iLCJ0b0NvbnRyYWN0IiwiY29udHJhY3RzUmVkdWNlciIsImluaXRpYWxpemVkIiwic3luY2VkIiwic3luY2luZyIsInZhcmlhYmxlIiwiaW5zdGFudGlhdGVXZWIzQ29udHJhY3QiLCJpbnN0YW50aWF0ZUNvbnRyYWN0IiwiY2FsbExpc3RlbkZvckNvbnRyYWN0RXZlbnQiLCJjYWxsR2V0Q29udHJhY3RFdmVudCIsImNhbGxTZW5kQ29udHJhY3RUeCIsImNhbGxDYWxsQ29udHJhY3RGbiIsImNhbGxTeW5jQ29udHJhY3QiLCJjb250cmFjdHNTYWdhIiwiX2FkZENvbnRyYWN0IiwiZ2V0TmV0d29ya0lkIiwibmV0d29ya0lkIiwiZ2V0RmFsbGJhY2tOZXR3b3JrSWQiLCJmYWxsYmFja05ldHdvcmtJZCIsIkNvbnRyYWN0IiwibmV0d29ya3MiLCJkYXRhIiwiZGVwbG95ZWRCeXRlY29kZSIsImNyZWF0ZUNvbnRyYWN0RXZlbnRDaGFubmVsIiwiZXZlbnRFbmFibGVkQ29udHJhY3QiLCJldmVudExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJjb250cmFjdEV2ZW50Q2hhbm5lbCIsImdldFBhc3RFdmVudHMiLCJmcm9tQmxvY2siLCJ0b0Jsb2NrIiwiY3JlYXRlVHhDaGFubmVsIiwidHhPYmplY3QiLCJzZW5kQXJncyIsInBlcnNpc3RUeEhhc2giLCJ0eFByb21pRXZlbnQiLCJzZW5kIiwidHhIYXNoIiwiY29uZmlybWF0aW9uTnVtYmVyIiwicmVjZWlwdCIsImNvbmZpcm1hdGlvblJlY2VpcHQiLCJmaW5hbEFyZyIsImZpbmFsQXJnVGVzdCIsImlzU2VuZE9yQ2FsbE9wdGlvbnMiLCJjYWxsIiwidHhDaGFubmVsIiwic3luYyIsImNhbGxBcmdzIiwiY2FsbFJlc3VsdCIsImRpc3BhdGNoQXJncyIsImVycm9yQXJncyIsImdldENvbnRyYWN0c1N0YXRlIiwiY29udHJhY3RzU3RhdGUiLCJjb250cmFjdEZuc1N0YXRlIiwiZGVmYXVsdE9wdGlvbnMiLCJwb2xscyIsImJsb2NrcyIsImRyaXp6bGVTdGF0dXNSZWR1Y2VyIiwid2FybmluZyIsIm1lc3NhZ2UiLCJpbml0aWFsaXplRHJpenpsZSIsImRyaXp6bGVTdGF0dXNTYWdhIiwid2ViM09wdGlvbnMiLCJpbml0aWFsaXplV2ViMyIsImlzUG9ydGlzIiwiaXNNZXRhTWFzayIsImlzSHR0cCIsIm1hdGNoIiwiZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSIsImkyIiwiZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUiLCJjb250cmFjdHNJbml0aWFsU3RhdGUiLCJnZW5lcmF0ZVN0b3JlIiwiY29tcG9zZUVuaGFuY2VycyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJwcmVsb2FkZWRTdGF0ZSIsInNhZ2FNaWRkbGV3YXJlIiwicmVkdWNlciIsInJ1biIsInJvb3RTYWdhIiwiZ2V0QWJpIiwiY29udHJhY3RFbnRyeSIsImRyaXp6bGVSZWR1Y2VycyIsImFjY291bnRCYWxhbmNlcyIsImRyaXp6bGVTdGF0dXMiLCJ0cmFuc2FjdGlvbnNSZWR1Y2VyIiwidHJhbnNhY3Rpb25TdGFja1JlZHVjZXIiLCJ3ZWIzUmVkdWNlciIsImRyaXp6bGVTYWdhcyIsIndlYjNTYWdhIiwibmV3T3B0aW9ucyIsImlzTWVyZ2VhYmxlT2JqZWN0IiwiaXNQbGFpbk9iamVjdCIsInJvb3QiLCJwb3AiLCJzdGF0dXMiLCJjb25maXJtYXRpb25zIiwiY29ubmVjdFdlYlNvY2tldCIsImNhbGxTZW5kVHgiLCJXZWIzIiwiY2FjaGVTZW5kVHJhbnNhY3Rpb24iLCJ1cmwiLCJwcm92aWRlcnMiLCJXZWJzb2NrZXRQcm92aWRlciIsImUiLCJzZXRQcm92aWRlciIsIkh0dHBQcm92aWRlciIsIm5ldCIsImdldElkIiwiZXZlbnRDaGFubmVsIiwic2VuZFRyYW5zYWN0aW9uIiwidGFrZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNW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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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OztrQkFLZVQsUTs7Ozs7Ozs7Ozs7QUM3S2YsdUQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoiZHJpenpsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImRlZXBtZXJnZVwiKSwgcmVxdWlyZShcImV0aC1ibG9jay10cmFja2VyLWVzNVwiKSwgcmVxdWlyZShcImlzLXBsYWluLW9iamVjdFwiKSwgcmVxdWlyZShcInJlZHV4XCIpLCByZXF1aXJlKFwicmVkdXgtc2FnYVwiKSwgcmVxdWlyZShcIndlYjNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZGVlcG1lcmdlXCIsIFwiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCIsIFwiaXMtcGxhaW4tb2JqZWN0XCIsIFwicmVkdXhcIiwgXCJyZWR1eC1zYWdhXCIsIFwid2ViM1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkcml6emxlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZGVlcG1lcmdlXCIpLCByZXF1aXJlKFwiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCIpLCByZXF1aXJlKFwiaXMtcGxhaW4tb2JqZWN0XCIpLCByZXF1aXJlKFwicmVkdXhcIiksIHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpLCByZXF1aXJlKFwid2ViM1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpenpsZVwiXSA9IGZhY3Rvcnkocm9vdFtcImRlZXBtZXJnZVwiXSwgcm9vdFtcImV0aC1ibG9jay10cmFja2VyLWVzNVwiXSwgcm9vdFtcImlzLXBsYWluLW9iamVjdFwiXSwgcm9vdFtcInJlZHV4XCJdLCByb290W1wicmVkdXgtc2FnYVwiXSwgcm9vdFtcIndlYjNcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2RlZXBtZXJnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2V0aF9ibG9ja190cmFja2VyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfaXNfcGxhaW5fb2JqZWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVkdXhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWR1eF9zYWdhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd2ViM19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwiZXhwb3J0IHsgdGFrZSwgdGFrZW0sIHB1dCwgYWxsLCByYWNlLCBjYWxsLCBhcHBseSwgY3BzLCBmb3JrLCBzcGF3biwgam9pbiwgY2FuY2VsLCBzZWxlY3QsIGFjdGlvbkNoYW5uZWwsIGNhbmNlbGxlZCwgZmx1c2gsIGdldENvbnRleHQsIHNldENvbnRleHQsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tICcuL2ludGVybmFsL2lvJzsiLCJpbXBvcnQgeyBrVHJ1ZSwgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgdmFyIEJVRkZFUl9PVkVSRkxPVyA9IFwiQ2hhbm5lbCdzIEJ1ZmZlciBvdmVyZmxvdyFcIjtcblxudmFyIE9OX09WRVJGTE9XX1RIUk9XID0gMTtcbnZhciBPTl9PVkVSRkxPV19EUk9QID0gMjtcbnZhciBPTl9PVkVSRkxPV19TTElERSA9IDM7XG52YXIgT05fT1ZFUkZMT1dfRVhQQU5EID0gNDtcblxudmFyIHplcm9CdWZmZXIgPSB7IGlzRW1wdHk6IGtUcnVlLCBwdXQ6IG5vb3AsIHRha2U6IG5vb3AgfTtcblxuZnVuY3Rpb24gcmluZ0J1ZmZlcigpIHtcbiAgdmFyIGxpbWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxMDtcbiAgdmFyIG92ZXJmbG93QWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHZhciBhcnIgPSBuZXcgQXJyYXkobGltaXQpO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHB1c2hJbmRleCA9IDA7XG4gIHZhciBwb3BJbmRleCA9IDA7XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKGl0KSB7XG4gICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICBsZW5ndGgrKztcbiAgfTtcblxuICB2YXIgdGFrZSA9IGZ1bmN0aW9uIHRha2UoKSB7XG4gICAgaWYgKGxlbmd0aCAhPSAwKSB7XG4gICAgICB2YXIgaXQgPSBhcnJbcG9wSW5kZXhdO1xuICAgICAgYXJyW3BvcEluZGV4XSA9IG51bGw7XG4gICAgICBsZW5ndGgtLTtcbiAgICAgIHBvcEluZGV4ID0gKHBvcEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgIHJldHVybiBpdDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgaXRlbXMucHVzaCh0YWtlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIGxlbmd0aCA9PSAwO1xuICAgIH0sXG4gICAgcHV0OiBmdW5jdGlvbiBwdXQoaXQpIHtcbiAgICAgIGlmIChsZW5ndGggPCBsaW1pdCkge1xuICAgICAgICBwdXNoKGl0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkb3VibGVkTGltaXQgPSB2b2lkIDA7XG4gICAgICAgIHN3aXRjaCAob3ZlcmZsb3dBY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1RIUk9XOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEJVRkZFUl9PVkVSRkxPVyk7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19TTElERTpcbiAgICAgICAgICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gcHVzaEluZGV4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19FWFBBTkQ6XG4gICAgICAgICAgICBkb3VibGVkTGltaXQgPSAyICogbGltaXQ7XG5cbiAgICAgICAgICAgIGFyciA9IGZsdXNoKCk7XG5cbiAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcG9wSW5kZXggPSAwO1xuXG4gICAgICAgICAgICBhcnIubGVuZ3RoID0gZG91YmxlZExpbWl0O1xuICAgICAgICAgICAgbGltaXQgPSBkb3VibGVkTGltaXQ7XG5cbiAgICAgICAgICAgIHB1c2goaXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBEUk9QXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRha2U6IHRha2UsXG4gICAgZmx1c2g6IGZsdXNoXG4gIH07XG59XG5cbmV4cG9ydCB2YXIgYnVmZmVycyA9IHtcbiAgbm9uZTogZnVuY3Rpb24gbm9uZSgpIHtcbiAgICByZXR1cm4gemVyb0J1ZmZlcjtcbiAgfSxcbiAgZml4ZWQ6IGZ1bmN0aW9uIGZpeGVkKGxpbWl0KSB7XG4gICAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX1RIUk9XKTtcbiAgfSxcbiAgZHJvcHBpbmc6IGZ1bmN0aW9uIGRyb3BwaW5nKGxpbWl0KSB7XG4gICAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX0RST1ApO1xuICB9LFxuICBzbGlkaW5nOiBmdW5jdGlvbiBzbGlkaW5nKGxpbWl0KSB7XG4gICAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX1NMSURFKTtcbiAgfSxcbiAgZXhwYW5kaW5nOiBmdW5jdGlvbiBleHBhbmRpbmcoaW5pdGlhbFNpemUpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihpbml0aWFsU2l6ZSwgT05fT1ZFUkZMT1dfRVhQQU5EKTtcbiAgfVxufTsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5pbXBvcnQgeyBpcywgY2hlY2ssIHJlbW92ZSwgTUFUQ0gsIGludGVybmFsRXJyLCBTQUdBX0FDVElPTiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgYnVmZmVycyB9IGZyb20gJy4vYnVmZmVycyc7XG5pbXBvcnQgeyBhc2FwIH0gZnJvbSAnLi9zY2hlZHVsZXInO1xuXG52YXIgQ0hBTk5FTF9FTkRfVFlQRSA9ICdAQHJlZHV4LXNhZ2EvQ0hBTk5FTF9FTkQnO1xuZXhwb3J0IHZhciBFTkQgPSB7IHR5cGU6IENIQU5ORUxfRU5EX1RZUEUgfTtcbmV4cG9ydCB2YXIgaXNFbmQgPSBmdW5jdGlvbiBpc0VuZChhKSB7XG4gIHJldHVybiBhICYmIGEudHlwZSA9PT0gQ0hBTk5FTF9FTkRfVFlQRTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0dGVyKCkge1xuICB2YXIgc3Vic2NyaWJlcnMgPSBbXTtcblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoc3ViKSB7XG4gICAgc3Vic2NyaWJlcnMucHVzaChzdWIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlKHN1YnNjcmliZXJzLCBzdWIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KGl0ZW0pIHtcbiAgICB2YXIgYXJyID0gc3Vic2NyaWJlcnMuc2xpY2UoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcnJbaV0oaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBlbWl0OiBlbWl0XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgSU5WQUxJRF9CVUZGRVIgPSAnaW52YWxpZCBidWZmZXIgcGFzc2VkIHRvIGNoYW5uZWwgZmFjdG9yeSBmdW5jdGlvbic7XG5leHBvcnQgdmFyIFVOREVGSU5FRF9JTlBVVF9FUlJPUiA9ICdTYWdhIHdhcyBwcm92aWRlZCB3aXRoIGFuIHVuZGVmaW5lZCBhY3Rpb24nO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBVTkRFRklORURfSU5QVVRfRVJST1IgKz0gJ1xcbkhpbnRzOlxcbiAgICAtIGNoZWNrIHRoYXQgeW91ciBBY3Rpb24gQ3JlYXRvciByZXR1cm5zIGEgbm9uLXVuZGVmaW5lZCB2YWx1ZVxcbiAgICAtIGlmIHRoZSBTYWdhIHdhcyBzdGFydGVkIHVzaW5nIHJ1blNhZ2EsIGNoZWNrIHRoYXQgeW91ciBzdWJzY3JpYmUgc291cmNlIHByb3ZpZGVzIHRoZSBhY3Rpb24gdG8gaXRzIGxpc3RlbmVyc1xcbiAgJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5uZWwoKSB7XG4gIHZhciBidWZmZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGJ1ZmZlcnMuZml4ZWQoKTtcblxuICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gIHZhciB0YWtlcnMgPSBbXTtcblxuICBjaGVjayhidWZmZXIsIGlzLmJ1ZmZlciwgSU5WQUxJRF9CVUZGRVIpO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCkge1xuICAgIGlmIChjbG9zZWQgJiYgdGFrZXJzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoJ0Nhbm5vdCBoYXZlIGEgY2xvc2VkIGNoYW5uZWwgd2l0aCBwZW5kaW5nIHRha2VycycpO1xuICAgIH1cbiAgICBpZiAodGFrZXJzLmxlbmd0aCAmJiAhYnVmZmVyLmlzRW1wdHkoKSkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoJ0Nhbm5vdCBoYXZlIHBlbmRpbmcgdGFrZXJzIHdpdGggbm9uIGVtcHR5IGJ1ZmZlcicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHB1dChpbnB1dCkge1xuICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgY2hlY2soaW5wdXQsIGlzLm5vdFVuZGVmLCBVTkRFRklORURfSU5QVVRfRVJST1IpO1xuICAgIGlmIChjbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0YWtlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYnVmZmVyLnB1dChpbnB1dCk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2IgPSB0YWtlcnNbaV07XG4gICAgICBpZiAoIWNiW01BVENIXSB8fCBjYltNQVRDSF0oaW5wdXQpKSB7XG4gICAgICAgIHRha2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiBjYihpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGFrZShjYikge1xuICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgY2hlY2soY2IsIGlzLmZ1bmMsIFwiY2hhbm5lbC50YWtlJ3MgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuXG4gICAgaWYgKGNsb3NlZCAmJiBidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICBjYihFTkQpO1xuICAgIH0gZWxzZSBpZiAoIWJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKGJ1ZmZlci50YWtlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWtlcnMucHVzaChjYik7XG4gICAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZW1vdmUodGFrZXJzLCBjYik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKGNiKSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTsgLy8gVE9ETzogY2hlY2sgaWYgc29tZSBuZXcgc3RhdGUgc2hvdWxkIGJlIGZvcmJpZGRlbiBub3dcbiAgICBjaGVjayhjYiwgaXMuZnVuYywgXCJjaGFubmVsLmZsdXNoJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgaWYgKGNsb3NlZCAmJiBidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICBjYihFTkQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYihidWZmZXIuZmx1c2goKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgIGlmICghY2xvc2VkKSB7XG4gICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgaWYgKHRha2Vycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGFyciA9IHRha2VycztcbiAgICAgICAgdGFrZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBhcnJbaV0oRU5EKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFrZTogdGFrZSxcbiAgICBwdXQ6IHB1dCxcbiAgICBmbHVzaDogZmx1c2gsXG4gICAgY2xvc2U6IGNsb3NlLFxuICAgIGdldCBfX3Rha2Vyc19fKCkge1xuICAgICAgcmV0dXJuIHRha2VycztcbiAgICB9LFxuICAgIGdldCBfX2Nsb3NlZF9fKCkge1xuICAgICAgcmV0dXJuIGNsb3NlZDtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudENoYW5uZWwoc3Vic2NyaWJlKSB7XG4gIHZhciBidWZmZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGJ1ZmZlcnMubm9uZSgpO1xuICB2YXIgbWF0Y2hlciA9IGFyZ3VtZW50c1syXTtcblxuICAvKipcbiAgICBzaG91bGQgYmUgaWYodHlwZW9mIG1hdGNoZXIgIT09IHVuZGVmaW5lZCkgaW5zdGVhZD9cbiAgICBzZWUgUFIgIzI3MyBmb3IgYSBiYWNrZ3JvdW5kIGRpc2N1c3Npb25cbiAgKiovXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgIGNoZWNrKG1hdGNoZXIsIGlzLmZ1bmMsICdJbnZhbGlkIG1hdGNoIGZ1bmN0aW9uIHBhc3NlZCB0byBldmVudENoYW5uZWwnKTtcbiAgfVxuXG4gIHZhciBjaGFuID0gY2hhbm5lbChidWZmZXIpO1xuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoIWNoYW4uX19jbG9zZWRfXykge1xuICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICBjaGFuLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlzRW5kKGlucHV0KSkge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1hdGNoZXIgJiYgIW1hdGNoZXIoaW5wdXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNoYW4ucHV0KGlucHV0KTtcbiAgfSk7XG4gIGlmIChjaGFuLl9fY2xvc2VkX18pIHtcbiAgICB1bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaWYgKCFpcy5mdW5jKHVuc3Vic2NyaWJlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW4gZXZlbnRDaGFubmVsOiBzdWJzY3JpYmUgc2hvdWxkIHJldHVybiBhIGZ1bmN0aW9uIHRvIHVuc3Vic2NyaWJlJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRha2U6IGNoYW4udGFrZSxcbiAgICBmbHVzaDogY2hhbi5mbHVzaCxcbiAgICBjbG9zZTogY2xvc2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZENoYW5uZWwoc3Vic2NyaWJlKSB7XG4gIHZhciBjaGFuID0gZXZlbnRDaGFubmVsKGZ1bmN0aW9uIChjYikge1xuICAgIHJldHVybiBzdWJzY3JpYmUoZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICBpZiAoaW5wdXRbU0FHQV9BQ1RJT05dKSB7XG4gICAgICAgIGNiKGlucHV0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYihpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBjaGFuLCB7XG4gICAgdGFrZTogZnVuY3Rpb24gdGFrZShjYiwgbWF0Y2hlcikge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNoZWNrKG1hdGNoZXIsIGlzLmZ1bmMsIFwiY2hhbm5lbC50YWtlJ3MgbWF0Y2hlciBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIGNiW01BVENIXSA9IG1hdGNoZXI7XG4gICAgICB9XG4gICAgICBjaGFuLnRha2UoY2IpO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IHsgc3ltLCBpcywgaWRlbnQsIGNoZWNrLCBkZXByZWNhdGUsIHVwZGF0ZUluY2VudGl2ZSwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcsIFNFTEZfQ0FOQ0VMTEFUSU9OIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyB0YWtlRXZlcnlIZWxwZXIsIHRha2VMYXRlc3RIZWxwZXIsIHRocm90dGxlSGVscGVyIH0gZnJvbSAnLi9zYWdhSGVscGVycyc7XG5cbnZhciBJTyA9IC8qI19fUFVSRV9fKi9zeW0oJ0lPJyk7XG52YXIgVEFLRSA9ICdUQUtFJztcbnZhciBQVVQgPSAnUFVUJztcbnZhciBBTEwgPSAnQUxMJztcbnZhciBSQUNFID0gJ1JBQ0UnO1xudmFyIENBTEwgPSAnQ0FMTCc7XG52YXIgQ1BTID0gJ0NQUyc7XG52YXIgRk9SSyA9ICdGT1JLJztcbnZhciBKT0lOID0gJ0pPSU4nO1xudmFyIENBTkNFTCA9ICdDQU5DRUwnO1xudmFyIFNFTEVDVCA9ICdTRUxFQ1QnO1xudmFyIEFDVElPTl9DSEFOTkVMID0gJ0FDVElPTl9DSEFOTkVMJztcbnZhciBDQU5DRUxMRUQgPSAnQ0FOQ0VMTEVEJztcbnZhciBGTFVTSCA9ICdGTFVTSCc7XG52YXIgR0VUX0NPTlRFWFQgPSAnR0VUX0NPTlRFWFQnO1xudmFyIFNFVF9DT05URVhUID0gJ1NFVF9DT05URVhUJztcblxudmFyIFRFU1RfSElOVCA9ICdcXG4oSElOVDogaWYgeW91IGFyZSBnZXR0aW5nIHRoaXMgZXJyb3JzIGluIHRlc3RzLCBjb25zaWRlciB1c2luZyBjcmVhdGVNb2NrVGFzayBmcm9tIHJlZHV4LXNhZ2EvdXRpbHMpJztcblxudmFyIGVmZmVjdCA9IGZ1bmN0aW9uIGVmZmVjdCh0eXBlLCBwYXlsb2FkKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbSU9dID0gdHJ1ZSwgX3JlZlt0eXBlXSA9IHBheWxvYWQsIF9yZWY7XG59O1xuXG5leHBvcnQgdmFyIGRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaChlZmYpIHtcbiAgY2hlY2soYXNFZmZlY3QuZm9yayhlZmYpLCBpcy5vYmplY3QsICdkZXRhY2goZWZmKTogYXJndW1lbnQgbXVzdCBiZSBhIGZvcmsgZWZmZWN0Jyk7XG4gIGVmZltGT1JLXS5kZXRhY2hlZCA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGFrZSgpIHtcbiAgdmFyIHBhdHRlcm5PckNoYW5uZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcqJztcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNoZWNrKGFyZ3VtZW50c1swXSwgaXMubm90VW5kZWYsICd0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBwYXR0ZXJuT3JDaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICB9XG4gIGlmIChpcy5wYXR0ZXJuKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIGVmZmVjdChUQUtFLCB7IHBhdHRlcm46IHBhdHRlcm5PckNoYW5uZWwgfSk7XG4gIH1cbiAgaWYgKGlzLmNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gZWZmZWN0KFRBS0UsIHsgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbCB9KTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3Rha2UocGF0dGVybk9yQ2hhbm5lbCk6IGFyZ3VtZW50ICcgKyBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCkgKyAnIGlzIG5vdCB2YWxpZCBjaGFubmVsIG9yIGEgdmFsaWQgcGF0dGVybicpO1xufVxuXG50YWtlLm1heWJlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWZmID0gdGFrZS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIGVmZltUQUtFXS5tYXliZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuXG5leHBvcnQgdmFyIHRha2VtID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZSh0YWtlLm1heWJlLCAvKiNfX1BVUkVfXyovdXBkYXRlSW5jZW50aXZlKCd0YWtlbScsICd0YWtlLm1heWJlJykpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHV0KGNoYW5uZWwsIGFjdGlvbikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBjaGVjayhjaGFubmVsLCBpcy5ub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBjaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICAgIGNoZWNrKGNoYW5uZWwsIGlzLmNoYW5uZWwsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCBhIHZhbGlkIGNoYW5uZWwnKTtcbiAgICBjaGVjayhhY3Rpb24sIGlzLm5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVjayhjaGFubmVsLCBpcy5ub3RVbmRlZiwgJ3B1dChhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gICAgYWN0aW9uID0gY2hhbm5lbDtcbiAgICBjaGFubmVsID0gbnVsbDtcbiAgfVxuICByZXR1cm4gZWZmZWN0KFBVVCwgeyBjaGFubmVsOiBjaGFubmVsLCBhY3Rpb246IGFjdGlvbiB9KTtcbn1cblxucHV0LnJlc29sdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZmYgPSBwdXQuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICBlZmZbUFVUXS5yZXNvbHZlID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn07XG5cbnB1dC5zeW5jID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZShwdXQucmVzb2x2ZSwgLyojX19QVVJFX18qL3VwZGF0ZUluY2VudGl2ZSgncHV0LnN5bmMnLCAncHV0LnJlc29sdmUnKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGwoZWZmZWN0cykge1xuICByZXR1cm4gZWZmZWN0KEFMTCwgZWZmZWN0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWNlKGVmZmVjdHMpIHtcbiAgcmV0dXJuIGVmZmVjdChSQUNFLCBlZmZlY3RzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm5DYWxsRGVzYyhtZXRoLCBmbiwgYXJncykge1xuICBjaGVjayhmbiwgaXMubm90VW5kZWYsIG1ldGggKyAnOiBhcmd1bWVudCBmbiBpcyB1bmRlZmluZWQnKTtcblxuICB2YXIgY29udGV4dCA9IG51bGw7XG4gIGlmIChpcy5hcnJheShmbikpIHtcbiAgICB2YXIgX2ZuID0gZm47XG4gICAgY29udGV4dCA9IF9mblswXTtcbiAgICBmbiA9IF9mblsxXTtcbiAgfSBlbHNlIGlmIChmbi5mbikge1xuICAgIHZhciBfZm4yID0gZm47XG4gICAgY29udGV4dCA9IF9mbjIuY29udGV4dDtcbiAgICBmbiA9IF9mbjIuZm47XG4gIH1cbiAgaWYgKGNvbnRleHQgJiYgaXMuc3RyaW5nKGZuKSAmJiBpcy5mdW5jKGNvbnRleHRbZm5dKSkge1xuICAgIGZuID0gY29udGV4dFtmbl07XG4gIH1cbiAgY2hlY2soZm4sIGlzLmZ1bmMsIG1ldGggKyAnOiBhcmd1bWVudCAnICsgZm4gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cbiAgcmV0dXJuIHsgY29udGV4dDogY29udGV4dCwgZm46IGZuLCBhcmdzOiBhcmdzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsKGZuKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjKCdjYWxsJywgZm4sIGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KGNvbnRleHQsIGZuKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcblxuICByZXR1cm4gZWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2MoJ2FwcGx5JywgeyBjb250ZXh0OiBjb250ZXh0LCBmbjogZm4gfSwgYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3BzKGZuKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIGVmZmVjdChDUFMsIGdldEZuQ2FsbERlc2MoJ2NwcycsIGZuLCBhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JrKGZuKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIGVmZmVjdChGT1JLLCBnZXRGbkNhbGxEZXNjKCdmb3JrJywgZm4sIGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwYXduKGZuKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGRldGFjaChmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW2ZuXS5jb25jYXQoYXJncykpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW4oKSB7XG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgdGFza3MgPSBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIHRhc2tzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICBpZiAodGFza3MubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiBhbGwodGFza3MubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gam9pbih0KTtcbiAgICB9KSk7XG4gIH1cbiAgdmFyIHRhc2sgPSB0YXNrc1swXTtcbiAgY2hlY2sodGFzaywgaXMubm90VW5kZWYsICdqb2luKHRhc2spOiBhcmd1bWVudCB0YXNrIGlzIHVuZGVmaW5lZCcpO1xuICBjaGVjayh0YXNrLCBpcy50YXNrLCAnam9pbih0YXNrKTogYXJndW1lbnQgJyArIHRhc2sgKyAnIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0ICcgKyBURVNUX0hJTlQpO1xuICByZXR1cm4gZWZmZWN0KEpPSU4sIHRhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsKCkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRhc2tzID0gQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICB0YXNrc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gYWxsKHRhc2tzLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGNhbmNlbCh0KTtcbiAgICB9KSk7XG4gIH1cbiAgdmFyIHRhc2sgPSB0YXNrc1swXTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNoZWNrKHRhc2ssIGlzLm5vdFVuZGVmLCAnY2FuY2VsKHRhc2spOiBhcmd1bWVudCB0YXNrIGlzIHVuZGVmaW5lZCcpO1xuICAgIGNoZWNrKHRhc2ssIGlzLnRhc2ssICdjYW5jZWwodGFzayk6IGFyZ3VtZW50ICcgKyB0YXNrICsgJyBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCAnICsgVEVTVF9ISU5UKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0KENBTkNFTCwgdGFzayB8fCBTRUxGX0NBTkNFTExBVElPTik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3Qoc2VsZWN0b3IpIHtcbiAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjcgPiAxID8gX2xlbjcgLSAxIDogMCksIF9rZXk3ID0gMTsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgIGFyZ3NbX2tleTcgLSAxXSA9IGFyZ3VtZW50c1tfa2V5N107XG4gIH1cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHNlbGVjdG9yID0gaWRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2soc2VsZWN0b3IsIGlzLm5vdFVuZGVmLCAnc2VsZWN0KHNlbGVjdG9yLFsuLi5dKTogYXJndW1lbnQgc2VsZWN0b3IgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2soc2VsZWN0b3IsIGlzLmZ1bmMsICdzZWxlY3Qoc2VsZWN0b3IsWy4uLl0pOiBhcmd1bWVudCAnICsgc2VsZWN0b3IgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgcmV0dXJuIGVmZmVjdChTRUxFQ1QsIHsgc2VsZWN0b3I6IHNlbGVjdG9yLCBhcmdzOiBhcmdzIH0pO1xufVxuXG4vKipcbiAgY2hhbm5lbChwYXR0ZXJuLCBbYnVmZmVyXSkgICAgPT4gY3JlYXRlcyBhbiBldmVudCBjaGFubmVsIGZvciBzdG9yZSBhY3Rpb25zXG4qKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcikge1xuICBjaGVjayhwYXR0ZXJuLCBpcy5ub3RVbmRlZiwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwuLi4pOiBhcmd1bWVudCBwYXR0ZXJuIGlzIHVuZGVmaW5lZCcpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBjaGVjayhidWZmZXIsIGlzLm5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCBidWZmZXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2soYnVmZmVyLCBpcy5idWZmZXIsICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50ICcgKyBidWZmZXIgKyAnIGlzIG5vdCBhIHZhbGlkIGJ1ZmZlcicpO1xuICB9XG4gIHJldHVybiBlZmZlY3QoQUNUSU9OX0NIQU5ORUwsIHsgcGF0dGVybjogcGF0dGVybiwgYnVmZmVyOiBidWZmZXIgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxsZWQoKSB7XG4gIHJldHVybiBlZmZlY3QoQ0FOQ0VMTEVELCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbHVzaChjaGFubmVsKSB7XG4gIGNoZWNrKGNoYW5uZWwsIGlzLmNoYW5uZWwsICdmbHVzaChjaGFubmVsKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCB2YWxpZCBjaGFubmVsJyk7XG4gIHJldHVybiBlZmZlY3QoRkxVU0gsIGNoYW5uZWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dChwcm9wKSB7XG4gIGNoZWNrKHByb3AsIGlzLnN0cmluZywgJ2dldENvbnRleHQocHJvcCk6IGFyZ3VtZW50ICcgKyBwcm9wICsgJyBpcyBub3QgYSBzdHJpbmcnKTtcbiAgcmV0dXJuIGVmZmVjdChHRVRfQ09OVEVYVCwgcHJvcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZXh0KHByb3BzKSB7XG4gIGNoZWNrKHByb3BzLCBpcy5vYmplY3QsIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKG51bGwsIHByb3BzKSk7XG4gIHJldHVybiBlZmZlY3QoU0VUX0NPTlRFWFQsIHByb3BzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRha2VFdmVyeShwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjggPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjggPiAyID8gX2xlbjggLSAyIDogMCksIF9rZXk4ID0gMjsgX2tleTggPCBfbGVuODsgX2tleTgrKykge1xuICAgIGFyZ3NbX2tleTggLSAyXSA9IGFyZ3VtZW50c1tfa2V5OF07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh1bmRlZmluZWQsIFt0YWtlRXZlcnlIZWxwZXIsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRha2VMYXRlc3QocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW45ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW45ID4gMiA/IF9sZW45IC0gMiA6IDApLCBfa2V5OSA9IDI7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICBhcmdzW19rZXk5IC0gMl0gPSBhcmd1bWVudHNbX2tleTldO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbdGFrZUxhdGVzdEhlbHBlciwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUobXMsIHBhdHRlcm4sIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuMTAgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjEwID4gMyA/IF9sZW4xMCAtIDMgOiAwKSwgX2tleTEwID0gMzsgX2tleTEwIDwgX2xlbjEwOyBfa2V5MTArKykge1xuICAgIGFyZ3NbX2tleTEwIC0gM10gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3Rocm90dGxlSGVscGVyLCBtcywgcGF0dGVybiwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG52YXIgY3JlYXRlQXNFZmZlY3RUeXBlID0gZnVuY3Rpb24gY3JlYXRlQXNFZmZlY3RUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlZmZlY3QpIHtcbiAgICByZXR1cm4gZWZmZWN0ICYmIGVmZmVjdFtJT10gJiYgZWZmZWN0W3R5cGVdO1xuICB9O1xufTtcblxuZXhwb3J0IHZhciBhc0VmZmVjdCA9IHtcbiAgdGFrZTogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShUQUtFKSxcbiAgcHV0OiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKFBVVCksXG4gIGFsbDogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShBTEwpLFxuICByYWNlOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKFJBQ0UpLFxuICBjYWxsOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKENBTEwpLFxuICBjcHM6IC8qI19fUFVSRV9fKi9jcmVhdGVBc0VmZmVjdFR5cGUoQ1BTKSxcbiAgZm9yazogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShGT1JLKSxcbiAgam9pbjogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShKT0lOKSxcbiAgY2FuY2VsOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKENBTkNFTCksXG4gIHNlbGVjdDogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShTRUxFQ1QpLFxuICBhY3Rpb25DaGFubmVsOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKEFDVElPTl9DSEFOTkVMKSxcbiAgY2FuY2VsbGVkOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKENBTkNFTExFRCksXG4gIGZsdXNoOiAvKiNfX1BVUkVfXyovY3JlYXRlQXNFZmZlY3RUeXBlKEZMVVNIKSxcbiAgZ2V0Q29udGV4dDogLyojX19QVVJFX18qL2NyZWF0ZUFzRWZmZWN0VHlwZShHRVRfQ09OVEVYVCksXG4gIHNldENvbnRleHQ6IC8qI19fUFVSRV9fKi9jcmVhdGVBc0VmZmVjdFR5cGUoU0VUX0NPTlRFWFQpXG59OyIsImltcG9ydCB7IGlzLCBtYWtlSXRlcmF0b3IgfSBmcm9tICcuLi91dGlscyc7XG5cbnZhciBkb25lID0geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG5leHBvcnQgdmFyIHFFbmQgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpIHtcbiAgaWYgKGlzLmNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gJ2NoYW5uZWwnO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhlbnRyeSk7XG4gICAgfSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnNtSXRlcmF0b3IoZnNtLCBxMCkge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ2l0ZXJhdG9yJztcblxuICB2YXIgdXBkYXRlU3RhdGUgPSB2b2lkIDAsXG4gICAgICBxTmV4dCA9IHEwO1xuXG4gIGZ1bmN0aW9uIG5leHQoYXJnLCBlcnJvcikge1xuICAgIGlmIChxTmV4dCA9PT0gcUVuZCkge1xuICAgICAgcmV0dXJuIGRvbmU7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBxTmV4dCA9IHFFbmQ7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlU3RhdGUgJiYgdXBkYXRlU3RhdGUoYXJnKTtcblxuICAgICAgdmFyIF9mc20kcU5leHQgPSBmc21bcU5leHRdKCksXG4gICAgICAgICAgcSA9IF9mc20kcU5leHRbMF0sXG4gICAgICAgICAgb3V0cHV0ID0gX2ZzbSRxTmV4dFsxXSxcbiAgICAgICAgICBfdXBkYXRlU3RhdGUgPSBfZnNtJHFOZXh0WzJdO1xuXG4gICAgICBxTmV4dCA9IHE7XG4gICAgICB1cGRhdGVTdGF0ZSA9IF91cGRhdGVTdGF0ZTtcbiAgICAgIHJldHVybiBxTmV4dCA9PT0gcUVuZCA/IGRvbmUgOiBvdXRwdXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VJdGVyYXRvcihuZXh0LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChudWxsLCBlcnJvcik7XG4gIH0sIG5hbWUsIHRydWUpO1xufSIsImltcG9ydCB0YWtlRXZlcnlIZWxwZXIgZnJvbSAnLi90YWtlRXZlcnknO1xuaW1wb3J0IHRha2VMYXRlc3RIZWxwZXIgZnJvbSAnLi90YWtlTGF0ZXN0JztcbmltcG9ydCB0aHJvdHRsZUhlbHBlciBmcm9tICcuL3Rocm90dGxlJztcblxuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG52YXIgZGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gZGVwcmVjYXRpb25XYXJuaW5nKGhlbHBlck5hbWUpIHtcbiAgcmV0dXJuICdpbXBvcnQgeyAnICsgaGVscGVyTmFtZSArICcgfSBmcm9tIFxcJ3JlZHV4LXNhZ2FcXCcgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBpbXBvcnQgeyAnICsgaGVscGVyTmFtZSArICcgfSBmcm9tIFxcJ3JlZHV4LXNhZ2EvZWZmZWN0c1xcJy5cXG5UaGUgbGF0dGVyIHdpbGwgbm90IHdvcmsgd2l0aCB5aWVsZCosIGFzIGhlbHBlciBlZmZlY3RzIGFyZSB3cmFwcGVkIGF1dG9tYXRpY2FsbHkgZm9yIHlvdSBpbiBmb3JrIGVmZmVjdC5cXG5UaGVyZWZvcmUgeWllbGQgJyArIGhlbHBlck5hbWUgKyAnIHdpbGwgcmV0dXJuIHRhc2sgZGVzY3JpcHRvciB0byB5b3VyIHNhZ2EgYW5kIGV4ZWN1dGUgbmV4dCBsaW5lcyBvZiBjb2RlLic7XG59O1xuXG52YXIgdGFrZUV2ZXJ5ID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZSh0YWtlRXZlcnlIZWxwZXIsIC8qI19fUFVSRV9fKi9kZXByZWNhdGlvbldhcm5pbmcoJ3Rha2VFdmVyeScpKTtcbnZhciB0YWtlTGF0ZXN0ID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZSh0YWtlTGF0ZXN0SGVscGVyLCAvKiNfX1BVUkVfXyovZGVwcmVjYXRpb25XYXJuaW5nKCd0YWtlTGF0ZXN0JykpO1xudmFyIHRocm90dGxlID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZSh0aHJvdHRsZUhlbHBlciwgLyojX19QVVJFX18qL2RlcHJlY2F0aW9uV2FybmluZygndGhyb3R0bGUnKSk7XG5cbmV4cG9ydCB7IHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgdGhyb3R0bGUsIHRha2VFdmVyeUhlbHBlciwgdGFrZUxhdGVzdEhlbHBlciwgdGhyb3R0bGVIZWxwZXIgfTsiLCJpbXBvcnQgZnNtSXRlcmF0b3IsIHsgcUVuZCwgc2FmZU5hbWUgfSBmcm9tICcuL2ZzbUl0ZXJhdG9yJztcbmltcG9ydCB7IHRha2UsIGZvcmsgfSBmcm9tICcuLi9pbyc7XG5pbXBvcnQgeyBFTkQgfSBmcm9tICcuLi9jaGFubmVsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpIH07XG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKSB9O1xuICB9O1xuXG4gIHZhciBhY3Rpb24gPSB2b2lkIDAsXG4gICAgICBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlUYWtlLCBzZXRBY3Rpb25dO1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gRU5EID8gW3FFbmRdIDogWydxMScsIHlGb3JrKGFjdGlvbildO1xuICAgIH1cbiAgfSwgJ3ExJywgJ3Rha2VFdmVyeSgnICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyAnLCAnICsgd29ya2VyLm5hbWUgKyAnKScpO1xufSIsImltcG9ydCBmc21JdGVyYXRvciwgeyBxRW5kLCBzYWZlTmFtZSB9IGZyb20gJy4vZnNtSXRlcmF0b3InO1xuaW1wb3J0IHsgY2FuY2VsLCB0YWtlLCBmb3JrIH0gZnJvbSAnLi4vaW8nO1xuaW1wb3J0IHsgRU5EIH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRha2VMYXRlc3QocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlUYWtlID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbCkgfTtcbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpIH07XG4gIH07XG4gIHZhciB5Q2FuY2VsID0gZnVuY3Rpb24geUNhbmNlbCh0YXNrKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBjYW5jZWwodGFzaykgfTtcbiAgfTtcblxuICB2YXIgdGFzayA9IHZvaWQgMCxcbiAgICAgIGFjdGlvbiA9IHZvaWQgMDtcbiAgdmFyIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRUYXNrKHQpIHtcbiAgICByZXR1cm4gdGFzayA9IHQ7XG4gIH07XG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlUYWtlLCBzZXRBY3Rpb25dO1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gRU5EID8gW3FFbmRdIDogdGFzayA/IFsncTMnLCB5Q2FuY2VsKHRhc2spXSA6IFsncTEnLCB5Rm9yayhhY3Rpb24pLCBzZXRUYXNrXTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiBbJ3ExJywgeUZvcmsoYWN0aW9uKSwgc2V0VGFza107XG4gICAgfVxuICB9LCAncTEnLCAndGFrZUxhdGVzdCgnICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyAnLCAnICsgd29ya2VyLm5hbWUgKyAnKScpO1xufSIsImltcG9ydCBmc21JdGVyYXRvciwgeyBxRW5kLCBzYWZlTmFtZSB9IGZyb20gJy4vZnNtSXRlcmF0b3InO1xuaW1wb3J0IHsgdGFrZSwgZm9yaywgYWN0aW9uQ2hhbm5lbCwgY2FsbCB9IGZyb20gJy4uL2lvJztcbmltcG9ydCB7IEVORCB9IGZyb20gJy4uL2NoYW5uZWwnO1xuaW1wb3J0IHsgYnVmZmVycyB9IGZyb20gJy4uL2J1ZmZlcnMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYWN0aW9uID0gdm9pZCAwLFxuICAgICAgY2hhbm5lbCA9IHZvaWQgMDtcblxuICB2YXIgeUFjdGlvbkNoYW5uZWwgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXJzLnNsaWRpbmcoMSkpIH07XG4gIHZhciB5VGFrZSA9IGZ1bmN0aW9uIHlUYWtlKCkge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGFrZShjaGFubmVsKSB9O1xuICB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcbiAgfTtcbiAgdmFyIHlEZWxheSA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiBjYWxsKGRlbGF5LCBkZWxheUxlbmd0aCkgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuICB2YXIgc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIHNldENoYW5uZWwoY2gpIHtcbiAgICByZXR1cm4gY2hhbm5lbCA9IGNoO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIFsncTInLCB5QWN0aW9uQ2hhbm5lbCwgc2V0Q2hhbm5lbF07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4gWydxMycsIHlUYWtlKCksIHNldEFjdGlvbl07XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4gYWN0aW9uID09PSBFTkQgPyBbcUVuZF0gOiBbJ3E0JywgeUZvcmsoYWN0aW9uKV07XG4gICAgfSxcbiAgICBxNDogZnVuY3Rpb24gcTQoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlEZWxheV07XG4gICAgfVxuICB9LCAncTEnLCAndGhyb3R0bGUoJyArIHNhZmVOYW1lKHBhdHRlcm4pICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcbn0iLCJ2YXIgcXVldWUgPSBbXTtcbi8qKlxuICBWYXJpYWJsZSB0byBob2xkIGEgY291bnRpbmcgc2VtYXBob3JlXG4gIC0gSW5jcmVtZW50aW5nIGFkZHMgYSBsb2NrIGFuZCBwdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZSAoaWYgaXQncyBub3RcbiAgICBhbHJlYWR5IHN1c3BlbmRlZClcbiAgLSBEZWNyZW1lbnRpbmcgcmVsZWFzZXMgYSBsb2NrLiBaZXJvIGxvY2tzIHB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuIFRoaXNcbiAgICB0cmlnZ2VycyBmbHVzaGluZyB0aGUgcXVldWVkIHRhc2tzLlxuKiovXG52YXIgc2VtYXBob3JlID0gMDtcblxuLyoqXG4gIEV4ZWN1dGVzIGEgdGFzayAnYXRvbWljYWxseScuIFRhc2tzIHNjaGVkdWxlZCBkdXJpbmcgdGhpcyBleGVjdXRpb24gd2lsbCBiZSBxdWV1ZWRcbiAgYW5kIGZsdXNoZWQgYWZ0ZXIgdGhpcyB0YXNrIGhhcyBmaW5pc2hlZCAoYXNzdW1pbmcgdGhlIHNjaGVkdWxlciBlbmR1cCBpbiBhIHJlbGVhc2VkXG4gIHN0YXRlKS5cbioqL1xuZnVuY3Rpb24gZXhlYyh0YXNrKSB7XG4gIHRyeSB7XG4gICAgc3VzcGVuZCgpO1xuICAgIHRhc2soKTtcbiAgfSBmaW5hbGx5IHtcbiAgICByZWxlYXNlKCk7XG4gIH1cbn1cblxuLyoqXG4gIEV4ZWN1dGVzIG9yIHF1ZXVlcyBhIHRhc2sgZGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIChgc3VzcGVuZGVkYCBvciBgcmVsZWFzZWRgKVxuKiovXG5leHBvcnQgZnVuY3Rpb24gYXNhcCh0YXNrKSB7XG4gIHF1ZXVlLnB1c2godGFzayk7XG5cbiAgaWYgKCFzZW1hcGhvcmUpIHtcbiAgICBzdXNwZW5kKCk7XG4gICAgZmx1c2goKTtcbiAgfVxufVxuXG4vKipcbiAgUHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHN1c3BlbmRlZGAgc3RhdGUuIFNjaGVkdWxlZCB0YXNrcyB3aWxsIGJlIHF1ZXVlZCB1bnRpbCB0aGVcbiAgc2NoZWR1bGVyIGlzIHJlbGVhc2VkLlxuKiovXG5leHBvcnQgZnVuY3Rpb24gc3VzcGVuZCgpIHtcbiAgc2VtYXBob3JlKys7XG59XG5cbi8qKlxuICBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgcmVsZWFzZWRgIHN0YXRlLlxuKiovXG5mdW5jdGlvbiByZWxlYXNlKCkge1xuICBzZW1hcGhvcmUtLTtcbn1cblxuLyoqXG4gIFJlbGVhc2VzIHRoZSBjdXJyZW50IGxvY2suIEV4ZWN1dGVzIGFsbCBxdWV1ZWQgdGFza3MgaWYgdGhlIHNjaGVkdWxlciBpcyBpbiB0aGUgcmVsZWFzZWQgc3RhdGUuXG4qKi9cbmV4cG9ydCBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgcmVsZWFzZSgpO1xuXG4gIHZhciB0YXNrID0gdm9pZCAwO1xuICB3aGlsZSAoIXNlbWFwaG9yZSAmJiAodGFzayA9IHF1ZXVlLnNoaWZ0KCkpICE9PSB1bmRlZmluZWQpIHtcbiAgICBleGVjKHRhc2spO1xuICB9XG59IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnQgdmFyIHN5bSA9IGZ1bmN0aW9uIHN5bShpZCkge1xuICByZXR1cm4gJ0BAcmVkdXgtc2FnYS8nICsgaWQ7XG59O1xuXG5leHBvcnQgdmFyIFRBU0sgPSAvKiNfX1BVUkVfXyovc3ltKCdUQVNLJyk7XG5leHBvcnQgdmFyIEhFTFBFUiA9IC8qI19fUFVSRV9fKi9zeW0oJ0hFTFBFUicpO1xuZXhwb3J0IHZhciBNQVRDSCA9IC8qI19fUFVSRV9fKi9zeW0oJ01BVENIJyk7XG5leHBvcnQgdmFyIENBTkNFTCA9IC8qI19fUFVSRV9fKi9zeW0oJ0NBTkNFTF9QUk9NSVNFJyk7XG5leHBvcnQgdmFyIFNBR0FfQUNUSU9OID0gLyojX19QVVJFX18qL3N5bSgnU0FHQV9BQ1RJT04nKTtcbmV4cG9ydCB2YXIgU0VMRl9DQU5DRUxMQVRJT04gPSAvKiNfX1BVUkVfXyovc3ltKCdTRUxGX0NBTkNFTExBVElPTicpO1xuZXhwb3J0IHZhciBrb25zdCA9IGZ1bmN0aW9uIGtvbnN0KHYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5leHBvcnQgdmFyIGtUcnVlID0gLyojX19QVVJFX18qL2tvbnN0KHRydWUpO1xuZXhwb3J0IHZhciBrRmFsc2UgPSAvKiNfX1BVUkVfXyova29uc3QoZmFsc2UpO1xuZXhwb3J0IHZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuZXhwb3J0IHZhciBpZGVudCA9IGZ1bmN0aW9uIGlkZW50KHYpIHtcbiAgcmV0dXJuIHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2sodmFsdWUsIHByZWRpY2F0ZSwgZXJyb3IpIHtcbiAgaWYgKCFwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgbG9nKCdlcnJvcicsICd1bmNhdWdodCBhdCBjaGVjaycsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIGlzLm5vdFVuZGVmKG9iamVjdCkgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbn1cblxuZXhwb3J0IHZhciBpcyA9IHtcbiAgdW5kZWY6IGZ1bmN0aW9uIHVuZGVmKHYpIHtcbiAgICByZXR1cm4gdiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQ7XG4gIH0sXG4gIG5vdFVuZGVmOiBmdW5jdGlvbiBub3RVbmRlZih2KSB7XG4gICAgcmV0dXJuIHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkO1xuICB9LFxuICBmdW5jOiBmdW5jdGlvbiBmdW5jKGYpIHtcbiAgICByZXR1cm4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbic7XG4gIH0sXG4gIG51bWJlcjogZnVuY3Rpb24gbnVtYmVyKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInO1xuICB9LFxuICBzdHJpbmc6IGZ1bmN0aW9uIHN0cmluZyhzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJztcbiAgfSxcbiAgYXJyYXk6IEFycmF5LmlzQXJyYXksXG4gIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgIWlzLmFycmF5KG9iaikgJiYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iaikpID09PSAnb2JqZWN0JztcbiAgfSxcbiAgcHJvbWlzZTogZnVuY3Rpb24gcHJvbWlzZShwKSB7XG4gICAgcmV0dXJuIHAgJiYgaXMuZnVuYyhwLnRoZW4pO1xuICB9LFxuICBpdGVyYXRvcjogZnVuY3Rpb24gaXRlcmF0b3IoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXMuZnVuYyhpdC5uZXh0KSAmJiBpcy5mdW5jKGl0LnRocm93KTtcbiAgfSxcbiAgaXRlcmFibGU6IGZ1bmN0aW9uIGl0ZXJhYmxlKGl0KSB7XG4gICAgcmV0dXJuIGl0ICYmIGlzLmZ1bmMoU3ltYm9sKSA/IGlzLmZ1bmMoaXRbU3ltYm9sLml0ZXJhdG9yXSkgOiBpcy5hcnJheShpdCk7XG4gIH0sXG4gIHRhc2s6IGZ1bmN0aW9uIHRhc2sodCkge1xuICAgIHJldHVybiB0ICYmIHRbVEFTS107XG4gIH0sXG4gIG9ic2VydmFibGU6IGZ1bmN0aW9uIG9ic2VydmFibGUob2IpIHtcbiAgICByZXR1cm4gb2IgJiYgaXMuZnVuYyhvYi5zdWJzY3JpYmUpO1xuICB9LFxuICBidWZmZXI6IGZ1bmN0aW9uIGJ1ZmZlcihidWYpIHtcbiAgICByZXR1cm4gYnVmICYmIGlzLmZ1bmMoYnVmLmlzRW1wdHkpICYmIGlzLmZ1bmMoYnVmLnRha2UpICYmIGlzLmZ1bmMoYnVmLnB1dCk7XG4gIH0sXG4gIHBhdHRlcm46IGZ1bmN0aW9uIHBhdHRlcm4ocGF0KSB7XG4gICAgcmV0dXJuIHBhdCAmJiAoaXMuc3RyaW5nKHBhdCkgfHwgKHR5cGVvZiBwYXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdCkpID09PSAnc3ltYm9sJyB8fCBpcy5mdW5jKHBhdCkgfHwgaXMuYXJyYXkocGF0KSk7XG4gIH0sXG4gIGNoYW5uZWw6IGZ1bmN0aW9uIGNoYW5uZWwoY2gpIHtcbiAgICByZXR1cm4gY2ggJiYgaXMuZnVuYyhjaC50YWtlKSAmJiBpcy5mdW5jKGNoLmNsb3NlKTtcbiAgfSxcbiAgaGVscGVyOiBmdW5jdGlvbiBoZWxwZXIoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXRbSEVMUEVSXTtcbiAgfSxcbiAgc3RyaW5nYWJsZUZ1bmM6IGZ1bmN0aW9uIHN0cmluZ2FibGVGdW5jKGYpIHtcbiAgICByZXR1cm4gaXMuZnVuYyhmKSAmJiBoYXNPd24oZiwgJ3RvU3RyaW5nJyk7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgb2JqZWN0ID0ge1xuICBhc3NpZ246IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaGFzT3duKHNvdXJjZSwgaSkpIHtcbiAgICAgICAgdGFyZ2V0W2ldID0gc291cmNlW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuZXhwb3J0IHZhciBhcnJheSA9IHtcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShvYmopIHtcbiAgICB2YXIgYXJyID0gQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIGlmIChoYXNPd24ob2JqLCBpKSkge1xuICAgICAgICBhcnJbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcnJlZCgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgZGVmID0gX2V4dGVuZHMoe30sIHByb3BzKTtcbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZGVmLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGRlZi5yZWplY3QgPSByZWplY3Q7XG4gIH0pO1xuICBkZWYucHJvbWlzZSA9IHByb21pc2U7XG4gIHJldHVybiBkZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheU9mRGVmZmVyZWQobGVuZ3RoKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFyci5wdXNoKGRlZmVycmVkKCkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxheShtcykge1xuICB2YXIgdmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gIHZhciB0aW1lb3V0SWQgPSB2b2lkIDA7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKHZhbCk7XG4gICAgfSwgbXMpO1xuICB9KTtcblxuICBwcm9taXNlW0NBTkNFTF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9O1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9ja1Rhc2soKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciBydW5uaW5nID0gdHJ1ZTtcbiAgdmFyIF9yZXN1bHQgPSB2b2lkIDAsXG4gICAgICBfZXJyb3IgPSB2b2lkIDA7XG5cbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltUQVNLXSA9IHRydWUsIF9yZWYuaXNSdW5uaW5nID0gZnVuY3Rpb24gaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiBydW5uaW5nO1xuICB9LCBfcmVmLnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICByZXR1cm4gX3Jlc3VsdDtcbiAgfSwgX3JlZi5lcnJvciA9IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgIHJldHVybiBfZXJyb3I7XG4gIH0sIF9yZWYuc2V0UnVubmluZyA9IGZ1bmN0aW9uIHNldFJ1bm5pbmcoYikge1xuICAgIHJldHVybiBydW5uaW5nID0gYjtcbiAgfSwgX3JlZi5zZXRSZXN1bHQgPSBmdW5jdGlvbiBzZXRSZXN1bHQocikge1xuICAgIHJldHVybiBfcmVzdWx0ID0gcjtcbiAgfSwgX3JlZi5zZXRFcnJvciA9IGZ1bmN0aW9uIHNldEVycm9yKGUpIHtcbiAgICByZXR1cm4gX2Vycm9yID0gZTtcbiAgfSwgX3JlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9JbmMoKSB7XG4gIHZhciBzZWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICsrc2VlZDtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciB1aWQgPSAvKiNfX1BVUkVfXyovYXV0b0luYygpO1xuXG52YXIga1Rocm93ID0gZnVuY3Rpb24ga1Rocm93KGVycikge1xuICB0aHJvdyBlcnI7XG59O1xudmFyIGtSZXR1cm4gPSBmdW5jdGlvbiBrUmV0dXJuKHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xufTtcbmV4cG9ydCBmdW5jdGlvbiBtYWtlSXRlcmF0b3IobmV4dCkge1xuICB2YXIgdGhybyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoga1Rocm93O1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyc7XG4gIHZhciBpc0hlbHBlciA9IGFyZ3VtZW50c1szXTtcblxuICB2YXIgaXRlcmF0b3IgPSB7IG5hbWU6IG5hbWUsIG5leHQ6IG5leHQsIHRocm93OiB0aHJvLCByZXR1cm46IGtSZXR1cm4gfTtcblxuICBpZiAoaXNIZWxwZXIpIHtcbiAgICBpdGVyYXRvcltIRUxQRVJdID0gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuXG4vKipcbiAgUHJpbnQgZXJyb3IgaW4gYSB1c2VmdWwgd2F5IHdoZXRoZXIgaW4gYSBicm93c2VyIGVudmlyb25tZW50XG4gICh3aXRoIGV4cGFuZGFibGUgZXJyb3Igc3RhY2sgdHJhY2VzKSwgb3IgaW4gYSBub2RlLmpzIGVudmlyb25tZW50XG4gICh0ZXh0LW9ubHkgbG9nIG91dHB1dClcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2cobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgdmFyIGVycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnJztcblxuICAvKmVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUqL1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmxvZygncmVkdXgtc2FnYSAnICsgbGV2ZWwgKyAnOiAnICsgbWVzc2FnZSArICdcXG4nICsgKGVycm9yICYmIGVycm9yLnN0YWNrIHx8IGVycm9yKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZVtsZXZlbF0obWVzc2FnZSwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGUoZm4sIGRlcHJlY2F0aW9uV2FybmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgbG9nKCd3YXJuJywgZGVwcmVjYXRpb25XYXJuaW5nKTtcbiAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5leHBvcnQgdmFyIHVwZGF0ZUluY2VudGl2ZSA9IGZ1bmN0aW9uIHVwZGF0ZUluY2VudGl2ZShkZXByZWNhdGVkLCBwcmVmZXJyZWQpIHtcbiAgcmV0dXJuIGRlcHJlY2F0ZWQgKyAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgJyArIHByZWZlcnJlZCArICcsIHBsZWFzZSB1cGRhdGUgeW91ciBjb2RlJztcbn07XG5cbmV4cG9ydCB2YXIgaW50ZXJuYWxFcnIgPSBmdW5jdGlvbiBpbnRlcm5hbEVycihlcnIpIHtcbiAgcmV0dXJuIG5ldyBFcnJvcignXFxuICByZWR1eC1zYWdhOiBFcnJvciBjaGVja2luZyBob29rcyBkZXRlY3RlZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUuIFRoaXMgaXMgbGlrZWx5IGEgYnVnXFxuICBpbiByZWR1eC1zYWdhIGNvZGUgYW5kIG5vdCB5b3Vycy4gVGhhbmtzIGZvciByZXBvcnRpbmcgdGhpcyBpbiB0aGUgcHJvamVjdFxcJ3MgZ2l0aHViIHJlcG8uXFxuICBFcnJvcjogJyArIGVyciArICdcXG4nKTtcbn07XG5cbmV4cG9ydCB2YXIgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcgPSBmdW5jdGlvbiBjcmVhdGVTZXRDb250ZXh0V2FybmluZyhjdHgsIHByb3BzKSB7XG4gIHJldHVybiAoY3R4ID8gY3R4ICsgJy4nIDogJycpICsgJ3NldENvbnRleHQocHJvcHMpOiBhcmd1bWVudCAnICsgcHJvcHMgKyAnIGlzIG5vdCBhIHBsYWluIG9iamVjdCc7XG59O1xuXG5leHBvcnQgdmFyIHdyYXBTYWdhRGlzcGF0Y2ggPSBmdW5jdGlvbiB3cmFwU2FnYURpc3BhdGNoKGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY3Rpb24sIFNBR0FfQUNUSU9OLCB7IHZhbHVlOiB0cnVlIH0pKTtcbiAgfTtcbn07XG5cbmV4cG9ydCB2YXIgY2xvbmVhYmxlR2VuZXJhdG9yID0gZnVuY3Rpb24gY2xvbmVhYmxlR2VuZXJhdG9yKGdlbmVyYXRvckZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgaGlzdG9yeSA9IFtdO1xuICAgIHZhciBnZW4gPSBnZW5lcmF0b3JGdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoYXJnKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaChhcmcpO1xuICAgICAgICByZXR1cm4gZ2VuLm5leHQoYXJnKTtcbiAgICAgIH0sXG4gICAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICAgIHZhciBjbG9uZWRHZW4gPSBjbG9uZWFibGVHZW5lcmF0b3IoZ2VuZXJhdG9yRnVuYykuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgaGlzdG9yeS5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICByZXR1cm4gY2xvbmVkR2VuLm5leHQoYXJnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9uZWRHZW47XG4gICAgICB9LFxuICAgICAgcmV0dXJuOiBmdW5jdGlvbiBfcmV0dXJuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZW4ucmV0dXJuKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICB0aHJvdzogZnVuY3Rpb24gX3Rocm93KGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gZ2VuLnRocm93KGV4Y2VwdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsIi8vIExvYWQgYXMgcHJvbWlzZSBzbyB0aGF0IGFzeW5jIERyaXp6bGUgaW5pdGlhbGl6YXRpb24gY2FuIHN0aWxsIHJlc29sdmVcbnZhciB3aW5kb3dQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUpXG59KVxuXG5jbGFzcyBEcml6emxlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmUpIHtcbiAgICAvLyBWYXJpYWJsZXNcbiAgICB0aGlzLmNvbnRyYWN0cyA9IHt9XG4gICAgdGhpcy5jb250cmFjdExpc3QgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcbiAgICB0aGlzLndlYjMgPSB7fVxuXG4gICAgdGhpcy5sb2FkaW5nQ29udHJhY3QgPSB7fVxuXG4gICAgdGhpcy5hZGRDb250cmFjdCA9IHRoaXMuYWRkQ29udHJhY3QuYmluZCh0aGlzKTtcbiAgICAvLyBXYWl0IGZvciB3aW5kb3cgbG9hZCBldmVudCBpbiBjYXNlIG9mIGluamVjdGVkIHdlYjMuXG4gICAgd2luZG93UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIC8vIEJlZ2luIERyaXp6bGUgaW5pdGlhbGl6YXRpb24uXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0RSSVpaTEVfSU5JVElBTElaSU5HJywgZHJpenpsZTogdGhpcywgb3B0aW9uc30pXG4gICAgfSlcbiAgfVxuXG4gIGFkZENvbnRyYWN0IChjb250cmFjdENvbmZpZywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMubmFtZSA/IGNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZSA9IG9wdGlvbnMubmFtZSA6IG51bGw7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0FERF9DT05UUkFDVCcsIGRyaXp6bGU6IHRoaXMsIGNvbnRyYWN0Q29uZmlnLCBldmVudHM6IG9wdGlvbnMuZXZlbnRzLCB3ZWIzOiB0aGlzLndlYjMsIGZhbGxiYWNrOiB0aGlzLmZhbGxiYWNrLCBhZGRyZXNzOiBvcHRpb25zLmFkZHJlc3N9KVxuICB9XG5cbiAgX2FkZENvbnRyYWN0IChkcml6emxlQ29udHJhY3QpIHtcbiAgICBpZiAodGhpcy5jb250cmFjdHNbZHJpenpsZUNvbnRyYWN0LmNvbnRyYWN0TmFtZV0pIHsgdGhyb3cgYENvbnRyYWN0IGFscmVhZHkgZXhpc3RzOiAke2RyaXp6bGVDb250cmFjdC5jb250cmFjdE5hbWV9YCB9XG4gICAgdGhpcy5jb250cmFjdHNbZHJpenpsZUNvbnRyYWN0LmNvbnRyYWN0TmFtZV0gPSBkcml6emxlQ29udHJhY3RcbiAgICB0aGlzLmNvbnRyYWN0TGlzdC5wdXNoKGRyaXp6bGVDb250cmFjdClcbiAgICByZXR1cm4gZHJpenpsZUNvbnRyYWN0O1xuICB9XG5cbiAgZmluZENvbnRyYWN0QnlBZGRyZXNzIChhZGRyZXNzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RMaXN0LmZpbmQoKGNvbnRyYWN0KSA9PiB7XG4gICAgICByZXR1cm4gY29udHJhY3QuYWRkcmVzcy50b0xvd2VyQ2FzZSgpID09PSBhZGRyZXNzLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyaXp6bGVcbiIsImltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXG5cbmNsYXNzIERyaXp6bGVDb250cmFjdCB7XG4gIGNvbnN0cnVjdG9yKHdlYjNDb250cmFjdCwgd2ViMywgbmFtZSwgc3RvcmUsIGV2ZW50cyA9IFtdLCBjb250cmFjdEFydGlmYWN0ID0ge30sIGZhbGxiYWNrQ29udHJhY3QpIHtcbiAgICB2YXIgY29udHJhY3QgPSB3ZWIzQ29udHJhY3QgfHwgZmFsbGJhY2tDb250cmFjdDtcblxuICAgIHRoaXMuYWJpID0gY29udHJhY3Qub3B0aW9ucy5qc29uSW50ZXJmYWNlXG4gICAgdGhpcy5hZGRyZXNzID0gY29udHJhY3Qub3B0aW9ucy5hZGRyZXNzXG4gICAgdGhpcy53ZWIzID0gd2ViM1xuICAgIHRoaXMuY29udHJhY3ROYW1lID0gbmFtZVxuICAgIHRoaXMuY29udHJhY3RBcnRpZmFjdCA9IGNvbnRyYWN0QXJ0aWZhY3RcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcbiAgICB0aGlzLmZhbGxiYWNrQ29udHJhY3QgPSBmYWxsYmFja0NvbnRyYWN0IHx8IHdlYjNDb250cmFjdDtcbiAgICB0aGlzLndhdGNoRXZlbnRzID0gZXZlbnRzO1xuXG4gICAgLy8gTWVyZ2Ugd2ViMyBjb250cmFjdCBpbnN0YW5jZSBpbnRvIERyaXp6bGVDb250cmFjdCBpbnN0YW5jZS5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbnRyYWN0KVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFiaS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLmFiaVtpXVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09IFwiZnVuY3Rpb25cIiAmJiBpdGVtLmNvbnN0YW50ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMubWV0aG9kc1tpdGVtLm5hbWVdLmNhY2hlQ2FsbCA9IHRoaXMuY2FjaGVDYWxsRnVuY3Rpb24oaXRlbS5uYW1lLCBpKVxuICAgICAgICB0aGlzLm1ldGhvZHNbaXRlbS5uYW1lXS5mcm9tQ2FjaGUgPSB0aGlzLmZyb21DYWNoZUZ1bmN0aW9uKGl0ZW0ubmFtZSwgaSlcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PSBcImZ1bmN0aW9uXCIgJiYgaXRlbS5jb25zdGFudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5tZXRob2RzW2l0ZW0ubmFtZV0uY2FjaGVTZW5kID0gdGhpcy5jYWNoZVNlbmRGdW5jdGlvbihpdGVtLm5hbWUsIGkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3luY0V2ZW50cygpO1xuICB9XG5cbiAgc3luY0V2ZW50cyhibG9jaykge1xuICAgIGNvbnNvbGUubG9nKCdzeW5jIGV2ZW50cyEnKTtcbiAgICBsZXQgZXZlbnRzID0gdGhpcy53YXRjaEV2ZW50cztcbiAgICAvLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgaWYgYW55IGV2ZW50cy5cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBldmVudCA9IGV2ZW50c1tpXVxuXG4gICAgICAgIGlmICggdHlwZW9mIGV2ZW50ID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnTElTVEVOX0ZPUl9FVkVOVCcsIGNvbnRyYWN0OiB0aGlzLCBldmVudE5hbWU6IGV2ZW50LmV2ZW50TmFtZSwgZXZlbnRPcHRpb25zOiBldmVudC5ldmVudE9wdGlvbnN9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdMSVNURU5fRk9SX0VWRU5UJywgY29udHJhY3Q6IHRoaXMsIGV2ZW50TmFtZTogZXZlbnR9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnJvbUNhY2hlRnVuY3Rpb24oZm5OYW1lLCBmbkluZGV4LCBmbikge1xuICAgIHZhciBjb250cmFjdCA9IHRoaXNcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIENvbGxlY3QgYXJncyBhbmQgaGFzaCB0byB1c2UgYXMga2V5LCAweDAgaWYgbm8gYXJnc1xuICAgICAgdmFyIGFyZ3NIYXNoID0gJzB4MCdcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzXG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXJnc0hhc2ggPSBjb250cmFjdC5nZW5lcmF0ZUFyZ3NIYXNoKGFyZ3MpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuICAgICAgaWYgKCFjb250cmFjdC5zdG9yZS5nZXRTdGF0ZSgpLmNvbnRyYWN0c1tjb250cmFjdE5hbWVdLnN0YXRlKSByZXR1cm47XG4gICAgICBjb25zdCBmdW5jdGlvblN0YXRlID0gY29udHJhY3Quc3RvcmUuZ2V0U3RhdGUoKS5jb250cmFjdHNbY29udHJhY3ROYW1lXS5zdGF0ZVtmbk5hbWVdXG5cbiAgICAgIC8vIElmIGNhbGwgcmVzdWx0IGlzIGluIHN0YXRlIHJldHVybiB2YWx1ZSBpbnN0ZWFkIG9mIGNhbGxpbmdcbiAgICAgIGlmIChhcmdzSGFzaCBpbiBmdW5jdGlvblN0YXRlICYmIGZ1bmN0aW9uU3RhdGVbYXJnc0hhc2hdLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvblN0YXRlW2FyZ3NIYXNoXS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWNoZUNhbGxGdW5jdGlvbihmbk5hbWUsIGZuSW5kZXgsIGZuKSB7XG4gICAgdmFyIGNvbnRyYWN0ID0gdGhpc1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQ29sbGVjdCBhcmdzIGFuZCBoYXNoIHRvIHVzZSBhcyBrZXksIDB4MCBpZiBubyBhcmdzXG4gICAgICB2YXIgYXJnc0hhc2ggPSAnMHgwJ1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHNcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBhcmdzSGFzaCA9IGNvbnRyYWN0LmdlbmVyYXRlQXJnc0hhc2goYXJncylcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udHJhY3ROYW1lID0gY29udHJhY3QuY29udHJhY3ROYW1lXG4gICAgICBpZiAoIWNvbnRyYWN0LnN0b3JlLmdldFN0YXRlKCkuY29udHJhY3RzW2NvbnRyYWN0TmFtZV0uc3RhdGUpIHJldHVybjtcbiAgICAgIGNvbnN0IGZ1bmN0aW9uU3RhdGUgPSBjb250cmFjdC5zdG9yZS5nZXRTdGF0ZSgpLmNvbnRyYWN0c1tjb250cmFjdE5hbWVdLnN0YXRlW2ZuTmFtZV1cblxuICAgICAgLy8gT3RoZXJ3aXNlLCBjYWxsIGZ1bmN0aW9uIGFuZCB1cGRhdGUgc3RvcmVcbiAgICAgIGNvbnRyYWN0LnN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnQ0FMTF9DT05UUkFDVF9GTicsIGNvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIGFyZ3NIYXNofSlcblxuICAgICAgLy8gUmV0dXJuIG5vdGhpbmcgYmVjYXVzZSBzdGF0ZSBpcyBjdXJyZW50bHkgZW1wdHkuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjYWNoZVNlbmRGdW5jdGlvbihmbk5hbWUsIGZuSW5kZXgsIGZuKSB7XG4gICAgLy8gTk9URTogTWF5IG5vdCBuZWVkIGZuIGluZGV4XG4gICAgdmFyIGNvbnRyYWN0ID0gdGhpc1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHNcblxuICAgICAgLy8gR2VuZXJhdGUgdGVtcG9yYXJ5IElEXG4gICAgICB2YXIgc3RhY2tJZCA9IGNvbnRyYWN0LnN0b3JlLmdldFN0YXRlKCkudHJhbnNhY3Rpb25TdGFjay5sZW5ndGhcblxuICAgICAgLy8gQWRkIElEIHRvIFwidHJhbnNhY3Rpb25TdGFja1wiIHdpdGggZW1wdHkgdmFsdWVcbiAgICAgIGNvbnRyYWN0LnN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnUFVTSF9UT19TVEFDSyd9KVxuXG4gICAgICAvLyBEaXNwYXRjaCB0eCB0byBzYWdhXG4gICAgICAvLyBXaGVuIHR4aGFzaCByZWNlaXZlZCwgd2lsbCBiZSB2YWx1ZSBvZiBzdGFjayBJRFxuICAgICAgY29udHJhY3Quc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdTRU5EX0NPTlRSQUNUX1RYJywgY29udHJhY3QsIGZuTmFtZSwgZm5JbmRleCwgYXJncywgc3RhY2tJZH0pXG5cbiAgICAgIC8vIHJldHVybiBzdGFjayBJRFxuICAgICAgcmV0dXJuIHN0YWNrSWRcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUFyZ3NIYXNoKGFyZ3MpIHtcbiAgICB2YXIgd2ViMyA9IHRoaXMud2ViM1xuICAgIHZhciBoYXNoU3RyaW5nID0gJydcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gIT09ICdmdW5jdGlvbicpXG4gICAgICB7XG4gICAgICAgIHZhciBhcmdUb0hhc2ggPSBhcmdzW2ldXG5cbiAgICAgICAgLy8gU3RyaW5naWZ5IG9iamVjdHMgdG8gYWxsb3cgaGFzaGluZ1xuICAgICAgICBpZiAodHlwZW9mIGFyZ1RvSGFzaCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBhcmdUb0hhc2ggPSBKU09OLnN0cmluZ2lmeShhcmdUb0hhc2gpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb252ZXJ0IG51bWJlciB0byBzdHJvbmcgdG8gYWxsb3cgaGFzaGluZ1xuICAgICAgICBpZiAodHlwZW9mIGFyZ1RvSGFzaCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBhcmdUb0hhc2ggPSBhcmdUb0hhc2gudG9TdHJpbmcoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBpbiBwbGFjZSBmb3Igd2ViMyB2MC54XG4gICAgICAgIGlmICgndXRpbHMnIGluIHdlYjMpIHtcbiAgICAgICAgICB2YXIgaGFzaFBpZWNlID0gd2ViMy51dGlscy5zaGEzKGFyZ1RvSGFzaClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgaGFzaFBpZWNlID0gd2ViMy5zaGEzKGFyZ1RvSGFzaClcbiAgICAgICAgfVxuXG4gICAgICAgIGhhc2hTdHJpbmcgKz0gaGFzaFBpZWNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdlYjMudXRpbHMuc2hhMyhoYXNoU3RyaW5nKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyaXp6bGVDb250cmFjdFxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuY29uc3QgYWNjb3VudEJhbGFuY2VzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FDQ09VTlRfQkFMQU5DRV9GRVRDSEVEJylcbiAge1xuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5hY2NvdW50XTogYWN0aW9uLmFjY291bnRCYWxhbmNlXG4gICAgfVxuICAgIC8vIHByZXZlbnRzIGZyb20gdXBkYXRpbmcgc3RhdGUgYW5kIHJlLXJlbmRlcmluZyBjb21wb25lbnRzIHVubmVjZXNzYXJpbHkgd2hlbiBiYWxhbmNlcyBhcmUgdGhlIHNhbWVcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpID09PSBKU09OLnN0cmluZ2lmeShzdGF0ZSkpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0YXRlXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudEJhbGFuY2VzUmVkdWNlclxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0QWNjb3VudEJhbGFuY2VzKGFjdGlvbikge1xuICBjb25zdCBhY2NvdW50cyA9IHlpZWxkIHNlbGVjdChnZXRBY2NvdW50c1N0YXRlKVxuICBjb25zdCB3ZWIzID0gYWN0aW9uLndlYjNcblxuICBpZiAoIWFjY291bnRzKSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gYWNjb3VudHMgZm91bmQgd2hpbGUgYXR0ZW1wdGluZyB0byBmZXRjaCBiYWxhbmNlcyEnKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBpIGluIGFjY291bnRzKSB7XG4gICAgICB2YXIgYWNjb3VudCA9IGFjY291bnRzW2ldXG4gICAgICB2YXIgYWNjb3VudEJhbGFuY2UgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLmdldEJhbGFuY2UsIGFjY291bnQpXG5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRfQkFMQU5DRV9GRVRDSEVEJywgYWNjb3VudCwgYWNjb3VudEJhbGFuY2V9KVxuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UX0JBTEFOQ0VfRkFJTEVEJywgZXJyb3J9KVxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFjY291bnQgJyArIGFjY291bnQgKyAnIGJhbGFuY2U6JylcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICB9XG5cbiAgeWllbGQgcHV0KHt0eXBlOiAnQUNDT1VOVF9CQUxBTkNFU19GRVRDSEVEJ30pXG59XG5cbmNvbnN0IGdldEFjY291bnRzU3RhdGUgPSAoc3RhdGUpID0+IHN0YXRlLmFjY291bnRzXG5cbmZ1bmN0aW9uKiBhY2NvdW50QmFsYW5jZXNTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdBQ0NPVU5UX0JBTEFOQ0VTX0ZFVENISU5HJywgZ2V0QWNjb3VudEJhbGFuY2VzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50QmFsYW5jZXNTYWdhOyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdXG5cbmNvbnN0IGFjY291bnRzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FDQ09VTlRTX0ZFVENISU5HJylcbiAge1xuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQUNDT1VOVFNfRkVUQ0hFRCcpXG4gIHtcbiAgICBsZXQgbmVlZHNVcGRhdGU7XG4gICAgbGV0IGFjYyA9IGFjdGlvbi5hY2NvdW50cyB8fCBbXTtcbiAgICBsZXQgaW50ZXJzZWN0ID0gYWNjLmZpbHRlcih4ID0+IHN0YXRlLmluY2x1ZGVzKHgpKTtcbiAgICBpZiAoaW50ZXJzZWN0Lmxlbmd0aCA9PT0gYWNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi5hY3Rpb24uYWNjb3VudHNcbiAgICBdXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudHNSZWR1Y2VyXG4iLCJpbXBvcnQgeyBFTkQsIGV2ZW50Q2hhbm5lbCB9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgeyBnZXRBY2NvdW50QmFsYW5jZXMgfSBmcm9tICcuLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcblxuLypcbiAqIEZldGNoIEFjY291bnRzIExpc3RcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldEFjY291bnRzKGFjdGlvbikge1xuICBjb25zdCB3ZWIzID0gYWN0aW9uLndlYjNcblxuICB0cnkge1xuICAgIGlmICghd2ViMykgdGhyb3cgJ21pc3Npbmcgd2ViMyc7XG4gICAgY29uc3QgYWNjb3VudHMgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLmdldEFjY291bnRzKVxuXG4gICAgaWYgKCFhY2NvdW50cykge1xuICAgICAgdGhyb3cgJ05vIGFjY291bnRzIGZvdW5kISdcbiAgICB9XG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UU19GRVRDSEVEJywgYWNjb3VudHN9KVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRTX0ZBSUxFRCcsIGVycm9yfSlcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhY2NvdW50czonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuLypcbiAqIFBvbGwgZm9yIEFjY291bnQgQ2hhbmdlc1xuICovXG5cbmZ1bmN0aW9uKiBjcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsKHtpbnRlcnZhbCwgd2ViM30pIHtcbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCBwZXJzaXN0ZWRXZWIzID0gd2ViM1xuXG4gICAgY29uc3QgYWNjb3VudHNQb2xsZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnU1lOQ0lOR19BQ0NPVU5UUycsIHBlcnNpc3RlZFdlYjN9KVxuICAgIH0sIGludGVydmFsKSAvLyBvcHRpb25zLnBvbGxzLmFjY291bnRzXG4gICAgXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGFjY291bnRzUG9sbGVyKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuICBcbmZ1bmN0aW9uKiBjYWxsQ3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCh7aW50ZXJ2YWwsIHdlYjN9KSB7XG4gIGNvbnN0IGFjY291bnRzQ2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCwge2ludGVydmFsLCB3ZWIzfSlcbiAgXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UoYWNjb3VudHNDaGFubmVsKVxuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ1NZTkNJTkdfQUNDT1VOVFMnKSB7ICAgICAgXG4gICAgICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudHMsIHt3ZWIzOiBldmVudC5wZXJzaXN0ZWRXZWIzfSlcbiAgICAgICAgeWllbGQgY2FsbChnZXRBY2NvdW50QmFsYW5jZXMsIHt3ZWIzOiBldmVudC5wZXJzaXN0ZWRXZWIzfSkgIFxuICAgICAgfVxuXG4gICAgICB5aWVsZCBwdXQoZXZlbnQpXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGFjY291bnRzQ2hhbm5lbC5jbG9zZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24qIGFjY291bnRzU2FnYSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdCgnQUNDT1VOVFNfRkVUQ0hJTkcnLCBnZXRBY2NvdW50cylcbiAgeWllbGQgdGFrZUxhdGVzdCgnQUNDT1VOVFNfUE9MTElORycsIGNhbGxDcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50c1NhZ2E7XG4iLCJpbXBvcnQgeyBFTkQsIGV2ZW50Q2hhbm5lbCB9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuY29uc3QgQmxvY2tUcmFja2VyID0gcmVxdWlyZSgnZXRoLWJsb2NrLXRyYWNrZXInKVxuXG4vKlxuICogTGlzdGVuIGZvciBCbG9ja3NcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0NoYW5uZWwoe2RyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KSB7XG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgYmxvY2tFdmVudHMgPSB3ZWIzLmV0aC5zdWJzY3JpYmUoJ25ld0Jsb2NrSGVhZGVycycsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICBpZiAoZXJyb3IpXG4gICAgICB7XG4gICAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS1NfRkFJTEVEJywgZXJyb3J9KVxuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGJsb2NrIGhlYWRlciBzdWJzY3JpcHRpb246JylcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgICAgICBlbWl0KEVORClcbiAgICAgIH1cbiAgICB9KVxuICAgIC5vbignZGF0YScsIChibG9ja0hlYWRlcikgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLX1JFQ0VJVkVEJywgYmxvY2tIZWFkZXIsIGRyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KVxuICAgIH0pXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS1NfRkFJTEVEJywgZXJyb3J9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgYmxvY2tFdmVudHMub2ZmKClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSlcbn1cblxuZnVuY3Rpb24qIGNhbGxDcmVhdGVCbG9ja0NoYW5uZWwoe2RyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KSB7XG4gIGNvbnN0IGJsb2NrQ2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlQmxvY2tDaGFubmVsLCB7ZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pXG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShibG9ja0NoYW5uZWwpXG4gICAgICB5aWVsZCBwdXQoZXZlbnQpXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGJsb2NrQ2hhbm5lbC5jbG9zZSgpXG4gIH1cbn1cblxuLypcbiAqIFBvbGwgZm9yIEJsb2Nrc1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrUG9sbENoYW5uZWwoe2RyaXp6bGUsIGludGVydmFsLCB3ZWIzLCBzeW5jQWx3YXlzfSkge1xuICByZXR1cm4gZXZlbnRDaGFubmVsKGVtaXQgPT4ge1xuICAgIGNvbnN0IGJsb2NrVHJhY2tlciA9IG5ldyBCbG9ja1RyYWNrZXIoeyBwcm92aWRlcjogd2ViMy5jdXJyZW50UHJvdmlkZXIsIHBvbGxpbmdJbnRlcnZhbDogaW50ZXJ2YWx9KVxuXG4gICAgYmxvY2tUcmFja2VyLm9uKCdsYXRlc3QnLCAoYmxvY2spID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS19GT1VORCcsIGJsb2NrLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgICB9KVxuXG4gICAgYmxvY2tUcmFja2VyXG4gICAgLnN0YXJ0KClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnQkxPQ0tTX0ZBSUxFRCcsIGVycm9yfSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIGJsb2NrVHJhY2tlci5zdG9wKClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSlcbn1cblxuZnVuY3Rpb24qIGNhbGxDcmVhdGVCbG9ja1BvbGxDaGFubmVsKHtkcml6emxlLCBpbnRlcnZhbCwgd2ViMywgc3luY0Fsd2F5c30pIHtcbiAgY29uc3QgYmxvY2tDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVCbG9ja1BvbGxDaGFubmVsLCB7ZHJpenpsZSwgaW50ZXJ2YWwsIHdlYjMsIHN5bmNBbHdheXN9KVxuXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UoYmxvY2tDaGFubmVsKVxuICAgICAgeWllbGQgcHV0KGV2ZW50KVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBibG9ja0NoYW5uZWwuY2xvc2UoKVxuICB9XG59XG5cbi8qXG4gKiBQcm9jZXNzIEJsb2Nrc1xuICovXG5cbmZ1bmN0aW9uKiBwcm9jZXNzQmxvY2tIZWFkZXIoe2Jsb2NrSGVhZGVyLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSkge1xuICBjb25zdCBibG9ja051bWJlciA9IGJsb2NrSGVhZGVyLm51bWJlclxuXG4gIHRyeSB7XG4gICAgbGV0IGJsb2NrID0geWllbGQgY2FsbCh3ZWIzLmV0aC5nZXRCbG9jaywgYmxvY2tOdW1iZXIsIHRydWUpXG5cbiAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAvLyBzb21ldGltZXMgYmxvY2sgaXMgbnVsbCB3aXRoIHdzIDooXG4gICAgICAvLyBibG9jayA9IHlpZWxkIGNhbGwod2ViMy5ldGguZ2V0QmxvY2ssIGJsb2NrTnVtYmVyLCB0cnVlKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGJsb2NrIG51bWJlciAnICsgYmxvY2tOdW1iZXIpO1xuICAgIH1cbiAgICB5aWVsZCBjYWxsKHByb2Nlc3NCbG9jaywge2Jsb2NrLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBibG9jayBwcm9jZXNzaW5nOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0JMT0NLX0ZBSUxFRCcsIGVycm9yfSlcblxuICAgIHJldHVyblxuICB9XG59XG5cbmZ1bmN0aW9uKiBwcm9jZXNzQmxvY2soe2Jsb2NrLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSkge1xuXG4gIHRyeSB7XG4gICAgaWYgKHN5bmNBbHdheXMpXG4gICAge1xuICAgICAgeWllbGQgYWxsKE9iamVjdC5rZXlzKGRyaXp6bGUuY29udHJhY3RzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgcmV0dXJuIHB1dCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNJTkcnLCBjb250cmFjdDogZHJpenpsZS5jb250cmFjdHNba2V5XX0pXG4gICAgICB9KSlcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ2dvdCBuZXcgYmxvY2snKTtcbiAgICBjb25zdCB0eHMgPSBibG9jay50cmFuc2FjdGlvbnNcblxuICAgIGlmICh0eHMubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICAvLyBMb29wIHRocm91Z2ggdHhzIGxvb2tpbmcgZm9yIGFueSBjb250cmFjdCBhZGRyZXNzIG9mIGludGVyZXN0XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR4cy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgdmFyIGZyb20gPSB0eHNbaV0uZnJvbSB8fCAnJ1xuICAgICAgICB2YXIgZnJvbUNvbnRyYWN0ID0gZHJpenpsZS5maW5kQ29udHJhY3RCeUFkZHJlc3MoZnJvbS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICBpZiAoZnJvbUNvbnRyYWN0KSB7XG4gICAgICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQ09OVFJBQ1RfU1lOQ0lORycsIGNvbnRyYWN0OiBmcm9tQ29udHJhY3R9KVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvID0gdHhzW2ldLnRvIHx8ICcnXG4gICAgICAgIHZhciB0b0NvbnRyYWN0ID0gZHJpenpsZS5maW5kQ29udHJhY3RCeUFkZHJlc3ModG8udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgaWYgKHRvQ29udHJhY3QpIHtcbiAgICAgICAgICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9TWU5DSU5HJywgY29udHJhY3Q6IHRvQ29udHJhY3R9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGJsb2NrIHByb2Nlc3Npbmc6JylcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnQkxPQ0tfRkFJTEVEJywgZXJyb3J9KVxuXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuZnVuY3Rpb24qIGJsb2Nrc1NhZ2EoKSB7XG4gIC8vIEJsb2NrIFN1YnNjcmlwdGlvbnNcbiAgeWllbGQgdGFrZUxhdGVzdCgnQkxPQ0tTX0xJU1RFTklORycsIGNhbGxDcmVhdGVCbG9ja0NoYW5uZWwpXG4gIHlpZWxkIHRha2VFdmVyeSgnQkxPQ0tfUkVDRUlWRUQnLCBwcm9jZXNzQmxvY2tIZWFkZXIpXG5cbiAgLy8gQmxvY2sgUG9sbGluZ1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdCTE9DS1NfUE9MTElORycsIGNhbGxDcmVhdGVCbG9ja1BvbGxDaGFubmVsKVxuICB5aWVsZCB0YWtlRXZlcnkoJ0JMT0NLX0ZPVU5EJywgcHJvY2Vzc0Jsb2NrKVxufVxuXG5leHBvcnQgZGVmYXVsdCBibG9ja3NTYWdhXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuY29uc3QgY29udHJhY3RzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8qXG4gICAqIENvbnRyYWN0IFN0YXR1c1xuICAgKi9cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9JTklUSUFMSVpJTkcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5jb250cmFjdENvbmZpZy5jb250cmFjdE5hbWVdOiBnZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlKGFjdGlvbi5jb250cmFjdENvbmZpZylcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9JTklUSUFMSVpFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLm5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IHRydWUsXG4gICAgICAgIHN5bmNlZDogdHJ1ZSxcbiAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgbWV0aG9kczogYWN0aW9uLmNvbnRyYWN0Lm1ldGhvZHMsXG4gICAgICAgIGFkZHJlc3M6IGFjdGlvbi5jb250cmFjdC5hZGRyZXNzLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NPTlRSQUNUX1NZTkNJTkcnKVxuICB7XG4gICAgY29uc3QgY29udHJhY3ROYW1lID0gYWN0aW9uLmNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2NvbnRyYWN0TmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGVbY29udHJhY3ROYW1lXSxcbiAgICAgICAgc3luY2VkOiBmYWxzZSxcbiAgICAgICAgc3luY2luZzogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NPTlRSQUNUX1NZTkNFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLmNvbnRyYWN0TmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLmNvbnRyYWN0TmFtZV0sXG4gICAgICAgIHN5bmNlZDogdHJ1ZSxcbiAgICAgICAgc3luY2luZzogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DX0lORCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLmNvbnRyYWN0TmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLmNvbnRyYWN0TmFtZV0sXG4gICAgICAgIHN5bmNlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBDb250cmFjdCBGdW5jdGlvbnNcbiAgICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnR09UX0NPTlRSQUNUX1ZBUicpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLm5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXSxcbiAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0uc3RhdGUsXG4gICAgICAgICAgW2FjdGlvbi52YXJpYWJsZV06IHtcbiAgICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXS5zdGF0ZVthY3Rpb24udmFyaWFibGVdLFxuICAgICAgICAgICAgW2FjdGlvbi5hcmdzSGFzaF06IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdLnN0YXRlW2FjdGlvbi52YXJpYWJsZV1bYWN0aW9uLmFyZ3NIYXNoXSxcbiAgICAgICAgICAgICAgYXJnczogYWN0aW9uLmFyZ3MsXG4gICAgICAgICAgICAgIGZuSW5kZXg6IGFjdGlvbi5mbkluZGV4LFxuICAgICAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICBzeW5jaW5nOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0VSUk9SX0NPTlRSQUNUX1ZBUicpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLm5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXSxcbiAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0uc3RhdGUsXG4gICAgICAgICAgW2FjdGlvbi52YXJpYWJsZV06IHtcbiAgICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXS5zdGF0ZVthY3Rpb24udmFyaWFibGVdLFxuICAgICAgICAgICAgW2FjdGlvbi5hcmdzSGFzaF06IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdLnN0YXRlW2FjdGlvbi52YXJpYWJsZV1bYWN0aW9uLmFyZ3NIYXNoXSxcbiAgICAgICAgICAgICAgYXJnczogYWN0aW9uLmFyZ3MsXG4gICAgICAgICAgICAgIGZuSW5kZXg6IGFjdGlvbi5mbkluZGV4LFxuICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICAgICAgICBzeW5jaW5nOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIENvbnRyYWN0IEV2ZW50c1xuICAgKi9cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdFVkVOVF9GSVJFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLm5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXSxcbiAgICAgICAgZXZlbnRzOiBbXG4gICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdLmV2ZW50cyxcbiAgICAgICAgICBhY3Rpb24uZXZlbnRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250cmFjdHNSZWR1Y2VyXG4iLCJpbXBvcnQgeyBFTkQsIGV2ZW50Q2hhbm5lbCB9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZSwgdGFrZUxhdGVzdCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IERyaXp6bGVDb250cmFjdCBmcm9tICcuLi9Ecml6emxlQ29udHJhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiogYWRkQ29udHJhY3Qoe2RyaXp6bGUsIGNvbnRyYWN0Q29uZmlnLCBldmVudHMsIHdlYjMsIGZhbGxiYWNrLCBhZGRyZXNzfSkge1xuICAvLyBQcmV2ZW50cyBkb3VibGUtYWRkaW5nIGNvbnRyYWN0c1xuICBpZiAoIWRyaXp6bGUpIHJldHVybjtcbiAgaWYgKGRyaXp6bGUubG9hZGluZ0NvbnRyYWN0W2NvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZV0pIHsgcmV0dXJuIGZhbHNlIH1cblxuICBkcml6emxlLmxvYWRpbmdDb250cmFjdFtjb250cmFjdENvbmZpZy5jb250cmFjdE5hbWVdID0gdHJ1ZVxuXG4gIHlpZWxkIHB1dCh7dHlwZTogJ0NPTlRSQUNUX0lOSVRJQUxJWklORycsIGNvbnRyYWN0Q29uZmlnfSlcblxuICBsZXQgZHJpenpsZUNvbnRyYWN0XG5cbiAgLy8gaWYgKGNvbnRyYWN0Q29uZmlnLndlYjNDb250cmFjdCkge1xuICAgIC8vIGRyaXp6bGVDb250cmFjdCA9IHlpZWxkIGNhbGwoaW5zdGFudGlhdGVXZWIzQ29udHJhY3QsIHt3ZWIzQ29udHJhY3Q6IGNvbnRyYWN0Q29uZmlnLndlYjNDb250cmFjdCwgbmFtZTogY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lLCBldmVudHMsIHN0b3JlOiBkcml6emxlLnN0b3JlLCB3ZWIzLCBmYWxsYmFja30pXG4gIC8vIH0gZWxzZSB7XG4gIGRyaXp6bGVDb250cmFjdCA9IHlpZWxkIGNhbGwoaW5zdGFudGlhdGVDb250cmFjdCwge2NvbnRyYWN0QXJ0aWZhY3Q6IGNvbnRyYWN0Q29uZmlnLCBldmVudHMsIHN0b3JlOiBkcml6emxlLnN0b3JlLCB3ZWIzLCBmYWxsYmFjaywgYWRkcmVzczogYWRkcmVzc30pXG4gIC8vIH1cbiAgbGV0IGNvbnRyYWN0ID0gZHJpenpsZS5fYWRkQ29udHJhY3QoZHJpenpsZUNvbnRyYWN0KVxuICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9JTklUSUFMSVpFRCcsIG5hbWU6IGFkZHJlc3MgfHwgY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lLCBjb250cmFjdH0pXG59XG5cbi8qXG4gKiBJbnN0YW50aWF0aW9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBpbnN0YW50aWF0ZVdlYjNDb250cmFjdCh7d2ViM0NvbnRyYWN0LCBuYW1lLCBldmVudHMsIHN0b3JlLCB3ZWIzLCBmYWxsYmFja30pIHtcbiAgcmV0dXJuIG5ldyBEcml6emxlQ29udHJhY3Qod2ViM0NvbnRyYWN0LCB3ZWIzLCBuYW1lLCBzdG9yZSwgZXZlbnRzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGluc3RhbnRpYXRlQ29udHJhY3Qoe2NvbnRyYWN0QXJ0aWZhY3QsIGV2ZW50cywgc3RvcmUsIHdlYjMsIGZhbGxiYWNrLCBhZGRyZXNzfSkge1xuICBjb25zdCBuZXR3b3JrSWQgPSB5aWVsZCBzZWxlY3QoZ2V0TmV0d29ya0lkKVxuICBjb25zdCBmYWxsYmFja05ldHdvcmtJZCA9IHlpZWxkIHNlbGVjdChnZXRGYWxsYmFja05ldHdvcmtJZClcbiAgdmFyIHdlYjNDb250cmFjdFxuICB2YXIgZmFsbGJhY2tDb250cmFjdDtcblxuICAvLyBJbnN0YW50aWF0ZSB0aGUgY29udHJhY3QuXG4gIGlmICh3ZWIzKSB7XG4gICAgd2ViM0NvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgICAgY29udHJhY3RBcnRpZmFjdC5hYmksXG4gICAgICBhZGRyZXNzIHx8IGNvbnRyYWN0QXJ0aWZhY3QubmV0d29ya3NbbmV0d29ya0lkXS5hZGRyZXNzLFxuICAgICAge1xuICAgICAgICBmcm9tOiBzdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRzWzBdLFxuICAgICAgICBkYXRhOiBjb250cmFjdEFydGlmYWN0LmRlcGxveWVkQnl0ZWNvZGVcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBpZiAoZmFsbGJhY2spIHtcbiAgICBmYWxsYmFja0NvbnRyYWN0ID0gbmV3IGZhbGxiYWNrLmV0aC5Db250cmFjdChcbiAgICAgIGNvbnRyYWN0QXJ0aWZhY3QuYWJpLFxuICAgICAgYWRkcmVzcyB8fCBjb250cmFjdEFydGlmYWN0Lm5ldHdvcmtzW2ZhbGxiYWNrTmV0d29ya0lkXS5hZGRyZXNzLFxuICAgICAge1xuICAgICAgICBkYXRhOiBjb250cmFjdEFydGlmYWN0LmRlcGxveWVkQnl0ZWNvZGVcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICAvLyBUT0RPIGJldHRlciBsb2dpYyAtIHdhaXQgZm9yIGNvbm5lY3Rpb24hXG4gIC8vIGlmIHdlYnNvY2tldCBwcm92aWRlciwgdGhlbiB3YWl0IGZvciB3ZWJzb2NrZXQgdG8gY29ubmVjdDtcbiAgLy8gaWYgKGZhbGxiYWNrKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ2luc3RhbnRpYXRlIGNvbnRyYWN0ICcsIGFkZHJlc3MpO1xuICAvLyAgIHlpZWxkIGZhbGxiYWNrLmN1cnJlbnRQcm92aWRlci5vbignY29ubmVjdCcsIGUgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCwgZ2V0IGV2ZW50cyBmb3IgJywgYWRkcmVzcyB8fCBjb250cmFjdEFydGlmYWN0LmNvbnRyYWN0TmFtZSk7XG4gIC8vICAgICByZXR1cm4gbmV3IERyaXp6bGVDb250cmFjdCh3ZWIzQ29udHJhY3QsIHdlYjMsIGFkZHJlc3MgfHwgY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWUsIHN0b3JlLCBldmVudHMsIGNvbnRyYWN0QXJ0aWZhY3QsIGZhbGxiYWNrQ29udHJhY3QpXG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy8gdGhpcyBpcyBjYWxsZWQgdHdpY2UgcmlnaHQgbm93XG4gIC8vIGNvbnNvbGUubG9nKCduZXcgY29udHJhY3QgJywgYWRkcmVzcyB8fCBjb250cmFjdEFydGlmYWN0LmNvbnRyYWN0TmFtZSk7XG4gIHJldHVybiBuZXcgRHJpenpsZUNvbnRyYWN0KHdlYjNDb250cmFjdCwgd2ViMywgYWRkcmVzcyB8fCBjb250cmFjdEFydGlmYWN0LmNvbnRyYWN0TmFtZSwgc3RvcmUsIGV2ZW50cywgY29udHJhY3RBcnRpZmFjdCwgZmFsbGJhY2tDb250cmFjdClcblxufVxuXG4vKlxuICogRXZlbnRzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQ29udHJhY3RFdmVudENoYW5uZWwoe2NvbnRyYWN0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9uc30pIHtcbiAgY29uc3QgbmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuXG4gIC8vIGlmIHdlIGhhdmUgYSB3cyBmYWxsYmFjayAtIHVzZSB0aGF0IGZvciBldmVudHNcbiAgY29uc3QgZXZlbnRFbmFibGVkQ29udHJhY3QgPSBjb250cmFjdC5mYWxsYmFja0NvbnRyYWN0IHx8IGNvbnRyYWN0XG5cbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gZXZlbnRFbmFibGVkQ29udHJhY3QuZXZlbnRzW2V2ZW50TmFtZV0oZXZlbnRPcHRpb25zKVxuICAgIC5vbignZGF0YScsIGV2ZW50ID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdFVkVOVF9GSVJFRCcsIG5hbWUsIGV2ZW50fSlcbiAgICB9KVxuICAgIC5vbignY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdFVkVOVF9DSEFOR0VEJywgbmFtZSwgZXZlbnR9KVxuICAgIH0pXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdFVkVOVF9FUlJPUicsIG5hbWUsIGVycm9yfSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIGV2ZW50TGlzdGVuZXIucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbExpc3RlbkZvckNvbnRyYWN0RXZlbnQoe2NvbnRyYWN0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9uc30pIHtcbiAgY29uc3QgY29udHJhY3RFdmVudENoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZUNvbnRyYWN0RXZlbnRDaGFubmVsLCB7Y29udHJhY3QsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zfSlcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKGNvbnRyYWN0RXZlbnRDaGFubmVsKVxuICAgIHlpZWxkIHB1dChldmVudClcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiogY2FsbFBvbGxDb250cmFjdEV2ZW50KHtjb250cmFjdCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnN9KSB7XG4vLyAgIHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygncG9sbGluZyBldmVudHMnKTtcbi8vICAgICBjYWxsR2V0Q29udHJhY3RFdmVudCh7Y29udHJhY3QsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zfSk7XG4vLyAgIH0sIDMwMDApO1xuLy8gfVxuXG5cbmZ1bmN0aW9uKiBjYWxsR2V0Q29udHJhY3RFdmVudCh7Y29udHJhY3QsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zfSkge1xuICBjb25zdCBldmVudEVuYWJsZWRDb250cmFjdCA9IGNvbnRyYWN0LmZhbGxiYWNrQ29udHJhY3QgfHwgY29udHJhY3RcbiAgY29uc3QgbmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZSB8fCBjb250cmFjdC5hZGRyZXNzXG4gIGxldCBldmVudHM7XG5cbiAgdHJ5IHtcbiAgICBldmVudHMgPSB5aWVsZCBldmVudEVuYWJsZWRDb250cmFjdC5nZXRQYXN0RXZlbnRzKGV2ZW50TmFtZSwge1xuICAgICAgLy8gZmlsdGVyOiB7X2Zyb206IGFkZHJ9LFxuICAgICAgZnJvbUJsb2NrOiAwLFxuICAgICAgdG9CbG9jazogJ2xhdGVzdCdcbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yIGdldHRpbmcgZXZlbnRzIG1hbnVhbGx5JywgZSk7XG4gIH1cblxuICBpZiAoIWV2ZW50cykgcmV0dXJuO1xuXG4gIGZvcihsZXQgaSA9IDA7IGk8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBldmVudCA9IGV2ZW50c1tpXTtcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdFVkVOVF9GSVJFRCcsIG5hbWUsIGV2ZW50fSlcbiAgfVxufVxuXG5cblxuLypcbiAqIFNlbmQgYW5kIENhY2hlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlVHhDaGFubmVsKHt0eE9iamVjdCwgc3RhY2tJZCwgc2VuZEFyZ3MgPSB7fSwgY29udHJhY3ROYW1lfSkge1xuICB2YXIgcGVyc2lzdFR4SGFzaFxuXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgdHhQcm9taUV2ZW50ID0gdHhPYmplY3Quc2VuZChzZW5kQXJncykub24oJ3RyYW5zYWN0aW9uSGFzaCcsIHR4SGFzaCA9PiB7XG4gICAgICBwZXJzaXN0VHhIYXNoID0gdHhIYXNoXG5cbiAgICAgIGVtaXQoe3R5cGU6ICdUWF9CUk9BRENBU1RFRCcsIHR4SGFzaCwgc3RhY2tJZH0pXG4gICAgICBlbWl0KHt0eXBlOiAnQ09OVFJBQ1RfU1lOQ19JTkQnLCBjb250cmFjdE5hbWV9KVxuICAgIH0pXG4gICAgLm9uKCdjb25maXJtYXRpb24nLCAoY29uZmlybWF0aW9uTnVtYmVyLCByZWNlaXB0KSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVFhfQ09ORklSTUFJVE9OJywgY29uZmlybWF0aW9uUmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICB9KVxuICAgIC5vbigncmVjZWlwdCcsIHJlY2VpcHQgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1RYX1NVQ0NFU1NGVUwnLCByZWNlaXB0OiByZWNlaXB0LCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcbiAgICAub24oJ2Vycm9yJywgZXJyb3IgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1RYX0VSUk9SJywgZXJyb3I6IGVycm9yLCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgdHhQcm9taUV2ZW50Lm9mZigpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXG4gIH0pXG59XG5cbmZ1bmN0aW9uKiBjYWxsU2VuZENvbnRyYWN0VHgoe2NvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIHN0YWNrSWR9KSB7XG4gIC8vIENoZWNrIGZvciB0eXBlIG9mIG9iamVjdCBhbmQgcHJvcGVydGllcyBpbmRpY2F0aXZlIG9mIGNhbGwvc2VuZCBvcHRpb25zLlxuICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaW5hbEFyZyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6IGFyZ3NbMF1cbiAgICB2YXIgc2VuZEFyZ3MgPSB7fVxuICAgIHZhciBmaW5hbEFyZ1Rlc3QgPSBmYWxzZVxuXG4gICAgaWYgKHR5cGVvZiBmaW5hbEFyZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmaW5hbEFyZ1Rlc3QgPSBjYWxsKGlzU2VuZE9yQ2FsbE9wdGlvbnMsIGZpbmFsQXJnKVxuICAgIH1cblxuICAgIGlmIChmaW5hbEFyZ1Rlc3QpIHtcbiAgICAgIHNlbmRBcmdzID0gZmluYWxBcmdcblxuICAgICAgYXJncy5sZW5ndGggPiAxID8gZGVsZXRlIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6IGRlbGV0ZSBhcmdzWzBdXG4gICAgICBhcmdzLmxlbmd0aCA9IGFyZ3MubGVuZ3RoIC0gMVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBuYW1lIHRvIG1hcmsgYXMgZGVzeW5jaHJvbml6ZWQgb24gdHggY3JlYXRpb25cbiAgY29uc3QgY29udHJhY3ROYW1lID0gY29udHJhY3QuY29udHJhY3ROYW1lXG5cbiAgLy8gQ3JlYXRlIHRoZSB0cmFuc2FjdGlvbiBvYmplY3QgYW5kIGV4ZWN1dGUgdGhlIHR4LlxuICBjb25zdCB0eE9iamVjdCA9IHlpZWxkIGNhbGwoY29udHJhY3QubWV0aG9kc1tmbk5hbWVdLCAuLi5hcmdzKVxuICBjb25zdCB0eENoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZVR4Q2hhbm5lbCwge3R4T2JqZWN0LCBzdGFja0lkLCBzZW5kQXJncywgY29udHJhY3ROYW1lfSlcblxuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKHR4Q2hhbm5lbClcbiAgICAgIHlpZWxkIHB1dChldmVudClcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgdHhDaGFubmVsLmNsb3NlKClcbiAgfVxufVxuXG4vKlxuICogQ2FsbCBhbmQgQ2FjaGVcbiAqL1xuXG5mdW5jdGlvbiogY2FsbENhbGxDb250cmFjdEZuKHtjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaCwgc3luYyA9IGZhbHNlfSkge1xuICAvLyBrZWVwaW5nIGZvciBwcmUtdjEuMS41IGNvbXBhdGliaWxpdHkgd2l0aCBDQUxMX0NPTlRSQUNUX0ZOIGV2ZW50LlxuICBpZiAoc3luYykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIHR5cGUgb2Ygb2JqZWN0IGFuZCBwcm9wZXJ0aWVzIGluZGljYXRpdmUgb2YgY2FsbC9zZW5kIG9wdGlvbnMuXG4gIGlmIChhcmdzLmxlbmd0aCkge1xuICAgIGNvbnN0IGZpbmFsQXJnID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogYXJnc1swXVxuICAgIHZhciBjYWxsQXJncyA9IHt9XG4gICAgdmFyIGZpbmFsQXJnVGVzdCA9IGZhbHNlXG5cbiAgICBpZiAodHlwZW9mIGZpbmFsQXJnID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZpbmFsQXJnVGVzdCA9IGNhbGwoaXNTZW5kT3JDYWxsT3B0aW9ucywgZmluYWxBcmcpXG4gICAgfVxuXG4gICAgaWYgKGZpbmFsQXJnVGVzdCkge1xuICAgICAgY2FsbEFyZ3MgPSBmaW5hbEFyZ1xuXG4gICAgICBhcmdzLmxlbmd0aCA+IDEgPyBkZWxldGUgYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogZGVsZXRlIGFyZ3NbMF1cbiAgICAgIGFyZ3MubGVuZ3RoID0gYXJncy5sZW5ndGggLSAxXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSB0cmFuc2FjdGlvbiBvYmplY3QgYW5kIGV4ZWN1dGUgdGhlIGNhbGwuXG4gIGNvbnN0IHR4T2JqZWN0ID0geWllbGQgY2FsbChjb250cmFjdC5tZXRob2RzW2ZuTmFtZV0sIC4uLmFyZ3MpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjYWxsUmVzdWx0ID0geWllbGQgY2FsbCh0eE9iamVjdC5jYWxsLCBjYWxsQXJncylcblxuICAgIHZhciBkaXNwYXRjaEFyZ3MgPSB7XG4gICAgICBuYW1lOiBjb250cmFjdC5jb250cmFjdE5hbWUsXG4gICAgICB2YXJpYWJsZTogY29udHJhY3QuYWJpW2ZuSW5kZXhdLm5hbWUsXG4gICAgICBhcmdzSGFzaDogYXJnc0hhc2gsXG4gICAgICBhcmdzOiBhcmdzLFxuICAgICAgdmFsdWU6IGNhbGxSZXN1bHQsXG4gICAgICBmbkluZGV4OiBmbkluZGV4XG4gICAgfVxuXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnR09UX0NPTlRSQUNUX1ZBUicsIC4uLmRpc3BhdGNoQXJnc30pXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgIHZhciBlcnJvckFyZ3MgPSB7XG4gICAgICBuYW1lOiBjb250cmFjdC5jb250cmFjdE5hbWUsXG4gICAgICB2YXJpYWJsZTogY29udHJhY3QuYWJpW2ZuSW5kZXhdLm5hbWUsXG4gICAgICBhcmdzSGFzaDogYXJnc0hhc2gsXG4gICAgICBhcmdzOiBhcmdzLFxuICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgZm5JbmRleDogZm5JbmRleFxuICAgIH1cblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0VSUk9SX0NPTlRSQUNUX1ZBUicsIC4uLmVycm9yQXJnc30pXG4gIH1cbn1cblxuLypcbiAqIFN5bmMgQ29udHJhY3RcbiAqL1xuXG5mdW5jdGlvbiogY2FsbFN5bmNDb250cmFjdChhY3Rpb24pIHtcbiAgLy8gR2V0IGNvbnRyYWN0IHN0YXRlIGZyb20gc3RvcmVcbiAgY29uc3QgY29udHJhY3QgPSBhY3Rpb24uY29udHJhY3RcbiAgY29uc3QgY29udHJhY3ROYW1lID0gY29udHJhY3QuY29udHJhY3ROYW1lXG5cbiAgY29uc3QgY29udHJhY3RzU3RhdGUgPSB5aWVsZCBzZWxlY3QoZ2V0Q29udHJhY3RzU3RhdGUpXG4gIHZhciBjb250cmFjdEZuc1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgY29udHJhY3RzU3RhdGVbY29udHJhY3ROYW1lXS5zdGF0ZSlcblxuICAvLyBSZW1vdmUgdW5uZWNlc3Nhcnkga2V5c1xuICBkZWxldGUgY29udHJhY3RGbnNTdGF0ZS5pbml0aWFsaXplZFxuICBkZWxldGUgY29udHJhY3RGbnNTdGF0ZS5zeW5jZWRcbiAgZGVsZXRlIGNvbnRyYWN0Rm5zU3RhdGUuZXZlbnRzXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIGZ1bmN0aW9ucyBhbmQgaGFzaGVzXG4gIGZvciAodmFyIGZuTmFtZSBpbiBjb250cmFjdEZuc1N0YXRlKVxuICB7XG4gICAgZm9yICh2YXIgYXJnc0hhc2ggaW4gY29udHJhY3RGbnNTdGF0ZVtmbk5hbWVdKVxuICAgIHtcbiAgICAgIGNvbnN0IGZuSW5kZXggPSBjb250cmFjdEZuc1N0YXRlW2ZuTmFtZV1bYXJnc0hhc2hdLmZuSW5kZXhcbiAgICAgIGNvbnN0IGFyZ3MgPSBjb250cmFjdEZuc1N0YXRlW2ZuTmFtZV1bYXJnc0hhc2hdLmFyZ3NcblxuICAgICAgLy8gUHVsbCBhcmdzIGFuZCBjYWxsIGZuIGZvciBlYWNoIGdpdmVuIGZ1bmN0aW9uXG4gICAgICAvLyBrZWVwaW5nIGZvciBwcmUtdjEuMS41IGNvbXBhdGliaWxpdHkgd2l0aCBDQUxMX0NPTlRSQUNUX0ZOIGV2ZW50LlxuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQ0FMTF9DT05UUkFDVF9GTicsIGNvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIGFyZ3NIYXNoLCBzeW5jOiB0cnVlfSlcbiAgICAgIHlpZWxkIGNhbGwoY2FsbENhbGxDb250cmFjdEZuLCB7Y29udHJhY3QsIGZuTmFtZSwgZm5JbmRleCwgYXJncywgYXJnc0hhc2h9KVxuICAgIH1cbiAgfVxuXG4gIC8vIFdoZW4gY29tcGxldGUsIGRpc3BhdGNoIENPTlRSQUNUX1NZTkNFRFxuICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9TWU5DRUQnLCBjb250cmFjdE5hbWV9KVxufVxuXG5jb25zdCBnZXRDb250cmFjdHNTdGF0ZSA9IChzdGF0ZSkgPT4gc3RhdGUuY29udHJhY3RzXG5jb25zdCBnZXROZXR3b3JrSWQgPSAoc3RhdGUpID0+IHN0YXRlLndlYjMubmV0d29ya0lkXG5jb25zdCBnZXRGYWxsYmFja05ldHdvcmtJZCA9IChzdGF0ZSkgPT4gc3RhdGUud2ViMy5mYWxsYmFja05ldHdvcmtJZFxuXG5mdW5jdGlvbiBpc1NlbmRPckNhbGxPcHRpb25zKG9wdGlvbnMpIHtcbiAgaWYgKCdmcm9tJyBpbiBvcHRpb25zKSByZXR1cm4gdHJ1ZVxuICBpZiAoJ2dhcycgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcbiAgaWYgKCdnYXNQcmljZScgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcbiAgaWYgKCd2YWx1ZScgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24qIGNvbnRyYWN0c1NhZ2EoKSB7XG4gIHlpZWxkIHRha2VFdmVyeSgnU0VORF9DT05UUkFDVF9UWCcsIGNhbGxTZW5kQ29udHJhY3RUeClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdDQUxMX0NPTlRSQUNUX0ZOJywgY2FsbENhbGxDb250cmFjdEZuKVxuICB5aWVsZCB0YWtlRXZlcnkoJ0NPTlRSQUNUX1NZTkNJTkcnLCBjYWxsU3luY0NvbnRyYWN0KVxuXG4gIC8vIHlpZWxkIHRha2VFdmVyeSgnTElTVEVOX0ZPUl9FVkVOVCcsIGNhbGxMaXN0ZW5Gb3JDb250cmFjdEV2ZW50KVxuXG4gIHlpZWxkIHRha2VFdmVyeSgnTElTVEVOX0ZPUl9FVkVOVCcsIGNhbGxHZXRDb250cmFjdEV2ZW50KVxuICB5aWVsZCB0YWtlRXZlcnkoJ0FERF9DT05UUkFDVCcsIGFkZENvbnRyYWN0KVxuICB5aWVsZCB0YWtlRXZlcnkoJ0dFVF9DT05UUkFDVF9FVkVOVCcsIGNhbGxHZXRDb250cmFjdEV2ZW50KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250cmFjdHNTYWdhO1xuIiwiY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHdlYjM6IHtcbiAgICAvLyBgYmxvY2tgIG5vIGxvbmdlciBuZWVkZWQ7XG4gICAgLy8ga2VlcGluZyBmb3IgcHJlLXYxLjEuMSBjb21wYXRpYmlsaXR5IHdpdGggZHJpenpsZS1yZWFjdC5cbiAgICBibG9jazogZmFsc2UsXG4gICAgLy8gZmFsbGJhY2s6IHtcbiAgICAvLyAgIHR5cGU6ICd3cycsXG4gICAgLy8gICB1cmw6ICd3czovLzEyNy4wLjAuMTo4NTQ1J1xuICAgIC8vIH1cbiAgfSxcbiAgY29udHJhY3RzOiBbXSxcbiAgZXZlbnRzOiB7fSxcbiAgcG9sbHM6IHtcbiAgICBibG9ja3M6IDMwMDBcbiAgfSxcbiAgc3luY0Fsd2F5czogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdE9wdGlvbnMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGluaXRpYWxpemVkOiBmYWxzZVxufVxuXG5jb25zdCBkcml6emxlU3RhdHVzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8qXG4gICAqIERyaXp6bGUgU3RhdHVzXG4gICAqL1xuXG4gICBpZiAoYWN0aW9uLnR5cGUgPT09ICdEUklaWkxFX1dBUk5JTkcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgd2FybmluZzogYWN0aW9uLndhcm5pbmcsXG4gICAgICB9XG4gICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnRFJJWlpMRV9GQUlMRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvci5tZXNzYWdlLFxuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0RSSVpaTEVfSU5JVElBTElaRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaW5pdGlhbGl6ZWQ6IHRydWUsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyaXp6bGVTdGF0dXNSZWR1Y2VyXG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tICcuLi9kZWZhdWx0T3B0aW9ucydcbmltcG9ydCBtZXJnZSBmcm9tICcuLi9tZXJnZU9wdGlvbnMnXG5cbi8vIEluaXRpYWxpemF0aW9uIEZ1bmN0aW9uc1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYjMsIGdldE5ldHdvcmtJZCB9IGZyb20gJy4uL3dlYjMvd2ViM1NhZ2EnXG5pbXBvcnQgeyBnZXRBY2NvdW50cyB9IGZyb20gJy4uL2FjY291bnRzL2FjY291bnRzU2FnYSdcbmltcG9ydCB7IGdldEFjY291bnRCYWxhbmNlcyB9IGZyb20gJy4uL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhJ1xuXG5mdW5jdGlvbiogaW5pdGlhbGl6ZURyaXp6bGUoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBhY3Rpb24ub3B0aW9ucylcbiAgICBjb25zdCB3ZWIzT3B0aW9ucyA9IG9wdGlvbnMud2ViM1xuICAgIGNvbnN0IGRyaXp6bGUgPSBhY3Rpb24uZHJpenpsZVxuXG4gICAgLy8gSW5pdGlhbGl6ZSB3ZWIzIGFuZCBnZXQgdGhlIGN1cnJlbnQgbmV0d29yayBJRC5cbiAgICB2YXIge3dlYjMsIGZhbGxiYWNrfSA9IHlpZWxkIGNhbGwoaW5pdGlhbGl6ZVdlYjMsIHtvcHRpb25zOiB3ZWIzT3B0aW9uc30pXG4gICAgaWYgKCF3ZWIzKSB7XG4gICAgICB3ZWIzID0gZmFsbGJhY2s7XG4gICAgICBmYWxsYmFjayA9IG51bGw7XG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdEUklaWkxFX1dBUk5JTkcnLCB3YXJuaW5nOiAnbWV0YW1hc2snfSlcbiAgICB9XG4gICAgZHJpenpsZS53ZWIzID0gd2ViM1xuICAgIGRyaXp6bGUuZmFsbGJhY2sgPSBmYWxsYmFja1xuXG4gICAgeWllbGQgY2FsbChnZXROZXR3b3JrSWQsIHt3ZWIzLCBvcHRpb25zOiB3ZWIzT3B0aW9uc30pXG5cbiAgICBsZXQgc3RvcmUgPSBkcml6emxlLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgbGV0IG5ldHdvcmtJZCA9IHN0b3JlLndlYjMubmV0d29ya0lkO1xuXG4gICAgaWYgKG9wdGlvbnMubmV0d29ya0lkICE9PSBuZXR3b3JrSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmV0d29yaycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCBpbml0aWFsIGFjY291bnRzIGxpc3QgYW5kIGJhbGFuY2VzLlxuICAgIGlmICghd2ViMy5jdXJyZW50UHJvdmlkZXIuaXNQb3J0aXMpIHtcbiAgICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudHMsIHt3ZWIzOiB3ZWIzIHx8IGZhbGxiYWNrfSlcbiAgICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudEJhbGFuY2VzLCB7d2ViMzogd2ViMyB8fCBmYWxsYmFja30pXG4gICAgfVxuXG4gICAgLy8gSW5zdGFudGlhdGUgY29udHJhY3RzIHBhc3NlZCB0aHJvdWdoIHZpYSBvcHRpb25zLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5jb250cmFjdHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGNvbnRyYWN0Q29uZmlnID0gb3B0aW9ucy5jb250cmFjdHNbaV1cbiAgICAgIHZhciBldmVudHMgPSBbXVxuICAgICAgdmFyIGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZVxuXG4gICAgICBpZiAoY29udHJhY3ROYW1lIGluIG9wdGlvbnMuZXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzW2NvbnRyYWN0TmFtZV1cbiAgICAgIH1cblxuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQUREX0NPTlRSQUNUJywgZHJpenpsZSwgY29udHJhY3RDb25maWcsIGV2ZW50cywgd2ViMywgZmFsbGJhY2t9KVxuICAgIH1cblxuICAgIGNvbnN0IHN5bmNBbHdheXMgPSBvcHRpb25zLnN5bmNBbHdheXNcblxuICAgIC8vIEFjY291bnRzIFBvbGxpbmdcbiAgICBpZiAod2ViMyAmJiB3ZWIzLmN1cnJlbnRQcm92aWRlci5pc01ldGFNYXNrKSB7XG4gICAgICBpZiAoJ2FjY291bnRzJyBpbiBvcHRpb25zLnBvbGxzKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRTX1BPTExJTkcnLCBpbnRlcnZhbDogb3B0aW9ucy5wb2xscy5hY2NvdW50cywgd2ViM30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHdlYjMgJiYgZmFsbGJhY2spIHtcbiAgICAgIHdlYjMgPSAhd2ViMy5jdXJyZW50UHJvdmlkZXIuaXNNZXRhTWFzayA/IHdlYjMgOiBmYWxsYmFjaztcbiAgICB9IGVsc2Ugd2ViMyA9IGZhbGxiYWNrIHx8IHdlYjM7XG5cbiAgICBpZiAod2ViMy5jdXJyZW50UHJvdmlkZXIuaXNNZXRhTWFzayB8fCB3ZWIzLmN1cnJlbnRQcm92aWRlci5pc0h0dHApIHtcbiAgICAgIC8vIFVzaW5nIE1ldGFNYXNrLCBhdHRlbXB0IGJsb2NrIHBvbGxpbmcuXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IG9wdGlvbnMucG9sbHMuYmxvY2tzXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS1NfUE9MTElORycsIGRyaXp6bGUsIGludGVydmFsLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBOb3QgdXNpbmcgTWV0YU1hc2ssIGF0dGVtcHQgc3Vic2NyaXB0aW9uIGJsb2NrIGxpc3RlbmluZy5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0JMT0NLU19MSVNURU5JTkcnLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgICB9XG5cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcblxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBEcml6emxlOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICBpZiAoZXJyb3IubWVzc2FnZS5tYXRjaCgnd2ViMycpKSBlcnJvci5tZXNzYWdlID0gJ3dlYjMnO1xuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0RSSVpaTEVfRkFJTEVEJywgZXJyb3J9KVxuXG4gICAgcmV0dXJuXG4gIH1cblxuICB5aWVsZCBwdXQoe3R5cGU6ICdEUklaWkxFX0lOSVRJQUxJWkVEJ30pXG5cbiAgcmV0dXJuXG59XG5cbmZ1bmN0aW9uKiBkcml6emxlU3RhdHVzU2FnYSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdCgnRFJJWlpMRV9JTklUSUFMSVpJTkcnLCBpbml0aWFsaXplRHJpenpsZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJpenpsZVN0YXR1c1NhZ2E7XG4iLCJpbXBvcnQgZ2V0QWJpIGZyb20gJy4vZ2V0QWJpJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSAoY29udHJhY3RDb25maWcpIHtcbiAgdmFyIHN0YXRlID0ge1xuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBzeW5jZWQ6IGZhbHNlLFxuICAgIHN0YXRlOiB7fVxuICB9XG5cbiAgLy8gQ29uc3RhbnQgZ2V0dGVyc1xuICB2YXIgYWJpID0gZ2V0QWJpKGNvbnRyYWN0Q29uZmlnKVxuICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgYWJpLmxlbmd0aDsgaTIrKykge1xuICAgIHZhciBpdGVtID0gYWJpW2kyXTtcblxuICAgIGlmIChpdGVtLnR5cGUgPT0gXCJmdW5jdGlvblwiICYmIGl0ZW0uY29uc3RhbnQgPT09IHRydWUpIHtcbiAgICAgIHN0YXRlLnN0YXRlW2l0ZW0ubmFtZV0gPSB7fVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSB9IGZyb20gJy4vZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlKG9wdGlvbnMpIHtcbiAgLy8gUHJlbG9hZGVkIHN0YXRlXG4gIHZhciBjb250cmFjdHNJbml0aWFsU3RhdGUgPSB7fVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5jb250cmFjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBJbml0aWFsIGNvbnRyYWN0IGRldGFpbHNcbiAgICB2YXIgY29udHJhY3ROYW1lID0gb3B0aW9ucy5jb250cmFjdHNbaV0uY29udHJhY3ROYW1lXG4gICAgY29udHJhY3RzSW5pdGlhbFN0YXRlW2NvbnRyYWN0TmFtZV0gPSBnZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlKG9wdGlvbnMuY29udHJhY3RzW2ldKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRyYWN0c0luaXRpYWxTdGF0ZVxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vcm9vdFNhZ2EnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSB9IGZyb20gJy4vZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUnXG5pbXBvcnQgZ2V0QWJpIGZyb20gJy4vZ2V0QWJpJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTdG9yZShvcHRpb25zKSB7XG4gIC8vIFJlZHV4IERldlRvb2xzXG4gIGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbiAgLy8gUHJlbG9hZGVkIHN0YXRlXG4gIHZhciBwcmVsb2FkZWRTdGF0ZSA9IHtcbiAgICBjb250cmFjdHM6IGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlKG9wdGlvbnMpXG4gIH1cblxuICAvLyBjcmVhdGUgdGhlIHNhZ2EgbWlkZGxld2FyZVxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcblxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXIsXG4gICAgcHJlbG9hZGVkU3RhdGUsXG4gICAgY29tcG9zZUVuaGFuY2VycyhcbiAgICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgICAgc2FnYU1pZGRsZXdhcmVcbiAgICAgIClcbiAgICApXG4gIClcblxuICBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXG5cbiAgcmV0dXJuIHN0b3JlXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBYmkoY29udHJhY3RFbnRyeSkge1xuICBpZiAoY29udHJhY3RFbnRyeS53ZWIzQ29udHJhY3QpIHtcbiAgICByZXR1cm4gY29udHJhY3RFbnRyeS53ZWIzQ29udHJhY3Qub3B0aW9ucy5qc29uSW50ZXJmYWNlXG4gICAgcmV0dXJuIGNvbnRyYWN0RW50cnkud2ViM0NvbnRyYWN0LmFiaVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb250cmFjdEVudHJ5LmFiaVxuICB9XG59XG4iLCJpbXBvcnQgRHJpenpsZSBmcm9tICcuL0RyaXp6bGUuanMnXG5pbXBvcnQgeyBnZW5lcmF0ZVN0b3JlIH0gZnJvbSAnLi9nZW5lcmF0ZVN0b3JlJ1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUgfSBmcm9tICcuL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlJ1xuXG4vLyBSZWR1Y2Vyc1xuaW1wb3J0IGFjY291bnRzUmVkdWNlciBmcm9tICcuL2FjY291bnRzL2FjY291bnRzUmVkdWNlcidcbmltcG9ydCBhY2NvdW50QmFsYW5jZXNSZWR1Y2VyIGZyb20gJy4vYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1JlZHVjZXInXG5pbXBvcnQgY29udHJhY3RzUmVkdWNlciBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyJ1xuaW1wb3J0IGRyaXp6bGVTdGF0dXNSZWR1Y2VyIGZyb20gJy4vZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzUmVkdWNlcidcbmltcG9ydCB0cmFuc2FjdGlvbnNSZWR1Y2VyIGZyb20gJy4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uc1JlZHVjZXInXG5pbXBvcnQgdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIgZnJvbSAnLi90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25TdGFja1JlZHVjZXInXG5pbXBvcnQgd2ViM1JlZHVjZXIgZnJvbSAnLi93ZWIzL3dlYjNSZWR1Y2VyJ1xuXG5jb25zdCBkcml6emxlUmVkdWNlcnMgPSB7XG4gIGFjY291bnRzOiBhY2NvdW50c1JlZHVjZXIsXG4gIGFjY291bnRCYWxhbmNlczogYWNjb3VudEJhbGFuY2VzUmVkdWNlcixcbiAgY29udHJhY3RzOiBjb250cmFjdHNSZWR1Y2VyLFxuICBkcml6emxlU3RhdHVzOiBkcml6emxlU3RhdHVzUmVkdWNlcixcbiAgdHJhbnNhY3Rpb25zOiB0cmFuc2FjdGlvbnNSZWR1Y2VyLFxuICB0cmFuc2FjdGlvblN0YWNrOiB0cmFuc2FjdGlvblN0YWNrUmVkdWNlcixcbiAgd2ViMzogd2ViM1JlZHVjZXJcbn1cblxuLy8gU2FnYXNcbmltcG9ydCBhY2NvdW50c1NhZ2EgZnJvbSAnLi9hY2NvdW50cy9hY2NvdW50c1NhZ2EnXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzU2FnYSBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhJ1xuaW1wb3J0IGJsb2Nrc1NhZ2EgZnJvbSAnLi9ibG9ja3MvYmxvY2tzU2FnYSdcbmltcG9ydCBjb250cmFjdHNTYWdhIGZyb20gJy4vY29udHJhY3RzL2NvbnRyYWN0c1NhZ2EnXG5pbXBvcnQgZHJpenpsZVN0YXR1c1NhZ2EgZnJvbSAnLi9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNTYWdhJ1xuaW1wb3J0IHdlYjNTYWdhIGZyb20gJy4vd2ViMy93ZWIzU2FnYSdcblxuY29uc3QgZHJpenpsZVNhZ2FzID0gW1xuICBhY2NvdW50c1NhZ2EsXG4gIGFjY291bnRCYWxhbmNlc1NhZ2EsXG4gIGJsb2Nrc1NhZ2EsXG4gIGNvbnRyYWN0c1NhZ2EsXG4gIGRyaXp6bGVTdGF0dXNTYWdhLFxuICB3ZWIzU2FnYVxuXVxuXG5leHBvcnQge1xuICBEcml6emxlLFxuICBnZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSxcbiAgZ2VuZXJhdGVTdG9yZSxcbiAgZHJpenpsZVJlZHVjZXJzLFxuICBkcml6emxlU2FnYXNcbn1cbiIsImltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXG5jb25zdCBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnaXMtcGxhaW4tb2JqZWN0JylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRlZmF1bHRPcHRpb25zLCBuZXdPcHRpb25zKSB7XG4gIHJldHVybiBtZXJnZShkZWZhdWx0T3B0aW9ucywgbmV3T3B0aW9ucywge1xuICAgIGlzTWVyZ2VhYmxlT2JqZWN0OiBpc1BsYWluT2JqZWN0XG4gIH0pXG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IGFjY291bnRzUmVkdWNlciBmcm9tICcuL2FjY291bnRzL2FjY291bnRzUmVkdWNlcidcbmltcG9ydCBhY2NvdW50QmFsYW5jZXNSZWR1Y2VyIGZyb20gJy4vYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1JlZHVjZXInXG5pbXBvcnQgY29udHJhY3RzUmVkdWNlciBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyJ1xuaW1wb3J0IGRyaXp6bGVTdGF0dXNSZWR1Y2VyIGZyb20gJy4vZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzUmVkdWNlcidcbmltcG9ydCB0cmFuc2FjdGlvbnNSZWR1Y2VyIGZyb20gJy4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uc1JlZHVjZXInXG5pbXBvcnQgdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIgZnJvbSAnLi90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25TdGFja1JlZHVjZXInXG5pbXBvcnQgd2ViM1JlZHVjZXIgZnJvbSAnLi93ZWIzL3dlYjNSZWR1Y2VyJ1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYWNjb3VudHM6IGFjY291bnRzUmVkdWNlcixcbiAgYWNjb3VudEJhbGFuY2VzOiBhY2NvdW50QmFsYW5jZXNSZWR1Y2VyLFxuICBjb250cmFjdHM6IGNvbnRyYWN0c1JlZHVjZXIsXG4gIGRyaXp6bGVTdGF0dXM6IGRyaXp6bGVTdGF0dXNSZWR1Y2VyLFxuICB0cmFuc2FjdGlvbnM6IHRyYW5zYWN0aW9uc1JlZHVjZXIsXG4gIHRyYW5zYWN0aW9uU3RhY2s6IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyLFxuICB3ZWIzOiB3ZWIzUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG5pbXBvcnQgYWNjb3VudHNTYWdhIGZyb20gJy4vYWNjb3VudHMvYWNjb3VudHNTYWdhJ1xuaW1wb3J0IGFjY291bnRCYWxhbmNlc1NhZ2EgZnJvbSAnLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcbmltcG9ydCBibG9ja3NTYWdhIGZyb20gJy4vYmxvY2tzL2Jsb2Nrc1NhZ2EnXG5pbXBvcnQgY29udHJhY3RzU2FnYSBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNTYWdhJ1xuaW1wb3J0IGRyaXp6bGVTdGF0dXNTYWdhIGZyb20gJy4vZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzU2FnYSdcbmltcG9ydCB3ZWIzU2FnYSBmcm9tICcuL3dlYjMvd2ViM1NhZ2EnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290KCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsoYWNjb3VudHNTYWdhKSxcbiAgICBmb3JrKGFjY291bnRCYWxhbmNlc1NhZ2EpLFxuICAgIGZvcmsoYmxvY2tzU2FnYSksXG4gICAgZm9yayhjb250cmFjdHNTYWdhKSxcbiAgICBmb3JrKGRyaXp6bGVTdGF0dXNTYWdhKSxcbiAgICBmb3JrKHdlYjNTYWdhKVxuICBdKVxufVxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0gW11cbiAgXG5jb25zdCB0cmFuc2FjdGlvblN0YWNrUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUFVTSF9UT19UWFNUQUNLJylcbiAgICB7XG4gICAgICAgIHN0YXRlLnB1c2goJycpXG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdQT1BfRlJPTV9UWFNUQUNLJylcbiAgICB7XG4gICAgICAgIHN0YXRlLnBvcCgpXG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdUWF9CUk9BRENBU1RFRCcpXG4gICAge1xuICAgICAgICBzdGF0ZVthY3Rpb24uc3RhY2tJZF0gPSBhY3Rpb24udHhIYXNoXG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNhY3Rpb25TdGFja1JlZHVjZXJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG4gIFxuY29uc3QgdHJhbnNhY3Rpb25zUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfQlJPQURDQVNURUQnKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX0NPTkZJUk1BSVRPTicpXG4gICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBbYWN0aW9uLnR4SGFzaF06IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi50eEhhc2hdLmNvbmZpcm1hdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jb25maXJtYXRpb25SZWNlaXB0XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfU1VDQ0VTU0ZVTCcpXG4gICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBbYWN0aW9uLnR4SGFzaF06IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICByZWNlaXB0OiBhY3Rpb24ucmVjZWlwdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdUWF9FUlJPUicpXG4gICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBbYWN0aW9uLnR4SGFzaF06IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zYWN0aW9uc1JlZHVjZXJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc3RhdHVzOiAnJ1xufVxuXG5jb25zdCB3ZWIzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1dFQjNfSU5JVElBTElaSU5HJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2luaXRpYWxpemluZydcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdXRUIzX0lOSVRJQUxJWkVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2luaXRpYWxpemVkJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1dFQjNfRkFJTEVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2ZhaWxlZCdcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdORVRXT1JLX0lEX0ZFVENIRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbmV0d29ya0lkOiBhY3Rpb24ubmV0d29ya0lkLFxuICAgICAgZmFsbGJhY2tOZXR3b3JrSWQ6IGFjdGlvbi5mYWxsYmFja05ldHdvcmtJZCxcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdORVRXT1JLX0lEX0ZBSUxFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBuZXR3b3JrSWQ6IGFjdGlvbi5uZXR3b3JrSWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViM1JlZHVjZXJcbiIsImltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbnZhciBXZWIzID0gcmVxdWlyZSgnd2ViMycpXG5cbi8qXG4gKiBJbml0aWFsaXphdGlvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogaW5pdGlhbGl6ZVdlYjMoe29wdGlvbnN9KSB7XG5cbiAgdHJ5IHtcbiAgICB2YXIgd2ViMztcbiAgICB2YXIgZmFsbGJhY2s7XG5cbiAgICAvLyBDaGVja2luZyBpZiBXZWIzIGhhcyBiZWVuIGluamVjdGVkIGJ5IHRoZSBicm93c2VyIChNaXN0L01ldGFNYXNrKVxuICAgIGlmICh0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxuICAgICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcilcbiAgICAgIHdlYjMuZXRoLmNhY2hlU2VuZFRyYW5zYWN0aW9uID0gKHR4T2JqZWN0KSA9PiBwdXQoe3R5cGU6ICdTRU5EX1dFQjNfVFgnLCB0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pXG5cbiAgICAgIGNvbnNvbGUubG9nKCdJbmplY3RlZCB3ZWIzIGRldGVjdGVkLicpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZmFsbGJhY2sgJiYgb3B0aW9ucy5mYWxsYmFjay51cmwpIHtcbiAgICAgIC8vIEF0dGVtcHQgZmFsbGJhY2sgaWYgbm8gd2ViMyBpbmplY3Rpb24uXG5cbiAgICAgIHN3aXRjaCAob3B0aW9ucy5mYWxsYmFjay50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3dzJzpcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGluZyB3cyBwcm92aWRlci4nKVxuICAgICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5XZWJzb2NrZXRQcm92aWRlcihvcHRpb25zLmZhbGxiYWNrLnVybClcblxuICAgICAgICAgIGZhbGxiYWNrID0gbmV3IFdlYjMocHJvdmlkZXIpXG5cbiAgICAgICAgICBwcm92aWRlci5vbignZXJyb3InLCBlID0+IGNvbnNvbGUubG9nKCdXUyBFcnJvcicsIGUpKTtcbiAgICAgICAgICBwcm92aWRlci5vbignZW5kJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1MgY2xvc2VkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byByZWNvbm5lY3QuLi4nKTtcbiAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLldlYnNvY2tldFByb3ZpZGVyKG9wdGlvbnMuZmFsbGJhY2sudXJsKTtcblxuICAgICAgICAgICAgcHJvdmlkZXIub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyB0cmlnZ2VyIHJlY29ubmVjdFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXU1MgUmVjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmYWxsYmFjay5zZXRQcm92aWRlcihwcm92aWRlcik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB5aWVsZCBjb25uZWN0V2ViU29ja2V0KHByb3ZpZGVyKTtcblxuICAgICAgICAgIC8vIEF0dGFjaCBkcml6emxlIGZ1bmN0aW9uc1xuICAgICAgICAgIGZhbGxiYWNrLmV0aFsnY2FjaGVTZW5kVHJhbnNhY3Rpb24nXSA9ICh0eE9iamVjdCkgPT4gcHV0KHt0eXBlOiAnU0VORF9XRUIzX1RYJywgdHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KVxuXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnaHR0cHMnOlxuICAgICAgICBjYXNlICdodHRwJzpcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGluZyBmYWxsYmFjayBodHRwIHByb3ZpZGVyLicpXG4gICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcbiAgICAgICAgICAgIG9wdGlvbnMuZmFsbGJhY2sudXJsLFxuICAgICAgICAgICAgLy8geyBoZWFkZXJzOiBbXG4gICAgICAgICAgICAvLyAgIHtuYW1lOiAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgdmFsdWU6ICcqJ30sXG4gICAgICAgICAgICAvLyAgIHsgbmFtZTogJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCB2YWx1ZTogJyonfSxcbiAgICAgICAgICAgIC8vICAge25hbWU6ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgdmFsdWU6ICcqJ31cbiAgICAgICAgICAgIC8vIF19XG4gICAgICAgICAgKVxuICAgICAgICAgIHByb3ZpZGVyLmlzSHR0cCA9IHRydWU7XG4gICAgICAgICAgZmFsbGJhY2sgPSBuZXcgV2ViMyhwcm92aWRlcilcbiAgICAgICAgICAvLyB3ZWIzLmV0aC5jYWNoZVNlbmRUcmFuc2FjdGlvbiA9ICh0eE9iamVjdCkgPT4gcHV0KHt0eXBlOiAnU0VORF9XRUIzX1RYJywgdHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIEludmFsaWQgb3B0aW9uczsgdGhyb3cuXG4gICAgICAgICAgLy8gdGhyb3cgXCJJbnZhbGlkIHdlYjMgZmFsbGJhY2sgcHJvdmlkZWQuXCJcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF3ZWIzICYmICFmYWxsYmFjaykge1xuICAgICAgdGhyb3cgJ21pc3Npbmcgd2ViMyBwcml2aWRlcidcbiAgICB9XG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdXRUIzX0lOSVRJQUxJWkVEJ30pXG5cbiAgICByZXR1cm4geyB3ZWIzLCBmYWxsYmFjayB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHt0eXBlOiAnV0VCM19GQUlMRUQnLCBlcnJvcn0pXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW50aWFsaXppbmcgd2ViMzonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3RXZWJTb2NrZXQocHJvdmlkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcHJvdmlkZXIub24oJ2Nvbm5lY3QnLCBlID0+IHJlc29sdmUoKSk7XG4gICAgICBwcm92aWRlci5vbignZXJyb3InLCBlID0+IHJlamVjdCgpKTtcbiAgICB9KTtcbn1cblxuLypcbiAqIE5ldHdvcmsgSURcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldE5ldHdvcmtJZCh7d2ViMywgb3B0aW9uc30pIHtcbiAgdHJ5IHtcbiAgICB2YXIgbmV0d29ya0lkO1xuICAgIHZhciBmYWxsYmFja05ldHdvcmtJZDtcbiAgICBpZiAod2ViMylcbiAgICAgIG5ldHdvcmtJZCA9IHlpZWxkIGNhbGwod2ViMy5ldGgubmV0LmdldElkKVxuXG4gICAgaWYgKG9wdGlvbnMuZmFsbGJhY2sgJiYgb3B0aW9ucy5mYWxsYmFjay5uZXR3b3JrSWQpXG4gICAgICBmYWxsYmFja05ldHdvcmtJZCA9IG9wdGlvbnMuZmFsbGJhY2submV0d29ya0lkXG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdORVRXT1JLX0lEX0ZFVENIRUQnLCBuZXR3b3JrSWQsIGZhbGxiYWNrTmV0d29ya0lkfSlcblxuICAgIHJldHVybiBuZXR3b3JrSWRcbiAgfVxuICBjYXRjaChlcnJvcil7XG4gICAgeWllbGQgcHV0KHt0eXBlOiAnTkVUV09SS19JRF9GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBuZXR3b3JrIElEOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgIHJldHVyblxuICB9XG59XG5cbi8qXG4gKiBTZW5kIFRyYW5zYWN0aW9uXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlVHhDaGFubmVsKHt0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pIHtcbiAgdmFyIHBlcnNpc3RUeEhhc2hcblxuICByZXR1cm4gZXZlbnRDaGFubmVsKGVtaXQgPT4ge1xuICAgIGNvbnN0IHR4UHJvbWlFdmVudCA9IHdlYjMuZXRoLnNlbmRUcmFuc2FjdGlvbih0eE9iamVjdCkub24oJ3RyYW5zYWN0aW9uSGFzaCcsIHR4SGFzaCA9PiB7XG4gICAgICBwZXJzaXN0VHhIYXNoID0gdHhIYXNoXG5cbiAgICAgIGVtaXQoe3R5cGU6ICdXM1RYX0JST0FEQ0FTVEVEJywgdHhIYXNoLCBzdGFja0lkfSlcbiAgICB9KVxuICAgIC5vbignY29uZmlybWF0aW9uJywgKGNvbmZpcm1hdGlvbk51bWJlciwgcmVjZWlwdCkgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfQ09ORklSTUFJVE9OJywgY29uZmlybWF0aW9uUmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICB9KVxuICAgIC5vbigncmVjZWlwdCcsIHJlY2VpcHQgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfU1VDQ0VTU0ZVTCcsIHJlY2VpcHQ6IHJlY2VpcHQsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuICAgIC5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVzNUWF9FUlJPUicsIGVycm9yOiBlcnJvciwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIHR4UHJvbWlFdmVudC5vZmYoKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbFNlbmRUeCh7dHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KSB7XG4gIGNvbnN0IHR4Q2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlVHhDaGFubmVsLCB7dHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KVxuXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UodHhDaGFubmVsKVxuICAgICAgeWllbGQgcHV0KGV2ZW50KVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICB0eENoYW5uZWwuY2xvc2UoKVxuICB9XG59XG5cbmZ1bmN0aW9uKiB3ZWIzU2FnYSgpIHtcbiAgLy8geWllbGQgdGFrZUxhdGVzdCgnTkVUV09SS19JRF9GQUlMRUQnLCBnZXROZXR3b3JrSWQpXG4gIHlpZWxkIHRha2VFdmVyeSgnU0VORF9XRUIzX1RYJywgY2FsbFNlbmRUeClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViM1NhZ2FcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kZWVwbWVyZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXRoX2Jsb2NrX3RyYWNrZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfaXNfcGxhaW5fb2JqZWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlZHV4X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlZHV4X3NhZ2FfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd2ViM19fOyJdLCJzb3VyY2VSb290IjoiIn0=