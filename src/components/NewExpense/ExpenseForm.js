import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnterTitle] = useState('')

    const [enteredAmt, setEnterAmt] = useState('')

    const [enteredDate, setEnterDate] = useState('')


    const titleChangeHandler = (event) =>{
        setEnterTitle(event.target.value)
    }

    const amountChangeHandler = (event) =>{
        setEnterAmt(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setEnterDate(event.target.value)
    }

    const enteredItems = (event) =>{
        event.preventDefault() // prevent the reloading of page using this event
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmt,
            date: new Date(enteredDate)
        }

        props.onSaveExpense(expenseData)
        setEnterTitle('')
        setEnterAmt('')
        setEnterDate('')
    }
    return <form onSubmit={enteredItems}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input 
            type='text' 
            onChange={titleChangeHandler}
            value={enteredTitle}
            ></input>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' 
            min='1' 
            onChange={amountChangeHandler} 
            value={enteredAmt}
            ></input>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2021-01-01' max='2022-12-31' 
            onChange={dateChangeHandler}
            value={enteredDate}
            ></input>
        </div>
        <div class='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
        </div>
    </form>
}

export default ExpenseForm;