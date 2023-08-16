const sumAll = function (min, max) {
    if (min > max) [min, max] = [max, min];
    if (min < 0 || max<0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

   
    /* let x=0
    let y=0
    while (x<10) {
        x++;
        y += x; 
    } */

    let sum = 0;
    for (let i = min; i <= min; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
