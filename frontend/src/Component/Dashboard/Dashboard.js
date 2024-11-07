import React from "react";
import styled from "styled-components";
import Chart from "../Chart/Chart";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../Context/Global";

function Dashboard() {

    const { calcTotalMiles, calcTotalTime, getRuns } = useGlobalContext();

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Your Dashboard</h1>
                <div className="welcome-mes">
                <h4>Hello Jay</h4>
                </div>
                <div>
                    <p>Your total run distance is: <span>{calcTotalMiles}</span></p>
                    <p>Your total time is: <span>{calcTotalTime}</span></p>
                    <p>View more info in the performance tab.</p>
                </div>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}
const DashboardStyled = styled.div`
display: flex;
overflow: auto;
.welcome-mes{
    padding: .5rem 0;
}
p{
    color: var(--primary-color);
    padding-bottom: 3px;
    span{
        color: var(--color-green);
    }
}

`;
export default Dashboard;