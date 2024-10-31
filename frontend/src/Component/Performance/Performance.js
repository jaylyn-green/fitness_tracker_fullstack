import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../Context/Global";
import { useEffect } from "react";
import Chart from "../Chart/Chart";
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
                    <div className="chart-container">
                        <Chart options={{ maintainAspectRatio: false }} style={{ width: "500px" }}
                        />
                    </div>
                </div>
            </InnerLayout>
        </PerformanceStyled>
    );
}
const PerformanceStyled = styled.div`
    display: flex;
    overflow: auto;
    .content-box{
        height: 100%;
    }
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
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: var(--box-shadow);
        border-radius: 20px;
        padding: 1rem;
        
    }
    .total-time {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: var(--box-shadow);
    border-radius: 20px;
    padding: 1rem;
    margin-left: auto; 
    }

    span{
        font-weight: 700;
        color: var(--color-green);
    }
    .card-container{
        display: flex;
        flex-direction: row;
    }

`;
export default Performance;