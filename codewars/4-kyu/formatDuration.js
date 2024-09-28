/* LINK
 *  https://www.codewars.com/kata/52742f58faf5485cae000b9a
 **/

const MINUTE_SEC = 60;
const HOUR_SEC = 60 * MINUTE_SEC;
const DAY_SEC = 24 * HOUR_SEC;
const YEAR_SEC = 365 * DAY_SEC;
const countOfSeconds = [
    {
        title: "years",
        seconds: YEAR_SEC,
    },
    {
        title: "days",
        seconds: DAY_SEC,
    },
    {
        title: "hours",
        seconds: HOUR_SEC,
    },
    {
        title: "minutes",
        seconds: MINUTE_SEC,
    },
    {
        title: "seconds",
        seconds: 1,
    },
];

const getInt = (x) => Math.trunc(x);

function formatDuration(seconds) {
    if (seconds === 0) return "now";
    let secondsRemainder = seconds;

    const strs = countOfSeconds.map(({title, seconds}) => {
        const dateUnit = getInt(secondsRemainder / seconds);
        secondsRemainder %= seconds;
        return dateUnit ? `${dateUnit} ${dateUnit === 1 ? title.substring(0, title.length - 1) : title}` : ''
    }).filter((value) => !!value)

    const len = strs.length
    const lastElement = strs[len - 1]
    if(len === 1) return lastElement

    return strs.slice(0, len - 1).join(', ') + ` and ${lastElement}`
}


console.log(formatDuration(132030240));
