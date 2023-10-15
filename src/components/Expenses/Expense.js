import { useState } from 'react';

import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expense(props) {
  const [yearFilterd, setYearFilter] = useState('2022');
  const filteredExpenses  = props.items.filter(item => {
    return item.date.getFullYear().toString() === yearFilterd;
  })
  

  return (
    <Card className="expenses">
      <ExpensesFilter 
        selected={yearFilterd} 
        onSetYearFilter={setYearFilter} 
      />
      <ExpensesChart 
        expenses={filteredExpenses} 
      />
      <ExpensesList 
        onExpensesContent={filteredExpenses}
      />
    </Card>
  );
}

export default Expense;
