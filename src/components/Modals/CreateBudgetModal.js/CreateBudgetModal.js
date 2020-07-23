import React, { useState, useEffect, useContext, useRef } from 'react';
import AuthContext from '../../../context/auth/authContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import CreateBudgetForm from '../../Forms/CreateBudgetForm'

const CreateBudgetModal = (props) => {
  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelector('#create-budget-modal');
    M.Modal.init(modal);
  }, []);

  return (
    <div id="create-budget-modal" className="modal">
      <div className="modal-content center-align">
        <CreateBudgetForm />
      </div>
    </div>
  );
};

export default CreateBudgetModal;
