var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["blocksonly"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/blocks-only.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/blocks-only.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocks-only_controls_2GEvs {\n    position: absolute;\n    z-index: 2;\n    top: 10px;\n    right: 15px;\n}\n", ""]);

// exports
exports.locals = {
	"controls": "blocks-only_controls_2GEvs"
};

/***/ }),

/***/ "./src/playground/blocks-only.css":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./blocks-only.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/blocks-only.css");

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

/***/ "./src/playground/blocks-only.jsx":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.jsx ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_controls_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/controls.jsx */ "./src/containers/controls.jsx");
/* harmony import */ var _containers_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/blocks.jsx */ "./src/containers/blocks.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _blocks_only_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks-only.css */ "./src/playground/blocks-only.css");
/* harmony import */ var _blocks_only_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_only_css__WEBPACK_IMPORTED_MODULE_8__);










var mapStateToProps = function mapStateToProps(state) {
  return {
    vm: state.scratchGui.vm
  };
};

var VMBlocks = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(_containers_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);
var VMControls = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(_containers_controls_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]);

var BlocksOnly = function BlocksOnly(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VMBlocks, {
    grow: 1,
    options: {
      media: "static/blocks-media/"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VMControls, {
    className: _blocks_only_css__WEBPACK_IMPORTED_MODULE_8___default.a.controls
  }));
};

var App = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(BlocksOnly));
var appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), appTarget);

/***/ })

},[["./src/playground/blocks-only.jsx","lib.min"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HVUkvLi9zcmMvcGxheWdyb3VuZC9ibG9ja3Mtb25seS5jc3MiLCJ3ZWJwYWNrOi8vR1VJLy4vc3JjL3BsYXlncm91bmQvYmxvY2tzLW9ubHkuY3NzP2ZlYjIiLCJ3ZWJwYWNrOi8vR1VJLy4vc3JjL3BsYXlncm91bmQvYmxvY2tzLW9ubHkuanN4Il0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidm0iLCJzY3JhdGNoR3VpIiwiVk1CbG9ja3MiLCJjb25uZWN0IiwiQmxvY2tzIiwiVk1Db250cm9scyIsIkNvbnRyb2xzIiwiQmxvY2tzT25seSIsInByb3BzIiwibWVkaWEiLCJzdHlsZXMiLCJjb250cm9scyIsIkFwcCIsIkFwcFN0YXRlSE9DIiwiSGFzaFBhcnNlckhPQyIsImFwcFRhcmdldCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsZ0dBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxnQ0FBZ0MseUJBQXlCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLEdBQUc7O0FBRXRJO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ1RBLGNBQWMsbUJBQU8sQ0FBQyxtT0FBOEg7O0FBRXBKLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQUNDLE1BQUUsRUFBRUQsS0FBSyxDQUFDRSxVQUFOLENBQWlCRDtBQUF0QixHQUFMO0FBQUEsQ0FBN0I7O0FBRUEsSUFBTUUsUUFBUSxHQUFHQywyREFBTyxDQUFDTCxlQUFELENBQVAsQ0FBeUJNLDhEQUF6QixDQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBR0YsMkRBQU8sQ0FBQ0wsZUFBRCxDQUFQLENBQXlCUSxnRUFBekIsQ0FBbkI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQ3BCLDJEQUFDLDJEQUFELEVBQVNBLEtBQVQsRUFDSSwyREFBQyxRQUFEO0FBQ0ksUUFBSSxFQUFFLENBRFY7QUFFSSxXQUFPLEVBQUU7QUFDTEMsV0FBSztBQURBO0FBRmIsSUFESixFQU9JLDJEQUFDLFVBQUQ7QUFBWSxhQUFTLEVBQUVDLHVEQUFNLENBQUNDO0FBQTlCLElBUEosQ0FEb0I7QUFBQSxDQUF4Qjs7QUFZQSxJQUFNQyxHQUFHLEdBQUdDLHNFQUFXLENBQUNDLHdFQUFhLENBQUNQLFVBQUQsQ0FBZCxDQUF2QjtBQUVBLElBQU1RLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxXQUFkLENBQTBCSixTQUExQjtBQUVBSyxnREFBUSxDQUFDQyxNQUFULENBQWdCLDJEQUFDLEdBQUQsT0FBaEIsRUFBeUJOLFNBQXpCLEUiLCJmaWxlIjoiY2h1bmtzL2Jsb2Nrc29ubHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ibG9ja3Mtb25seV9jb250cm9sc18yR0V2cyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udHJvbHNcIjogXCJibG9ja3Mtb25seV9jb250cm9sc18yR0V2c1wiXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuL2Jsb2Nrcy1vbmx5LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi9ibG9ja3Mtb25seS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuL2Jsb2Nrcy1vbmx5LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi4vY29udGFpbmVycy9jb250cm9scy5qc3gnO1xuaW1wb3J0IEJsb2NrcyBmcm9tICcuLi9jb250YWluZXJzL2Jsb2Nrcy5qc3gnO1xuaW1wb3J0IEdVSSBmcm9tICcuLi9jb250YWluZXJzL2d1aS5qc3gnO1xuaW1wb3J0IEhhc2hQYXJzZXJIT0MgZnJvbSAnLi4vbGliL2hhc2gtcGFyc2VyLWhvYy5qc3gnO1xuaW1wb3J0IEFwcFN0YXRlSE9DIGZyb20gJy4uL2xpYi9hcHAtc3RhdGUtaG9jLmpzeCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ibG9ja3Mtb25seS5jc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe3ZtOiBzdGF0ZS5zY3JhdGNoR3VpLnZtfSk7XG5cbmNvbnN0IFZNQmxvY2tzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEJsb2Nrcyk7XG5jb25zdCBWTUNvbnRyb2xzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbnRyb2xzKTtcblxuY29uc3QgQmxvY2tzT25seSA9IHByb3BzID0+IChcbiAgICA8R1VJIHsuLi5wcm9wc30+XG4gICAgICAgIDxWTUJsb2Nrc1xuICAgICAgICAgICAgZ3Jvdz17MX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBtZWRpYTogYHN0YXRpYy9ibG9ja3MtbWVkaWEvYFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFZNQ29udHJvbHMgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbHN9IC8+XG4gICAgPC9HVUk+XG4pO1xuXG5jb25zdCBBcHAgPSBBcHBTdGF0ZUhPQyhIYXNoUGFyc2VySE9DKEJsb2Nrc09ubHkpKTtcblxuY29uc3QgYXBwVGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcFRhcmdldCk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBhcHBUYXJnZXQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==