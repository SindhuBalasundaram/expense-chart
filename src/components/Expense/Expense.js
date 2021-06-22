import './Expense.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import React, {useState} from 'react'

function Expense(props) {
  const { items } = props
  const  [year, setUpdatedYear] = useState('2020')
  const filterByYear = (selectedYear) => {
    setUpdatedYear(selectedYear)
  }
  return (
    <div> 
    <Card className="expenses">
    <ExpensesFilter selectedYear={year} onChangeYear={filterByYear}/>

      {items.map(item =>
        <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
      )}

    </Card>
    </div>

  )
}

export default Expense;