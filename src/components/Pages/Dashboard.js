import React from 'react';
import TransactionsChart from '../Charts/TransactionsChart';
import TopTransactions from '../TopTransactions/TopTransactions'
import BudgetExpenseBar from '../Charts/ProgressBar/BudgetExpenseBar';
import LineChart from '../Charts/LineChart';


const Dashboard = () => {

  return (
    <>
      <h1>This is dashboard</h1>
  
      <TransactionsChart type='expense' />
      <TransactionsChart type='income' />

      <BudgetExpenseBar />

      <TopTransactions />
      <LineChart />

    </>
  );
};

export default Dashboard;
