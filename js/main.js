/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/burgerMenu.js":
/*!*****************************************!*\
  !*** ./src/js/components/burgerMenu.js ***!
  \*****************************************/
/*! exports provided: sideBarInput, body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideBarInput", function() { return sideBarInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domHelper */ "./src/js/domHelper.js");
/* harmony import */ var _modules_locomotive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/locomotive */ "./src/js/modules/locomotive.js");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share */ "./src/js/components/share.js");



var sideBarInput = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchById('checked');
var body = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('html');
sideBarInput.addEventListener('click', function () {
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].toggleScroll(body);
  if (_modules_locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"]) {
    _modules_locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"].stop();
  }
});
window.addEventListener('resize', function () {
  if (window.innerWidth > 1024 && !_share__WEBPACK_IMPORTED_MODULE_2__["isStatusModal"]) {
    sideBarInput.checked = false;
    _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass(body, 'no-scroll');
    if (_modules_locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"]) {
      _modules_locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"].start();
    }
  }
});


/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");

function openMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(true, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.addClass('is-menu-opened');
    $('.header__menu').removeClass('is-hidden');
    setImmediate(function () {
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
    });
    setTimeout(function () {
      $('.header__menu').addClass('is-active');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 100);
  });
}
function closeMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(false, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.removeClass('is-menu-opened');
    $('.header__menu').removeClass('is-active');
    setTimeout(function () {
      $('.header__menu').addClass('is-hidden');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 500);
  });
}
function toggleMenu(event) {
  event.preventDefault();
  event.stopPropagation();
  if ($(event.currentTarget).hasClass('is-active')) {
    $(event.currentTarget).removeClass('is-active');
    closeMenu();
  } else {
    $(event.currentTarget).addClass('is-active');
    openMenu();
  }
}
function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header = $('.header');
  $('.js-burger').on('click.header', toggleMenu);
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.on('click.header', function (e) {
    var $container = $('.header__menu');
    if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  }).on('keyup.header', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  });
}
function destroy() {
  $('.js-burger').off('.header');
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.off('.header');
}
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy,
  openMenu: openMenu,
  closeMenu: closeMenu
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/components/home.js":
/*!***********************************!*\
  !*** ./src/js/components/home.js ***!
  \***********************************/
/*! exports provided: initHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHome", function() { return initHome; });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domHelper */ "./src/js/domHelper.js");
/* harmony import */ var _modules_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/observer */ "./src/js/modules/observer.js");


var classHiddenUp = 'hidden-up';
var classHiddenRight = 'hidden-right';
var classHiddenLeft = 'hidden-left';
var classHiddenImageLeft = 'hidder-image__left';
var classHiddenImageRight = 'hidder-image__right';
var blockUps = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchAll('.block-text--visible');
var blockRights = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchAll('.title--visible');
var blockLefts = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchAll('.block-left--visible');
var images = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchAll('.image--visible');
var standartThreshold = 0.5;
var badThreshold = 0.1;
var initHome = function initHome() {
  blockUps.forEach(function (element) {
    var observer = Object(_modules_observer__WEBPACK_IMPORTED_MODULE_1__["initObserver"])(_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClassByArray, [element, classHiddenUp], standartThreshold);
    observer.observe(element);
  });
  blockRights.forEach(function (element) {
    var observer = Object(_modules_observer__WEBPACK_IMPORTED_MODULE_1__["initObserver"])(_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClassByArray, [element, classHiddenRight], standartThreshold);
    observer.observe(element);
  });
  blockLefts.forEach(function (element) {
    var observer = Object(_modules_observer__WEBPACK_IMPORTED_MODULE_1__["initObserver"])(_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClassByArray, [element, classHiddenLeft], standartThreshold);
    observer.observe(element);
  });
  images.forEach(function (element, key) {
    var observer;
    if (key === 0) {
      observer = Object(_modules_observer__WEBPACK_IMPORTED_MODULE_1__["initObserver"])(_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClassByArray, [element, classHiddenImageLeft], badThreshold);
    } else {
      observer = Object(_modules_observer__WEBPACK_IMPORTED_MODULE_1__["initObserver"])(_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClassByArray, [element, classHiddenImageRight], badThreshold);
    }
    observer.observe(element);
  });
};


/***/ }),

/***/ "./src/js/components/listNav.js":
/*!**************************************!*\
  !*** ./src/js/components/listNav.js ***!
  \**************************************/
