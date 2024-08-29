import React, { useState } from 'react';
import TodoList from './components/TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, concluida: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].concluida = !newTodos[index].concluida;
    setTodos(newTodos);
  };

  const removeItem = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tarefas!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Adicionar Tarefa</button>
      <TodoList todos={todos} removeItem={removeItem} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;