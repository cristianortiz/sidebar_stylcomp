import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ChartContainerLeft } from "./charts.styles";

const BecadosChart = ({ Becados }) => {
  const [chartData, setChartData] = useState({});

  const Chart = () => {
    setChartData({
      labels: Becados.labels,
      datasets: [
        {
          label: Becados.label,
          data: Becados.data,
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
              text: "Becados 2015-2021",
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

export default BecadosChart;
