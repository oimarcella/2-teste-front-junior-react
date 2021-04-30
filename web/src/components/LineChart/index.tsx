import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'

interface LineChartProps {
  class: string;
}

const LineChart: React.FC<LineChartProps> = (props) => {
  const [chartData, setChartData] = useState({})
  const chart = () => {
    setChartData({
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [{
        label: 'Relatório',
        data: [100, 200, 175, 201, 300, 200, 400],
        borderColor: ['#fc8403'],
        fillColor: ['#fc8403'],
      }],
      borderWidth: 4
    })
  }

  useEffect(() => {
    chart()
  }, [])
  return (
    <div className={props.class}>
      <Line type="Line" data={chartData} />
    </div>
  )
}
export default LineChart;