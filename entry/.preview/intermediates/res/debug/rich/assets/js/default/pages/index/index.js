/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.hml?entry":
/*!***************************************************************************************************************!*\
  !*** /Users/manju/DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../../../../../../../smartbikedesignlibrary/js/index.hml?name=yash */ "./lib/loader.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.hml?name=yash")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.css":
/*!**************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/manju/DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "40px",
    "color": "#000000",
    "opacity": 0.9
  },
  "@MEDIA": [
    {
      "condition": "screen and (device-type: tablet) and (orientation: landscape)",
      ".title": {
        "fontSize": "100px"
      }
    },
    {
      "condition": "screen and (device-type: wearable)",
      ".title": {
        "fontSize": "28px",
        "color": "#FFFFFF"
      }
    },
    {
      "condition": "screen and (device-type: tv)",
      ".container": {
        "backgroundImage": "../../common/images/Wallpaper.png",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center"
      },
      ".title": {
        "fontSize": "100px",
        "color": "#FFFFFF"
      }
    },
    {
      "condition": "screen and (device-type: phone) and (orientation: landscape)",
      ".title": {
        "fontSize": "60px"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/manju/DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.hml":
/*!*****************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/manju/DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.hml ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:2"
  },
  "type": "yash"
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.hml":
/*!*****************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/manju/DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.hml ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/manju/DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index:1"
  },
  "type": "div",
  "children": [
    {
      "attr": {
        "debugLine": "Users/manju/DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index:2",
        "value": "Hello world"
      },
      "type": "text"
    },
    {
      "attr": {
        "debugLine": "Users/manju/DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index:4",
        "value": "Hello ajith , yash"
      },
      "type": "text"
    }
  ]
}

/***/ }),

/***/ "./lib/loader.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.hml?name=yash":
/*!***********************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/manju/DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.hml?name=yash ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.js")

$app_define$('@app-component/yash', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/manju/DevEcoStudioProjects/SmartBikeDesign/entry/src/main/js/default/pages/index/index.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    title: ""
  },
  onInit: function onInit() {
    this.title = this.$t('strings.world');
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/manju/Huawei/SDK 5/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/manju/DevEcoStudioProjects/SmartBikeDesign/smartbikedesignlibrary/js/index.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ })

/******/ });