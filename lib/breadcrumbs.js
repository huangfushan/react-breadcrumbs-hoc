"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRouterBreadcrumbsHoc = _interopRequireDefault(require("react-router-breadcrumbs-hoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var breadcrumbs = function breadcrumbs() {
  var router = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var homepageHasShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return function (WrappedComponent) {
    var compDisplayName = "breadcrumbs(".concat(getDisplayName(WrappedComponent), ")");
    var newRouter = router.map(function () {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        path: item.path,
        breadcrumb: item.breadcrumb,
        hascomponent: item.component ? 1 : 0
      };
    });

    var Breadcrumbs =
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(Breadcrumbs, _React$Component);

        function Breadcrumbs() {
          _classCallCheck(this, Breadcrumbs);

          return _possibleConstructorReturn(this, _getPrototypeOf(Breadcrumbs).apply(this, arguments));
        }

        _createClass(Breadcrumbs, [{
          key: "componentWillMount",
          value: function componentWillMount() {
            if (process.env.NODE_ENV !== 'production' && typeof homepageHasShow !== 'boolean') {
              console.error(compDisplayName + ': The second parameter should be a boolean');
            }
          }
        }, {
          key: "getCrumbRender",
          value: function getCrumbRender() {
            var breadcrumbs = this.props.breadcrumbs;
            var crumbRender = breadcrumbs.map(function (item, index) {
              if (index === 0 && !homepageHasShow) return null;
              if (index === breadcrumbs.length - 1) return item;
              if (index && !item.props.hascomponent) return _react.default.createElement('span', {
                key: index
              }, _react.default.createElement('span', null, item), _react.default.createElement('i', null, ' / '));
              return _react.default.createElement('span', {
                key: index
              }, _react.default.createElement(_reactRouterDom.Link, {
                to: item.props.match.url
              }, item), index < breadcrumbs.length - 1 && _react.default.createElement('i', null, ' / '));
            });
            return _react.default.createElement('div', {
              className: 'breadcrumbs-hoc'
            }, crumbRender, _react.default.createElement('div'), _react.default.createElement(WrappedComponent, this.props));
          }
        }, {
          key: "render",
          value: function render() {
            return this.getCrumbRender();
          }
        }]);

        return Breadcrumbs;
      }(_react.default.Component);

    Breadcrumbs.displayName = compDisplayName;
    Breadcrumbs.WrappedComponent = WrappedComponent;
    return (0, _reactRouterBreadcrumbsHoc.default)(newRouter)(Breadcrumbs);
  };
};

var _default = breadcrumbs;
exports.default = _default;