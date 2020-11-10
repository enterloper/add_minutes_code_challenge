import React from 'react';
import styled from 'styled-components';
import { func, number, string } from 'prop-types';

const StyledMinuteAddition = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLabel = styled.label`
    margin-top: 4px;
    font-size: 12px;
`;

const StyledInput = styled.input`
    padding: 8px;
    font-size: 24px;    
    border-radius: 4px;
    border: 1px solid lightgray;
    height: 36px;
`;

const MinuteAddition = ({label, min, minutesToAdd, name, handleChange}) => {
    return (
        <StyledMinuteAddition>
            <StyledInput 
                id={name}
                type="number" 
                name={name} 
                value={minutesToAdd}
                min={min} 
                onChange={handleChange}
            />
            <StyledLabel htmlFor={name}>{label}</StyledLabel>
        </StyledMinuteAddition>
    );
}

MinuteAddition.propTypes = {
    name: string.isRequired,
    label: string.isRequired,
    minutesToAdd: number.isRequired,
    min: number,
    handleChange: func.isRequired
};

export default MinuteAddition;