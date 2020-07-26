import React, { useContext, useEffect, useState } from 'react';
import AuthContext from "../../context/auth/authContext"
import TransactionsChart from '../Charts/TransactionsChart';


const Dashboard = () => {

  // const authContext = useContext(AuthContext);
  // const { user } = authContext
  // const [transactions, setTransactions] = useState([]);
  // const [currentUser, setCurrentUser] = useState({})

  // useEffect(() => {
  //   if (user) setCurrentUser(user)
  //   if (user) setTransactions(user.transactions)
  // }, [user, currentUser])

  return (
    <>
      <h1>This is dashboard</h1>
      <TransactionsChart type='expense' />
      {/* <TransactionsChart type='income' />  */}
    </>
  );
};

export default Dashboard;
