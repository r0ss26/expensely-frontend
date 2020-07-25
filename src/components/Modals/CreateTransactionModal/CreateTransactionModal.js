import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './CreateTransactionModal.module.css'
import CreateTransactionForm from '../../Forms/CreateTransactionForm';

const CreateTransactionModal = (props) => {
  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelector('#create-transaction-modal');
    M.Modal.init(modal);
  }, []);

  return (
    <div id="create-transaction-modal" className="modal transactionModal">
      <div className="modal-content center-align">
        <CreateTransactionForm />
      </div>
    </div>
  );
};

export default CreateTransactionModal;
