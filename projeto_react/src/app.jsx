import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TaskChart from './components/TaskChart';
import './app.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addLista = () => {
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
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={addLista}>Adicionar</button>
      
      <TodoList todos={todos} removeItem={removeItem} flagConcluido={flagConcluido} />
      <TaskChart todos={todos} />
    
    </div>
  );
}

export default App;