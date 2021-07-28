import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { ChartContainer } from "./charts.styles";

const DistribucionBecas = ({ DistBecas }) => {
  const [chartData, setChartData] = useState({});

  const Chart = () => {
    setChartData({
      labels: DistBecas.labels,
      datasets: [
        {
          label: DistBecas.label,
          data: DistBecas.data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 2,
        },
      ],
    });
  };
  useEffect(() => {
    Chart();
  }, []);
  return (
    <ChartContainer>
      <Pie
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
              text: "Distribución de Becas 2021",
            },
          },
        }}
      />
    </ChartContainer>
  );
};

export default DistribucionBecas;
