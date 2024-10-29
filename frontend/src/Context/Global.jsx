import React, { useContext, useState, useCallback } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5759/api/v1/";

const GlobalConetext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [runs, setRuns] = useState([]);
  const [error, setError] = useState(null);

  const addRuns = async (runs) => {
    const response = await axios
      .post(`${BASE_URL}add-runs`, runs)
      .catch((err) => {
        setError(err.response.data.message);
        console.log(error);
      });
    getRuns();
  };
  const getRuns = useCallback(async () => {
    const response = await axios.get(`${BASE_URL}get-runs`);
    setRuns(response.data);
  },[]);

  const deleteRun = async (id) => {
    const response = await axios.delete(`${BASE_URL}/delete-run/${id}`);
    getRuns();
  };

  const calcTotalMiles = useCallback(() => {
    let totalMiles = 0;
    runs.forEach((run) => {
      totalMiles += run.distance;
    });
    return totalMiles;
  },[runs]);
  const calcTotalTime = useCallback(() => {
    let totalSeconds = 0;

    runs.forEach((run) => {
      const [hours, minutes, seconds] = run.time.split(":").map(Number);
      totalSeconds += hours * 3600 + minutes * 60 + seconds;
    });

    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  },[runs]);

  return (
    <GlobalConetext.Provider
      value={{
        addRuns,
        getRuns,
        runs,
        deleteRun,
        calcTotalMiles,
        calcTotalTime,
      }}
    >
      {children}
    </GlobalConetext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalConetext);
};
