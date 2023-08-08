//Author: Rachit Hans
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { BarElement, LinearScale, CategoryScale, Chart } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement);

const ChartComponent = ({ userId }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await fetch(`https://eventmasterapi.onrender.com/organiserDashboard/eventRevenue?userId=${userId}`);
      const jsonData = await response.json();
      //refrred from https://www.turing.com/kb/ways-to-create-reactjs-bar-chart
      setChartData({
        labels: jsonData.eventName,
        datasets: [
          {
            label: 'My First Dataset',
            data: jsonData.totalCollection,
            backgroundColor: 'black',
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  )
  ;
};

export default ChartComponent;
