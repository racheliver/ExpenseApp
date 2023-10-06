import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from './Card';

function Expense(props) {
  return (
    <Card className="expenses">
      {props.items.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expense;
