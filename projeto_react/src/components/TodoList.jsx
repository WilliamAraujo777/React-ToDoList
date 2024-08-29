import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, removeItem, flagConcluido }) {
  return (
    <ul>
      {todos.map((lista, index) => (
        <TodoItem
          key={index}
          index={index}
          lista={lista}
          removeItem={removeItem}
          flagConcluido={flagConcluido}
        />
      ))}
    </ul>
  );
}

export default TodoList;