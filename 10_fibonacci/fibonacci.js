const fibonacci = function(n) {
let num = Number(n); 
if (num < 0) {
    return "OOPS";
} else if (num === 0) {
    return 0;    
} else if (num <=2) {
    return 1;
} else {
    let fib = fibonacci(num-1)+fibonacci(num-2)
    return fib;
}
};

// Do not edit below this line
module.exports = fibonacci;



/* if input is 2 or less, return 1
convert strings to numbers
f(n) = f(n-1)+f(n-2)
*/