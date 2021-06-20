import Expense from './components/Expense/Expense'
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expense = [
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

  const setExpenseData = (expenseData) => {
    console.log(expenseData)
  }
  return (
    <div className="App">
      <NewExpense addExpenseData={setExpenseData}/>
     <Expense items={expense}/>
    </div>
  );
}

export default App;
