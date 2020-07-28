import React, { useContext } from 'react';
import TransactionsChart from '../Charts/TransactionsChart';
import TopTransactions from '../TopTransactions/TopTransactions';
// import BudgetExpenseBar from '../Charts/ProgressBar/BudgetExpenseBar';
import LineChart from '../Charts/LineChart';
import Quotes from '../Quotes/Quotes';
import AuthContext from '../../context/auth/authContext';
import LinearBar from '../Layout/LinearBar';
// import LinearBar from '../Layout/LinearBar'
// import styles from './Dashboad.module.css'

const Dashboard = () => {

  const authContext = useContext(AuthContext);
  const { loading } = authContext;

  return (
    <>
      <h4>Dashboard</h4>
      {loading ? <LinearBar /> : (
        <>
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
      )}
    </>
  );
};

export default Dashboard;
