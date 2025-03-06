const fibonacci = function(index) {
  index = Number(index);

  if (index < 0) return "OOPS"; 
  if (index === 0) return index; 

  let arr = [0, 1];
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= index; i++) {
    let fib = prev + current;
    prev = current;
    current = fib;
    arr.push(fib);
  }
  return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
