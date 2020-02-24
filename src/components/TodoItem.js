import React from 'react';

export default function TodoItem({ todo, updateTodo, index, removeTodo }) {
  const styleComplete = {
    textDecoration: 'line-through',
    color: 'grey',
    fontWeight: 300,
  };

  return (
    <div className="item-container">
      <div className="content-container">
        <p style={ todo.isComplete ? styleComplete : {}}>
        { todo.content }
        <span onClick={() => console.log(index)}>
          Edit
        </span>
        </p>
      </div>
      <div className="action-container">
        <button className="button-base"
          onClick={() => updateTodo(index)}>
          { todo.isComplete ? 'Yikes..Re-Open' : 'Done !'}
        </button>
        <button className="button-base"
          onClick={() => removeTodo(index)}>
          Remove
        </button>
      </div>
    </div>
  );
}
