import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} />
      <div className="expense-item__description"> 
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <div className='expense-item__location'>{props.location}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
