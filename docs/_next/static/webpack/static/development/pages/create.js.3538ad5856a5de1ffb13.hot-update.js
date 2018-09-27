webpackHotUpdate("static/development/pages/create.js",{

/***/ "./components/loading-overlay.js":
/*!***************************************!*\
  !*** ./components/loading-overlay.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loading_overlay_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-overlay.css */ "./components/loading-overlay.css");
/* harmony import */ var _loading_overlay_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading_overlay_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jeremie/Workspace/deepavatar-client/components/loading-overlay.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return props.visible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading-overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }) : null;
});

/***/ }),

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/divider */ "./components/divider.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_loading_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/loading-overlay */ "./components/loading-overlay.js");
/* harmony import */ var _components_create_upload_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/create/upload-image */ "./components/create/upload-image.js");
/* harmony import */ var _components_create_select_transformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/create/select-transformation */ "./components/create/select-transformation.js");
/* harmony import */ var _components_create_email_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/create/email-address */ "./components/create/email-address.js");
var _jsxFileName = "/home/jeremie/Workspace/deepavatar-client/pages/create.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      running: false,
      file: null,
      transformation: null,
      email: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (email) {
      return _this.setState({
        email: email
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDrop", function (file) {
      return _this.setState({
        file: file
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelect", function (transformation) {
      return _this.setState({
        transformation: transformation.key
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSuccess", function (res) {
      if (res.status !== 200) {
        return _this.handleError();
      }

      _this.setState({
        running: false
      });

      alert('Your image will be processed soon');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleError", function () {
      _this.setState({
        running: false
      });

      alert('An error append...');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      _this.setState({
        running: true
      });

      var formData = new FormData();
      formData.append('picture', _this.state.file);
      formData.append('model', _this.state.transformation);
      formData.append('email', _this.state.email);
      window.fetch("".concat("http://localhost:3010", "/api/pictures"), {
        method: 'POST',
        body: formData
      }).then(_this.handleSuccess).catch(_this.handleError);
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_create_upload_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
        file: this.state.file,
        onDrop: this.handleDrop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_divider__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_create_select_transformation__WEBPACK_IMPORTED_MODULE_6__["default"], {
        selected: this.state.transformation,
        onClick: this.handleSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_create_email_address__WEBPACK_IMPORTED_MODULE_7__["default"], {
        disabled: this.state.running,
        onChange: this.handleChange,
        onSubmit: this.handleSubmit,
        value: this.state.email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading_overlay__WEBPACK_IMPORTED_MODULE_4__["default"], {
        visible: this.state.running,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/create")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=create.js.3538ad5856a5de1ffb13.hot-update.js.map