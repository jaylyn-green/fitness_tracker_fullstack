import React, { useContext, useState } from "react";
import axios from 'axios';
const BASE_URL = "http://localhost:5759/api/v1/";

const GlobalConetext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [runs, setRuns] = useState([]);
    const [error, setError] = useState(null);

    const addRuns = async (runs) => {
        const response = await axios.post(`${BASE_URL}add-runs`, runs)
            .catch((err) => {
                setError(err.response.data.message);
            });
        console.log(response);
    }
    const getRuns = async () => {
        const response = await axios.get(`${BASE_URL}get-runs`)
        setRuns(response.data)
        console.log(response.data);
    }

    return (
        <GlobalConetext.Provider value={{
            addRuns,
            getRuns,
            runs
        }}>
            {children}
        </GlobalConetext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(GlobalConetext);
}