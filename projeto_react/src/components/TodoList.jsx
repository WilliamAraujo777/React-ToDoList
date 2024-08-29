import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, removeItem, toggleComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeItem={removeItem}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;