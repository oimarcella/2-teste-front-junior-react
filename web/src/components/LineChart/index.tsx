import React from 'react';
import { Line } from 'react-chartjs-2'

interface LineChartProps {
  class: string;
}

const LineChart: React.FC<LineChartProps> = (props) => {
  const configureLineChart = {
    type: 'line',
    data: {
      labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho'
      ],
      datasets: [{
        label: 'Faturamento diário',
        data: [100, 200, 175, 201, 300, 200, 400],
        borderColor: ['#fc8403'],
        fillColor: ['#fc8403'],
      }],
      borderWidth: 4
    }
  }


  return (
    <div className={props.class}>
      <Line type={configureLineChart.type} data={configureLineChart.data} />
    </div>
  )
}
export default LineChart;