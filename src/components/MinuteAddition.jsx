import React, {useState} from 'react';
import styled from 'styled-components';

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

const MinuteAddition = ({initialValue, label, min, name}) => {
    const [timeValue, setTimeValue] = useState(initialValue);
    const handleTimeChange = ({target: {value}}) => {
        console.log(value);
        setTimeValue(value);
    }
    return (
        <StyledMinuteAddition>
            <StyledInput 
                id={name}
                type="number" 
                name={name} 
                value={timeValue}
                min={min} 
                onChange={handleTimeChange}
            />
            <StyledLabel for={name}>{label}</StyledLabel>
        </StyledMinuteAddition>
    );
}

export default MinuteAddition;