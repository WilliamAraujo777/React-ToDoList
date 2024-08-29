import React from 'react';

function TodoItem({lista, index, removeItem, flagConcluido }) {
  return (
    <li style={{textDecoration: lista.concluida ? 'line-through' : 'none'}}>
      <input
        type="checkbox"
        checked={lista.concluida}
        onChange={() => flagConcluido(index)}
      />
      {lista.text}
      <button onClick={() => removeItem(index)}>Excluir</button>
    </li>
  );
}

export default TodoItem;