import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../Context/Global";
import { useEffect } from "react";

function Performance() {
    const {calcTotalMiles, calcTotalTime, runs, getRuns} = useGlobalContext();
    
    useEffect(() =>{
        getRuns();
    },[]);

    return(
        <PerformanceStyled>
            <InnerLayout>
                <div className="content-box">
                    <p className="miles">Your total miles: {calcTotalMiles()}</p>
                    <p>Your total time: {calcTotalTime()}</p>
                </div>
            </InnerLayout>
        </PerformanceStyled>
    );
}
const PerformanceStyled = styled.div`
    display: flex;

`;
export default Performance