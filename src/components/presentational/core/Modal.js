import React from "react";
import PropTypes from 'prop-types';

const Modal = ({ isActive, onClose, itemRenderer }) =>
  isActive ? (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close-button"></span>
        {itemRenderer()}
      </div>
    </div>
  ) : null;

Modal.propTypes = {
  isActive: PropTypes.bool,
  onClose: PropTypes.func,
  itemRenderer: PropTypes.func
};

export default Modal;
