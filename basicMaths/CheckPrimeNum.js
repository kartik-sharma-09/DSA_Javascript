//--------------Function to check if a given number is prime.-------------------------

function checkPrime(n) {
  let cnt = 0;  // initialise the variable to store the count value 
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      cnt = cnt + 1;
    }
  }

  if (cnt === 2) {
    return true;
  } else {
    return false;
  }
}

// Main function
function main() {
  let n = 1483;
  let isPrime = checkPrime(n);
  if (isPrime) {
    console.log(n + " is a prime number.");
  } else {
    console.log(n + " is not a prime number.");
  }
}

// Calling the main function
main();
