const removeFromArray = function(arr, removal) {
    return arr.filter(function(ele){ 
        return ele != removal; 
    });
};

// Do not edit below this line
module.exports = removeFromArray;
