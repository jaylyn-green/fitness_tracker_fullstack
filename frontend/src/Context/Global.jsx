import React, { useContext, useState, useCallback, useMemo } from "react";
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
    console.log("Fetched runs:", response.data);
    setRuns(response.data);
  }, []);

  const deleteRun = async (id) => {
    const response = await axios.delete(`${BASE_URL}/delete-run/${id}`);
    getRuns();
  };

  const calcTotalMiles = useMemo(() => {
    let totalMiles = 0;
    runs.forEach((run) => {
      totalMiles += run.distance;
    });
    return totalMiles.toFixed(2);
  }, [runs]);

  const calcTotalTime = useMemo(() => {
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
  }, [runs]);

  const calcShortAndLongRun = useMemo(() => {
    if (runs.length === 0) return { shortest: 0, longest: 0 };

    let shortest = Infinity;
    let longest = -Infinity;

    runs.forEach((run) => {
      let curr = run.distance;
      if (curr < shortest) shortest = curr;
      if (curr > longest) longest = curr;
    });
    return { shortest, longest };
  }, [runs]);

  const calcLongAndShortTime = useMemo(() => {
    if (runs.length === 0) return { shortest: "00:00:00", longest: "00:00:00" };

    let shortest_time = Infinity;
    let longest_time = -Infinity;

    runs.forEach((run) => {
      const [hours, minutes, seconds] = run.time.split(":").map(Number);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;

      if (totalSeconds < shortest_time) shortest_time = totalSeconds;
      if (totalSeconds > longest_time) longest_time = totalSeconds;
    });

    const formatTime = (totalSeconds) => {
      const hours = Math.floor(totalSeconds / 3600)
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((totalSeconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (totalSeconds % 60).toString().padStart(2, "0");

      return `${hours}:${minutes}:${seconds}`;
    };

    return {
      shortest: formatTime(shortest_time),
      longest: formatTime(longest_time),
    };
  }, [runs]);

  return (
    <GlobalConetext.Provider
      value={{
        addRuns,
        getRuns,
        runs,
        deleteRun,
        calcTotalMiles,
        calcTotalTime,
        calcShortAndLong: calcShortAndLongRun,
        calcLongAndShortTime,
      }}
    >
      {children}
    </GlobalConetext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalConetext);
};
