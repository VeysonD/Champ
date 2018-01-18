exports.factorial = function randomFactorial() {
  let n = Math.floor(Math.random() * 10) + 1;
  let sum = 1;

  while (n !== 0) {
    sum *= n;
    n -=1;
  }
  return sum;
};
