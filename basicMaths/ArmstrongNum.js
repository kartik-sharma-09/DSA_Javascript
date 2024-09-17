function Armstrong(num) {
  const k = String(num).length;  // here we get the power of the by getting their length
  let sum = 0;
  let n = num; 

  while (n > 0) {
    let ld = n % 10; 
    sum += Math.pow(ld, k);   // here we set the power by using math.pow(actual valur, power)
    n = Math.floor(n / 10); 
  }

  return sum === num; 
}

function main() {
  const number = 153; 

  if (Armstrong(number)) {
    console.log(number + " is an Armstrong number."); 
  } else {
    console.log(number + " is not an Armstrong number.");
  }
}

main();