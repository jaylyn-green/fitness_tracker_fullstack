import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from "../../Context/Global"

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
                <button>Add Run</button>
            </div>
        </FromStyled>
    )
}
const FromStyled = styled.form`

margin-top: 1em;

.submit{
    margin-top: 1em;
}
.submit button{
    width: 100px;
    border: black 1px solid;
    border-radius: 6px;
    background: linear-gradient(to right, #86c8ff 0%, #92cdff 100%);
}


`;
export default Form;