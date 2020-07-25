import React, {useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import EditTransactionForm from '../../Forms/EditTransactionForm';

const EditTransactionModal = (props) => {
  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelector('#edit-transaction-modal');
    M.Modal.init(modal);
  }, []);

  return (
    <div id="edit-transaction-modal" className="modal editTransactionModal">
      <div className="modal-content center-align">
        <EditTransactionForm 
          transactionId={props.transactionId}
        />
      </div>
    </div>
  );
};

export default EditTransactionModal;
