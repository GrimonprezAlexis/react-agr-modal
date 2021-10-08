import React from 'react';
import './modal.scss';

export const Modal = ({ show, close, title, body }) => {
  return (
    <div className="modal modal__wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal__header">
        <p>{title}</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal__content">
        <div className="modal__body">
          <p>{body}</p>
        </div>
        <div className="modal__footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};