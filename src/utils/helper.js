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

export const getPrevious30DaysTotals = (transactions) => {
  const previous30DaysTotals = Array(30);

  transactions.forEach((transaction) => {
    const daysSinceTransaction = moment().diff(transaction.date, 'days');
    if (daysSinceTransaction <= 30) {
      if (previous30DaysTotals[daysSinceTransaction]) {
        previous30DaysTotals[daysSinceTransaction] += transaction.amount
      } else {
        previous30DaysTotals[daysSinceTransaction] = transaction.amount
      }
    }
  });
  return Array.from(previous30DaysTotals, item => item || 0).reverse();
};
