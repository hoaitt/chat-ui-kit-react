var _excluded = ["children", "className"];
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
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
import React from "react";
import { prefix } from "../settings";
import { allowedChildren, getChildren } from "../utils";
import classNames from "classnames";
import Avatar from "../Avatar";
import AvatarGroup from "../AvatarGroup";
import ConversationHeaderBack from "./ConversationHeaderBack";
import ConversationHeaderActions from "./ConversationHeaderActions";
import ConversationHeaderContent from "./ConversationHeaderContent";
import PropTypes from "prop-types";
export var ConversationHeader = function ConversationHeader(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-conversation-header");
  var _getChildren = getChildren(children, [
      ConversationHeaderBack,
      Avatar,
      AvatarGroup,
      ConversationHeaderContent,
      ConversationHeaderActions,
    ]),
    _getChildren2 = _slicedToArray(_getChildren, 5),
    back = _getChildren2[0],
    avatar = _getChildren2[1],
    avatarGroup = _getChildren2[2],
    content = _getChildren2[3],
    actions = _getChildren2[4];
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(cName, className),
    }),
    back,
    avatar &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__avatar"),
        },
        avatar
      ),
    !avatar &&
      avatarGroup &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__avatar"),
        },
        avatarGroup
      ),
    content,
    actions
  );
};
ConversationHeader.displayName = "ConversationHeader";
process.env.NODE_ENV !== "production"
  ? (ConversationHeader.propTypes = {
      /**
       * Primary content.
       * Available elements:
       *
       * * &lt;Avatar /&gt;
       * * &lt;AvatarGroup /&gt;
       * * &lt;ConversationHeader.Back /&gt;
       * * &lt;ConversationHeader.Content /&gt;
       * * &lt;ConversationHeader.Actions /&gt;
       */
      children: allowedChildren([
        ConversationHeaderBack,
        Avatar,
        AvatarGroup,
        ConversationHeaderContent,
        ConversationHeaderActions,
      ]),
      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
ConversationHeader.defaultProps = {
  children: undefined,
};
ConversationHeader.Back = ConversationHeaderBack;
ConversationHeader.Actions = ConversationHeaderActions;
ConversationHeader.Content = ConversationHeaderContent;
export default ConversationHeader;
