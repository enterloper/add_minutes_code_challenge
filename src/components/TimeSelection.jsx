import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import MinuteAddition from './MinuteAddition';
import TimeInput from './TimeInput';
import addMinutes, { convertFrom24To12 } from '../helpers/addMinutes';

const TimeSelectionContainer = styled.div`
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    font-size: 24px;
    font-family: "Avenir Next", "Helvetica Neue", Arial, sans serif;
    > h3 {
        margin-top: 0;
    }
`;

const deriveHoursFromTimeElement = time => {
    const hours = Number(time.substring(0, 2));
    const finalMinutes = time.substring(3, 5);
    return {
        ...convertFrom24To12(hours),
        finalMinutes
    };
};

const TimeSelection = () => {
    const [selectedTime, setSelectedTime] = useState('00:00');
    const [minutesToAdd, setMinutesToAdd] = useState(0);
    const [timePlusMinutes, setTimePlusMinutes] = useState('12:00 AM');

    const handleTimeChange = ({target: { value }}) => {
        setSelectedTime(value);
    };

    const handleMinuteInput = ({target: { value }}) => {
        setMinutesToAdd(Number(value));
    };

    useEffect(() => {
        const {
            finalHours, 
            finalMeridiem, 
            finalMinutes
        } = deriveHoursFromTimeElement(selectedTime);
        const selectedTimeString = `${finalHours}:${finalMinutes} ${finalMeridiem}`;
        const updatedTime = addMinutes(selectedTimeString, minutesToAdd);
        setTimePlusMinutes(updatedTime);
    }, [selectedTime, minutesToAdd]);

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
                    <h3>Updated Time</h3>
                    {timePlusMinutes}
                </ModifiedTimeDisplay>
            </ModifiedTimeContainer>
        </main>
    );
};

export default TimeSelection;
