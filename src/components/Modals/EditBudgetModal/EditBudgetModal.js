import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import EditBudgetForm from '../../Forms/EditBudgetForm';

const EditBudgetModal = (props) => {
  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelector('#edit-budget-modal');
    M.Modal.init(modal);
  }, []);

  return (
    <div id="edit-budget-modal" className="modal">
      <div className="modal-content center-align">
        <EditBudgetForm 
          budgetId={props.budgetId}
        />
      </div>
    </div>
  );
};

export default EditBudgetModal;
