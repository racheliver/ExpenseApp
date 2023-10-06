import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", date: new Date(2021, 2, 7), amount: "222$" },
    { title: "Car Insurance2", date: new Date(2021, 2, 8), amount: "111$" },
    { title: "Car Insurance3", date: new Date(2021, 2, 9), amount: "445$" },
    { title: "Car Insurance4", date: new Date(2021, 2, 10), amount: "555$" },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index} // It's important to provide a unique key when rendering a list of components.
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default App;
