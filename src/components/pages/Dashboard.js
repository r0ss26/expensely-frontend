
import React, { useContext } from 'react';
// import CreateTransactionModal from '../Modals/CreateTransactionModal';
import AuthContext from "../../context/auth/authContext"
import TransactionsChart from '../charts/TransactionsChart';

const Dashboard = () => {

  const authContext = useContext(AuthContext)
  console.log("navbar", authContext)
  const { logout, user } = authContext
  return (
    <>
      <h1>This is dashboard</h1>
      <TransactionsChart type='expense'/>
      <TransactionsChart type='income'/>
      {/* <CreateTransactionModal /> */}
    </>
  );
};

export default Dashboard;
