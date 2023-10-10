import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const inputState = useState('');
  const clickHandler = () => {
    setTitle(inputState[0])
    return title;
  }
  const inputHandler = (event) => {
    inputState[1](event.target.value)
    return inputState[0];
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <input
        onChange={inputHandler}
        value={inputState[0]}
      />
      <button onClick={clickHandler}>Update Title</button>
    </Card>
  );
}

export default ExpenseItem;