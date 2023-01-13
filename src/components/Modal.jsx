import React from "react";

const { createPortal } = require("react-dom");

const Modal = ({ children }) => {
  return createPortal(
    <div className="modal-bg">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };
