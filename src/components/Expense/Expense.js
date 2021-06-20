import './Expense.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

function Expense(props) {
  const { items } = props
  return (
    <Card className="expenses">
      {items.map(item =>
        <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
      )}

    </Card>
  )
}

export default Expense;