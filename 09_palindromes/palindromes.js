const palindromes = function (string) {
    let re = /[^A-Za-z0-9]/g;
    let lowerString = string.toLowerCase().replace(re, '');
    let backwards = string.reverse().replace(re, '');
    
    
    if (string.toLowerCase()===string.reverse()) {
        
    } else {
        
    }
    
   
};

// Do not edit below this line
module.exports = palindromes;


// if string = reverse string, then palindrome