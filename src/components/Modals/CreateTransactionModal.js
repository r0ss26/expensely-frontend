import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';
import styles from './CreateTransactionModal.module.css'; // Override materialize dropdown height

const CreateTransactionModal = () => {
  // Default transaction type is expense
  const [transactionType, setTransactionType] = useState('expense');

  const [categories, setCategories] = useState([]);

  // Form state
  const [input, setInput] = useState({});

  const handleInputChange = (event) =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('/transactions', {
        transactionType,
        ...input,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Needed to overwrite materilize-css initializer, which resets dynamic elements
  useEffect(() => {
    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);
  }, [categories, transactionType]);

  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    // Required by materialize to initialize the DatePicker
    const datePicker = document.querySelector('.datepicker');
    M.Datepicker.init(datePicker, {
      onSelect: (date) => setInput({ ...input, date }),
    });

    // Required by materialize to initialize the Select
    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);

    // Store the users categories in the state
    const getCategories = async () => {
      const res = await axios.get('/auth');
      setCategories(res.data.categories);
    };

    getCategories();
    // eslint-disable-next-line
  }, []);

  const capitalize = (string) => {
    let splitString = string.split(' ');
    for (let i = 0; i <= splitString.length - 1; i++) {
      splitString[i] =
        splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');
  };

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
              <input
                name="date"
                id="date"
                type="text"
                className="datepicker validate"
              />
              <label htmlFor="date">Date</label>
            </div>

            <div className="input-field col s6">
              <select
                name="category"
                onChange={handleInputChange}
                style={{ maxHeight: '50px' }}
                size="5"
              >
                <option>Choose a category</option>
                {categories &&
                  categories
                    .filter((category) => category.type === transactionType)
                    .map((category) => (
                      <option
                        key={category._id}
                        value={category.name.toLowerCase()}
                      >
                        {capitalize(category.name)}
                      </option>
                    ))}
              </select>
              <label>Category</label>
            </div>

            <div className="input-field col s6">
              <input
                name="amount"
                onChange={handleInputChange}
                id="amount"
                type="number"
                className="validate"
              />
              <label htmlFor="amount">Amount ($)</label>
            </div>

            <div className="input-field col s6">
              <input
                name="note"
                onChange={handleInputChange}
                id="note"
                type="text"
                className="validate"
              />
              <label htmlFor="note">Note</label>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
            onClick={handleFormSubmit}
          >
            Add Transaction
          </a>
        </div>
      </div>

      <button
        style={{ position: 'absolute', bottom: '20px', right: '20px' }}
        className="btn-floating btn-large waves-effect waves-light red modal-trigger"
        data-target="modal1"
      >
        <i className="material-icons">add</i>
      </button>
    </>
  );
};

export default CreateTransactionModal;
