import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
const ExpensesList = (props) => {
  if (props.onExpensesContent.length === 0) {
    return <h2 className='expenses-list__fallback'> No expenses found</h2>
  };
  return (
    <ul className='expenses-list'>
      {props.onExpensesContent.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))}
    </ul>
  );
};

export  default ExpensesList;