/*! exports provided: getHeightHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeightHeader", function() { return getHeightHeader; });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domHelper */ "./src/js/domHelper.js");
/* harmony import */ var _modules_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/observer */ "./src/js/modules/observer.js");
/* harmony import */ var _burgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burgerMenu */ "./src/js/components/burgerMenu.js");



var listNav = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchAll('.header__link');
var navLines = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchAll('.header__line');
var nameActiveLine = 'header__line--active';
var listMainBlocks = [_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchById('resume-part')
// DOM.searchById('about-part'),
// DOM.searchById('skills-part'),
];
var getHeightHeader = function getHeightHeader() {
  var width = window.innerWidth;
  if (width >= 1800) {
    return 122;
  } else if (width >= 1440) {
    return 134;
  } else if (width > 1024) {
    return 74;
  }
  return -50;
};
var getIndexByIdData = function getIndexByIdData(elements, attr, value) {
  var item;
  for (var index = 0; index < elements.length; index++) {
    if (_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getAttr(elements[index], attr) === value) {
      item = value;
      index = elements.length - 1;
    }
  }
  return item;
};
var initClass = function initClass(args) {
  for (var index = 0; index < args[0].length; index++) {
    if (+args[2] === index) {
      _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(args[0][index], args[1]);
    } else {
      _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass(args[0][index], args[1]);
    }
  }
};
var clickElementBar = function clickElementBar(element) {
  element.addEventListener('click', function () {
    _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass(_burgerMenu__WEBPACK_IMPORTED_MODULE_2__["body"], 'no-scroll');
    _burgerMenu__WEBPACK_IMPORTED_MODULE_2__["sideBarInput"].checked = false;
    var id = getIndexByIdData(navLines, 'data-id', _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getAttr(element, 'data-link'));
    initClass([navLines, nameActiveLine, id]);
  });
};
listNav.forEach(function (element) {
  clickElementBar(element);
});
listMainBlocks.forEach(function (element, index) {
  var observer = Object(_modules_observer__WEBPACK_IMPORTED_MODULE_1__["initObserver"])(initClass, [navLines, nameActiveLine, index], 0.5, false);
  observer.observe(element);
});


/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domHelper */ "./src/js/domHelper.js");
/* harmony import */ var _modules_locomotive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/locomotive */ "./src/js/modules/locomotive.js");
/* harmony import */ var _burgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burgerMenu */ "./src/js/components/burgerMenu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/js/components/home.js");




var rocket = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.preloader__image');
var containerRocket = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.preloader');
var picture = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchAll('picture');
var classActive = 'preloader--active';
var getCoefficient = function getCoefficient() {
  return window.innerWidth / window.innerHeight;
};
var widthRocket = rocket.width;
var coefficiendTop = 3;
var coefficiendLeft = coefficiendTop * getCoefficient();
var stepLeft = -widthRocket;
var stepTop = -widthRocket;
var countLoading = 0;
var moveRocket = function moveRocket(lengthArray) {
  var position = rocket.getBoundingClientRect();
  if (position.top > -rocket.width) {
    coefficiendLeft += Math.pow(countLoading, 5) * getCoefficient() / lengthArray;
    coefficiendTop += Math.pow(countLoading, 5) / lengthArray;
    stepLeft += coefficiendLeft;
    stepTop += coefficiendTop;
    rocket.style.bottom = "".concat(stepTop, "px");
    rocket.style.left = "".concat(stepLeft, "px");
    requestAnimationFrame(moveRocket);
  } else {
    _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass(containerRocket, classActive);
    _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].toggleScroll(_burgerMenu__WEBPACK_IMPORTED_MODULE_2__["body"]);
    Object(_home__WEBPACK_IMPORTED_MODULE_3__["initHome"])();
    if (window.innerWidth >= 1025) {
      Object(_modules_locomotive__WEBPACK_IMPORTED_MODULE_1__["initScroll"])();
    }
  }
};
window.addEventListener('load', function () {
  var images = [];
  picture.forEach(function (element) {
    element = element.querySelector('img');
    if (element) {
      images.push(element);
    }
  });
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].toggleScroll(_burgerMenu__WEBPACK_IMPORTED_MODULE_2__["body"]);
  moveRocket(images.length);
  var startTime = window.innerWidth > 1024 ? 100 : 150;
  var time = startTime;
  images.forEach(function (element, index) {
    if (element.complete) {
      time += startTime / ((index + 1) / images.length);
      setTimeout(function () {
        countLoading++;
      }, time);
    } else {
      element.onload = function () {
        time += startTime / ((index + 1) / images.length);
        setTimeout(function () {
          countLoading++;
        }, time);
      };
    }
  });
});

