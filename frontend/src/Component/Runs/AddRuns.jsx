import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context/Global";
import { InnerLayout } from "../../styles/layouts";
import Form from "../Forms/Form";
import RunItem from "../RunItem/runItem";

function AddRuns() {
  const { runs, getRuns, deleteRun } = useGlobalContext();

  useEffect(() => {
    getRuns();
  }, []);

  return (
    <RunsStyled>
      <InnerLayout>
        <div className="run-content">
          <div className="form-wrapper">
            <h1 className="page-title">Add your data</h1>
            <div className="form-container">
              <Form />
            </div>
          </div>
          <div className="runs">
            {runs.length <= 0 ? (
              <h3 className="empty-message">
                Nothing to see yet...
                <br />
                <br />
                Try adding something in the form on the left.
              </h3>
            ) : (
              runs.map((run) => {
                const { _id, title, distance, date, time } = run;
                return (
                  <RunItem
                    key={_id}
                    id={_id}
                    title={title}
                    distance={distance}
                    date={date}
                    time={time}
                    indicatorColor="#42AD00"
                    deleteRun={deleteRun}
                  />
                );
              })
            )}
          </div>
        </div>
      </InnerLayout>
    </RunsStyled>
  );
}
const RunsStyled = styled.div`
  display: flex;

  .run-content {
    display: flex;
    gap: 2rem;
    height: 100vh; 
    overflow: hidden;

    .form-wrapper {
      position: sticky;
      top: 0;
      align-self: flex-start;
      width: 100%;
      max-width: 300px;
      z-index: 10;
      padding-top: 1rem;
    }

    .runs {
      flex: 1;
      overflow-y: auto;
      height: 100%; 
      padding-right: 1rem;
    }
  }

  .empty-message {
    display: flex;
    justify-content: center;
  }
`;


export default AddRuns;
