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
                    <p>Your total run distance is: {calcTotalMiles}</p>
                    <p>Your total time is: {calcTotalTime}</p>
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

`;
export default Dashboard;