/***/ }),

/***/ "./src/js/components/scrollIndicator.js":
/*!**********************************************!*\
  !*** ./src/js/components/scrollIndicator.js ***!
  \**********************************************/
/*! exports provided: scrollIndicator, removeScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIndicator", function() { return scrollIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScroll", function() { return removeScroll; });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domHelper */ "./src/js/domHelper.js");
/* harmony import */ var _modules_locomotive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/locomotive */ "./src/js/modules/locomotive.js");


var scrollUp = document.querySelector('.scroll-up');
var classActive = 'scroll-up--active';
var textScroll = document.querySelector('.scroll-up__text');
var arrow = document.querySelector('.scroll-up__arrow');
var progressBar = document.querySelector('.indicator-bar');
var totalLength = (progressBar.getTotalLength() + 1).toFixed(0);
var blockHide = 'scroll-up__block--hide';
var winScroll;
var height;
var scrolled;
var interval;
progressBar.style.strokeDasharray = totalLength;
progressBar.style.strokeDashoffset = totalLength - 1;
var changeContentIndicator = function changeContentIndicator(scrolledValue, offSet) {
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].html(textScroll, "".concat(scrolledValue >= 1 ? scrolledValue : 1, "%"));
  if (+offSet === 0) {
    _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(textScroll, blockHide);
    _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass(arrow, blockHide);
  } else {
    _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass(textScroll, blockHide);
    _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(arrow, blockHide);
  }
};
var createInterval = function createInterval(timeThis) {
  if (winScroll < 200) {
    _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass(scrollUp, classActive);
  } else {
    interval = setInterval(function () {
      _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass(scrollUp, classActive);
    }, timeThis * 1500);
  }
};
var removeScroll = function removeScroll() {
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(scrollUp, classActive);
  clearInterval(interval);
  createInterval(1);
};
var scrollIndicator = function scrollIndicator(scrollTop) {
  winScroll = scrollTop;
  if (window.innerWidth > 1024 && _modules_locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"]) {
    height = _modules_locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"].scroll.instance.limit.y;
  } else {
    height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  }
  scrolled = (winScroll / height * 100).toFixed(0);
  var offSet = totalLength - totalLength * scrolled / 100;
  progressBar.style.strokeDashoffset = +offSet === +totalLength ? offSet - 1 : offSet;
  changeContentIndicator(scrolled, offSet);
};
scrollIndicator(document.documentElement.scrollTop);
window.addEventListener('scroll', function () {
  scrollIndicator(document.documentElement.scrollTop);
  removeScroll();
});
scrollUp.addEventListener('mouseover', function () {
  clearInterval(interval);
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(scrollUp, classActive);
});
scrollUp.addEventListener('mouseout', function () {
  removeScroll();
});
scrollUp.addEventListener('click', function () {
  if (_modules_locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"]) {
    _modules_locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"].scrollTo('top');
  }
  window.scrollTo(0, 0);

  // if(window.innerWidth > 1024) {
  // } else {
  // }
  removeScroll();
});


/***/ }),

/***/ "./src/js/components/share.js":
/*!************************************!*\
  !*** ./src/js/components/share.js ***!
  \************************************/
/*! exports provided: isStatusModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStatusModal", function() { return isStatusModal; });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domHelper */ "./src/js/domHelper.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_locomotive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/locomotive */ "./src/js/modules/locomotive.js");



