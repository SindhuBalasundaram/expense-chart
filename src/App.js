import Expense from './components/Expense/Expense'
import NewExpense from './components/NewExpense/NewExpense';
import React, {useState} from 'react'

const DUMMY_EXPENSE = [
  {
    title: 'Shopping',
    date: new Date(2021, 6, 5),
    amount: 2000,
  },
  {
    title: 'Bike EMI',
    date: new Date(2021, 6, 1),
    amount: 1000.12,
  },
  {
    title: 'T.V EMI',
    date: new Date(2021, 6, 2),
    amount: 1678,
  },
  {
    title: 'Dinner',
    date: new Date(2021, 6, 10),
    amount: 5000,
  }
]
function App() {
  const [expenses, setNewExpense] = useState(DUMMY_EXPENSE)

  const setExpenseData = (expenseData) => {
    console.log(expenseData)
    setNewExpense((previousExp) => {
      return [expenseData, ...previousExp]
    })
  }
  return (
    <div className="App">
      <NewExpense addExpenseData={setExpenseData}/>
     <Expense items={expenses}/>
    </div>
  );
}

export default App;
