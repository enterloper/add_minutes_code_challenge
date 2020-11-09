const breakdownTimeString = timeString => {
    const timeStringLength = timeString.length;
    const meridiem = timeString.substring(timeStringLength - 2);
    const hour = timeStringLength === 8 ? timeString.substring(0, 2) : timeString.substring(0, 1);
    const minutes = timeStringLength === 8 ? timeString.substring(3, 5) : timeString.substring(2, 4);
    
    return { hour, minutes, meridiem };
};

const convertFrom12To24 = (hours, meridiem) => {
    // convert hours to Number
    const intHours = Number(hours);
    if (intHours === 12) {
        if (meridiem === 'AM') return '00';
        return '12'
    }

    if (meridiem === 'PM') {
        return `${intHours + 12}`
    }
    return '' + intHours;
};

const convertFrom24To12 = (hours) => {
    
};

const addMinutes = (timeString = "12:00 AM", minutesToAdd = 0) => {
    const timeStringElements = breakdownTimeString(timeString);
    const militaryHours = convertFrom12To24(timeStringElements.hour, timeStringElements.meridiem);
    console.log(militaryHours);

}

addMinutes()
// for(let i = 1; i < 13; i++) {
//     for(let j = 0; j <= 1; j++) {
//         if (j === 0) {
//             console.log('AM:', convertFrom12To24(i, 'AM'));
//         } else {
//             console.log('PM:', convertFrom12To24(i, 'PM'));
//         }
//     }
// }
// console.log(convertFrom12To24(1, 'AM'));
// console.log(convertFrom12To24(1, 'PM'));

// console.log(addMinutes('9:00 PM', 600)); //=> 7:00 AM
// console.log(addMinutes('9:00 PM', 2880)); // => 9:00 AM
// console.log(addMinutes('9:00 PM', 4320)); // => 9:00 PM
// console.log(addMinutes('9:00 PM', 5760)); // => 9:00 PM
// console.log(2880 / 60 / 24);
// console.log(addMinutes('9:13 PM', 0)) //=> 9:13 PM
// console.log(addMinutes('9:13 PM', 60)) //=> 10:13 PM
// console.log(addMinutes('9:13 PM', 600)) //=> 7:13 AM
// console.log(addMinutes('9:13 PM', 120)) //=> 11:13 PM
// console.log(addMinutes('9:13 PM', 150)) //=> 11:43 PM
// console.log(addMinutes('9:13 PM', 190)) //=> 12:23 AM
// console.log(addMinutes('9:13 PM', 1900)) //=> 4:53 PM
// console.log(addMinutes('9:00 PM', 3600)) //=> 9:00 AM
// console.log(addMinutes('9:00 PM', 1440)) //=> 9:00 PM