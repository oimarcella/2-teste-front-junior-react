import React from 'react';
import { Pie } from 'react-chartjs-2'

interface PieChartProps {
  class: string;
}

const PieChart: React.FC<PieChartProps> = (props) => {

  const configurePieChart = {
    type: 'pie',
    data: {
      labels: ['Taxa de entrega grátis', 'Promoção de Segunda-Feira', 'Promoção de Terça-Feira'],
      legend: {
        display: true,
        position: 'right',
        align: 'center'
      },
      datasets: [{
        label: 'Relatório',
        data: [25, 25, 150],
        borderColor: ['#ff9e29', '#c47516', '#fc8403'],
        backgroundColor: ['#ff9e29', '#c47516', '#fc8403'],

      }],
      borderWidth: 4
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'right',
          align: 'center'
        },
        title: {
          display: true,
          text: 'Promoções mais utilizadas'
        }
      }
    }
  }


  return (
    <div className={props.class} style={{
      height: "350px",
      width: "300px"
    }}>
      <Pie type={configurePieChart.type} data={configurePieChart.data} options={configurePieChart.options} />
    </div>
  )
}
export default PieChart;