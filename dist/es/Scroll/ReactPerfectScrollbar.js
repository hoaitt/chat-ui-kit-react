function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
var _excluded = [
  "className",
  "style",
  "option",
  "options",
  "containerRef",
  "onScrollY",
  "onScrollX",
  "onScrollUp",
  "onScrollDown",
  "onScrollLeft",
  "onScrollRight",
  "onYReachStart",
  "onYReachEnd",
  "onXReachStart",
  "onXReachEnd",
  "component",
  "onSync",
  "children",
];
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
// https://github.com/goldenyz/react-perfect-scrollbar/
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import PerfectScrollbar from "./perfect-scrollbar.esm.js";
var handlerNameByEvent = {
  "ps-scroll-y": "onScrollY",
  "ps-scroll-x": "onScrollX",
  "ps-scroll-up": "onScrollUp",
  "ps-scroll-down": "onScrollDown",
  "ps-scroll-left": "onScrollLeft",
  "ps-scroll-right": "onScrollRight",
  "ps-y-reach-start": "onYReachStart",
  "ps-y-reach-end": "onYReachEnd",
  "ps-x-reach-start": "onXReachStart",
  "ps-x-reach-end": "onXReachEnd",
};
Object.freeze(handlerNameByEvent);
var ScrollBar = /*#__PURE__*/ (function (_Component) {
  _inherits(ScrollBar, _Component);
  var _super = _createSuper(ScrollBar);
  function ScrollBar(props) {
    var _this;
    _classCallCheck(this, ScrollBar);
    _this = _super.call(this, props);
    _this.handleRef = _this.handleRef.bind(_assertThisInitialized(_this));
    _this._handlerByEvent = {};
    return _this;
  }
  _createClass(ScrollBar, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.option) {
          console.warn(
            'react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"'
          );
        }
        this._ps = new PerfectScrollbar(
          this._container,
          this.props.options || this.props.option
        );
        // hook up events
        this._updateEventHook();
        this._updateClassName();
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        this._updateEventHook(prevProps);
        this.updateScroll();
        if (prevProps.className !== this.props.className) {
          this._updateClassName();
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this2 = this;
        // unhook up evens
        Object.keys(this._handlerByEvent).forEach(function (key) {
          var value = _this2._handlerByEvent[key];
          if (value) {
            _this2._container.removeEventListener(key, value, false);
          }
        });
        this._handlerByEvent = {};
        this._ps.destroy();
        this._ps = null;
      },
    },
    {
      key: "_updateEventHook",
      value: function _updateEventHook() {
        var _this3 = this;
        var prevProps =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        // hook up events
        Object.keys(handlerNameByEvent).forEach(function (key) {
          var callback = _this3.props[handlerNameByEvent[key]];
          var prevCallback = prevProps[handlerNameByEvent[key]];
          if (callback !== prevCallback) {
            if (prevCallback) {
              var prevHandler = _this3._handlerByEvent[key];
              _this3._container.removeEventListener(key, prevHandler, false);
              _this3._handlerByEvent[key] = null;
            }
            if (callback) {
              var handler = function handler() {
                return callback(_this3._container);
              };
              _this3._container.addEventListener(key, handler, false);
              _this3._handlerByEvent[key] = handler;
            }
          }
        });
      },
    },
    {
      key: "_updateClassName",
      value: function _updateClassName() {
        var className = this.props.className;
        var psClassNames = this._container.className
          .split(" ")
          .filter(function (name) {
            return name.match(/^ps([-_].+|)$/);
          })
          .join(" ");
        if (this._container) {
          this._container.className = "scrollbar-container"
            .concat(className ? " ".concat(className) : "")
            .concat(psClassNames ? " ".concat(psClassNames) : "");
        }
      },
    },
    {
      key: "updateScroll",
      value: function updateScroll() {
        this.props.onSync(this._ps);
      },
    },
    {
      key: "handleRef",
      value: function handleRef(ref) {
        this._container = ref;
        this.props.containerRef(ref);
      },
    },
    {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          option = _this$props.option,
          options = _this$props.options,
          containerRef = _this$props.containerRef,
          onScrollY = _this$props.onScrollY,
          onScrollX = _this$props.onScrollX,
          onScrollUp = _this$props.onScrollUp,
          onScrollDown = _this$props.onScrollDown,
          onScrollLeft = _this$props.onScrollLeft,
          onScrollRight = _this$props.onScrollRight,
          onYReachStart = _this$props.onYReachStart,
          onYReachEnd = _this$props.onYReachEnd,
          onXReachStart = _this$props.onXReachStart,
          onXReachEnd = _this$props.onXReachEnd,
          component = _this$props.component,
          onSync = _this$props.onSync,
          children = _this$props.children,
          remainProps = _objectWithoutProperties(_this$props, _excluded);
        var Comp = component;
        return /*#__PURE__*/ React.createElement(
          Comp,
          _extends(
            {
              style: style,
              ref: this.handleRef,
            },
            remainProps
          ),
          children
        );
      },
    },
  ]);
  return ScrollBar;
})(Component);
export { ScrollBar as default };
ScrollBar.defaultProps = {
  className: "",
  style: undefined,
  option: undefined,
  options: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined,
  onSync: function onSync(ps) {
    return ps.update();
  },
  component: "div",
};
process.env.NODE_ENV !== "production"
  ? (ScrollBar.propTypes = {
      children: PropTypes.node.isRequired,
      className: PropTypes.string,
      style: PropTypes.object,
      option: PropTypes.object,
      options: PropTypes.object,
      containerRef: PropTypes.func,
      onScrollY: PropTypes.func,
      onScrollX: PropTypes.func,
      onScrollUp: PropTypes.func,
      onScrollDown: PropTypes.func,
      onScrollLeft: PropTypes.func,
      onScrollRight: PropTypes.func,
      onYReachStart: PropTypes.func,
      onYReachEnd: PropTypes.func,
      onXReachStart: PropTypes.func,
      onXReachEnd: PropTypes.func,
      onSync: PropTypes.func,
      component: PropTypes.string,
    })
  : void 0;
