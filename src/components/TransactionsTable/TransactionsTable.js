import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext'
import CreateTransactionModal from '../Modals/CreateTransactionModal/CreateTransactionModal';
import ConfirmationModal from '../Modals/ConfirmationModal/ConfirmationModal';

const TransactionsTable = () => {
  const authContext = useContext(AuthContext);

  const { user, deleteTransaction } = authContext

  let transactions = [];
  if (user) transactions = user.transactions

  const handleDelete = (id) => {
    console.log(id)
    deleteTransaction(id)
  }

  return (
    <>
      <div className="container">
        <table className="striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Comment</th>
            </tr>
          </thead>

          <tbody>
            {transactions &&
              transactions.map(transaction => (
                <tr key={transaction._id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.amount}</td>
                  <td style={{maxWidth: "50px", wordBreak: 'break-all'}}>{transaction.comment && transaction.comment.slice(0, 50)}</td>
                  <td>
                    <ConfirmationModal 
                      confirmationText="Are you sure you want to delete this item?"
                      triggerIcon='delete_forever'
                      confirm="Delete"
                      decline="Keep"
                      onDelete={() => handleDelete(transaction._id)}
                    />
                    </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <CreateTransactionModal/>
    </>
  );
};

export default TransactionsTable;
