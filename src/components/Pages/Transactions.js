import React from 'react';
import './pageStyle.css';
import TransactionsTable from '../TransactionsTable/TransactionsTable';

const Transactions = () => {
  return (
    <div className="row">
      <div className="col s12">
        <h4 className="center-align">Transactions</h4>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Transactions;
