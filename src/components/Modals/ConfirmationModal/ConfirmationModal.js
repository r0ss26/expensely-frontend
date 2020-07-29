import React, { useEffect } from 'react';
import M from 'materialize-css';

const ConfirmationModal = (props) => {
  useEffect(() => {
    const modal = document.querySelectorAll('.confirmationModal');
    M.Modal.init(modal);
  }, []);

  return (
    <>
      <div id="confirmationModal" className="confirmationModal modal">
        <div className="modal-content">
          <p>{props.confirmationText}</p>
        </div>
        <div className="modal-footer">
          <button
             data-tag='delete'
            onClick={props.onConfirm}
            className="modal-close waves-effect waves-green btn-flat"
          >
            {props.confirm}
          </button>
          <button
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            {props.decline}
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
