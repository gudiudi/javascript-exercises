const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
  if (nums.length <= 0) return 0;
	return nums.reduce(((a, b) => a + b));
};

const multiply = function(nums) {
  return nums.reduce((a, b) => a * b);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
  if (num === 0) return 1;
	return [...Array(num).keys()]
    .map((i) => num - i)
    .reduce((a, b) => a * b);
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
