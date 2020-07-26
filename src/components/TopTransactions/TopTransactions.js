// import React, { useState, useEffect, useContext } from 'react';
// import AuthContext from '../../context/auth/authContext';
// import moment from 'moment';
// import capitalize from '../../utils/capitalize';
// import {
//   getCurrentMonthsTransactions,
//   getCurrentWeekTransactions,
// } from './../../utils/helper';
// import 'materialize-css';

// const TopTransactions = () => {
//   const authContext = useContext(AuthContext);

//   const { user } = authContext;

//   const [isAmount, setIsAmount] = useState(true);

//   const [topTransactions, setTopTransactions] = useState([]);
//   const [topCategories, setTopCategories] = useState([]);
//   const [timePeriod, setTimePeriod] = useState('all');

//   useEffect(() => {
//     let allTransactions = [];
//     if (timePeriod === 'all') {
//       allTransactions = user.transactions;
//     } else if (timePeriod === 'month') {
//       allTransactions = getCurrentMonthsTransactions(user.transactions);
//     } else {
//       allTransactions = getCurrentWeekTransactions(user.transactions);
//     }
//     const categoryAmounts = {};
//     allTransactions.forEach((transaction) => {
//       if (categoryAmounts[transaction.category]) {
//         categoryAmounts[transaction.category] += transaction.amount;
//       } else {
//         categoryAmounts[transaction.category] = transaction.amount;
//       }
//     });

//     let categoryArray = [];
//     Object.keys(categoryAmounts).forEach((category) => {
//       categoryArray.push({ name: category, amount: categoryAmounts[category] });
//     });

//     categoryArray.sort((a, b) => {
//       return b.amount - a.amount;
//     });

//     setTopCategories(categoryArray.slice(0, 5));
//   }, [isAmount, user.transactions, timePeriod]);

//   useEffect(() => {
//     let allTransactions = [];
//     if (timePeriod === 'all') {
//       allTransactions = user.transactions;
//     } else if (timePeriod === 'month') {
//       allTransactions = getCurrentMonthsTransactions(user.transactions);
//     } else {
//       allTransactions = getCurrentWeekTransactions(user.transactions);
//     }

//     setTopTransactions(
//       allTransactions
//         .sort((a, b) => {
//           return b.amount - a.amount;
//         })
//         .slice(0, 5)
//     );
//   }, [isAmount, timePeriod, user.transactions]);

//   return (
//     <div style={{ maxWidth: '500px' }} className="card  center-align">
//       <div className="card-tabs">
//         <ul className="tabs tabs-fixed-width">
//           <li onClick={() => setIsAmount(true)} className="tab">
//             <a className="active" href="#top-transactions-amount">
//               Amount
//             </a>
//           </li>
//           <li onClick={() => setIsAmount(false)} className="tab">
//             <a href="#top-transactions-categories">Category</a>
//           </li>
//         </ul>
//       </div>
//       <div className="card-tabs">
//         <ul className="tabs tabs-fixed-width">
//           <li className="tab">
//             <a
//               onClick={() => setTimePeriod('all')}
//               className="active"
//               href="#top-transactions-weekly"
//             >
//               All Time
//             </a>
//           </li>
//           <li className="tab">
//             <a
//               onClick={() => setTimePeriod('month')}
//               className="active"
//               href="#top-transactions-weekly"
//             >
//               This Month
//             </a>
//           </li>
//           <li onClick={() => setTimePeriod('week')} className="tab">
//             <a href="#top-transactions-monthly">This Week</a>
//           </li>
//         </ul>
//       </div>
//       <div className="card-content"></div>
//       <span>Your Top {isAmount ? 'Transactions' : 'Categories'}</span>
//       <table className="striped responsive-table">
//         {isAmount ? (
//           topTransactions && (
//             <>
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Type</th>
//                   <th>Category</th>
//                   <th>Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {topTransactions.map((transaction) => (
//                   <tr key={transaction._id}>
//                     <td>{moment(transaction.date).format('Do MMM YYYY')}</td>
//                     <td>{capitalize(transaction.transactionType)}</td>
//                     <td>{capitalize(transaction.category)}</td>
//                     <td className={transaction.transactionType}>
//                       {transaction.amount}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </>
//           )
//         ) : (
//           <>
//             <thead>
//               <tr>
//                 <th>Category</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {topCategories.map((category) => (
//                 <tr>
//                   <td>{capitalize(category.name)}</td>
//                   <td>{category.amount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </>
//         )}
//       </table>
//     </div>
//   );
// };

// export default TopTransactions;
