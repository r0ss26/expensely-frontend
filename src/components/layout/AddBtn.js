import React from 'react';

import CreateTransactionModal from '../Modals/CreateTransactionModal/CreateTransactionModal';
import CategorySelect from '../CategorySelect/CategorySelect';
import CreateBudgetModal from '../Modals/CreateBudgetModal.js/CreateBudgetModal';

const AddBtn = () => {
  return (
    <>
      <div className="fixed-action-btn">
        <a
          href="#create-transaction-modal"
          className="btn-floating btn-large blue darken-2 modal-trigger"
        >
          <i className="large material-icons">add</i>
        </a>
        <ul>
          <li>
            <a
              href="#create-budget-modal"
              className="btn-floating orange modal-trigger"
            >
              <i className="medium material-icons">attach_money</i>
            </a>
          </li>

          <li>
            <a
              href="#add-category-modal"
              className="btn-floating green modal-trigger"
            >
              <i className="medium material-icons">storage</i>
            </a>
          </li>
        </ul>
      </div>
      <CreateTransactionModal />
      <CreateBudgetModal />
    </>
  );
};

export default AddBtn;
