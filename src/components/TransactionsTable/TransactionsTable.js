import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import CreateTransactionModal from '../Modals/CreateTransactionModal/CreateTransactionModal';
import ConfirmationModal from '../Modals/ConfirmationModal/ConfirmationModal';
import EditTransactionModal from '../Modals/EditTransactionModal/EditTransactionModal';
import capitalize from '../../utils/capitalize'
import styles from './TransactionsTable.module.css';
import Axios from 'axios';
import moment from 'moment'

const TransactionsTable = () => {
  const authContext = useContext(AuthContext);

  const { user, deleteTransaction, editTransaction } = authContext;

  const [itemToDelete, setItemToDelete] = useState('');
  const [itemToEdit, setItemToEdit] = useState('');

  let transactions = [];
  if (user) transactions = user.transactions;

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  const handleEdit = async (body) => {
    try {
      editTransaction(itemToEdit, body);
      setItemToEdit('')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <table className="striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Comment</th>
            </tr>
          </thead>

          <tbody>
            {transactions &&
              transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{moment(transaction.date).format('Do MMM YYYY')}</td>
                  <td>{capitalize(transaction.transactionType)}</td>
                  <td>{capitalize(transaction.category)}</td>
                  <td className={transaction.transactionType}>
                    {transaction.amount}
                  </td>
                  <td style={{ maxWidth: '50px', wordBreak: 'break-all' }}>
                    {transaction.comment && transaction.comment.slice(0, 50)}
                  </td>
                  <td>
                    <a
                      class="waves-effect waves-light btn modal-trigger"
                      href="#editTransactionModal"
                      onClick={() => setItemToEdit(transaction._id)}
                    >
                      Edit
                    </a>
                  </td>
                  <td>
                    <a
                      class="waves-effect waves-light btn modal-trigger"
                      href="#confirmationModal"
                      onClick={() => setItemToDelete(transaction._id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <CreateTransactionModal />
      <EditTransactionModal 
        onEdit={(body) => handleEdit(body)}
        initialState={{}}
        // transactionId={itemToEdit}
      />
      <ConfirmationModal
        onConfirm={() => handleDelete(itemToDelete)}
        confirmationText="Are you sure you want to delete this item?"
        confirm="Delete"
        decline="Keep"
      />
    </>
  );
};

export default TransactionsTable;
