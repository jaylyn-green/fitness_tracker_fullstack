import styled from "styled-components";
import { calendar, runner, trash } from "../../utils/Icons";
import Button from "../Button/Button";

function RunItem({
    id,
    title,
    distance,
    time,
    date,
    indicatorColor,
    deleteRun
}) {

    return (
        <RunItemStyled indicator={indicatorColor}>
            
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        {distance > 1 || distance < 1 ? <p>{runner}{distance} miles <span /></p> : <p>{runner}{distance} mile</p>}
                        <p> {calendar}{date}</p>
                    </div>
                    <div className="btn-container">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            color={'#fff'}
                            onClick={() => deleteRun(id)}
                        />
                    </div>
                </div>
            </div>
        </RunItemStyled>
    );
}
const RunItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    
    
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 0.8rem;
                height: 0.8rem;
                background: ${props => props.indicator};
                content: '';
                border-radius: 50%;
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            .text{
                gap:1.5rem;
                display: flex;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;
export default RunItem;