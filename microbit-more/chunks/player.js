var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["player"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/player.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/player.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player_stage-only_3WHZN {\n    width: calc(480px + 1rem);\n}\n\n.player_editor_wkTja {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.player_stage-only_3WHZN * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n", ""]);

// exports
exports.locals = {
	"stage-only": "player_stage-only_3WHZN",
	"stageOnly": "player_stage-only_3WHZN",
	"editor": "player_editor_wkTja"
};

/***/ }),

/***/ "./src/playground/player.css":
/*!***********************************!*\
  !*** ./src/playground/player.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./player.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/player.css");

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

/***/ "./src/playground/player.jsx":
/*!***********************************!*\
  !*** ./src/playground/player.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/box/box.jsx */ "./src/components/box/box.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _lib_titled_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/titled-hoc.jsx */ "./src/lib/titled-hoc.jsx");
/* harmony import */ var _reducers_mode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/mode */ "./src/reducers/mode.js");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./player.css */ "./src/playground/player.css");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_player_css__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














if (false) {}



var Player = function Player(_ref) {
  var isPlayerOnly = _ref.isPlayerOnly,
      onSeeInside = _ref.onSeeInside,
      projectId = _ref.projectId;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(isPlayerOnly ? _player_css__WEBPACK_IMPORTED_MODULE_12___default.a.stageOnly : _player_css__WEBPACK_IMPORTED_MODULE_12___default.a.editor)
  }, isPlayerOnly && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: onSeeInside
  }, 'See inside'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    enableCommunity: true,
    isPlayerOnly: isPlayerOnly,
    projectId: projectId
  }));
};

Player.propTypes = {
  isPlayerOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSeeInside: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSeeInside: function onSeeInside() {
      return dispatch(Object(_reducers_mode__WEBPACK_IMPORTED_MODULE_11__["setPlayer"])(false));
    }
  };
};

var ConnectedPlayer = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Player); // note that redux's 'compose' function is just being used as a general utility to make
// the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
// ability to compose reducers.

var WrappedPlayer = Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], _lib_titled_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])(ConnectedPlayer);
var appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedPlayer, {
  isPlayerOnly: true
}), appTarget);

