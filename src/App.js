import React, { useState, useEffect } from 'react';
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
  
  const [borderColor, setBorderColor] = useState('pink');
  useEffect(() => {
    if (localStorage.getItem('hooksTodo')) {
      const savedTodos = JSON.parse(localStorage.getItem('hooksTodo'));
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    setBorderColor(getRandomColor());
    localStorage.setItem('hooksTodo', JSON.stringify(todos));
  }, [todos]);

  const mainFrameStyle = {
    padding: '2rem',
    backgroundColor: borderColor,
    minHeight: '100vh',
    transition: '1s',
  };


  /*
    show message for 1 second after adding a new todo
    need to cleanup ?
  */
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    let timeoutId;
    setVisible(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setVisible(false), 500);
  }, [todos])

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
    <div style={ mainFrameStyle }>
      <h1 style={{ margin: '2rem 0' }}>
        TODO <span style={{ color: 'grey' }}>WITH HOOKS</span>
      </h1>
      <h2 className={ visible ? '' : 'hidden' } style={{ fontWeight: 200 }}>
        You just updated your todos !
      </h2>
      
      <TodoForm addTodo={addTodo} />

      <div style={{ marginTop: '2rem' }}>
        { todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

const getRandomColor = () => {
  const colors = ['#f8a5c2', '#f7d794', '#f3a683', '#D1C4E9', '#D7CCC8'];
  const randomIndex = Math.floor(Math.random() * Math.floor(colors.length));

  return colors[randomIndex];
};


export default App;