"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

require("./modal.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Modal = function Modal(_ref) {
  var show = _ref.show,
      close = _ref.close,
      title = _ref.title,
      body = _ref.body;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal modal__wrapper",
    style: {
      transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
      opacity: show ? '1' : '0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/_react["default"].createElement("p", null, title), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: close,
    className: "close-modal-btn"
  }, "x")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal__content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal__body"
  }, /*#__PURE__*/_react["default"].createElement("p", null, body)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal__footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: close,
    className: "btn-cancel"
  }, "Close"))));
};

exports.Modal = Modal;
