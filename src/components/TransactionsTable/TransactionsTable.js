import React, { useContext, useState, useRef, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import M from 'materialize-css';
import ConfirmationModal from '../Modals/ConfirmationModal/ConfirmationModal';
import EditTransactionModal from '../Modals/EditTransactionModal/EditTransactionModal';
import capitalize from '../../utils/capitalize';
import './TransactionsTable.module.css';
import moment from 'moment';

const TransactionsTable = () => {
  const authContext = useContext(AuthContext);

  const { user, deleteTransaction } = authContext;

  const [itemToDelete, setItemToDelete] = useState('');
  const [itemToEdit, setItemToEdit] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([])
  const dateInput = useRef(null);

  // Sort transactions by most recent date
  useEffect(() => {
    if (user)
      setTransactions(
        user.transactions.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        })
      );
    if (user) setCategories(user.categories)
  }, [user, transactions, categories]);

  useEffect(() => {
    if (dateFilter) {
      const filteredTransactions = transactions.filter((transaction) => {
        // console.log(moment(transaction.date).format('ddd DD MMM YYYY'));
        // console.log(dateFilter);
        return (
          moment(transaction.date).format('ddd DD MMM YYYY') === dateFilter
        );
      });
      setTransactions(filteredTransactions);
    } else {
      setTransactions(user.transactions);
    }
    // console.log(transactions)
  }, [dateFilter, transactions, user.transactions]);

  useEffect(() => {
    // Required by materialize to initialize the DatePicker
    const datePicker = document.querySelector('#transaction-table-date');
    M.Datepicker.init(datePicker, {
      format: 'ddd dd mmm yyyy',
      onClose: () => setDateFilter(dateInput.current.value),
      autoClose: true,
    });
  }, []);

  return (
    <>
      <div className="row">
        <div className="input-field col s12">
          <input
            name="date"
            ref={dateInput}
            id="transaction-table-date"
            type="text"
            className="datepicker no-autoinit"
          />
          <label htmlFor="date">Date</label>
        </div>

        <button
          class="waves-effect waves-light btn modal-trigger"
          onClick={() => {
            setDateFilter('');
            dateInput.current.value = '';
          }}
        >
          All
        </button>
      </div>

      <div className="row">
        <div className="col s12">
          <table className="striped responsive-table">
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
                    <td>{categories.map(item => {
                      if (item._id === transaction.category) {
                        return capitalize(item.name)
                      } else {
                        return ''
                      }
                    })}</td>
                    <td className={transaction.transactionType}>
                      {transaction.amount}
                    </td>
                    <td style={{ maxWidth: '50px', wordBreak: 'break-all' }}>
                      {transaction.comment && transaction.comment.slice(0, 50)}
                    </td>
                    <td>
                      <a
                        class="waves-effect waves-light btn modal-trigger"
                        href="#edit-transaction-modal"
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
      </div>
      <EditTransactionModal transactionId={itemToEdit} />
      <ConfirmationModal
        onConfirm={() => deleteTransaction(itemToDelete)}
        confirmationText="Are you sure you want to delete this item?"
        confirm="Delete"
        decline="Keep"
      />
    </>
  );
};

export default TransactionsTable;
