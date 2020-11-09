const buildMinutes = (originalMinutes = 0, additionalMinutes = 0) => {
    const initialMinutes = originalMinutes + additionalMinutes;
    const hoursToPass = Math.floor(initialMinutes/60);
    const minutesToPass = initialMinutes % 60;
    return [hoursToPass, minutesToPass];
}

const buildHours = (originalHours = 0, additionalHours = 0) => originalHours + additionalHours;

const addMinutes = (timeString = "12:00 AM", minutesToAdd = 0) => {
    if (!minutesToAdd) return timeString;

    const timeStringLength = timeString.length;
    let meridiem = timeString.substring(timeStringLength - 2);
    const timeToModify = timeStringLength === 7 
        ? timeString.substring(0, 4).split(':').map(string => Number(string))
        : timeString.substring(0,5).split(':').map(string => Number(string));

    if (meridiem === 'PM') {
        timeToModify[0] = timeToModify[0] < 12 
            ? timeToModify[0] += 12
            : timeToModify[0] = 0;    
    }
    const minuteValue = buildMinutes(timeToModify[1], minutesToAdd);
    timeToModify[0] = buildHours(timeToModify[0], minuteValue[0]);
    timeToModify[1] = minuteValue[1];
    console.log({timeToModify});
    let remainingHours = timeToModify[0] % 24;    
    let meridiemFlips = Math.floor(timeToModify[0] / 24);

    while(meridiemFlips > 0) {
        meridiem = meridiem === 'PM' ? 'AM' : 'PM';
        meridiemFlips--;
    };

    if (remainingHours > 12) {
        remainingHours -= 12;
        meridiem = meridiem === 'PM' ? 'AM' : 'PM';
    } else if (remainingHours === 0) {
        remainingHours = 12;
        meridiem = 'AM';
    }
    if (timeToModify[1] === 0) {
        timeToModify[1] = '00';
    }
    return `${remainingHours}:${timeToModify[1]} ${meridiem}`;
}


console.log(addMinutes('9:00 PM', 600)); //=> 7:00 AM
console.log(addMinutes('9:00 PM', 2880)); // => 9:00 AM
console.log(addMinutes('9:00 PM', 4320)); // => 9:00 PM
console.log(addMinutes('9:00 PM', 5760)); // => 9:00 PM
console.log(2880 / 60 / 24);
console.log(addMinutes('9:13 PM', 0)) //=> 9:13 PM
console.log(addMinutes('9:13 PM', 60)) //=> 10:13 PM
console.log(addMinutes('9:13 PM', 600)) //=> 7:13 AM
console.log(addMinutes('9:13 PM', 120)) //=> 11:13 PM
console.log(addMinutes('9:13 PM', 150)) //=> 11:43 PM
console.log(addMinutes('9:13 PM', 190)) //=> 12:23 AM
console.log(addMinutes('9:13 PM', 1900)) //=> 4:53 PM
console.log(addMinutes('9:00 PM', 3600)) //=> 9:00 AM
console.log(addMinutes('9:00 PM', 1440)) //=> 9:00 PM