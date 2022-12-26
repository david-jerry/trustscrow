import Chart from "chart.js/auto";
import { getRelativePosition } from 'chart.js/helpers';
import axios from "./axiosFactory";


function sleep(ms) {
  return new window.Promise((resolve) => setTimeout(resolve, ms));
}

export default function ChartJs() {
  return {
    processing: false,
    dataX: null,
    dataY: null,
    dataZ: null,

    async getData() {
      await axios.get(`${window.location.origin}/escrow/transaction/data/`)
      .then(
        async response => {
          await sleep(2500);
          console.dir(response);
          this.dataX = response.data.dataX;
          this.dataY = response.data.dataY;
          this.dataZ = response.data.dataZ;
          const chart = new Chart(document.getElementById('user-chart').getContext('2d'), {
            type: 'bar',
            data: {
              labels: this.dataX,
              datasets: [{
                label: 'Yearly Earning',
                backgroundColor: 'orange',
                barPercentage: 0.5,
                barThicness: 6,
                maxBarThickness: 10,
                minBarLength: 8,
                data: this.dataY
              }, {
                label: 'Yearly Expenses',
                backgroundColor: 'red',
                barPercentage: 0.5,
                barThicness: 6,
                maxBarThickness: 10,
                minBarLength: 8,
                data: this.dataZ
              }]
            },
            options: {
              responsive: true,
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Annual Transaction Chart"
              },
              onClick: (e) => {
                const canvasPosition = getRelativePosition(e, chart);
                this.dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
                this.dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
              }
            }
          });

          return chart;
        })
      .catch(
        async error => {
          await sleep(2500);
          return error;
      });
    },
  };
}

