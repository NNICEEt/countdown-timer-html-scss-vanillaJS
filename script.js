const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');

const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const zeroPad = (num) => {  
    num = Math.floor(num).toString();
    if (num.length < 2) num = '0' + num;
    return num;
}

const setTimeRemainingToDisplay = (element, time, operation) => {
    let timeResult;
    switch (operation) {
        case 'day': timeResult = Math.floor(time / DAY);
            break
        case 'hour': timeResult = Math.floor(time % DAY / HOUR);
            break
        case 'minute': timeResult = Math.floor(time % HOUR / MINUTE);
            break
        case 'second': timeResult = Math.floor(time % MINUTE / SECOND);
            break
        default: timeResult = time;
            break
    }
    element.innerText = zeroPad(timeResult);
}

const counterTimer = () => {
    const now = new Date();
    const endDateTime = new Date(`${now.getFullYear()}-12-31 24:00:00`);
    const DateTimeRemaining = endDateTime.getTime() - now.getTime();

    setTimeRemainingToDisplay(daysElem, DateTimeRemaining, 'day');
    setTimeRemainingToDisplay(hoursElem, DateTimeRemaining, 'hour');
    setTimeRemainingToDisplay(minutesElem, DateTimeRemaining, 'minute');
    setTimeRemainingToDisplay(secondsElem, DateTimeRemaining, 'second');
}

const run = () => {
    setInterval(counterTimer, 1000);
}
run()