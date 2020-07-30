import React, { useState, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css';
import CategorySelect from '../CategorySelect/CategorySelect';

const CreateTransactionForm = () => {
  const authContext = useContext(AuthContext);

  const { addBudget } = authContext;

  // Form state
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [timePeriod, setTimePeriod] = useState('weekly'); // Default time period is weekly
  const [category, setCategory] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!name || !amount || !timePeriod || !category) {
      M.toast({
        html: 'Please enter all required fields',
        displayLength: 4000,
        classes: 'red',
      });
      return;
    }
    try {
      addBudget({ name, amount, timePeriod, category });


      M.toast({
        html: 'Budget Added',
        displayLength: 4000,
        classes: 'green',
      });

      setName('');
      setAmount('');
      setCategory('');
      setTimePeriod('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4>Add a Budget</h4>

      <form>
        <div className="input-field col s6">
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="budget-name"
            type="text"
            className="validate"
            required
          />
          <label htmlFor="comment">Name</label>
        </div>

        <div className="input-field col s6">
          <input
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="budget-amount"
            type="number"
            className="validate"
            required
          />
          <label htmlFor="amount">Amount ($)</label>
        </div>

        <div className="input-field col s12">
          <select
            value={timePeriod}
            name="budget-time-period"
            onChange={(e) => setTimePeriod(e.target.value)}
            id="budget-time-period"
            type="text"
            className="validate"
          >
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <label>Time Period</label>
        </div>

        <div id="budget-category" className="input-field col s6">
          <CategorySelect
            transactionType="expense"
            value={category}
            onSelect={setCategory}
            canBeDisabled={true}
          />
        </div>
      </form>
      <div className="modal-footer">
        <a
          id="submit-new-budget"
          href="#!"
          className="waves-effect waves-green btn-flat"
          onClick={handleFormSubmit}
        >
          Add Budget
        </a>
      </div>
    </>
  );
};

export default CreateTransactionForm;
