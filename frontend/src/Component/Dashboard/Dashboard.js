import React from "react";
import styled from "styled-components";
import Chart from "../Chart/Chart";
import { InnerLayout } from "../../styles/layouts";

function Dashboard() {
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Your Dashboard</h1>
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