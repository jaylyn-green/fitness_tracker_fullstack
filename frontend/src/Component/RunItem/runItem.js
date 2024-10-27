import styled from "styled-components";
import { calendar, plus, runner } from "../../utils/Icons";
import Button from "../Button/Button";

function RunItem({
    title,
    distance,
    time,
    date,
}) {

    return (
        <RunItemStyled>
            <div className="icon">

            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{runner} 50 miles</p>
                        <p>{calendar} {date}</p>
                        <p></p> {/**huh? */}
                    </div>
                    <div className="btn-container">
                        <Button
                            icon={plus}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            color={'#fff'}
                            
                        /> 
                    </div>
                </div>
            </div>
        </RunItemStyled>
    );
}
const RunItemStyled = styled.div`

`;
export default RunItem;