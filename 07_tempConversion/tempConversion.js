const convertToCelsius = function(fare) {
  let fSum = (fare - 32) * (5/9)
  return Math.round(fSum*10)/10
};

const convertToFahrenheit = function(cels) {
  let cSum = 9*(cels)/5 + 32
  return Math.round(cSum*10)/10
}; 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
