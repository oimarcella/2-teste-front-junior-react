import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2'

interface LineChartProps {
  class: string;
}

const LineChart: React.FC<LineChartProps> = (props) => {
  const [chartData, setChartData] = useState({})
  const chart = () => {
    setChartData({
      labels: ['Janeiro', 'Fevereiro', 'Março'],
      datasets: [{
        label: 'Relatório',
        data: [ 25, 25, 150],
        borderColor: ['#ff9e29', '#c47516', '#fc8403'],
        backgroundColor: ['#ff9e29', '#c47516', '#fc8403'],
        responsive: false,
        aspectRatio: 1
      }],
      borderWidth: 4,
    })
  }

  useEffect(() => {
    chart()
  }, [])
  return (
    <div className={props.class} style={{
      maxHeight: "100%",
      position: "relative"
    }}>
      <Pie type="Pie" data={chartData} height={1} width={5} />
    </div>
  )
}
export default LineChart;