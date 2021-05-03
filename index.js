const dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

let cal = {
    January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: []
}

function isValidDate(s) {
    if (! /^\d\d\/\d\d\/\d\d\d\d$/.test(s)) {
        return false;
    }
    const parts = s.split('/').map((p) => parseInt(p, 10));
    parts[0] -= 1;
    const d = new Date(parts[2], parts[0], parts[1]);
    return d.getMonth() === parts[0] && d.getDate() === parts[1] && d.getFullYear() === parts[2];
}

function dayOfWeek(s) {
    if (! /^\d\d\/\d\d\/\d\d\d\d$/.test(s)) {
        return false;
    }
    const parts = s.split('/').map((p) => parseInt(p, 10));
    parts[0] -= 1;
    const d = new Date(parts[2], parts[0], parts[1]);
    return d.getDay()
}

function getYearCalendar(year) {
    for (let i = 0; i < 12; i++) {
        for (let d = 1; d <= 31; d++) {
            let dt = (d.toString().length < 2) ? `0${d}` : d.toString();
            let date = `${months[i]}/${dt}/${year}`
            if (isValidDate(date)) {
                let dw = dayOfWeek(date);
                cal[monthString[i]].push({
                    shortDate: date,
                    date: dt,
                    dateShort: dt.replace(/^0/, ''),
                    month: months[i],
                    monthString: monthString[i],
                    monthShort: monthString[i].substring(0, 3),
                    year: year,
                    yearShort: year.substr(2, 4),
                    day: dw,
                    dayString: dayOfTheWeek[dw],
                    dayShort: dayOfTheWeek[dw].substr(0, 3),
                    dayChar: dayOfTheWeek[dw][0],
                    longDate: new Date(year, +months[i] - 1, dt)
                })
            }
        }
    }

    return cal

}

export { getYearCalendar };