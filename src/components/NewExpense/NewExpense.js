import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{
    const enteredExpenseData = (expenseData)=> {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.addExpenseData(newExpenseData)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpense={enteredExpenseData}/>
    </div>
}

export default NewExpense;