var shareBg = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.share-bg');
var shareField = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.share-field');
var share = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.share');
var header = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.header');
var resumeMainBlock = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.resume__main-info');
var imageAboutMe = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.about__image');
var shareButtons = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchAll('.icon-social');
var repostButton = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.share-content__button');
var classActiveShareBg = 'share-bg--active';
var classActiveShareField = 'share-field--active';
var classLowIndex = 'low-index';
var validSocial = 0;
var isStatusModal = false;
var setLowIndex = function setLowIndex() {
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(header, classLowIndex);
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(resumeMainBlock, classLowIndex);
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(imageAboutMe, classLowIndex);
};
var toggleModal = function toggleModal() {
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(shareBg, classActiveShareBg);
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].toggle(shareField, classActiveShareField);
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].toggleScroll(_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('html'));
};
var toggleShare = function toggleShare() {
  if (isStatusModal) {
    isStatusModal = false;
    if (_modules_locomotive__WEBPACK_IMPORTED_MODULE_2__["scrollLocomotive"]) {
      _modules_locomotive__WEBPACK_IMPORTED_MODULE_2__["scrollLocomotive"].start();
    }
    toggleModal();
    setTimeout(function () {
      setLowIndex();
    }, 500);
  } else {
    isStatusModal = true;
    if (_modules_locomotive__WEBPACK_IMPORTED_MODULE_2__["scrollLocomotive"]) {
      _modules_locomotive__WEBPACK_IMPORTED_MODULE_2__["scrollLocomotive"].stop();
    }
    setLowIndex();
    setTimeout(function () {
      toggleModal();
    }, 100);
  }
};
var getValidSocial = function getValidSocial(index) {
  validSocial = Math.floor(index / 2);
};
var shareFacebook = function shareFacebook(valueName, valueDescription) {
  return "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.href), "&quote=").concat(encodeURIComponent(valueName), "\n    &description=").concat(encodeURIComponent(valueDescription));
};
var shareVk = function shareVk(valueName, valueDescription) {
  return "https://vk.com/share.php?url=".concat(encodeURIComponent(window.location.href), "&title=").concat(encodeURIComponent(valueName), "&description=").concat(encodeURIComponent(valueDescription));
};
var shareTg = function shareTg(valueName, valueDescription) {
  return "https://telegram.me/share/url?url=".concat(encodeURIComponent(window.location.href), "&text=").concat(encodeURIComponent("\u0418\u043C\u044F: ".concat(valueName, ", \u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C: ").concat(valueDescription)));
};
var shareContent = function shareContent() {
  var valueName = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getInnerHTML(_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.share-content__title--name')).split(',')[0];
  console.log(valueName);
  var valueDescription = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getInnerHTML(_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('.share-content__title--position'));
  var shareUrl;
  switch (validSocial) {
    case 0:
      shareUrl = shareFacebook(valueName, valueDescription);
      break;
    case 1:
      shareUrl = shareVk(valueName, valueDescription);
      break;
    case 2:
      shareUrl = shareTg(valueName, valueDescription);
      break;
    default:
      break;
  }
  window.open(shareUrl, '_blank');
};
var setImageMeta = function setImageMeta(selector, valueImage) {
  var meta = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchById(selector);
  _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].attr(meta, 'content', valueImage);
};

// функция для получения изображения через html2canvas
var shareDynamicContent = function shareDynamicContent() {
  var dynamicContent = _domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].searchById('share-dynamic');
  html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(dynamicContent).then(function (canvas) {
    var valueImage = canvas.toDataURL('image/png'); // url полученой картинки
    setImageMeta('metaOg', valueImage);
    setImageMeta('metaTwitter', valueImage);
    shareContent();
  });
};
var initEventsShare = function initEventsShare() {
  repostButton.addEventListener('click', function () {
    shareDynamicContent();
    toggleShare();
  });
  shareButtons.forEach(function (element, index) {
    element.addEventListener('click', function () {
      getValidSocial(index);
      toggleShare();
    });
  });
  share.addEventListener('click', function (event) {
    event.stopPropagation();
  });
  shareField.addEventListener('click', function () {
    toggleShare();
  });
};
initEventsShare();


/***/ }),

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ninelines-sharing */ "./node_modules/ninelines-sharing/dist/ninelines-sharing.js");
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__);

if (document.querySelector('[data-social]')) {
  var list = document.querySelectorAll('[data-social]');
  Array.prototype.forEach.call(list, function (item) {
    item.addEventListener('click', function (e) {
      var social = e.currentTarget.dataset.social;
      var url = location.origin + location.pathname;
      ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default.a[social](url);
    });
  });
}

/***/ }),

