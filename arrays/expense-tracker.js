// Expense Tracker
const account = {
  name: 'Taddes',
  expenses: [],
  income: [],
  addExpense: function(title, amount) {
    let newExpense = {
      title: title,
      amount: amount
    }
    account.expenses.push(newExpense);
  },
  addIncome: function(title, amount) {
    let newIncome = {
      title: title,
      amount: amount
    }
    account.income.push(newIncome)

  },
  getAccountSummary: function() {
    let totalExpenses = 0
    let totalIncome = 0
    let accountBalance = 0

    this.expenses.forEach(expense => {
      totalExpenses += expense.amount
    });

    this.income.forEach(inc => {
      totalIncome += inc.amount
    });

    accountBalance = totalIncome - totalExpenses
    return `${this.name} has an account balance of $${accountBalance} an income of $${totalIncome} and $${totalExpenses} in expenses`
  }
}

// Add income array to account

// Add income method (description and amount)

// Expense models real-world expense
// Description property & Amount($) property

// addExpense -> description, amount, new object into array
// const addExpense = function (name, amount) {
//   let newExpense = {
//     name: this.name,
//     expense: this.amount
//   }
//   account.expenses.push(newExpense);
// }

// getAccountSummary -> print account data. Totals all expenses
// Taddes Korris has: $xxx total in expenses. 

account.addExpense('Rent', 950)
account.addExpense('Tea', 4)
account.addIncome('Project', 555)
account.addIncome('Lessons', 852)
console.log(account.expenses)
console.log(account.getAccountSummary())