// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
}

// const isPalindrome = (x) => {
//     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
// }

// const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();