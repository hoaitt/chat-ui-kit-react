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
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
export var ConversationHeaderActions = function ConversationHeaderActions(
  _ref
) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-conversation-header__actions");
  return /*#__PURE__*/ React.createElement(
    "section",
    _extends({}, rest, {
      className: classNames(cName, className),
    }),
    children
  );
};
ConversationHeaderActions.displayName = "ConversationHeader.Actions";
process.env.NODE_ENV !== "production"
  ? (ConversationHeaderActions.propTypes = {
      /** Primary content. */
      children: PropTypes.node,
      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
ConversationHeaderActions.defaultProps = {
  children: undefined,
};
export default ConversationHeaderActions;
