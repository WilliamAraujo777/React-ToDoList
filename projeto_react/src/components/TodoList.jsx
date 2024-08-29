import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, removeItem, flagConcluido }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeItem={removeItem}
          flagConcluido={flagConcluido}
        />
      ))}
    </ul>
  );
}

export default TodoList;