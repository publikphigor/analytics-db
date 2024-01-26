/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from '@contexts/ThemeProvider';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const data = {
  datasetIdKey: 'id',
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      id: 1,
      label: 'Sales Trends',
      data: [12.6, 22.2, 7.4, 29.8, 15, 40, 15, 24.3, 33.7, 9.4, 31.7, 28],
      backgroundColor: ['#34CAA51A'],
      borderRadius: 20,
      barThickness: 30,
      zeroLineColor: '#EAEAEA',
    },
  ],
};

const createGradient = (context: any) => {
  const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, context.chart.width);

  gradient.addColorStop(0, '#34CAA5');
  gradient.addColorStop(1, 'rgba(52, 202, 165, 0.00)');

  return gradient;
};

const BarChart = () => {
  const { dark } = useTheme();

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: dark ? '#fff' : '#090C2C',
        borderRadius: 2,
        bodyColor: dark ? '#090C2C' : '#fff',
        padding: 6,
        borderColor: '#f2f2f2',
        callbacks: {
          label: (context: any) => {
            const label = `${context.label}  ${context.raw}`;
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          zeroLineColor: '#fff',
        },
      },
      y: {
        grid: {
          display: true,
          color: dark ? '#26282C50' : '#f2f2f2',
          borderDash: [5, 5],
        },
      },
    },
    tooltip: {
      callbacks: {
        labelColor() {
          return {
            borderColor: dark ? '#090C2C' : '#fff',
            backgroundColor: dark ? '#fff' : '#090C2C',
            borderWidth: 2,
            borderDash: [2, 2],
            borderRadius: 2,
          };
        },
        labelTextColor() {
          return dark ? '#090C2C' : '#525252';
        },
      },
    },
    elements: {
      bar: {
        hoverBackgroundColor: createGradient,
      },
    },
  };

  return <Chart type="bar" data={data} options={options} width={600} height={320} />;
};

export default BarChart;
