import React, { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import './app.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, concluida: false }]);
      setInputValue('');
    }
  };

  const flagConcluido = (index) => {
    const newTodos = [...todos];
    newTodos[index].concluida = !newTodos[index].concluida;
    setTodos(newTodos);
  };

  const removeItem = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div class="container">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={addTodo}>Adicionar</button>
      <TodoList todos={todos} removeItem={removeItem} flagConcluido={flagConcluido} />
    </div>
  );
}

export default App;