/***/ "./src/js/domHelper.js":
/*!*****************************!*\
  !*** ./src/js/domHelper.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOM; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);



var _class;
var DOM = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function DOM() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DOM);
});
_class = DOM;
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "create", function (tagName) {
  return document.createElement(tagName);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "attr", function (element, nameAttr, valueAttr) {
  element.setAttribute(nameAttr, valueAttr);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "getAttr", function (element, nameAttr) {
  return element.getAttribute(nameAttr);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "html", function (element, value) {
  element.innerHTML = value;
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "getInnerHTML", function (element) {
  return element.innerHTML;
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "htmlClear", function (element) {
  element.innerHTML = ' ';
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "search", function (selector) {
  return document.querySelector(selector);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "searchById", function (selector) {
  return document.getElementById(selector);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "searchAll", function (selector) {
  return document.querySelectorAll(selector);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "addClass", function (element, className) {
  element.classList.add(className);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "removeClass", function (element, className) {
  element.classList.remove(className);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "removeClassByArray", function (args) {
  _class.removeClass(args[0], args[1]);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "toggleByArray", function (args) {
  args[0].classList.toggle(args[1]);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "toggle", function (element, classList) {
  element.classList.toggle(classList);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "toggleScroll", function (element) {
  element.classList.toggle('no-scroll');
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "hasClass", function (element, className) {
  return element.classList.contains(className);
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "append", function (element, newElement, beforeElement) {
  if (beforeElement) {
    element.insertBefore(newElement, beforeElement);
  } else {
    element.appendChild(newElement);
  }
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(DOM, "on", function (element, eventName, funcName) {
  element.addEventListener(eventName, funcName);
});


/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

var vars = {};
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);
vars.isMobile = function () {
  return innerWidth <= 1024;
};
vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};
vars.isIOS = function () {
  return vars.$html.hasClass('is-os-ios');
};
vars.winWidth = window.innerWidth;

/**
* Очистить текст от спецсимволов
* @param {string} text Обязательное, строка для очистки
* @returns {string} Очищенная строка
*/
vars.clearText = function (text) {
  return text.trim().replace(/\s+/g, ' ');
};

/**
* Создать куки запись
* @param {string} name Обязательное, название записи
* @param {string} value Обязательное, значение записи
* @param {string} days Обязательное, время для жизни
*/
vars.setCookie = function (name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }
  document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
};

/**
* Получить куки запись
* @param {string} name Обязательное, название записи
*/
vars.getCookie = function (name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

/**
* Удалить куки запись
* @param {string} name Обязательное, название записи
*/
vars.eraseCookie = function (name) {
  document.cookie = "".concat(name, "=; Max-Age=-99999999;");
};
var dataScrollLocks;
/**
* Блокирует скролл страницы
* Необходим для использования модальных окон
* @param {boolean} state Обязательное
* @param {string} element Обязательное, элемент которому нужно разрешить скролл
* @param {string} name Необязательное, ключ,
* чтобы была возможность открывать окно поверх другого окна
*/
vars.lockScroll = function (state, $element, name) {
  var element = $element.get(0) ? $element.get(0) : $element;
  if (typeof dataScrollLocks === 'undefined') {
    dataScrollLocks = new Set();
  }
  var scrollLocks = dataScrollLocks;
  if (state) {
    if (typeof name === 'string') {
      scrollLocks.add(name);
    }
    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"](element, {
      reserveScrollBarGap: true
    });
    setImmediate(function () {
      vars.$html.addClass('is-lock-scroll');
    });
  } else {
    if (typeof name === 'string') {
      scrollLocks["delete"](name);
    }
    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"](element);
    if (!scrollLocks.size) {
      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["clearAllBodyScrollLocks"]();
      vars.$html.removeClass('is-lock-scroll');
    }
  }
};

/**
* Скролл до элемента
* @param {string} $container Обязательное, элемент к которому нужно скроллить
* @param {string|number} time Необязательное, время скролла
* @param {string|number} offset Необязательное, смещение скролла может быть + или -
*/
vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').stop().animate({
    scrollTop: "".concat($container.offset().top + parseInt(offset, 10))
  }, parseInt(time, 10));
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, parseInt(time, 10) + 100);
};
var scrollDiv;

/**
* Получить размер скроллбара если он есть
* @returns {number} размер скроллбара
*/
vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.get(0).clientWidth;
  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
    return width;
  }

  // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it
  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }
  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};

/**
* Узнать есть доступен ли ховер
* @returns {boolean}
*/
function hasHoverSupport() {
  var hoverSupport;
  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }
  return hoverSupport;
}
if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}

