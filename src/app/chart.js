import React from "react";
import { Pie } from "react-chartjs-2";

const App = ({ data }) => {
  const { cases, recovered, deaths } = data;
  const chartData = {
    labels: ["Cases", "Recovered", "Death"],
    datasets: [
      {
        label: "Population",
        data: [cases, recovered, deaths],
        backgroundColor: ["#b53636", "#69c460", "#3b3d3b"]
      }
    ]
  };

  const chartOption = {
    legend: {
      labels: { fontSize: 14, padding: 12 },
      display: true,
      position: "bottom"
    }
  };

  return (
    <div className="chart">
      <Pie data={chartData} options={chartOption} width={100} height={40} />
    </div>
  );
};

export default App;
