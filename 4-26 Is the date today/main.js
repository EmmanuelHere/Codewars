// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}

// function isToday(date) {
//     var today = new Date();
//     return date.toDateString() == today.toDateString();
// }

// function isToday(date) {
//     var d = new Date();
//     return (d.getDate() == date.getDate() && d.getFullYear() == date.getFullYear() && d.getMonth() == date.getMonth());
// }