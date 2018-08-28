let myAccount = {
  name: 'Taddes',
  expenses: 0,
  income: 0
}


// getAccountSummary
// Account has $900, $1000 in income, $100 in expenses

// addIncome
let addIncome = function (account, amount) {
  account.income = account.income + amount
}

// addExpense
let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

// reset account
let resetAccount = function (account) {
  account.expenses = 0
  account.income = o
}

// getAccountSummary
let getAccountSumamry = function (account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has a balance of ${balance}
  ${account.income} in income, ${account.expenses} in expenses`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 250)
addExpense(myAccount, 75)
console.log(getAccountSumamry(myAccount))
