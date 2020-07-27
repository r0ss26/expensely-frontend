import React, { useContext, useEffect, useState } from 'react';
import AuthContext from "../../context/auth/authContext"
import TransactionsChart from '../Charts/TransactionsChart';
import TopTransactions from '../TopTransactions/TopTransactions'

const Dashboard = () => {

  return (
    <>
      <h1>This is dashboard</h1>
<<<<<<< HEAD:src/components/pages/Dashboard.js
      <TransactionsChart type='expense' />
      <TransactionsChart type='income' />
=======
      <TopTransactions />
       {/* <TransactionsChart type='expense' />  */}
      {/* <TransactionsChart type='income' />  */}
>>>>>>> master:src/components/Pages/Dashboard.js
    </>
  );
};

export default Dashboard;
