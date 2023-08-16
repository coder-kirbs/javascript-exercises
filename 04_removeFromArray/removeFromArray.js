const removeFromArray = function(arr, ...removal) {
    return arr.filter(val => !removal.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
