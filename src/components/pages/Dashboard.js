
import React, { useContext, useEffect } from 'react';
import AuthContext from "../../context/auth/authContext"
import TransactionsChart from '../charts/TransactionsChart';

const Dashboard = () => {


  return (
    <>
      <h1>This is dashboard</h1>
       {/* <TransactionsChart type='expense' />  */}
      {/* <TransactionsChart type='income' />  */}
    </>
  );
};

export default Dashboard;
