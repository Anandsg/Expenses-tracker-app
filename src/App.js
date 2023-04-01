import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Bike insurance",
      amount: 54.12,
      date: new Date(2020, 4, 12),
      location: "BMT insurance Pvt Ltd",
    },
    {
      id: "e2",
      title: "Home loan",
      amount: 749.49,
      date: new Date(2021, 2, 6),
      location: "HR layout bangalore",
    },
    {
      id: "e3",
      title: "Power bill",
      amount: 453.12,
      date: new Date(2021, 2, 28),
      location: "BESCOM bill centre",
    },
    {
      id: "e4",
      title: "Wifi charges",
      amount: 345,
      date: new Date(2021, 5, 23),
      location: "BSNL internet centre",
    },
  ]);

  const onDeleteExpense = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  return (
    <div>
      <h2>Expenses tracker app</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
          onDelete={onDeleteExpense}
        />
      ))}
    </div>
  );
};

export default App;

