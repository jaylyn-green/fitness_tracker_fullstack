import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context/Global";
import { InnerLayout } from "../../styles/layouts";
import Form from "../Forms/Form";
import {Run} from 

function Runs() {
    const { addRuns, runs, getRuns } = useGlobalContext();

    useEffect(() =>{
        getRuns();
    },[])

    return (
        <RunsStyled>
            <InnerLayout>
                <h1>Your Runs</h1>
                <div className="run-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="runs">
                        {runs.map((run) =>{
                            const {title, distance, date, time} = run;
                            return <Run />
                        })}
                    </div>
                    <div className="runs">

                    </div>
                </div>
            </InnerLayout>
        </RunsStyled>
    );
}
const RunsStyled = styled.div`
`;
export default Runs;