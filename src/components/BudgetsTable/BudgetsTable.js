import React, { useContext } from 'react';
import capitalize from '../../utils/capitalize'
import AuthContext from '../../context/auth/authContext';

const BudgetsTable = () => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  let budgets = [];
  if (user) budgets = user.budgets;

  return (
    <div className="container">
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
                <td>{capitalize(budget.category)}</td>
                <td>
                  <a
                    class="waves-effect waves-light btn modal-trigger"
                    href="#edit-budget-modal"
                    // onClick={}
                  >
                    Edit
                  </a>
                </td>
                <td>
                  <a
                    class="waves-effect waves-light btn modal-trigger"
                    href="#confirmationModal"
                    // onClick={}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetsTable;