/***/ })

},[["./src/playground/player.jsx","lib.min"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HVUkvLi9zcmMvcGxheWdyb3VuZC9wbGF5ZXIuY3NzIiwid2VicGFjazovL0dVSS8uL3NyYy9wbGF5Z3JvdW5kL3BsYXllci5jc3M/NGZiMyIsIndlYnBhY2s6Ly9HVUkvLi9zcmMvcGxheWdyb3VuZC9wbGF5ZXIuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJQbGF5ZXIiLCJpc1BsYXllck9ubHkiLCJvblNlZUluc2lkZSIsInByb2plY3RJZCIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJzdGFnZU9ubHkiLCJlZGl0b3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsInN0cmluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic2NyYXRjaEd1aSIsIm1vZGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldFBsYXllciIsIkNvbm5lY3RlZFBsYXllciIsImNvbm5lY3QiLCJXcmFwcGVkUGxheWVyIiwiY29tcG9zZSIsIkFwcFN0YXRlSE9DIiwiSGFzaFBhcnNlckhPQyIsIlRpdGxlZEhPQyIsImFwcFRhcmdldCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsZ0dBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyw2QkFBNkIsZ0NBQWdDLEdBQUcsMEJBQTBCLHlCQUF5QixhQUFhLGNBQWMsbUJBQW1CLGtCQUFrQixHQUFHLGdDQUFnQyxxQ0FBcUMscUNBQXFDLEdBQUc7O0FBRTFUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNYQSxjQUFjLG1CQUFPLENBQUMseU5BQXlIOztBQUUvSSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQUlBLEtBQUosRUFBeUUsRUFHeEU7O0FBRUQ7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFFQyxZQUFGLFFBQUVBLFlBQUY7QUFBQSxNQUFnQkMsV0FBaEIsUUFBZ0JBLFdBQWhCO0FBQUEsTUFBNkJDLFNBQTdCLFFBQTZCQSxTQUE3QjtBQUFBLFNBQ1gsMkRBQUMsK0RBQUQ7QUFBSyxhQUFTLEVBQUVDLGlEQUFVLENBQUNILFlBQVksR0FBR0ksbURBQU0sQ0FBQ0MsU0FBVixHQUFzQkQsbURBQU0sQ0FBQ0UsTUFBMUM7QUFBMUIsS0FDS04sWUFBWSxJQUFJO0FBQVEsV0FBTyxFQUFFQztBQUFqQixLQUErQixZQUEvQixDQURyQixFQUVJLDJEQUFDLDJEQUFEO0FBQ0ksbUJBQWUsTUFEbkI7QUFFSSxnQkFBWSxFQUFFRCxZQUZsQjtBQUdJLGFBQVMsRUFBRUU7QUFIZixJQUZKLENBRFc7QUFBQSxDQUFmOztBQVdBSCxNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFDZlAsY0FBWSxFQUFFUSxpREFBUyxDQUFDQyxJQURUO0FBRWZSLGFBQVcsRUFBRU8saURBQVMsQ0FBQ0UsSUFGUjtBQUdmUixXQUFTLEVBQUVNLGlEQUFTLENBQUNHO0FBSE4sQ0FBbkI7O0FBTUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUM5QmIsZ0JBQVksRUFBRWEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxJQUFqQixDQUFzQmY7QUFETixHQUFMO0FBQUEsQ0FBN0I7O0FBSUEsSUFBTWdCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsUUFBUTtBQUFBLFNBQUs7QUFDcENoQixlQUFXLEVBQUU7QUFBQSxhQUFNZ0IsUUFBUSxDQUFDQyxpRUFBUyxDQUFDLEtBQUQsQ0FBVixDQUFkO0FBQUE7QUFEdUIsR0FBTDtBQUFBLENBQW5DOztBQUlBLElBQU1DLGVBQWUsR0FBR0MsMkRBQU8sQ0FDM0JSLGVBRDJCLEVBRTNCSSxrQkFGMkIsQ0FBUCxDQUd0QmpCLE1BSHNCLENBQXhCLEMsQ0FLQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTXNCLGFBQWEsR0FBR0MscURBQU8sQ0FDekJDLDhEQUR5QixFQUV6QkMsZ0VBRnlCLEVBR3pCQyw0REFIeUIsQ0FBUCxDQUlwQk4sZUFKb0IsQ0FBdEI7QUFNQSxJQUFNTyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosU0FBMUI7QUFFQUssZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQiwyREFBQyxhQUFEO0FBQWUsY0FBWTtBQUEzQixFQUFoQixFQUFnRE4sU0FBaEQsRSIsImZpbGUiOiJjaHVua3MvcGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGxheWVyX3N0YWdlLW9ubHlfM1dIWk4ge1xcbiAgICB3aWR0aDogY2FsYyg0ODBweCArIDFyZW0pO1xcbn1cXG5cXG4ucGxheWVyX2VkaXRvcl93a1RqYSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyX3N0YWdlLW9ubHlfM1dIWk4gKiB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzdGFnZS1vbmx5XCI6IFwicGxheWVyX3N0YWdlLW9ubHlfM1dIWk5cIixcblx0XCJzdGFnZU9ubHlcIjogXCJwbGF5ZXJfc3RhZ2Utb25seV8zV0haTlwiLFxuXHRcImVkaXRvclwiOiBcInBsYXllcl9lZGl0b3Jfd2tUamFcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi9wbGF5ZXIuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuL3BsYXllci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuL3BsYXllci5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Y29tcG9zZX0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL2NvbXBvbmVudHMvYm94L2JveC5qc3gnO1xuaW1wb3J0IEdVSSBmcm9tICcuLi9jb250YWluZXJzL2d1aS5qc3gnO1xuaW1wb3J0IEhhc2hQYXJzZXJIT0MgZnJvbSAnLi4vbGliL2hhc2gtcGFyc2VyLWhvYy5qc3gnO1xuaW1wb3J0IEFwcFN0YXRlSE9DIGZyb20gJy4uL2xpYi9hcHAtc3RhdGUtaG9jLmpzeCc7XG5pbXBvcnQgVGl0bGVkSE9DIGZyb20gJy4uL2xpYi90aXRsZWQtaG9jLmpzeCc7XG5cbmltcG9ydCB7c2V0UGxheWVyfSBmcm9tICcuLi9yZWR1Y2Vycy9tb2RlJztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBXYXJuIGJlZm9yZSBuYXZpZ2F0aW5nIGF3YXlcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB0cnVlO1xufVxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGxheWVyLmNzcyc7XG5cbmNvbnN0IFBsYXllciA9ICh7aXNQbGF5ZXJPbmx5LCBvblNlZUluc2lkZSwgcHJvamVjdElkfSkgPT4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc05hbWVzKGlzUGxheWVyT25seSA/IHN0eWxlcy5zdGFnZU9ubHkgOiBzdHlsZXMuZWRpdG9yKX0+XG4gICAgICAgIHtpc1BsYXllck9ubHkgJiYgPGJ1dHRvbiBvbkNsaWNrPXtvblNlZUluc2lkZX0+eydTZWUgaW5zaWRlJ308L2J1dHRvbj59XG4gICAgICAgIDxHVUlcbiAgICAgICAgICAgIGVuYWJsZUNvbW11bml0eVxuICAgICAgICAgICAgaXNQbGF5ZXJPbmx5PXtpc1BsYXllck9ubHl9XG4gICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cbiAgICAgICAgLz5cbiAgICA8L0JveD5cbik7XG5cblBsYXllci5wcm9wVHlwZXMgPSB7XG4gICAgaXNQbGF5ZXJPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlZUluc2lkZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcHJvamVjdElkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGlzUGxheWVyT25seTogc3RhdGUuc2NyYXRjaEd1aS5tb2RlLmlzUGxheWVyT25seVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgb25TZWVJbnNpZGU6ICgpID0+IGRpc3BhdGNoKHNldFBsYXllcihmYWxzZSkpXG59KTtcblxuY29uc3QgQ29ubmVjdGVkUGxheWVyID0gY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFBsYXllcik7XG5cbi8vIG5vdGUgdGhhdCByZWR1eCdzICdjb21wb3NlJyBmdW5jdGlvbiBpcyBqdXN0IGJlaW5nIHVzZWQgYXMgYSBnZW5lcmFsIHV0aWxpdHkgdG8gbWFrZVxuLy8gdGhlIGhpZXJhcmNoeSBvZiBIT0MgY29uc3RydWN0b3IgY2FsbHMgY2xlYXJlciBoZXJlOyBpdCBoYXMgbm90aGluZyB0byBkbyB3aXRoIHJlZHV4J3Ncbi8vIGFiaWxpdHkgdG8gY29tcG9zZSByZWR1Y2Vycy5cbmNvbnN0IFdyYXBwZWRQbGF5ZXIgPSBjb21wb3NlKFxuICAgIEFwcFN0YXRlSE9DLFxuICAgIEhhc2hQYXJzZXJIT0MsXG4gICAgVGl0bGVkSE9DXG4pKENvbm5lY3RlZFBsYXllcik7XG5cbmNvbnN0IGFwcFRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHBUYXJnZXQpO1xuXG5SZWFjdERPTS5yZW5kZXIoPFdyYXBwZWRQbGF5ZXIgaXNQbGF5ZXJPbmx5IC8+LCBhcHBUYXJnZXQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==