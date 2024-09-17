// Function to count the number
// of digits in an integer 'n'.
function printDivisor(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

printDivisor(36);

// -------------------------------**********----------------
function countDigits(n) {
  let cnt = 0;

  while (n > 0) {
    cnt = cnt + 1;

    n = Math.floor(n / 10);
  }

  return cnt;
}

function main() {
  let N = 329823;
  console.log("N: " + N);
  let digits = countDigits(N);
  console.log("Number of Digits in N: " + digits);
}

main();
