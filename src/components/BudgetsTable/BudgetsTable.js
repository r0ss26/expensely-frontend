import React, { useContext, useState, useEffect } from 'react';
import capitalize from '../../utils/capitalize';
import AuthContext from '../../context/auth/authContext';
import ConfirmationModal from '../Modals/ConfirmationModal/ConfirmationModal';
import EditBudgetModal from '../Modals/EditBudgetModal/EditBudgetModal';

const BudgetsTable = () => {
  const authContext = useContext(AuthContext);

  const { user, deleteBudget } = authContext;

  let budgets = [];
  if (user) budgets = user.budgets;

  const [itemToDelete, setItemToDelete] = useState('');
  const [itemToEdit, setItemToEdit] = useState('');
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (user) setCategories(user.categories)
  }, [user, categories])

  const handleDelete = (id) => {
    deleteBudget(id);
  };

  return (
    <>
      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Time Period</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {budgets &&
            budgets.map((budget) => (
              <tr key={budget._id}>
                <td>{capitalize(budget.name)}</td>
                <td>{budget.amount}</td>
                <td>{capitalize(budget.timePeriod)}</td>
                <td>
                  <td>{categories.map(item => {
                    if (item._id === budget.category) {
                      return capitalize(item.name)
                    }
                  }
                  )}</td>
                </td>
                <td>
                  <a
                    class="waves-effect waves-light btn modal-trigger"
                    href="#edit-budget-modal"
                    onClick={() => setItemToEdit(budget._id)}
                  >
                    Edit
                  </a>
                </td>
                <td>
                  <a
                    class="waves-effect waves-light btn modal-trigger"
                    href="#confirmationModal"
                    onClick={() => setItemToDelete(budget._id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <EditBudgetModal budgetId={itemToEdit} />
      <ConfirmationModal
        onConfirm={() => handleDelete(itemToDelete)}
        confirmationText="Are you sure you want to delete this item?"
        confirm="Delete"
        decline="Keep"
      />
    </>
  );
};

export default BudgetsTable;
