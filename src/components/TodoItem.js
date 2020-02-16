import React from 'react';

export default function TodoItem({ todo, updateTodo, index, removeTodo }) {
  const mainFrameStyle = {
    padding: '1rem',
    border: '1px solid',
    display: 'inline-block',
    margin: '5px',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    marginRight: '5px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '0.8rem',
    backgroundColor: 'whitesmoke',
  };

  return (
    <div style={ mainFrameStyle }>
      <p>Todo item: { todo.content }</p>
      <p>Complete? { todo.isComplete ? 'Yes' : 'No' }</p> 
      <button style={ buttonStyle }
        onClick={() => updateTodo(index)}>Update Status</button>
      <button style={ buttonStyle }
        onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
}
