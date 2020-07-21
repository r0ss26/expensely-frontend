import React, { useEffect } from 'react';
import M from 'materialize-css';

const ConfirmationModal = (props) => {
  useEffect(() => {
    const modal = document.querySelector('.confirmationModal');
    M.Modal.init(modal);
  }, []);

  return (
    <>
      <a class="waves-effect waves-light btn modal-trigger" href="#confirmationModal">
        Delete
      </a>

      <div id="confirmationModal" className="confirmationModal modal">
        <div className="modal-content">
          <p>{props.confirmationText} {props.transactionId}</p>
        </div>
        <div className="modal-footer">
          <a
            onClick={() => {
              console.log('clicked')
              props.onDelete()
            }}
            className="modal-close waves-effect waves-green btn-flat"
          >
            {props.confirm}
          </a>
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            {props.decline}
          </a>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
