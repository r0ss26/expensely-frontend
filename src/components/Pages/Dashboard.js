import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import TransactionsChart from '../Charts/TransactionsChart';
import TopTransactions from '../TopTransactions/TopTransactions';
import LineChart from '../Charts/LineChart';
// import styles from './Dashboad.module.css'

const Dashboard = () => {

  return (
    <>
      <h1>This is dashboard</h1>
      <TransactionsChart type='expense' />
      <TransactionsChart type='income' />
      <TopTransactions />
      <LineChart />
    </>
  );
};

export default Dashboard;
