import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput,setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  const titleChangeHandler = (event) => {
    /* setUserInput({
       ...userInput,
      enteredTitle: event.target.value});*/
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    /* setUserInput({
       ...userInput,
       enteredAmount: event.target.value}); */
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    /* setUserInput({
      ...userInput,
      enteredDate: event.target.value}); */
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      Date: new Date(enteredDate),
    };
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    console.log(expenseData);
  };
  return(
  <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input 
         type="text"
         value={enteredTitle} 
         onChange={titleChangeHandler} 
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          value={enteredAmount}
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date"
         value={enteredDate} 
         onChange={dateChangeHandler}
        />
      </div>
      <button type="submit">Submit</button>
    </div>
  </form>)
};

export default ExpenseForm;
