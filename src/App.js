import React, { useState } from 'react';

function Todo({ todo, updateTodo, index, removeTodo }) {
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

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={value}
        onChange={e => setValue(e.target.value) } />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Do dishes',
      isComplete: false,
    },
    {
      content: 'Buy fruit',
      isComplete: false,
    },
  ]);

  const updateTodo = (index) => {
    const todosClone = [...todos];
    todosClone[index].isComplete = !todosClone[index].isComplete;

    setTodos(todosClone);
  };

  const addTodo = (newTodoContent) => {
    const newTodo = { content: newTodoContent, isComplete: false };
    const todosClone = [...todos, newTodo];

    setTodos(todosClone);
  };

  const removeTodo = (index) => {
    const todosClone = todos.filter((todo, idx) => idx !== index);

    setTodos(todosClone);
  };

  return (
    <div>
      <h1>TODO</h1>
      <div>
        { todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;