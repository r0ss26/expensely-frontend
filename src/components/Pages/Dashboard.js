import React, { useContext, useEffect, useState } from 'react';
import AuthContext from "../../context/auth/authContext"
import TransactionsChart from '../Charts/TransactionsChart';
import TopTransactions from '../TopTransactions/TopTransactions'
import BudgetExpenseBar from '../Charts/ProgressBar/BudgetExpenseBar';

const Dashboard = () => {

  return (
    <>
      <h1>This is dashboard</h1>
      <TopTransactions />
      <TransactionsChart type='expense' />
      <TransactionsChart type='income' />
      <BudgetExpenseBar />
    </>
  );
};

export default Dashboard;
