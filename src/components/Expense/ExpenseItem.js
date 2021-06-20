import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () =>{
        console.log("44444444444")
        setTitle('Updated value!!');
        console.log("999999999",props.title)
        console.log(title)
    }

    return (

        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">Rs.{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;