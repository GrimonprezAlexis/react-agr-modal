import React from 'react';
import './modal.scss';

export const Modal = ({ handleClose, show, title, body }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <h3>{title}</h3>
          <button type="button" class="close" onClick={handleClose}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>{body}</p>
        </div>
        <div className="modal-footer">
          <button type="button" onClick={handleClose}>Close</button>
        </div>
      </section>
      

    </div>
  );
};