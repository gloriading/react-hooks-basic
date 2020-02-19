import React from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import useMessage from './hooks/useMessage';
import useLocalStorage from './hooks/useLocalStorage'
import useRandomColor from './hooks/useRandomColor'

function App() {
  const initialValue = [
    {
      content: 'Do dishes',
      isComplete: false,
    },
    {
      content: 'Buy fruit',
      isComplete: false,
    },
  ]

  const [todos, setTodos] = useLocalStorage('hooksTodo', initialValue)

  const backgroundColor = useRandomColor(todos)

  const shouldShow = useMessage(todos)

  const mainFrameStyle = {
    padding: '2rem',
    backgroundColor: backgroundColor,
    minHeight: '100vh',
    transition: '1s',
  };

  const updateTodo = index => {
    const todosClone = [...todos];
    todosClone[index].isComplete = !todosClone[index].isComplete;

    setTodos(todosClone);
  };

  const addTodo = newTodoContent => {
    setTodos(prev => [...prev, { content: newTodoContent, isComplete: false }]);
  };

  const removeTodo = index => {
    setTodos(prev => prev.filter((todo, idx) => idx !== index));
  };

  return (
    <div style={mainFrameStyle}>
      <h1 style={{ margin: '2rem 0' }}>
        TODO <span style={{ color: 'grey' }}>WITH HOOKS</span>
      </h1>
      <h2
        className={shouldShow ? '' : 'hidden'}
        style={{ fontWeight: 200 }}
      >
        You just updated your todos !
      </h2>

      <TodoForm addTodo={addTodo} />

      <div style={{ marginTop: '2rem' }}>
        {todos.map((todo, index) => (
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

export default App;
