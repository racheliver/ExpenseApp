import Expense from './components/Expense'
function App() {
  const expenses = [
    { title: "Car Insurance", date: new Date(2021, 2, 7), amount: "222$", id: 1 },
    { title: "Car Insurance2", date: new Date(2021, 2, 8), amount: "111$", id: 2 },
    { title: "Car Insurance3", date: new Date(2021, 2, 9), amount: "445$", id: 3 },
    { title: "Car Insurance4", date: new Date(2021, 2, 10), amount: "555$", id: 4 },
  ];
  return (
    <div>
            <h2>Let's get started!</h2>
        <Expense items={expenses}/>
    </div>
  );
}

export default App;
