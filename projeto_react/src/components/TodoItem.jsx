import React from 'react';

function TodoItem({todo, index, removeItem, flagConcluido }) {
  return (
    <li style={{textDecoration: todo.concluida ? 'line-through' : 'none'}}>
      <input
        type="checkbox"
        checked={todo.concluida}
        onChange={() => flagConcluido(index)}
      />
      {todo.text}
      <button onClick={() => removeItem(index)}>Excluir Task</button>
    </li>
  );
}

export default TodoItem;