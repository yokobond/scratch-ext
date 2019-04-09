var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["gui"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/index.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n.index_app_3Qs6X {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\n", ""]);

// exports
exports.locals = {
	"app": "index_app_3Qs6X"
};

/***/ }),

/***/ "./src/playground/index.css":
/*!**********************************!*\
  !*** ./src/playground/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-object-assign/auto */ "./node_modules/es6-object-assign/auto.js");
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intl */ "./node_modules/intl/index.js");
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/analytics */ "./src/lib/analytics.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/supported-browser */ "./src/lib/supported-browser.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./src/playground/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
// Polyfills



 // For Safari 9







 // Register "base" page view

_lib_analytics__WEBPACK_IMPORTED_MODULE_6__["default"].pageview('/');
var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_10___default.a.app;
document.body.appendChild(appTarget);

if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__["default"])()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx").default(appTarget);
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].setAppElement(appTarget);
  var WrappedBrowserModalComponent = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], true
  /* localesOnly */
  );

  var handleBack = function handleBack() {}; // eslint-disable-next-line react/jsx-no-bind


  react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_titled_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/titled-hoc.jsx */ "./src/lib/titled-hoc.jsx");
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/log.js */ "./src/lib/log.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }










var onClickLogo = function onClickLogo() {
  window.location = 'https://scratch.mit.edu';
};

var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_7__["default"])('User canceled telemetry modal');
};

var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_7__["default"])('User opted into telemetry');
};

var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_7__["default"])('User opted out of telemetry');
};
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */


