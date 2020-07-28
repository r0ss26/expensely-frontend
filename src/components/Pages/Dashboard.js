import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import TransactionsChart from '../Charts/TransactionsChart';
import TopTransactions from '../TopTransactions/TopTransactions';
import BudgetExpenseBar from '../Charts/ProgressBar/BudgetExpenseBar';
import LineChart from '../Charts/LineChart';
import Quotes from '../Quotes/Quotes';
// import styles from './Dashboad.module.css'

const Dashboard = () => {
  return (
    <>
      <h4>Dashboard</h4>
      <div className="row">
        <div className="col s12 l3">
          <TransactionsChart type="expense" />
        </div>
        <div className="col s12 l3">
          <Quotes />
        </div>
        <div className="col s12 l3">
          <TransactionsChart type="income" />
        </div>
      </div>
      <div className="row">
        <div className="col s12 l5">
          <TopTransactions />
        </div>
        <div className="col s12 l5">
          <LineChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
