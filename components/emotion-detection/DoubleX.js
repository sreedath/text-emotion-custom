import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto'; // Import from 'chart.js/auto'

const MakeChart = (props) => {
  useEffect(() => {
    const data = {
      labels: ['joy', 'sadness', 'anger', 'fear', 'love', 'surprise'],
      datasets: [
        {
          label: 'Dataset-1',
          data: [1000, 1000, 400, 200, 300, 100],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: ['lime', 'blue', 'red', 'green', '#ff77ff', 'gold'],
          pointBorderColor: ['lime', 'blue', 'red', 'green', '#ff77ff', 'gold'],
          pointHoverBackgroundColor: ['lime', 'blue', 'red', 'green', '#ff77ff', 'gold'],
          pointHoverBorderColor: ['lime', 'blue', 'red', 'green', '#ff77ff', 'gold'],
        },
        {
          label: 'Dataset-2',
          data: [500, 469, 420, 371, 421, 319],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: ['lime', 'blue', 'red', 'green', '#ff77ff', 'gold'],
          pointBorderColor: ['lime', 'blue', 'red', 'green', '#ff77ff', 'gold'],
          pointHoverBackgroundColor: ['lime', 'blue', 'red', 'green', '#ff77ff', 'gold'],
          pointHoverBorderColor: ['lime', 'blue', 'red', 'green', '#ff77ff', 'gold'],
        },
      ],
    };
    const config = {
      type: 'radar',
      data: data,
      options: {
        responsive:false,
        animation:{
            duration:5000,
            easing:"easeInOutBounce",
        },
        elements: {
          line: {
            borderWidth: 1,
          },
        },
        scales: {
          r: {
            pointLabels: {
                color: ['lime', 'blue', 'red', 'green', '#ff77ff', 'gold'],
                font:{
                    size:16,
                },
            },
            ticks:{
                display:false,
            },
          },
        },
      },
    };

    var myBarChart = new Chart(props.chartId, config);

    return () => {
      myBarChart.destroy();
    };
  }, [props.chartId]);

  return <canvas id={props.chartId} width="400" height="300"></canvas>;
};

export default MakeChart;
