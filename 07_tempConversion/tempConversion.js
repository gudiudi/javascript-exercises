const convertToCelsius = function(fahrenheit) {
  const calc = (fahrenheit - 32) * (5 / 9);
  return Math.round(calc * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  const calc = (celcius * (9 / 5)) + 32;
  return Math.round(calc * 10) / 10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};