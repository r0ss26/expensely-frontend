import React, { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import CategorySelect from '../CategorySelect/CategorySelect';

const CreateTransactionForm = () => {
  const authContext = useContext(AuthContext);

  const { addTransaction } = authContext;

  // Form state
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [transactionType, setTransactionType] = useState('expense'); // Default transaction type is expense
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const dateInput = useRef(null); // Reference to materialize datepicker input

  const handleDateChange = () => {
    setDate(dateInput.current.value);
  };

  useEffect(() => {
    // Required by materialize to initialize the DatePicker
    const datePicker = document.querySelector('#create-transaction-date');
    M.Datepicker.init(datePicker, {
      format: 'ddd dd mmm yyyy',
      onClose: handleDateChange,
      autoClose: true,
    });
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!category || !date || !amount) {
      M.toast({
        html: 'Please enter all required fields',
        displayLength: 4000,
        classes: 'red',
      });
      return;
    }
    try {
      addTransaction(transactionType, { date, amount, comment, category });

      M.toast({
        html: 'Transaction Added',
        displayLength: 4000,
        classes: 'green',
      });

      dateInput.current.value = '';
      setAmount('');
      setCategory('');
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4>Add a Transaction</h4>
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
            name="date"
            ref={dateInput}
            id="create-transaction-date"
            type="text"
            className="datepicker validate no-autoinit"
            required
          />
          <label htmlFor="date">Date</label>
        </div>

        <div id="transaction-category" className="input-field col s6">
          <CategorySelect
            transactionType={transactionType}
            value={category}
            onSelect={setCategory}
            canBeDisabled={false}
          />
        </div>

        <div className="input-field col s6">
          <input
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            type="number"
            className="validate"
            required
          />
          <label htmlFor="amount">Amount ($)</label>
        </div>

        <div className="input-field col s6">
          <input
            value={comment}
            name="comment"
            onChange={(e) => setComment(e.target.value)}
            id="comment"
            type="text"
            className="validate"
          />
          <label htmlFor="comment">Comment</label>
        </div>
      </form>
      <div className="modal-footer">
        <a
          id="submit-new-transaction"
          href="#!"
          className="waves-effect waves-green btn-flat"
          onClick={handleFormSubmit}
        >
          Add Transaction
        </a>
      </div>
    </>
  );
};

export default CreateTransactionForm;
