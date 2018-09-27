webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/stepper-item.js":
/*!************************************!*\
  !*** ./components/stepper-item.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stepper_item_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stepper-item.css */ "./components/stepper-item.css");
/* harmony import */ var _stepper_item_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stepper_item_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jeremie/Workspace/deepavatar-client/components/stepper-item.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var StepperItem =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(StepperItem, _React$PureComponent);

  function StepperItem() {
    _classCallCheck(this, StepperItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(StepperItem).apply(this, arguments));
  }

  _createClass(StepperItem, [{
    key: "renderText",
    value: function renderText() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stepper-item__text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      });
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stepper-item__text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classNames = ['stepper-item'];

      if (this.props.index % 2 === 0) {
        classNames.push('stepper-item--inverted');
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classNames.join(' '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.renderText(), this.renderImage());
    }
  }]);

  return StepperItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (StepperItem);

/***/ })

})
//# sourceMappingURL=index.js.9cd4d6422700c187839d.hot-update.js.map