import './ExpenseItem.css';

function ExpenseItem(props) {
  // const ExpenseDate = new Date(2021, 3, 28);
  // const ExpenseTitle = 'Bike insurance';
  // const ExpenseAmount = 283.73;
  // const LocationOfExpenditure = 'BMT Insurance company';
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description"> 
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <div className='expense-item__location'>{props.location}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
