webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/how-it-works.js":
/*!************************************!*\
  !*** ./components/how-it-works.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _how_it_works_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./how-it-works.css */ "./components/how-it-works.css");
/* harmony import */ var _how_it_works_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_how_it_works_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stepper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepper-item */ "./components/stepper-item.js");
var _jsxFileName = "/home/jeremie/Workspace/deepavatar-client/components/how-it-works.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "howitworks__root",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "How it works"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_stepper_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    index: 0,
    title: "Step one",
    subtitle: "Upload your image",
    image: "static/cat-normal.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
});

/***/ }),

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
    value: function renderText() {}
  }, {
    key: "renderImage",
    value: function renderImage() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stepper-item__root",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, this.props.index % 2 === 0 ? this.renderText() : this.renderImage(), this.props.index % 2 === 0 ? this.renderImage() : this.renderText());
    }
  }]);

  return StepperItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (StepperItem);

/***/ })

})
//# sourceMappingURL=index.js.3630bc9a3f93d33705f9.hot-update.js.map