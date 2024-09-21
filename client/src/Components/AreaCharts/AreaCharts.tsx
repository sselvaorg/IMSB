import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import axios from "axios";
import {
  GetEntreeProgress,
  GetSortieProgress,
} from "../../Services/ChartsService";

type Props = {};

const AreaCharts = (props: Props) => {
  const [sortieData, setSortieData] = useState<number[]>([]);
  const [entreeData, setEntreeData] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sortieProgress = await GetSortieProgress();
        const entreeProgress = await GetEntreeProgress();

        // Extracting the data and month (assuming month format is consistent with categories)
        const sortieQuantities = sortieProgress.map(
          (item) => item.totalQuantite
        );
        const entreeQuantities = entreeProgress.map(
          (item) => item.totalQuantite
        );
        const months = sortieProgress.map((item) => item.month); // Assuming both responses have the same months

        setSortieData(sortieQuantities);
        setEntreeData(entreeQuantities);
        setCategories(months);
      } catch (error) {
        console.error("Error fetching stock progress", error);
      }
    };

    fetchData();
  }, []);

  const series = [
    {
      name: "Entree Stock",
      data: entreeData,
    },
    {
      name: "Sortie Stock",
      data: sortieData,
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: categories,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ApexCharts
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default AreaCharts;
