const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) * (5/9);
  convertedTemp = Math.round(convertedTemp * 10) / 10;
  return convertedTemp;
};

const convertToFahrenheit = function(temp) {
  let convertedTemp = (temp * 1.8) + 32
  convertedTemp = Math.round(convertedTemp * 10) / 10;
  return convertedTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
