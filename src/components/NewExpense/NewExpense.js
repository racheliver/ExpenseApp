import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false);
    const saveDataExpenseHandler = (enteredExpenseData) => {
        const newDataToSend = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onGetNewExpenese(newDataToSend);
        setIsEditing(false);
    };
  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing &&
        <ExpenseForm 
          onDataExpense={saveDataExpenseHandler} 
          onCancel={stopEditingHandler}
        />
      }
    </div>
  );
};

export default NewExpense;
