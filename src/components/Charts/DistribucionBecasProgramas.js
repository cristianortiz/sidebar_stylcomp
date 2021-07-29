import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ChartContainerLeft } from "./charts.styles";

const DistribucionBecasProgramas = ({ DistBecasProgramas }) => {
  const [chartData, setChartData] = useState({});

  const Chart = () => {
    setChartData({
      labels: DistBecasProgramas.labels,
      datasets: [
        {
          label: DistBecasProgramas.label,
          data: DistBecasProgramas.data,
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
        {
          label: DistBecasProgramas.label1,
          data: DistBecasProgramas.data1,
          backgroundColor: ["rgba(75, 192, 192, 0.2)"],
          borderColor: ["rgba(75, 192, 192, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    Chart();
  }, []);
  return (
    <ChartContainerLeft>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Distribucion de Becas por Programa",
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </ChartContainerLeft>
  );
};

export default DistribucionBecasProgramas;
