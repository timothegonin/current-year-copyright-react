"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return /*#__PURE__*/_react.default.createElement("p", null, "Copyright \xA9 ", currentYear);
};
var _default = Copyright;
exports.default = _default;