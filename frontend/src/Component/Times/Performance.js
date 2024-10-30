import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../Context/Global";
import { useEffect } from "react";

function Performance() {
    const { calcTotalMiles, calcTotalTime, getRuns } = useGlobalContext();

    useEffect(() => {
        getRuns();
    }, []);

    return (
        <PerformanceStyled>
            <InnerLayout>
                <div className="content-box">
                    <h2 className="performance">Your Performance</h2>
                    <div className="card-container">
                        <h2 className="total-miles">Your total miles: <span>{calcTotalMiles()}</span></h2>
                        <h2 className="total-time">Your total time: <span>{calcTotalTime()}</span></h2>
                    </div>
                </div>
            </InnerLayout>
        </PerformanceStyled>
    );
}
    const PerformanceStyled = styled.div`
    display: flex;
    overflow: auto;
        .performance{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: var(--box-shadow);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
    }
    .total-miles{
        display: flex;
        margin-bottom: 3rem;
        gap: 1rem;
    }
    .total-time{
        display: flex;
        gap: 1rem;
    }
    span{
        font-weight: 700;
        color: var(--color-green);
    }

`;
    export default Performance