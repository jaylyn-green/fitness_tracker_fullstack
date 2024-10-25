import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from "../../Context/Global"
import Button from "../Button/Button";
import { plus } from "../../utils/Icons"

function Form() {
    const { addRuns } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        distance: '',
        date: '',
        time: '',
    })
    const { title, distance, date, time } = inputState;
    const handleInput = param => e => {
        setInputState({ ...inputState, [param]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        addRuns(inputState);
    }

    return (
        <FromStyled onSubmit={handleSubmit}>
            <div className="input-control">             {/**"title" can double as a description if needed */}
                <input type="text"
                    value={title}
                    name={"title"}
                    placeholder="Run description"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input type="text"
                    value={distance}
                    name={"distance"}
                    placeholder="Run distance in miles."
                    onChange={handleInput('distance')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText="Enter a date in mm/dd/yyyy format."
                    selected={date}
                    dateFormat='MM/dd/yyyy'
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                    }}
                />
            </div>
            <div className="input-control">
                <input value={time}
                    type="text"
                    name={time}
                    placeholder="Enter your time in hh:mm:ss format."
                    onChange={handleInput('time')}
                />
            </div>
            <div className="submit">
                <Button
                    name={'Add run'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'linear-gradient(to right, var(--color-accent) 0%, #008bff 100%)'}
                    color={'#fff'}
                />
            </div>
        </FromStyled>
    )
}
const FromStyled = styled.form`

margin-top: 1em;
display: flex;
flex-direction: column;
gap: 2rem;
input{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
    color: rgba(34,34,96,0.9);
    &::placeholder{
        color: rgba(34,34,96,0.9);
    }
} 
.input-control{
    input{
        width: 100%;
    }

}

.submit{
    margin-top: 1em;
    button{
        &:hover{
        background: var(--color-green) !important;
    }
}        
}
`;
export default Form;