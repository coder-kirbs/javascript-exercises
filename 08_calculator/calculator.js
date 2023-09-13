const add = function(a, b) {
	let added = a+b;
  return added;
};

const subtract = function(a, b) {
	let subtracted = a-b;
  return subtracted;
};

//sum of different numbers within an array, even multiple numbers
const sum = function(array) {
  return array.reduce((total, current) => total + current, 0)
  };

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(number) {
	if (number < 0) {
    return -1;
  } else if (number===0) {
    return 1;
  } else
    return number * (factorial(number-1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
