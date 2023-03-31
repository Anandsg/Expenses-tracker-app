import React from "react";
import Card from '../UI/Card';
// import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      
      <div className="expense-item__description"> 
      <h2>{props.title}</h2>
      {/* <ExpenseDetails amount={props.amount} /> */}
      <div className="expense-item__price">${props.amount}</div>
      <div className='expense-item__location'>{props.location}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
