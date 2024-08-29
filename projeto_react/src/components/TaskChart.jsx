import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../TaskChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function TaskChart({ todos }) {
  const completedTasks = todos.filter(lista => lista.concluida).length;
  const pendingTasks = todos.length - completedTasks;

  const data = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        label: 'Tarefas',
        data: [completedTasks, pendingTasks],
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="grafico">
      <h2>Progresso das Tarefas</h2>
      <Doughnut data={data} />
    </div>
  );
}

export default TaskChart;