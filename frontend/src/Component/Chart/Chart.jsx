import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useGlobalContext } from "../../Context/Global";
import dateFormat from "dateformat";
import { useEffect } from "react";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { runs, getRuns } = useGlobalContext();

  useEffect(() => {
    getRuns();
  }, []);

  const data = {
    labels: runs.map((run) => {
      const { date } = run;
      return dateFormat(date, "m/d/yy");
    }),

    datasets: [
      {
        label: "Distance (miles)",
        data: [
          ...runs.map((run) => {
            const { distance } = run;
            return distance;
          }),
        ],
        backgroundColor: "green",
        tension: 0.4,
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
  margin-top: 2rem;
`;

export default Chart;
