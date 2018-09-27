webpackHotUpdate("static/development/pages/create.js",{

/***/ "./components/create/select-transformation.js":
/*!****************************************************!*\
  !*** ./components/create/select-transformation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectTransformation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _select_transformation_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-transformation.css */ "./components/create/select-transformation.css");
/* harmony import */ var _select_transformation_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_select_transformation_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _transformation_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformation-button */ "./components/create/transformation-button.js");
/* harmony import */ var _services_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/static */ "./services/static.js");
var _jsxFileName = "/home/jeremie/Workspace/deepavatar-client/components/create/select-transformation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var transformations = ['candy', 'mosaic', 'rain', 'udnie'].map(function (key) {
  return {
    key: key,
    image: _services_static__WEBPACK_IMPORTED_MODULE_3__["default"].url("/static/transformation-".concat(key, "-cat.jpg"))
  };
});

var SelectTransformation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectTransformation, _React$Component);

  function SelectTransformation() {
    _classCallCheck(this, SelectTransformation);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectTransformation).apply(this, arguments));
  }

  _createClass(SelectTransformation, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "select-transformation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Choose your transformation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, transformations.map(function (transformation) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_transformation_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: transformation.key,
          selected: transformation.key === _this.props.selected,
          transformation: transformation,
          onClick: _this.props.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        });
      })));
    }
  }]);

  return SelectTransformation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=create.js.28a162b1fb8155b892f1.hot-update.js.map