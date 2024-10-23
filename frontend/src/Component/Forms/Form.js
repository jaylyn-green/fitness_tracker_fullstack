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
        hours: '',
        minutes: ''
    })
    const { title, distance, date, hours, minutes } = inputState;
    const handleInput = param => e => {
        setInputState({ ...inputState, [param]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        addRuns(inputState);
    }

    return (
        <FromStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input type="text"
                    value={title}
                    name={"title"}
                    placeholder="Run title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input type="text"
                    value={distance}
                    name={"distance"}
                    placeholder="Run distance"
                    onChange={handleInput('distance')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText="Enter a Date."
                    selected={date}
                    dateFormat='MM/dd/yyyy'
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                    }}
                />
            </div>
            <div className="input-control">
                <input value={hours}
                    type="text"
                    name={hours}
                    placeholder="Enter the amount of hours."
                    onChange={handleInput('hours')}
                />
            </div>
            <div className="input-control">
                <input type="number"
                    value={minutes}
                    name={minutes}
                    placeholder="Enter the amount of minutes."
                    onChange={handleInput('minutes')}
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