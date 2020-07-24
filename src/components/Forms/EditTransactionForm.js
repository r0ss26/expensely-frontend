import React, { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css';
import CategorySelect from '../CategorySelect/CategorySelect';
import moment from 'moment';

const EditTransactionForm = (props) => {
  const authContext = useContext(AuthContext);

  const { user, editTransaction } = authContext;

  // Form state
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [transactionType, setTransactionType] = useState(''); // Default transaction type is expense
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const dateInput = useRef(null); // Reference to materialize datepicker input

  // The transaction to edit
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    setTransaction(
      user.transactions.find(
        (transaction) => transaction._id === props.transactionId
      )
    );
  }, [props.transactionId]);

  useEffect(() => {
    if (transaction) {
      setAmount(transaction.amount);
      setComment(transaction.comment);
      setTransactionType(transaction.transactionType);
      dateInput.current.value=(moment(transaction.date).format('ddd DD MMM YYYY'));
      handleDateChange()
      setCategory(transaction.category);
    }
  }, [transaction]);

  const handleDateChange = () => {
    setDate(dateInput.current.value);
  };

  useEffect(() => {
    // Required by materialize to initialize the DatePicker
    const datePicker = document.querySelector('#edit-transaction-date');
    M.Datepicker.init(datePicker, {
      format: 'ddd dd mmm yyyy',
      onClose: handleDateChange,
      autoClose: true,
    });
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('saved')
    if (!category || !date || !amount) {
      M.toast({
        html: 'Please enter all required fields',
        displayLength: 4000,
        classes: 'red',
      });
      return;
    }
    try {
      editTransaction(props.transactionId, transactionType, {
        date,
        amount,
        comment,
        category,
      });

      M.toast({
        html: 'Transaction Saved',
        displayLength: 4000,
        classes: 'green',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4>Edit Transaction</h4>
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
            id="edit-transaction-date"
            type="text"
            className="datepicker validate no-autoinit"
            required
          />
          <label htmlFor="date" className="active">Date</label>
        </div>

        <div className="input-field col s6">
          <CategorySelect
            transactionType={transactionType}
            value={category}
            onSelect={setCategory}
          />
        </div>

        <div className="input-field col s6">
          <input
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="edit-amount"
            type="number"
            className="validate"
            required
          />
          <label className="active" htmlFor="amount">Amount ($)</label>
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
          <label className="active" htmlFor="comment">Comment</label>
        </div>
      </form>
      <div className="modal-footer">
        <a
          href="#!"
          className="waves-effect waves-green btn-flat"
          onClick={handleFormSubmit}
        >
          Save Transaction
        </a>
      </div>
    </>
  );
};

export default EditTransactionForm;
