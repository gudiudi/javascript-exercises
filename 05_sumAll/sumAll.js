const sumAll = function(from, to) {
  if (from < 0 || to < 0) return 'ERROR'; 
  if (!Number.isInteger(from) || !Number.isInteger(to)) return 'ERROR';

  let sum = 0;

  if (from < to) {
    while (from <= to) {
      sum += from;
      from++;
    }
  } else {
    while (to <= from) {
      sum += to;
      to++;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
