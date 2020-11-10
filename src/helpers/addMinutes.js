 export const breakdownTimeString = timeString => {
    const timeStringLength = timeString.length;
    const meridiem = timeString.substring(timeStringLength - 2);
    const hour = timeStringLength === 8 ? timeString.substring(0, 2) : timeString.substring(0, 1);
    const minutes = timeStringLength === 8 ? timeString.substring(3, 5) : timeString.substring(2, 4);
    
    return { hour, minutes, meridiem };
};

export const convertFrom12To24 = (hours, meridiem) => {
    const intHours = Number(hours);
    if (intHours === 12) {
        if (meridiem === 'AM') return 0;
        return 12;
    }

    if (meridiem === 'PM') return intHours + 12;
    return intHours;
};

export const convertFrom24To12 = hours => {
    if (hours === 0) return { finalHours: '12', finalMeridiem: 'AM' };
    if (hours < 12) return { finalHours: `${hours}`, finalMeridiem: 'AM' };
    if (hours === 12) return { finalHours: `${hours}`, finalMeridiem: 'PM'};
    return { finalHours: `${hours - 12}`, finalMeridiem: 'PM' };
};

export const setMinutes = (originalMinutes, minutesToAdd) => {
    const intMinutes = Number(originalMinutes);
    const totalMinutes = intMinutes + minutesToAdd;
    const hoursToAdd = Math.floor(totalMinutes / 60);
    const modulatedMinutes = totalMinutes % 60;
    const finalMinutes = modulatedMinutes < 10 ? `0${modulatedMinutes}` : `${modulatedMinutes}`;
    return { hoursToAdd, finalMinutes };
}

export const setFinalHours = (militaryHours, hoursToAdd) => {
    if (!hoursToAdd) return militaryHours;

    const totalHours = militaryHours + hoursToAdd;
    return totalHours <= 23 ? totalHours : (totalHours % 24);
}

const addMinutes = (timeString = "12:00 AM", minutesToAdd = 0) => {
    if (!minutesToAdd) return timeString;

    const timeStringElements = breakdownTimeString(timeString);
    // set time from AM/PM to military time
    const militaryHours = convertFrom12To24(timeStringElements.hour, timeStringElements.meridiem);
    // find value of total minutes broken into {hoursToAdd, finalMinutes}
    const { hoursToAdd, finalMinutes } = setMinutes(timeStringElements.minutes, minutesToAdd);
    // resolve hours after adding any additional hours
    const computedHours = setFinalHours(militaryHours, hoursToAdd);
    const {finalHours, finalMeridiem} = convertFrom24To12(computedHours);

    return `${finalHours}:${finalMinutes} ${finalMeridiem}`;
}

export default addMinutes;
