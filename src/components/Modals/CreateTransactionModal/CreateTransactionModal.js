import React, { useState, useEffect, useContext, useRef } from 'react';
import AuthContext from '../../../context/auth/authContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import styles from './CreateTransactionModal.module.css'; // Override materialize dropdown height

const CreateTransactionModal = (props) => {
  const authContext = useContext(AuthContext);

  const dateInput = useRef(null);

  const { user, error, addTransaction } = authContext;

  let categories = [];
  if (user) categories = user.categories;

  // Default transaction type is expense
  const [transactionType, setTransactionType] = useState('expense');

  const [date, setDate] = useState('')

  // Form state
  let initialInput = {
    category: '',
    amount: '',
    comment: '',
  };
  const [input, setInput] = useState(initialInput);

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleDateChange = () => {
    console.log(dateInput)
    setDate(dateInput.current.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!input.category || !date || !input.amount) {
      M.toast({
        html: 'Please enter all required fields',
        displayLength: 4000,
        classes: 'red',
      });
      return;
    }
    try {
      addTransaction(transactionType, {...input, date});

      M.toast({
        html: 'Transaction Added',
        displayLength: 4000,
        classes: 'green',
      });

      setInput(initialInput);

      dateInput.current.value = '';
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      console.log('error is' + error);
      M.toast({ html: error, displayLength: 4000, classes: 'red' });
    }
  }, [error]);

  // Needed to overwrite materilize-css initializer, which resets dynamic elements
  useEffect(() => {
    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);
  }, [categories, transactionType, input]);

  useEffect(() => {
    // Required by materialize to initialize the modal
    const modal = document.querySelector('.transactionModal');
    M.Modal.init(modal);

    // Required by materialize to initialize the DatePicker
    const datePicker = document.querySelector('.datepicker');
    M.Datepicker.init(datePicker, {
      format: 'ddd dd mmm yyyy',
      onClose: handleDateChange,
      autoClose: true,
    });

    // Required by materialize to initialize the Select
    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);
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
      <div id="modal1" className="modal transactionModal">
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
                ref={dateInput}
                id="date"
                type="text"
                className="datepicker validate"
                required
              />
              <label htmlFor="date">Date</label>
            </div>

            <div className="input-field col s6">
              <select
                value={input.category}
                onChange={handleInputChange}
                name="category"
                style={{ maxHeight: '50px' }}
                size="5"
                required
              >
                <option value="">Choose a category</option>
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
                value={input.amount}
                onChange={handleInputChange}
                id="amount"
                type="number"
                className="validate"
                required
              />
              <label htmlFor="amount">Amount ($)</label>
            </div>

            <div className="input-field col s6">
              <input
                value={input.comment}
                name="comment"
                onChange={handleInputChange}
                id="comment"
                type="text"
                className="validate"
              />
              <label htmlFor="comment">Comment</label>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="waves-effect waves-green btn-flat"
            onClick={handleFormSubmit}
          >
            Add Transaction
          </a>
        </div>
      </div>
    </>
  );
};

export default CreateTransactionModal;
