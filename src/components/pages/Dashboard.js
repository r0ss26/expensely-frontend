
import React, { useContext } from 'react';
import AuthContext from "../../context/auth/authContext"
import TransactionsChart from '../charts/TransactionsChart';

const Dashboard = () => {

  const authContext = useContext(AuthContext)

  // const { logout, user } = authContext
  return (
    <>
      <h1>This is dashboard</h1>
      <TransactionsChart type='expense'/>
      <TransactionsChart type='income'/>
    </>
  );
};

export default Dashboard;
