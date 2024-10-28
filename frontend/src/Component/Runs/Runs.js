import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context/Global";
import { InnerLayout } from "../../styles/layouts";
import Form from "../Forms/Form";
import RunItem from "../RunItem/runItem";

function Runs() {
    const { addRuns, runs, getRuns, deleteRun } = useGlobalContext();

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
                                deleteRun={deleteRun}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </RunsStyled>
    );
}
const RunsStyled = styled.div`
    display: flex;
    overflow: auto;
    .run-content{
        display: flex;
        gap: 2rem;
        flex: 1;
        .runs{
            flex: 1;
        }
    }
`;
export default Runs;