import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

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
          <TodoItem
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