import { useState } from 'react';

import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expense(props) {
  const [yearFilterd, setYearFilter] = useState('2022');
  const filteredExpenses  = props.items.filter(item => {
    return item.date.getFullYear().toString() === yearFilterd;
  })
  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilterd} onSetYearFilter={setYearFilter} />
      <ExpensesList onExpensesContent={filteredExpenses}/>

    </Card>
  );
}

export default Expense;
