
import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const DUMMY_DATA = [
    { title: "Car Insurance", date: new Date(2021, 2, 7), amount: "222$", id: 1 },
    { title: "Car Insurance2", date: new Date(2021, 2, 8), amount: "111$", id: 2 },
    { title: "Car Insurance3", date: new Date(2022, 2, 9), amount: "445$", id: 3 },
    { title: "Car Insurance4", date: new Date(2019, 2, 10), amount: "555$", id: 4 },
];
function App() {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const getNewExpeneseHandler = (data) => {
    setExpenses(prevExpeness => {
      return [data, ...prevExpeness]
    })
  };
  return (
    <div>
        <NewExpense onGetNewExpenese={getNewExpeneseHandler}/>
        <Expense items={expenses} />
    </div>
  );
}

export default App;
