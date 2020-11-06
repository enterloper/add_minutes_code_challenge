import React from 'react';
import styled from 'styled-components';

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

const TimeInput = ({ handleChange }) => (
    <StyledTimeInput 
        onChange={handleChange}
        type="time"
    />
);

export default TimeInput;