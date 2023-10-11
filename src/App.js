import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { title: "Car Insurance", date: new Date(2021, 2, 7), amount: "222$", id: 1 },
    { title: "Car Insurance2", date: new Date(2021, 2, 8), amount: "111$", id: 2 },
    { title: "Car Insurance3", date: new Date(2021, 2, 9), amount: "445$", id: 3 },
    { title: "Car Insurance4", date: new Date(2021, 2, 10), amount: "555$", id: 4 },
  ];
  const getNewExpeneseHandler = (data) => {
    console.log({data});
  };
  return (
    <div>
        <NewExpense onGetNewExpenese={getNewExpeneseHandler}/>
        <Expense items={expenses}/>
    </div>
  );
}

export default App;
