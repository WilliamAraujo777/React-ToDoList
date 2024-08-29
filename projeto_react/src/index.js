import React from 'react';
import { createRoot } from 'react-dom/client'; // Atualize a importação
import App from './app';

const root = createRoot(document.getElementById('root')); // Crie o root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);