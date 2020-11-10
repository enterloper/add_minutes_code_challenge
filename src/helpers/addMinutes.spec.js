import addMinutes, {breakdownTimeString, convertFrom12To24, convertFrom24To12, setMinutes, setFinalHours} from './addMinutes';

describe('breakdownTimeString', () => {
    it('should break a time string down into the individual components', () => {
        const testCases = [
            { 
                input: '9:00 PM', 
                output: { 
                    hour: '9',
                    minutes: '00', 
                    meridiem: 'PM' 
                }
            },
            {
                input: '9:00 AM',
                output: { 
                    hour: '9',
                    minutes: '00', 
                    meridiem: 'AM' 
                }
            },
            {
                input: '10:15 AM',
                output: { 
                    hour: '10',
                    minutes: '15', 
                    meridiem: 'AM' 
                }
            },
            {
                input: '10:30 PM',
                output: { 
                    hour: '10',
                    minutes: '30', 
                    meridiem: 'PM' 
                }
            }
        ];

        testCases.forEach(({input, output}) => {
            expect(breakdownTimeString(input)).toEqual(output);
        });
    });
});

describe('convertFrom12To24', () => {
    it('should convert time in meridiem format to military format', () => {
        const testCases = [
            {
                input: ['12', 'AM'],
                output: 0
            },
            {
                input: ['12', 'PM'],
                output: 12
            },
            {
                input: ['1', 'AM'],
                output: 1
            },
            {
                input: ['1', 'PM'],
                output: 13
            },
            {
                input: ['11', 'PM'],
                output: 23
            }
        ];

        testCases.forEach(({input, output}) => {
            expect(convertFrom12To24(input[0], input[1])).toEqual(output);
        });
    });
});

describe('convertFrom24To12', () => {
    it('should convert military hours to meridiem based hours', () => {
        const testCases = [
            {
                input: 0,
                output: {
                    finalHours: '12',
                    finalMeridiem: 'AM'
                }
            },
            {
                input: 1,
                output: {
                    finalHours: '1',
                    finalMeridiem: 'AM'
                }
            },
            {
                input: 11,
                output: {
                    finalHours: '11',
                    finalMeridiem: 'AM'
                }
            },
            {
                input: 12,
                output: {
                    finalHours: '12',
                    finalMeridiem: 'PM'
                }
            },
            {
                input: 13,
                output: {
                    finalHours: '1',
                    finalMeridiem: 'PM'
                }
            },
            {
                input: 24,
                output: {
                    finalHours: '12',
                    finalMeridiem: 'PM'
                }
            }
        ];

        testCases.forEach(({input, output}) => {
            expect(convertFrom24To12(input)).toEqual(output)
        });
    });
});

describe('setMinutes', () => {
    it('should determine hours and minutes based on the total of initial minutes and added minutes', () => {
        const testCases = [
            {
                input: ['00', 0],
                output: {
                    hoursToAdd: 0,
                    finalMinutes: '00'
                }
            },
            {
                input: ['00', 25],
                output: {
                    hoursToAdd: 0,
                    finalMinutes: '25'
                }
            },
            {
                input: ['00', 60],
                output: {
                    hoursToAdd: 1,
                    finalMinutes: '00'
                }
            },
            {
                input: ['00', 125],
                output: {
                    hoursToAdd: 2,
                    finalMinutes: '05'
                }
            },
            {
                input: ['59', 1],
                output: {
                    hoursToAdd: 1,
                    finalMinutes: '00'
                }
            },
            {
                input: ['10', 655],
                output: {
                    hoursToAdd: 11,
                    finalMinutes: '05'
                }
            },
        ];

        testCases.forEach(({input, output}) => {
            expect(setMinutes(input[0], input[1])).toEqual(output);
        });
    });
});

describe('setFinalHours', () => {
    it('should find the total hours from the addition of miilitary hours with additional hours', () => {
        const testCases = [
            {
                input: [0, 0],
                output: 0
            },
            {
                input: [10, 0],
                output: 10
            },
            {
                input: [0, 10],
                output: 10
            },
            {
                input: [23, 0],
                output: 23
            },
            {
                input: [23, 1],
                output: 0
            },
            {
                input: [23, 23],
                output: 22
            },
            {
                input: [12, 4000],
                output: 4
            },
        ];

        testCases.forEach(({input, output}) => {
            expect(setFinalHours(input[0], input[1])).toEqual(output);
        });
    });
});

describe('addMinutes', () => {
    it('should accept a string with format "[H]H:MM AM|PM" as well as an integer, and return a string with format "[H]H:MM AM|PM"', () =>{
        const testCases = [
            {
                input: ['9:00 PM', 600],
                output: '7:00 AM'
            },
            {
                input: ['9:00 PM', 2880],
                output: '9:00 PM'
            },
            {
                input: ['9:00 PM', 4320],
                output: '9:00 PM'
            },
            {
                input: ['9:00 PM', 5760],
                output: '9:00 PM'
            },
            {
                input: ['9:13 PM', 0],
                output: '9:13 PM'
            },
            {
                input: ['9:13 PM', 60],
                output: '10:13 PM'
            },
            {
                input: ['9:13 PM', 600],
                output: '7:13 AM'
            },
            {
                input: ['9:13 PM', 120],
                output: '11:13 PM'
            },
            {
                input: ['9:13 PM', 150],
                output: '11:43 PM'
            },
            {
                input: ['9:13 PM', 190],
                output: '12:23 AM'
            },
            {
                input: ['9:13 PM', 1900],
                output: '4:53 AM'
            },
            {
                input: ['9:00 PM', 3600],
                output: '9:00 AM'
            },
            {
                input: ['9:00 PM', 1440],
                output: '9:00 PM'
            }
        ];

        testCases.forEach(({input, output}) => {
            expect(addMinutes(input[0], input[1])).toEqual(output);
        });
    });
})