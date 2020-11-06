import React from 'react';
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


const TimeSelection = () => {
    const handleTimeChange = (event) => {
        console.log(event);
    }
    return (
        <main role="main">
            <TimeSelectionContainer>
                <TimeInputContainer>
                    <h3>Initial Time</h3>
                    <HourMinuteBlock>
                        <TimeInput handleChange={handleTimeChange} />
                    </HourMinuteBlock>
                </TimeInputContainer>
                <TimeInputContainer>
                    <h3>Minutes to add</h3>
                    <HourMinuteBlock>
                        <MinuteAddition
                            name="minutesToAdd"
                            initialValue={0}
                            min={0} 
                        />
                    </HourMinuteBlock>
                </TimeInputContainer>
            </TimeSelectionContainer>
        </main>
    );
};

export default TimeSelection;
{/* <TimeInput 
name="hours"
initialValue={12} 
min={1} 
max={12} 
label="Hours"
/>
<TimeInputColon>:</TimeInputColon>
<TimeInput
name="minutes"
initialValue={0}
min={0}
max={59}
label="Minutes"
/> */}