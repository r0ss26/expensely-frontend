import moment from 'moment';

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
