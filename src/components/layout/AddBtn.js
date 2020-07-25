import React from 'react';
import CreateTransactionModal from '../Modals/CreateTransactionModal/CreateTransactionModal';
import CreateBudgetModal from '../Modals/CreateBudgetModal.js/CreateBudgetModal';
import CreateCategoryModel from '../Modals/CreateCategoryModel'
import EditCategoryModel from '../Modals/EditCategoryModel';

const AddBtn = () => {
  return (
    <>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red darken-2 modal-trigger">
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
            <a href="#create-category-modal" className="btn-floating green modal-trigger">
              <i className="medium material-icons">storage</i>
            </a>
          </li>
          <li
            href="#create-transaction-modal"
            className="btn-floating btn-medium blue darken-2 modal-trigger"
          >
            <i className="medium material-icons">insert_chart</i>
          </li>
        </ul>
      </div>
      <CreateCategoryModel />
      <CreateTransactionModal />
      <EditCategoryModel />
      <CreateBudgetModal />
    </>
  );
};

export default AddBtn;
