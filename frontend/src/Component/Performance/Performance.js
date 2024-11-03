import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../Context/Global";
import { useEffect } from "react";
import Chart from "../Chart/Chart";

function Performance() {
    const { calcTotalMiles, calcTotalTime, getRuns, calcShortAndLong, calcLongAndShortTime } = useGlobalContext();

    useEffect(() => {
        getRuns();
    }, [getRuns]);

    const { shortest, longest } = calcShortAndLong;
    const { shortest: shortest_time, longest: longest_time } = calcLongAndShortTime;

    return (
        <PerformanceStyled>
            <InnerLayout>
                <div className="content-box">
                    <h2 className="performance">Your Performance</h2>
                    <div className="card-container">
                        <div className="miles-container">
                            <h2 className="total-miles">Your total miles: <span>{calcTotalMiles} miles</span></h2>
                            <h2 className="shortest-run">Your shortest run: <span>{shortest} miles</span></h2>
                            <h2 className="longest-run">Your longest run: <span>{longest} miles</span></h2>
                        </div>
                        <div className="times-container">
                            <h2 className="total-time">Your total time: <span>{calcTotalTime}</span></h2>
                            <h2 className="shortest-time">Your shortest time: <span>{shortest_time}</span></h2>
                            <h2 className="longest-time">Your longest time: <span>{longest_time}</span></h2>

                        </div>
                    </div>
                    <div className="chart-container">
                        <Chart options={{ maintainAspectRatio: false }} style={{ width: "500px" }} />
                    </div>
                </div>
            </InnerLayout>
        </PerformanceStyled>
    );
}

const PerformanceStyled = styled.div`
    display: flex;
    overflow: auto;

    .content-box {
        height: 100%;
    }

    .performance {
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

    .miles-container, .times-container {
        display: flex;
        flex-direction: column; 
        gap: 1rem;
    }

    .total-miles, .shortest-run, .longest-run {
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: var(--box-shadow);
        border-radius: 20px;
        padding: 1rem;
    }
    .total-time, .shortest-time, .longest-time{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: var(--box-shadow);
        border-radius: 20px;
        padding: 1rem;
    }
    span {
        font-weight: 700;
        color: var(--color-green);
    }

    .card-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .chart-container {
        margin-top: 2rem;
    }
`;

export default Performance;
