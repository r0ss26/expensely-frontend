import React, { useState, useEffect, useContext, useRef } from 'react';
import AuthContext from '../../../context/auth/authContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import capitalize from '../../../utils/capitalize';
import styles from './CreateTransactionModal.module.css'; // Override materialize dropdown height
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
