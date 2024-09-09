//----------------Function to count the numberof digits in an integer 'n'.-----------
function countDigit(n) {
  let cnt = 0;
  while (n > 0) {
    cnt = cnt + 1;
    n = Math.floor(n/10)
  }
  return cnt
}

function main() {
  let n = 8893;
  console.log("n: " + n);
  let digits = countDigit(n);
  console.log("number of digits in N: " + digits);
}
main();
