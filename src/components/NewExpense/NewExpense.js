import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveDataExpenseHandler = (enteredExpenseData) => {
        const newDataToSend = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(newDataToSend);
        props.onGetNewExpenese(newDataToSend);
        return newDataToSend;
    };
  return (
    <div className="new-expense">
      <ExpenseForm onDataExpense={saveDataExpenseHandler} />
    </div>
  );
};

export default NewExpense;
