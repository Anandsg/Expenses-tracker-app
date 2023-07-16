import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  let expensesContent;
  if (filteredExpenses.length === 0) {
    expensesContent = <p className="expense-content">No expenses found!</p>;
  } else if (filteredExpenses.length === 1) {
    expensesContent = (
      <div>
        <ExpenseItem
          key={filteredExpenses[0].id}
          id={filteredExpenses[0].id}
          title={filteredExpenses[0].title}
          amount={filteredExpenses[0].amount}
          date={filteredExpenses[0].date}
          location={filteredExpenses[0].location}
          onDelete={props.onDeleteExpense}
        />
        <p className="expense-content">
          Only one expense is there, add more expenses!
        </p>
      </div>
    );
  } else {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
        onDelete={props.onDeleteExpense}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
