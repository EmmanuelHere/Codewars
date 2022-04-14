// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('!').join('');
}

// function removeExclamationMarks(s) {
//     return s.replace(/!/gi, '');
// }

// const removeExclamationMarks = s => s.replace(/!/g, "");