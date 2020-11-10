import React from 'react';
import styled from 'styled-components';
import {func, string} from 'prop-types';

const StyledTimeInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledTimeInput = styled.input`
    &[type=time] {
        border: none;
        color: #2a2c2d;
        font-size: 14px;
        font-family: helvetica;
        width: 200px;
    }
    &[type=time]::-webkit-datetime-edit-fields-wrapper {
        display: flex;
    }
  
    &[type=time]::-webkit-datetime-edit-text {
        padding: 19px 4px;
    }
    &[type=time]::-webkit-datetime-edit-hour-field {
        background-color: #f2f4f5;
        border-radius: 15%;
        padding: 19px 13px;
    }
  
    &[type=time]::-webkit-datetime-edit-minute-field {
        background-color: #f2f4f5;
        border-radius: 15%;
        padding: 19px 13px;
    }
    
    &[type=time]::-webkit-datetime-edit-ampm-field {
        background-color: #7155d3;
        border-radius: 15%;
        color: #fff;
        padding: 19px 13px;
    }
  
    &[type=time]::-webkit-clear-button {
        display: none;
    }
  
    &[type=time]::-webkit-inner-spin-button {
        display: none;
    }
`;


const StyledLabel = styled.label`
    margin-top: 4px;
    font-size: 12px;
`;


const TimeInput = ({ handleChange, name, time }) => {
    return (
        <StyledTimeInputContainer>
            <StyledTimeInput 
                name={name}
                type="time"
                value={time}
                onChange={handleChange}
            />
            <StyledLabel htmlFor={name}>Time to Modify</StyledLabel>
        </StyledTimeInputContainer>
    );
}

TimeInput.propTypes = {
    handleChange: func.isRequired,
    name: string.isRequired,
    time: string.isRequired
}
export default TimeInput;