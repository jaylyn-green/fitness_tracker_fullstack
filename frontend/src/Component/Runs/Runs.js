import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context/Global";
import { InnerLayout } from "../../styles/layouts";
import Form from "../Forms/Form";
import RunItem from "../RunItem/runItem";

function Runs() {
    const { addRuns, runs, getRuns } = useGlobalContext();

    useEffect(() => {
        getRuns();
    }, [])

    return (
        <RunsStyled>
            <InnerLayout>
                <h1>Your Runs</h1>
                <div className="run-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="runs">
                        {runs.map((run) => {
                            const { _id, title, distance, date, time } = run;
                            return <RunItem
                                key={_id}
                                id={_id}
                                title={title}
                                distance={distance}
                                date={date}
                                time={time}
                                indicatorColor="#42AD00"
                            />
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