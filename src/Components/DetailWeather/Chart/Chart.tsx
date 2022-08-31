import React, { useEffect, useReducer } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getWeather } from "../../../api/api";
import { chartReducer } from "./reducers";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Temperature vs Day",
    },
  },
};

export function Chart(props: any) {
  const [chartData, dispatch] = useReducer(chartReducer, {});
  const getWeatherData = async () => {
    getWeather(props.city, "forecast").then((res) => {
      const date = res.list
        .map(
          (item: any) =>
            new Date(item.dt * 1000).toLocaleString("en-US", {
              day: "numeric",
            }) +
            " " +
            new Date(item.dt * 1000).toLocaleString("en-US", {
              month: "long",
            })
        )
        .slice(0, 30);
      const temperature = res.list
        .map((item: any) => Math.floor(item.main.temp - 273.15))
        .slice(0, 30);
      dispatch({ type: "SAVE_DATE", date });
      dispatch({ type: "SAVE_TEMP", temperature });
      dispatch({ type: "RECEIVED", isReceived: true });
    });
  };
  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {chartData.isReceived && (
        <Line
          options={options}
          data={{
            labels: chartData.date.map((item: String) => item),
            datasets: [
              {
                fill: true,
                label: "Temperature",
                data: chartData.temperature.map((item: String) => item),
                borderColor: "rgb(180, 0, 10)",
                backgroundColor: "#7CC9E7",
              },
            ],
          }}
        />
      )}
    </>
  );
}
