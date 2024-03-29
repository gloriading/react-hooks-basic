import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const formStyle = {
    padding: '1rem',
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={ formStyle }>
      <label>What do I need to do?</label>
      <input
        className="text-input"
        type="text"
        placeholder="Enter a todo..."
        value={value}
        onChange={e => setValue(e.target.value) } />
    </form>
  );
}