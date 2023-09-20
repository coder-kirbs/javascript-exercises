const palindromes = function (string) {
    let re = /[^A-Za-z0-9]/g;
    let lowerString = string.toLowerCase().replace(re, '');
    let backwards = lowerString.split('').reverse().join('');
    return lowerString === backwards;
}

// Do not edit below this line
module.exports = palindromes;


// if string = reverse string, then palindrome