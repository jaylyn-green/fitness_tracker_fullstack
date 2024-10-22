import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Global";
import { InnerLayout } from "../../styles/layouts";
import Form from "../Forms/Form";
function Runs() {
    const {addRun} = useGlobalContext();
    return(
        <RunsStyled>
            <InnerLayout>
                <h1>Runs</h1>
                <div className="run-content">
                    <div className="form-container">
                        <Form />
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