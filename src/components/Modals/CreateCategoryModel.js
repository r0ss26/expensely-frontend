import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import CreateCategoryForm from '../Forms/CreateCategoryForm';

const CreateCategoryModel = () => {
  // Default transaction type is expense

  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  }, []);



  return (
    <>
      <div id="create-category-modal" className="modal">
        <div className="modal-content center-align">
<<<<<<< HEAD
          <CreateCategoryForm />
=======
          <h4>Add a new category</h4>
          <p>Select expense or income</p>
          <button
            id="expense"
            className={`waves-effect waves-light btn ${
              transactionType === 'expense' ? 'disabled' : ''
            }`}
            onClick={() => setTransactionType('expense')}
          >
            <i className="material-icons right">money_off</i>Expense
          </button>
          <button
            id="income"
            className={`waves-effect waves-light btn ${
              transactionType === 'income' ? 'disabled' : ''
            }`}
            onClick={() => setTransactionType('income')}
          >
            <i className="material-icons left">attach_money</i>Income
          </button>

          <form>
            <div className="input-field col s6">
              <input
                name="input"
                type="text"
                className="category_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="input">Enter a category name</label>
            </div>
            {/* <div className="input-field col s6">
                            <p>Icons</p>
                        </div> */}
            <div className="input-field col s6">
              <label htmlFor="color">Pick a color</label>
              <SliderPicker
                color={color}
                onChangeComplete={handleColor}
                // styles={{marginTop: 10 }}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Cancel
          </a>
          <a
          id="submit-category"
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
            onClick={handleFormSubmit}
          >
            Add Category
          </a>
>>>>>>> Add CRUD integration tests for tansactions, categories and budgets
        </div>
      </div>
    </>
  );
};

export default CreateCategoryModel;