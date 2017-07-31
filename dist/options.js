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
/******/ 	return __webpack_require__(__webpack_require__.s = 174);
/******/ })
/************************************************************************/
/******/ ({

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_purecss_build_pure_nr_css__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_purecss_build_pure_nr_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_purecss_build_pure_nr_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(38);


var form = document.getElementById('options-form');
var status = document.getElementById('form-status');
function onSubmit(event) {
    event.preventDefault();
    var elements = this.elements;
    var data = {};
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        if (el.type !== 'submit' && el.tagName !== 'FIELDSET') {
            if (el.type === 'checkbox') {
                data[el.name] = el.checked;
            }
            else {
                data[el.name] = el.value;
            }
        }
    }
    console.log(JSON.stringify(data));
    chrome.storage.sync.set(data, function () {
        status.textContent = 'Options saved.';
        setTimeout(function () { return (status.textContent = ''); }, 750);
    });
}
function restoreSettings() {
    chrome.storage.sync.get(__WEBPACK_IMPORTED_MODULE_1__common__["a" /* defaults */], function (items) {
        var elements = form.elements;
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (el.type !== 'submit' && el.tagName !== 'FIELDSET') {
                var value = items[el.name];
                console.log(value);
                if (el.type === 'checkbox') {
                    el.checked = value;
                }
                else {
                    el.value = value;
                }
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', restoreSettings);
form.addEventListener('submit', onSubmit);


/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaults; });
var defaults = {
    'print-width': '80',
    'tab-width': '2',
    tabs: false,
    semicolons: true,
    quotes: 'double',
    'trailing-comma': 'none',
    'bracket-spacing': true,
    'jsx-brackets': false
};


/***/ })

/******/ });