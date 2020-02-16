import React from 'react';

export default function TodoItem({ todo, updateTodo, index, removeTodo }) {
  return (
    <div>
      <p>Todo item: { todo.content }</p>
      <p>Complete? { todo.isComplete ? 'Yes' : 'No' }</p> 
      <button onClick={() => updateTodo(index)}>Update Status</button>
      <br />
      <button onClick={() => removeTodo(index)}>Remove</button>
      <hr />
    </div>
  );
}
