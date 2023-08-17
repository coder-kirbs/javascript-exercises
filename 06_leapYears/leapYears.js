const leapYears = function(year) {
    if (year % 4!==0 && year % 100!==0 && year % 400!==0) {
        return false
    } else if (year % 4===0) {
        return true
    } else {
        return false
    }
};

// if year /100 && /4 then leap_year
// if year /4, then =leap_year


// Do not edit below this line
module.exports = leapYears;
