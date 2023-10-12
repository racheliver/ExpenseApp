import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expense.css';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expense(props) {
  const [yearFilterd, setYearFilter] = useState('2022');
  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilterd} onSetYearFilter={setYearFilter} />
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
