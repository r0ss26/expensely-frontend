import React from 'react';
import './pageStyle.css';
import TransactionsTable from '../TransactionsTable/TransactionsTable';

const Transactions = () => {
  return (
    <>
      <h4 className="center-align">Transactions</h4>
      <TransactionsTable />
    </>
  );
};

export default Transactions;
