var _excluded = ["className", "orientation", "children"];
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
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons/faEllipsisH";
export var EllipsisButton = function EllipsisButton(_ref) {
  var className = _ref.className,
    orientation = _ref.orientation,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-button--ellipsis");
  var icon = orientation === "vertical" ? faEllipsisV : faEllipsisH;
  return /*#__PURE__*/ React.createElement(
    Button,
    _extends({}, rest, {
      className: classNames(cName, className),
      icon: /*#__PURE__*/ React.createElement(FontAwesomeIcon, {
        icon: icon,
      }),
    }),
    children
  );
};
process.env.NODE_ENV !== "production"
  ? (EllipsisButton.propTypes = {
      /** Primary content. */
      children: PropTypes.node,
      /** Additional classes. */
      className: PropTypes.string,
      orientation: PropTypes.oneOf(["horizontal", "vertical"]),
    })
  : void 0;
EllipsisButton.defaultProps = {
  className: "",
  orientation: "horizontal",
};
export default EllipsisButton;
