import React from 'react';
import './pageStyle.css';
import BudgetsTable from '../BudgetsTable/BudgetsTable';

const Budget = () => {
  return (
    <div>
      <h4 className="center-align">Budgets</h4>
      <BudgetsTable />
    </div>
  );
};

export default Budget;
