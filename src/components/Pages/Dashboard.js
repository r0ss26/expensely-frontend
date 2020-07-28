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
        <div className="col s12 l4">
          <Quotes />
        </div>
        <div className="col s12 l4">
          <TransactionsChart type="expense" />
        </div>
        <div className="col s12 l4">
          <TransactionsChart type="income" />
        </div>
        <div className="row">
          <div className="col s12 l4">
            <TopTransactions />
          </div>
          <div className="col s12 l4">
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
