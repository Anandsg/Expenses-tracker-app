import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Bike insurance",
      amount: 54.12,
      date: new Date(2020, 4, 12),
      location: "BMT insurance Pvt Ltd"
    },
    {
      id: "e2",
      title: "Home loan",
      amount: 749.49,
      date: new Date(2021, 2, 12),
      location: "HR layout bangalore"
    },
    {
      id: "e3",
      title: "Power bill",
      amount: 453.12,
      date: new Date(2021, 2, 28),
      location: "BESCOM bill centre"
    },
    {
      id: "e4",
      title: "Wife chanrges",
      amount: 345,
      date: new Date(2021, 5, 12),
      location: "BSNL internet centre"
    },
  ];
  return (
    <div>
      <h2>Expenses tracker app</h2>
      {expenses.map((expense) => (
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
