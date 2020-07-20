import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios'

const CreateTransactionModal = () => {
  // Set the initial transaction type to expense
  const [transactionType, setTransactionType] = useState('expense');

  const [categories, setCategories] = useState(null)

  const getCategories = async () => {
    const user = await axios.get('http://localhost:5000/auth', {headers: {'Authorization': localStorage.getItem('jwt')}})
    setCategories(user.categories)
  }

  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    // Required by materialize to initialize the DatePicker
    const datePicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datePicker);

    // Required by materialize to initialize the DatePicker
    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);

    getCategories();
  }, []);

  return (
    <>
      <div id="modal1" className="modal">
        <div className="modal-content center-align">
          <h4>Add a Transaction</h4>

          <a
            id="expense"
            className={`waves-effect waves-light btn ${
              transactionType === 'expense' ? 'disabled' : ''
            }`}
            onClick={() => setTransactionType('expense')}
          >
            <i className="material-icons right">money_off</i>Expense
          </a>
          <a
            id="income"
            className={`waves-effect waves-light btn ${
              transactionType === 'income' ? 'disabled' : ''
            }`}
            onClick={() => setTransactionType('income')}
          >
            <i className="material-icons left">attach_money</i>Income
          </a>

          <form>
            <div className="input-field col s6">
              <input id="date" type="text" className="datepicker validate" />
              <label htmlFor="date">Date</label>
            </div>

            <div className="input-field col s6">
              <select>
                <option>Choose a category</option>
                {categories && categories
                  .filter((category) => category.type === transactionType)
                  .map((category) => (
                    <option value={category.name.toLowerCase()}>
                      {category.name}
                    </option>
                  ))}
              </select>
              <label>Category</label>
            </div>

            <div className="input-field col s6">
              <input id="amount" type="number" className="validate" />
              <label htmlFor="amount">Amount ($)</label>
            </div>

            <div className="input-field col s6">
              <input id="note" type="text" className="validate" />
              <label htmlFor="note">Note</label>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Add Transaction
          </a>
        </div>
      </div>

      <button
        style={{ position: 'absolute', bottom: '20px', right: '20px' }}
        class="btn-floating btn-large waves-effect waves-light red modal-trigger"
        data-target="modal1"
      >
        <i class="material-icons">add</i>
      </button>
    </>
  );
};

export default CreateTransactionModal;