/**
* Переопределение доступности ховера
*/
function resize() {
  setTimeout(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }
      vars.winWidth = window.innerWidth;
    }
  }, 300);
}
vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/preloader */ "./src/js/components/preloader.js");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/social */ "./src/js/components/social.js");
/* harmony import */ var _components_burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/burgerMenu */ "./src/js/components/burgerMenu.js");
/* harmony import */ var _components_scrollIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scrollIndicator */ "./src/js/components/scrollIndicator.js");
/* harmony import */ var _components_listNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/listNav */ "./src/js/components/listNav.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home */ "./src/js/components/home.js");
/* harmony import */ var _components_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/share */ "./src/js/components/share.js");
/* harmony import */ var _modules_locomotive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/locomotive */ "./src/js/modules/locomotive.js");
/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vendor/ie-fix */ "./src/js/vendor/ie-fix.js");
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _modules_actualYear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/actualYear */ "./src/js/modules/actualYear.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var _modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/scrollToAnchor */ "./src/js/modules/scrollToAnchor.js");
















Object(_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_10__["ieFix"])();
Object(_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_11__["vhFix"])();
Object(_modules_actualYear__WEBPACK_IMPORTED_MODULE_12__["actualYear"])();
_modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_15__["default"].init();
_components_header__WEBPACK_IMPORTED_MODULE_13__["default"].init();
_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_14__["default"].init();

/***/ }),

/***/ "./src/js/modules/actualYear.js":
/*!**************************************!*\
  !*** ./src/js/modules/actualYear.js ***!
  \**************************************/
/*! exports provided: actualYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actualYear", function() { return actualYear; });
/**
* Модуль "Актуальный год"
*/
var actualYear = function actualYear() {
  var year = new Date().getFullYear();
  if (document.querySelector('[data-actual-year]')) {
    document.querySelector('[data-actual-year]').textContent = year;
  }
};

/***/ }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

var observer;

/**
* Модуль "Отложенная загрузка изображений"
* https://github.com/ApoorvSaxena/lozad.js
*/
var init = function init() {
  observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {
    rootMargin: '10px 0px',
    // syntax similar to that of CSS Margin
    threshold: 0.1,
    // ratio of element convergence
    enableAutoReload: true,
    // it will reload the new image when validating attributes changes
    loaded: function loaded(el) {
      el.classList.add('is-loaded');
    }
  });
  observer.observe();
};

/**
* Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
* @param {string} img Обязательное, элемент img
*/
var trigger = function trigger(img) {
  observer.triggerLoad(img);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  trigger: trigger
});

/***/ }),

/***/ "./src/js/modules/locomotive.js":
/*!**************************************!*\
  !*** ./src/js/modules/locomotive.js ***!
  \**************************************/
/*! exports provided: scrollLocomotive, initScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLocomotive", function() { return scrollLocomotive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initScroll", function() { return initScroll; });
/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locomotive-scroll */ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js");
/* harmony import */ var _components_scrollIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/scrollIndicator */ "./src/js/components/scrollIndicator.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer */ "./src/js/modules/observer.js");
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domHelper */ "./src/js/domHelper.js");




var header = _domHelper__WEBPACK_IMPORTED_MODULE_3__["default"].search('.header');
var scrollLocomotive;
var widthDesktop = 1025;
var isResize = window.innerWidth >= widthDesktop;
var currentY;
var initEvents = function initEvents() {
  scrollLocomotive.on('scroll', function (object) {
    currentY = object.scroll.y;
    Object(_components_scrollIndicator__WEBPACK_IMPORTED_MODULE_1__["scrollIndicator"])(currentY);
    Object(_components_scrollIndicator__WEBPACK_IMPORTED_MODULE_1__["removeScroll"])();
    header.style.transform = "translate3d(0, ".concat(currentY, "px, 0)");
  });
};
var initScroll = function initScroll() {
  scrollLocomotive = new locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__["default"]({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.6,
    lerp: 0.06,
    reloadOnContextChange: true,
    repeat: true
  });
  initEvents();
  Object(_observer__WEBPACK_IMPORTED_MODULE_2__["initObserverUpdate"])();
};
window.addEventListener('resize', function () {
  if (window.innerWidth >= widthDesktop) {
    isResize = true;
    if (!scrollLocomotive) {
      initScroll();
    } else {
      initEvents();
    }
  } else if (isResize) {
    isResize = false;
    scrollLocomotive.scrollTo('top');
    window.scrollTo(0, 0);
  }
});


/***/ }),

/***/ "./src/js/modules/observer.js":
/*!************************************!*\
  !*** ./src/js/modules/observer.js ***!
  \************************************/
