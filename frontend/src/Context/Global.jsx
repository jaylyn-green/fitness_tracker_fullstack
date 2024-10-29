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
        getRuns();
    }
    const getRuns = async () => {
        const response = await axios.get(`${BASE_URL}get-runs`)
        setRuns(response.data)
        
    }
    const deleteRun = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-run/${id}`);
        getRuns();
    }

    return (
        <GlobalConetext.Provider value={{
            addRuns,
            getRuns,
            runs,
            deleteRun
        }}>
            {children}
        </GlobalConetext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(GlobalConetext);
}