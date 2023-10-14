import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expense(props) {
  const [yearFilterd, setYearFilter] = useState('2022');
  const filteredExpenses  = props.items.filter(item => {
    return item.date.getFullYear().toString() === yearFilterd;
  })
  
  let expensesContent = <p>No expenses found</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilterd} onSetYearFilter={setYearFilter} />
      {expensesContent}
    </Card>
  );
}

export default Expense;
