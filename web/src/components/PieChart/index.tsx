import React from 'react';
import { Pie } from 'react-chartjs-2'

interface PieChartProps {
  class: string;
}

const PieChart: React.FC<PieChartProps> = (props) => {

  const configurePieChart = {
    type: 'pie',
    data: {
      labels: [
        'Taxa de entrega grátis (R$300,00)',
        'Promoção de Segunda-Feira (R$150,00)',
        'Promoção de Terça-Feira (R$150,00)'],
      legend: {
        display: true,
        position: 'right',
        align: 'center',
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
          title: {
            display: true,
            color: '#808080',
            text: 'Promoções mais utilizadas',
            padding: 8,
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          labels: {
            padding: 25,
            usePointStyle: true,
          },
          display: true,
          maxWidth: 300,
          position: 'right',
          align: 'center'
        }
      }
    }
  }


  return (
    <div className={props.class} >
      <Pie type={configurePieChart.type} data={configurePieChart.data} options={configurePieChart.options} />
    </div>
  )
}
export default PieChart;