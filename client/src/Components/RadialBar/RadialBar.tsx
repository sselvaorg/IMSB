import React from "react";
import ApexCharts from "react-apexcharts";

type Props = {};

const RadialBar = (props: Props) => {
  const series = [67]; // The percentage for the radial bar
  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 150, // Reduced height
      type: "radialBar",
      offsetY: -5, // Reduced offset
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,
        dataLabels: {
          name: {
            fontSize: "18px", // Reduced font size for the label name
            color: undefined,
            offsetY: 70, // Further adjusted for smaller height
          },
          value: {
            offsetY: 0, // Reduced offset for the value
            fontSize: "24px", // Reduced font size for the value
            color: undefined,
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Median Ratio"],
  };

  return (
    <div>
      <div id="chart">
        <ApexCharts
          options={options}
          series={series}
          type="radialBar"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RadialBar;
