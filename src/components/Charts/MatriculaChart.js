import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ChartContainer } from "./charts.styles";

const MatriculaChart = ({ Matricula }) => {
  const [chartData, setChartData] = useState({});
  //console.log(Matricula);
  const Chart = () => {
    setChartData({
      labels: Matricula.labels,
      datasets: [
        {
          label: Matricula.label,
          data: Matricula.data,
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    Chart();
  }, []);
  return (
    <ChartContainer>
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
              text: "Matriculados 2015-2021",
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
    </ChartContainer>
  );
};

export default MatriculaChart;
