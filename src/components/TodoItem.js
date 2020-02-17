import React from 'react';

export default function TodoItem({ todo, updateTodo, index, removeTodo }) {

  return (
    <div className="item-container">
      <p>Todo item: { todo.content }</p>
      <p>
        { todo.isComplete ? 'Complete' : 'Not Complete' }
      </p>
      <div style={{ marginTop: '2rem' }}>
        <button className="button-base"
          onClick={() => updateTodo(index)}>
            Update Status
        </button>
        <button className="button-base"
          onClick={() => removeTodo(index)}>
          Remove
        </button>
      </div>
    </div>
  );
}
