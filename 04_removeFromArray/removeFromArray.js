const removeFromArray = function(numbers, ...args) {
  return numbers.filter((num) => !args.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
