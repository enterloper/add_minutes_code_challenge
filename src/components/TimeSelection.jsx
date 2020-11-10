import React, {useState} from 'react';
import styled from 'styled-components';
import MinuteAddition from './MinuteAddition';
import TimeInput from './TimeInput';
// import addMinutes from '../helpers/addMinutes';
// console.log('eat my ass', addMinutes('9:00 PM', 600));

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
    const [minutesToAdd, setMinutesToAdd] = useState(0);

    const handleTimeChange = ({target: { value }}) => {
        setSelectedTime(value);
    };

    const handleMinuteInput = ({target: { value }}) => {
        console.log('eat me fat boy', value);
        setMinutesToAdd(Number(value));
    };

    return (
        <main role="main">
            <TimeSelectionContainer>
                <TimeInputContainer>
                    <HourMinuteBlock>
                        <TimeInput
                            name="timeToChange"
                            handleChange={handleTimeChange} 
                            time={selectedTime}
                        />
                    </HourMinuteBlock>
                </TimeInputContainer>
                <TimeInputContainer>
                    <HourMinuteBlock>
                        <MinuteAddition
                            name="minutesToAdd"
                            label="Minutes to Add"
                            minutesToAdd={minutesToAdd}
                            min={0} 
                            handleChange={handleMinuteInput}
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
