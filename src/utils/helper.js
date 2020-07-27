<<<<<<< HEAD
// export const sortCategory = (obj) => {
//     obj.sort((a, b) => {
//         let catA = a.category.toLowerCase()
//         let catB = b.category.toLowerCase()
//         return catA.localeCompare(catB)
//     })
// }

// export const sortCategory = (obj) => {
//   Object.keys(obj).sort(
//       function(a, b) {
//         let catA = a.category.toLowerCase()
//         let catB = b.category.toLowerCase()

//           return obj[category]
//       }
//   )
// }

// export const sortObj = obj =>
//     obj.sort(
//         function (a, b) {
//             if (a.category === b.ca) {
//                 // Price is only important when cities are the same
//                 return b.price - a.price;
//             }
//             return a.city > b.city ? 1 : -1;
//         });
=======
import moment from 'moment';

export const sortCategory = (array) => {
  array.sort((a, b) => {
    let catA = a.category.toLowerCase();
    let catB = b.category.toLowerCase();
    return catA.localeCompare(catB);
  });
};

export const getCurrentMonthsTransactions = (transactions) => {
  const currentMonthTransactions = [];
  transactions.forEach((transaction) => {
    if (moment(transaction.date).month() === moment().month()) {
      currentMonthTransactions.push(transaction);
    }
  });
  return currentMonthTransactions;
};

export const getCurrentWeekTransactions = (transactions) => {
  const currentWeekTransactions = [];
  transactions.forEach((transaction) => {
    if (moment(transaction.date).isoWeek() === moment().isoWeek()) {
      currentWeekTransactions.push(transaction);
    }
  });
  return currentWeekTransactions;
};
>>>>>>> master
