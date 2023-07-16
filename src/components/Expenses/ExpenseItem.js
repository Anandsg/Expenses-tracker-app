import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import "./Expenses.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  // console.log('Expense evaluated')
  // const clickHandler = () => {
  //   setTitle("updated");
  //   console.log(title);
  // };

  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const changeExpense = () => {
    setAmount(100);
    // console.log(amount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${amount}</div>
        <div className="expense-item__location">{props.location}</div>
        <button onClick={changeExpense}>Change expense</button>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
      <button onClick={deleteHandler}>Delete expense</button>
    </Card>
  );
};

export default ExpenseItem;
