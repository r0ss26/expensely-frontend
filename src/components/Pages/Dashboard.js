import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import TransactionsChart from '../Charts/TransactionsChart';
import TopTransactions from '../TopTransactions/TopTransactions'
import BudgetExpenseBar from '../Charts/ProgressBar/BudgetExpenseBar';
import LineChart from '../Charts/LineChart';
import Quotes from '../Quotes/Quotes';
// import styles from './Dashboad.module.css'

const Dashboard = () => {

  return (
    <>
      <h1>This is dashboard</h1>
  
      <TransactionsChart type='expense' />
      <TransactionsChart type='income' />

      <BudgetExpenseBar />

      <TopTransactions />
      <LineChart />
      <Quotes />
    </>
  );
};

export default Dashboard;
