import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import MinuteAddition from './MinuteAddition';
import TimeInput from './TimeInput';

const TimeSelectionContainer = styled.div`
    display: flex;
    max-width: 800px;
    margin: 0 auto;
`;

const TimeInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
`;

const HourMinuteBlock = styled.div`
    display: flex;
    justify-content: center;
`;

const ModifiedTimeContainer = styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
`;

const ModifiedTimeDisplay = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px;
`;

const TimeSelection = () => {
    const [selectedTime, setSelectedTime] = useState('12:00');
    const handleTimeChange = (event) => {
        console.log(event.target.value);
        setSelectedTime(event.target.value);
    }

    return (
        <main role="main">
            <TimeSelectionContainer>
                <TimeInputContainer>
                    <HourMinuteBlock>
                        <TimeInput
                            name="timeToChange"
                            handleChange={handleTimeChange} 
                        />
                    </HourMinuteBlock>
                </TimeInputContainer>
                <TimeInputContainer>
                    <HourMinuteBlock>
                        <MinuteAddition
                            name="minutesToAdd"
                            label="Minutes to Add"
                            initialValue={0}
                            min={0} 
                        />
                    </HourMinuteBlock>
                </TimeInputContainer>
            </TimeSelectionContainer>
            <ModifiedTimeContainer>
                <ModifiedTimeDisplay>
                    12:00
                </ModifiedTimeDisplay>
            </ModifiedTimeContainer>
        </main>
    );
};

export default TimeSelection;
