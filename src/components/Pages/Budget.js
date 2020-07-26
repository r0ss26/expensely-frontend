import React from 'react';
import './pageStyle.css';
import BudgetsTable from '../BudgetsTable/BudgetsTable';

const Budget = () => {
  return (
    <div className="container-wrapper">
      <h1>This is show all budget page</h1>
      <BudgetsTable />
    </div>
  );
};

export default Budget;
