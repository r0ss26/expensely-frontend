import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css';
import CategorySelect from '../CategorySelect/CategorySelect';

const EditBudgetForm = (props) => {
  const authContext = useContext(AuthContext);

  const { user, editBudget } = authContext;

  // Form state
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [timePeriod, setTimePeriod] = useState('weekly'); // Default time period is weekly
  const [category, setCategory] = useState('');

  // The budget to edit
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    setBudget(user.budgets.find((budget) => budget._id === props.budgetId));
  }, [user.budgets, props.budgetId]);

  useEffect(() => {
    if (budget) {
      setName(budget.name);
      setAmount(budget.amount);
      setTimePeriod(budget.timePeriod);
      setCategory(budget.category);
    }
  }, [budget]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('saved');
    if (!name || !amount || !timePeriod || !category) {
      M.toast({
        html: 'Please enter all required fields',
        displayLength: 4000,
        classes: 'red',
      });
      return;
    }
    try {
      editBudget(props.budgetId, { name, amount, timePeriod, category });

      M.toast({
        html: 'Budget Saved',
        displayLength: 4000,
        classes: 'green',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4>Edit Budget</h4>

      <form>
        <div className="input-field col s6">
          <input
            name="new-budget-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="edit-budget-name"
            type="text"
            required
          />
          <label htmlFor="edit-budget-name" className="active">
            Name
          </label>
        </div>

        <div className="input-field col s6">
          <input
            name="edit-budget-amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="edit-budget-amount"
            type="number"
            className="validate"
            required
          />
          <label className="active" htmlFor="amount">
            Amount ($)
          </label>
        </div>

        <div className="input-field col s6">
          <input
            value={timePeriod}
            name="edit-budget-time-period"
            onChange={(e) => setTimePeriod(e.target.value)}
            id="edit-budget-time-period"
            type="text"
            className="validate"
          />
          <label className="active" htmlFor="comment">
            Time Period
          </label>
        </div>

        <div className="input-field col s6">
          <CategorySelect
            transactionType="expense"
            value={category}
            onSelect={setCategory}
          />
        </div>
      </form>
      <div className="modal-footer">
        <a
          href="#!"
          className="waves-effect waves-green btn-flat"
          onClick={handleFormSubmit}
        >
          Edit Budget
        </a>
      </div>
    </>
  );
};

export default EditBudgetForm;
