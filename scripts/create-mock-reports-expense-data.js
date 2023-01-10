const fs = require('fs');

const createReportExpense = (size) => {
  const reports = [];
  for (let i = 0; i < size; i++) {
    reports.push({
      id: i + 1,
      date: new Date(Date.now() + i * 1000 * 60 * 60 * 24),
      amount: Math.random() * 1000,
      account: getAccount(i),
      type: 'Food',
      subtype: 'Grocery',
      comment: 'The brothers store',
    });
  }
  return reports;
};

const getAccount = (num) => {
  const accounts = ['Shared', 'Dor', 'Masha'];
  const x = num % 3;
  return accounts[x];
};

const run = () => {
  const reports = createReportExpense(100);
  fs.writeFileSync('./reports-expense.json', JSON.stringify(reports));
};

run();
