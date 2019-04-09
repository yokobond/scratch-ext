var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["compatibilitytesting"],{

/***/ "./src/playground/compatibility-testing.jsx":
/*!**************************************************!*\
  !*** ./src/playground/compatibility-testing.jsx ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var WrappedGui = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]));
var DEFAULT_PROJECT_ID = '10015059';

var Player =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player(props) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, props));
    _this.updateProject = _this.updateProject.bind(_assertThisInitialized(_this));
    _this.state = {
      projectId: window.location.hash.substring(1) || DEFAULT_PROJECT_ID
    };
    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('hashchange', this.updateProject);

      if (!window.location.hash.substring(1)) {
        window.location.hash = DEFAULT_PROJECT_ID;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.addEventListener('hashchange', this.updateProject);
    }
  }, {
    key: "updateProject",
    value: function updateProject() {
      this.setState({
        projectId: window.location.hash.substring(1)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
        isPlayerOnly: true,
        isFullScreen: false
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        allowFullScreen: true,
        allowTransparency: true,
        frameBorder: "0",
        height: "402",
        src: "https://scratch.mit.edu/projects/embed/".concat(this.state.projectId, "/?autostart=true"),
        width: "485"
      }));
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Player, null), appTarget);

/***/ })

},[["./src/playground/compatibility-testing.jsx","lib.min"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HVUkvLi9zcmMvcGxheWdyb3VuZC9jb21wYXRpYmlsaXR5LXRlc3RpbmcuanN4Il0sIm5hbWVzIjpbIldyYXBwZWRHdWkiLCJBcHBTdGF0ZUhPQyIsIkhhc2hQYXJzZXJIT0MiLCJHVUkiLCJERUZBVUxUX1BST0pFQ1RfSUQiLCJQbGF5ZXIiLCJwcm9wcyIsInVwZGF0ZVByb2plY3QiLCJiaW5kIiwic3RhdGUiLCJwcm9qZWN0SWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHJpbmciLCJhZGRFdmVudExpc3RlbmVyIiwic2V0U3RhdGUiLCJkaXNwbGF5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJhcHBUYXJnZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLHNFQUFXLENBQUNDLHdFQUFhLENBQUNDLDJEQUFELENBQWQsQ0FBOUI7QUFHQSxJQUFNQyxrQkFBa0IsR0FBRyxVQUEzQjs7SUFFTUMsTTs7Ozs7QUFDRixrQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNoQixnRkFBTUEsS0FBTjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsK0JBQXJCO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGVBQVMsRUFBRUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsU0FBckIsQ0FBK0IsQ0FBL0IsS0FBcUNWO0FBRHZDLEtBQWI7QUFKZ0I7QUFPbkI7Ozs7d0NBQ29CO0FBQ2pCTyxZQUFNLENBQUNJLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLEtBQUtSLGFBQTNDOztBQUNBLFVBQUksQ0FBQ0ksTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBTCxFQUF3QztBQUNwQ0gsY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QlQsa0JBQXZCO0FBQ0g7QUFDSjs7OzJDQUN1QjtBQUNwQk8sWUFBTSxDQUFDSSxnQkFBUCxDQUF3QixZQUF4QixFQUFzQyxLQUFLUixhQUEzQztBQUNIOzs7b0NBQ2dCO0FBQ2IsV0FBS1MsUUFBTCxDQUFjO0FBQUNOLGlCQUFTLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFNBQXJCLENBQStCLENBQS9CO0FBQVosT0FBZDtBQUNIOzs7NkJBQ1M7QUFDTixhQUNJO0FBQUssYUFBSyxFQUFFO0FBQUNHLGlCQUFPLEVBQUU7QUFBVjtBQUFaLFNBQ0ksMkRBQUMsVUFBRDtBQUNJLG9CQUFZLE1BRGhCO0FBRUksb0JBQVksRUFBRTtBQUZsQixRQURKLEVBS0k7QUFDSSx1QkFBZSxNQURuQjtBQUVJLHlCQUFpQixNQUZyQjtBQUdJLG1CQUFXLEVBQUMsR0FIaEI7QUFJSSxjQUFNLEVBQUMsS0FKWDtBQUtJLFdBQUcsbURBQTRDLEtBQUtSLEtBQUwsQ0FBV0MsU0FBdkQscUJBTFA7QUFNSSxhQUFLLEVBQUM7QUFOVixRQUxKLENBREo7QUFnQkg7Ozs7RUF0Q2dCUSw0Q0FBSyxDQUFDQyxTOztBQXlDM0IsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUQsUUFBUSxDQUFDRSxJQUFULENBQWNDLFdBQWQsQ0FBMEJKLFNBQTFCO0FBRUFLLGdEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsMkRBQUMsTUFBRCxPQUFoQixFQUE0Qk4sU0FBNUIsRSIsImZpbGUiOiJjaHVua3MvY29tcGF0aWJpbGl0eXRlc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBHVUkgZnJvbSAnLi4vY29udGFpbmVycy9ndWkuanN4JztcbmltcG9ydCBIYXNoUGFyc2VySE9DIGZyb20gJy4uL2xpYi9oYXNoLXBhcnNlci1ob2MuanN4JztcbmltcG9ydCBBcHBTdGF0ZUhPQyBmcm9tICcuLi9saWIvYXBwLXN0YXRlLWhvYy5qc3gnO1xuY29uc3QgV3JhcHBlZEd1aSA9IEFwcFN0YXRlSE9DKEhhc2hQYXJzZXJIT0MoR1VJKSk7XG5cblxuY29uc3QgREVGQVVMVF9QUk9KRUNUX0lEID0gJzEwMDE1MDU5JztcblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3QgPSB0aGlzLnVwZGF0ZVByb2plY3QuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvamVjdElkOiB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkgfHwgREVGQVVMVF9QUk9KRUNUX0lEXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLnVwZGF0ZVByb2plY3QpO1xuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBERUZBVUxUX1BST0pFQ1RfSUQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMudXBkYXRlUHJvamVjdCk7XG4gICAgfVxuICAgIHVwZGF0ZVByb2plY3QgKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9qZWN0SWQ6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKX0pO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgICAgICAgIDxXcmFwcGVkR3VpXG4gICAgICAgICAgICAgICAgICAgIGlzUGxheWVyT25seVxuICAgICAgICAgICAgICAgICAgICBpc0Z1bGxTY3JlZW49e2ZhbHNlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dUcmFuc3BhcmVuY3lcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDAyXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9zY3JhdGNoLm1pdC5lZHUvcHJvamVjdHMvZW1iZWQvJHt0aGlzLnN0YXRlLnByb2plY3RJZH0vP2F1dG9zdGFydD10cnVlYH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0ODVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IGFwcFRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHBUYXJnZXQpO1xuXG5SZWFjdERPTS5yZW5kZXIoPFBsYXllciAvPiwgYXBwVGFyZ2V0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=