/* harmony default export */ __webpack_exports__["default"] = (function (appTarget) {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].setAppElement(appTarget); // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.

  var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _lib_titled_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]); // TODO a hack for testing the backpack, allow backpack host to be set by url param

  var backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  var backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  var scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  var simulateScratchDesktop;

  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }

  if (false) {}

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    isScratchDesktop: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    backpackVisible: true,
    showComingSoon: true,
    backpackHost: backpackHost,
    canSave: false,
    onClickLogo: onClickLogo
  }), appTarget);
});

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** ./locale-data/complete.js (ignored) ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./src/playground/index.jsx","lib.min"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HVUkvLi9zcmMvcGxheWdyb3VuZC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vR1VJLy4vc3JjL3BsYXlncm91bmQvaW5kZXguY3NzPzVjNTQiLCJ3ZWJwYWNrOi8vR1VJLy4vc3JjL3BsYXlncm91bmQvaW5kZXguanN4Iiwid2VicGFjazovL0dVSS8uL3NyYy9wbGF5Z3JvdW5kL3JlbmRlci1ndWkuanN4Iiwid2VicGFjazovL0dVSS8uL2xvY2FsZS1kYXRhL2NvbXBsZXRlLmpzIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJhbmFseXRpY3MiLCJwYWdldmlldyIsImFwcFRhcmdldCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlcyIsImFwcCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN1cHBvcnRlZEJyb3dzZXIiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIkJyb3dzZXJNb2RhbENvbXBvbmVudCIsInNldEFwcEVsZW1lbnQiLCJXcmFwcGVkQnJvd3Nlck1vZGFsQ29tcG9uZW50IiwiQXBwU3RhdGVIT0MiLCJoYW5kbGVCYWNrIiwiUmVhY3RET00iLCJyZW5kZXIiLCJvbkNsaWNrTG9nbyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFuZGxlVGVsZW1ldHJ5TW9kYWxDYW5jZWwiLCJsb2ciLCJoYW5kbGVUZWxlbWV0cnlNb2RhbE9wdEluIiwiaGFuZGxlVGVsZW1ldHJ5TW9kYWxPcHRPdXQiLCJHVUkiLCJXcmFwcGVkR3VpIiwiY29tcG9zZSIsIkhhc2hQYXJzZXJIT0MiLCJUaXRsZWRIT0MiLCJiYWNrcGFja0hvc3RNYXRjaGVzIiwiaHJlZiIsIm1hdGNoIiwiYmFja3BhY2tIb3N0Iiwic2NyYXRjaERlc2t0b3BNYXRjaGVzIiwic2ltdWxhdGVTY3JhdGNoRGVza3RvcCIsIkpTT04iLCJwYXJzZSIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxnR0FBK0M7QUFD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aEIsQ0FBcUJDLEtBQXJCLENBQTJCLDhCQUEzQixDQUE5QjtBQUNBLE1BQUlHLHNCQUFKOztBQUNBLE1BQUlELHFCQUFKLEVBQTJCO0FBQ3ZCLFFBQUk7QUFDQTtBQUNBQyw0QkFBc0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILHFCQUFxQixDQUFDLENBQUQsQ0FBaEMsQ0FBekI7QUFDSCxLQUhELENBR0UsZ0JBQU07QUFDSjtBQUNBO0FBQ0FDLDRCQUFzQixHQUFHRCxxQkFBcUIsQ0FBQyxDQUFELENBQTlDO0FBQ0g7QUFDSjs7QUFFRCxNQUFJSSxLQUFKLEVBQXlFLEVBR3hFOztBQUVEdEIsa0RBQVEsQ0FBQ0MsTUFBVCxFQUNJO0FBQ0FrQix3QkFBc0IsR0FDbEIsMkRBQUMsVUFBRDtBQUNJLG9CQUFnQixNQURwQjtBQUVJLHNCQUFrQixNQUZ0QjtBQUdJLFdBQU8sRUFBRSxLQUhiO0FBSUksMEJBQXNCLEVBQUVkLDBCQUo1QjtBQUtJLHlCQUFxQixFQUFFRSx5QkFMM0I7QUFNSSwwQkFBc0IsRUFBRUM7QUFONUIsSUFEa0IsR0FTbEIsMkRBQUMsVUFBRDtBQUNJLG1CQUFlLE1BRG5CO0FBRUksa0JBQWMsTUFGbEI7QUFHSSxnQkFBWSxFQUFFUyxZQUhsQjtBQUlJLFdBQU8sRUFBRSxLQUpiO0FBS0ksZUFBVyxFQUFFZjtBQUxqQixJQVhSLEVBa0JJbEIsU0FsQko7QUFtQkgsQ0FyREQsRTs7Ozs7Ozs7Ozs7QUMvQkEsZSIsImZpbGUiOiJjaHVua3MvZ3VpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHksXFxuLmluZGV4X2FwcF8zUXM2WCB7XFxuICAgIC8qIHByb2JhYmx5IHVuZWNlc3NhcnksIHRyYW5zaXRpb25hbCB1bnRpbCBsYXlvdXQgaXMgcmVmYWN0b3JlZCAqL1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICAvKiBTZXR0aW5nIG1pbiBoZWlnaHQvd2lkdGggbWFrZXMgdGhlIFVJIHNjcm9sbCBiZWxvdyB0aG9zZSBzaXplcyAqL1xcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcXG4gICAgbWluLWhlaWdodDogNjQwcHg7IC8qIE1pbiBoZWlnaHQgdG8gZml0IHNwcml0ZS9iYWNrZHJvcCBidXR0b24gKi9cXG59XFxuXFxuLyogQHRvZG86IG1vdmUgZ2xvYmFsbHk/IFNhZmUgLyBzaWRlIEZYLCBmb3IgYmxvY2tzIHBhcnRpY3VsYXJseT8gKi9cXG5cXG4qIHsgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYXBwXCI6IFwiaW5kZXhfYXBwXzNRczZYXCJcbn07IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gUG9seWZpbGxzXG5pbXBvcnQgJ2VzNi1vYmplY3QtYXNzaWduL2F1dG8nO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL2FycmF5L2luY2x1ZGVzJztcbmltcG9ydCAnY29yZS1qcy9mbi9wcm9taXNlL2ZpbmFsbHknO1xuaW1wb3J0ICdpbnRsJzsgLy8gRm9yIFNhZmFyaSA5XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IGFuYWx5dGljcyBmcm9tICcuLi9saWIvYW5hbHl0aWNzJztcbmltcG9ydCBBcHBTdGF0ZUhPQyBmcm9tICcuLi9saWIvYXBwLXN0YXRlLWhvYy5qc3gnO1xuaW1wb3J0IEJyb3dzZXJNb2RhbENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2Jyb3dzZXItbW9kYWwvYnJvd3Nlci1tb2RhbC5qc3gnO1xuaW1wb3J0IHN1cHBvcnRlZEJyb3dzZXIgZnJvbSAnLi4vbGliL3N1cHBvcnRlZC1icm93c2VyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4LmNzcyc7XG5cbi8vIFJlZ2lzdGVyIFwiYmFzZVwiIHBhZ2Ugdmlld1xuYW5hbHl0aWNzLnBhZ2V2aWV3KCcvJyk7XG5cbmNvbnN0IGFwcFRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYXBwVGFyZ2V0LmNsYXNzTmFtZSA9IHN0eWxlcy5hcHA7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcFRhcmdldCk7XG5cbmlmIChzdXBwb3J0ZWRCcm93c2VyKCkpIHtcbiAgICAvLyByZXF1aXJlIG5lZWRlZCBoZXJlIHRvIGF2b2lkIGltcG9ydGluZyB1bnN1cHBvcnRlZCBicm93c2VyLWNyYXNoaW5nIGNvZGVcbiAgICAvLyBhdCB0aGUgdG9wIGxldmVsXG4gICAgcmVxdWlyZSgnLi9yZW5kZXItZ3VpLmpzeCcpLmRlZmF1bHQoYXBwVGFyZ2V0KTtcblxufSBlbHNlIHtcbiAgICBCcm93c2VyTW9kYWxDb21wb25lbnQuc2V0QXBwRWxlbWVudChhcHBUYXJnZXQpO1xuICAgIGNvbnN0IFdyYXBwZWRCcm93c2VyTW9kYWxDb21wb25lbnQgPSBBcHBTdGF0ZUhPQyhCcm93c2VyTW9kYWxDb21wb25lbnQsIHRydWUgLyogbG9jYWxlc09ubHkgKi8pO1xuICAgIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7fTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LW5vLWJpbmRcbiAgICBSZWFjdERPTS5yZW5kZXIoPFdyYXBwZWRCcm93c2VyTW9kYWxDb21wb25lbnQgb25CYWNrPXtoYW5kbGVCYWNrfSAvPiwgYXBwVGFyZ2V0KTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Y29tcG9zZX0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgQXBwU3RhdGVIT0MgZnJvbSAnLi4vbGliL2FwcC1zdGF0ZS1ob2MuanN4JztcbmltcG9ydCBHVUkgZnJvbSAnLi4vY29udGFpbmVycy9ndWkuanN4JztcbmltcG9ydCBIYXNoUGFyc2VySE9DIGZyb20gJy4uL2xpYi9oYXNoLXBhcnNlci1ob2MuanN4JztcbmltcG9ydCBUaXRsZWRIT0MgZnJvbSAnLi4vbGliL3RpdGxlZC1ob2MuanN4JztcbmltcG9ydCBsb2cgZnJvbSAnLi4vbGliL2xvZy5qcyc7XG5cbmNvbnN0IG9uQ2xpY2tMb2dvID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdodHRwczovL3NjcmF0Y2gubWl0LmVkdSc7XG59O1xuXG5jb25zdCBoYW5kbGVUZWxlbWV0cnlNb2RhbENhbmNlbCA9ICgpID0+IHtcbiAgICBsb2coJ1VzZXIgY2FuY2VsZWQgdGVsZW1ldHJ5IG1vZGFsJyk7XG59O1xuXG5jb25zdCBoYW5kbGVUZWxlbWV0cnlNb2RhbE9wdEluID0gKCkgPT4ge1xuICAgIGxvZygnVXNlciBvcHRlZCBpbnRvIHRlbGVtZXRyeScpO1xufTtcblxuY29uc3QgaGFuZGxlVGVsZW1ldHJ5TW9kYWxPcHRPdXQgPSAoKSA9PiB7XG4gICAgbG9nKCdVc2VyIG9wdGVkIG91dCBvZiB0ZWxlbWV0cnknKTtcbn07XG5cbi8qXG4gKiBSZW5kZXIgdGhlIEdVSSBwbGF5Z3JvdW5kLiBUaGlzIGlzIGEgc2VwYXJhdGUgZnVuY3Rpb24gYmVjYXVzZSBpbXBvcnRpbmcgYW55dGhpbmdcbiAqIHRoYXQgaW5zdGFudGlhdGVzIHRoZSBWTSBjYXVzZXMgdW5zdXBwb3J0ZWQgYnJvd3NlcnMgdG8gY3Jhc2hcbiAqIHtvYmplY3R9IGFwcFRhcmdldCAtIHRoZSBET00gZWxlbWVudCB0byByZW5kZXIgdG9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXBwVGFyZ2V0ID0+IHtcbiAgICBHVUkuc2V0QXBwRWxlbWVudChhcHBUYXJnZXQpO1xuXG4gICAgLy8gbm90ZSB0aGF0IHJlZHV4J3MgJ2NvbXBvc2UnIGZ1bmN0aW9uIGlzIGp1c3QgYmVpbmcgdXNlZCBhcyBhIGdlbmVyYWwgdXRpbGl0eSB0byBtYWtlXG4gICAgLy8gdGhlIGhpZXJhcmNoeSBvZiBIT0MgY29uc3RydWN0b3IgY2FsbHMgY2xlYXJlciBoZXJlOyBpdCBoYXMgbm90aGluZyB0byBkbyB3aXRoIHJlZHV4J3NcbiAgICAvLyBhYmlsaXR5IHRvIGNvbXBvc2UgcmVkdWNlcnMuXG4gICAgY29uc3QgV3JhcHBlZEd1aSA9IGNvbXBvc2UoXG4gICAgICAgIEFwcFN0YXRlSE9DLFxuICAgICAgICBIYXNoUGFyc2VySE9DLFxuICAgICAgICBUaXRsZWRIT0NcbiAgICApKEdVSSk7XG5cbiAgICAvLyBUT0RPIGEgaGFjayBmb3IgdGVzdGluZyB0aGUgYmFja3BhY2ssIGFsbG93IGJhY2twYWNrIGhvc3QgdG8gYmUgc2V0IGJ5IHVybCBwYXJhbVxuICAgIGNvbnN0IGJhY2twYWNrSG9zdE1hdGNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgvWz8mXWJhY2twYWNrX2hvc3Q9KFteJl0qKSY/Lyk7XG4gICAgY29uc3QgYmFja3BhY2tIb3N0ID0gYmFja3BhY2tIb3N0TWF0Y2hlcyA/IGJhY2twYWNrSG9zdE1hdGNoZXNbMV0gOiBudWxsO1xuXG4gICAgY29uc3Qgc2NyYXRjaERlc2t0b3BNYXRjaGVzID0gd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goL1s/Jl1pc1NjcmF0Y2hEZXNrdG9wPShbXiZdKykvKTtcbiAgICBsZXQgc2ltdWxhdGVTY3JhdGNoRGVza3RvcDtcbiAgICBpZiAoc2NyYXRjaERlc2t0b3BNYXRjaGVzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBwYXJzZSAndHJ1ZScgaW50byBgdHJ1ZWAsICdmYWxzZScgaW50byBgZmFsc2VgLCBldGMuXG4gICAgICAgICAgICBzaW11bGF0ZVNjcmF0Y2hEZXNrdG9wID0gSlNPTi5wYXJzZShzY3JhdGNoRGVza3RvcE1hdGNoZXNbMV0pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIGl0J3Mgbm90IEpTT04gc28ganVzdCB1c2UgdGhlIHN0cmluZ1xuICAgICAgICAgICAgLy8gbm90ZSB0aGF0IGEgdHlwbyBsaWtlIFwiZmFsc3lcIiB3aWxsIGJlIHRyZWF0ZWQgYXMgdHJ1ZVxuICAgICAgICAgICAgc2ltdWxhdGVTY3JhdGNoRGVza3RvcCA9IHNjcmF0Y2hEZXNrdG9wTWF0Y2hlc1sxXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIFdhcm4gYmVmb3JlIG5hdmlnYXRpbmcgYXdheVxuICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB0cnVlO1xuICAgIH1cblxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgLy8gaW1wb3J0YW50OiB0aGlzIGlzIGNoZWNraW5nIHdoZXRoZXIgYHNpbXVsYXRlU2NyYXRjaERlc2t0b3BgIGlzIHRydXRoeSwgbm90IGp1c3QgZGVmaW5lZCFcbiAgICAgICAgc2ltdWxhdGVTY3JhdGNoRGVza3RvcCA/XG4gICAgICAgICAgICA8V3JhcHBlZEd1aVxuICAgICAgICAgICAgICAgIGlzU2NyYXRjaERlc2t0b3BcbiAgICAgICAgICAgICAgICBzaG93VGVsZW1ldHJ5TW9kYWxcbiAgICAgICAgICAgICAgICBjYW5TYXZlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBvblRlbGVtZXRyeU1vZGFsQ2FuY2VsPXtoYW5kbGVUZWxlbWV0cnlNb2RhbENhbmNlbH1cbiAgICAgICAgICAgICAgICBvblRlbGVtZXRyeU1vZGFsT3B0SW49e2hhbmRsZVRlbGVtZXRyeU1vZGFsT3B0SW59XG4gICAgICAgICAgICAgICAgb25UZWxlbWV0cnlNb2RhbE9wdE91dD17aGFuZGxlVGVsZW1ldHJ5TW9kYWxPcHRPdXR9XG4gICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICA8V3JhcHBlZEd1aVxuICAgICAgICAgICAgICAgIGJhY2twYWNrVmlzaWJsZVxuICAgICAgICAgICAgICAgIHNob3dDb21pbmdTb29uXG4gICAgICAgICAgICAgICAgYmFja3BhY2tIb3N0PXtiYWNrcGFja0hvc3R9XG4gICAgICAgICAgICAgICAgY2FuU2F2ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb25DbGlja0xvZ289e29uQ2xpY2tMb2dvfVxuICAgICAgICAgICAgLz4sXG4gICAgICAgIGFwcFRhcmdldCk7XG59O1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==