import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Bike insurance",
    amount: 54.12,
    date: new Date(2020, 4, 12),
    location: "BMT Pvt Ltd",
  },
  {
    id: "e2",
    title: "Home loan",
    amount: 749.49,
    date: new Date(2021, 2, 6),
    location: "HR layout",
  },
  {
    id: "e3",
    title: "Power bill",
    amount: 453.12,
    date: new Date(2021, 2, 28),
    location: "BESCOM",
  },
  {
    id: "e4",
    title: "Wifi charges",
    amount: 345,
    date: new Date(2021, 5, 23),
    location: "BSNL",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };

  const onDeleteExpense = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={onDeleteExpense} />
    </div>
  );
};

export default App;
