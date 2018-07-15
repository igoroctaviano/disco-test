import React from "react";

const Modal = ({ isActive, onClose, itemRenderer }) =>
  isActive ? (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close-button"></span>
        {itemRenderer()}
      </div>
    </div>
  ) : null;

export default Modal;
