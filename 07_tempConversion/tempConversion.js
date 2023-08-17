const convertToCelsius = function(fare) {
  let fSum = (fare - 32) * (5/9)
  return fSum
};

const convertToFahrenheit = function(cels) {
  let cSum = 9*(cels)/5 + 32
  return cSum
}; 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