/*! exports provided: initObserver, initObserverUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initObserver", function() { return initObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initObserverUpdate", function() { return initObserverUpdate; });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domHelper */ "./src/js/domHelper.js");
/* harmony import */ var _locomotive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locomotive */ "./src/js/modules/locomotive.js");


var initObserver = function initObserver(callback, args, threshold) {
  var isStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        callback(args);
        if (isStatus) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, {
    threshold: threshold
  });
};
var initObserverUpdate = function initObserverUpdate() {
  new ResizeObserver(function () {
    return _locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"] && _locomotive__WEBPACK_IMPORTED_MODULE_1__["scrollLocomotive"].update();
  }).observe(_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].search('[data-scroll-container]'));
};


/***/ }),

/***/ "./src/js/modules/scrollToAnchor.js":
/*!******************************************!*\
  !*** ./src/js/modules/scrollToAnchor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_listNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/listNav */ "./src/js/components/listNav.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");
/* harmony import */ var _locomotive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locomotive */ "./src/js/modules/locomotive.js");
// import header from '../components/header';




/**
 * Модуль "Плавный переход к якорю"
 */
var init = function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.on('click.anchor', '.js-to-anchor', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var id = $(event.currentTarget).attr('href');
    if (window.innerWidth <= 1024) {
      var speed = $(event.currentTarget).data('speed') || 500;
      var offset = _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'fixed' || _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css('position') === 'absolute' ? -_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.outerHeight(true) : 0;
      offset -= Object(_components_listNav__WEBPACK_IMPORTED_MODULE_0__["getHeightHeader"])();
      _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].scrollTo($(id), speed, offset);
    } else if (_locomotive__WEBPACK_IMPORTED_MODULE_2__["scrollLocomotive"]) {
      _locomotive__WEBPACK_IMPORTED_MODULE_2__["scrollLocomotive"].scrollTo(id, {
        offset: -Object(_components_listNav__WEBPACK_IMPORTED_MODULE_0__["getHeightHeader"])()
      });
    }
  });
};
var destroy = function destroy() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.off('.anchor');
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_4__);





// import objectFitVideos from 'object-fit-videos';

svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_4___default()();
// objectFitVideos();

window.$ = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.objectFitImages = object_fit_images__WEBPACK_IMPORTED_MODULE_4___default.a;
// window.objectFitVideos = objectFitVideos;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function() { return ieFix; });
/* eslint-disable */

/**
* Много разных фиксов для ie,
* чтобы не было лишних проблем
* Performance.now()
* forEach
* CustomEvent
* includes
* matches
* closest
* prepend
* append
* before
* remove
* startsWith
* Performance.now()
* https://gist.github.com/paulirish/5438650
*/

var ieFix = function ieFix() {
  (function () {
    if ("performance" in window == false) {
      window.performance = {};
    }

    // thanks IE8
    Date.now = Date.now || function () {
      return new Date().getTime();
    };
    if ("now" in window.performance == false) {
      var nowOffset = Date.now();
      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }
      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })();

  // forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // CustomEvent
  (function () {
    if (typeof window.CustomEvent === 'function') return false;
    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  // includes
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
          return false;
        }
        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }
        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          k++;
        }
        return false;
      }
    });
  }

  // matches
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length;
      // eslint-disable-next-line no-empty
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
  }
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  // closest
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      do {
        if (el.matches(s)) {
          return el;
        }
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  // prepend
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }
      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

  // append
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }
      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

  // before
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }
      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

  // remove
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }
      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

  // startsWith
  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  }

  // Fixes
  //---------------------------------

  // ie download
  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }
    var filename = el.getAttribute("download");
    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();
      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };
      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };
      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };
  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");
    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  }

  // ie svg focus fix
  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }
    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };
  unfocusableSvg();

  //ie footer nailing
  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;
    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }
    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0;
      // eslint-disable-next-line no-unused-expressions
      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };
    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };
  ieFooterNailing();
};


/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/*! exports provided: vhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vhFix", function() { return vhFix; });
/**
* Модуль исправления багов на iOs устройствах
* определяет высоту экрана и при любом изменении переопределяет её
* в стилях используйте кастомные стили var(--vh)
*/
var vhFix = function vhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    var vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    window.addEventListener('resize', function () {
      vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    });
  }
};


/***/ })

/******/ });
//# sourceMappingURL=main.js.map