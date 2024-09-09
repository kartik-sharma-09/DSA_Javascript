//----------------Function to Reverse the Number.-----------

function reverseNUm() {
  let revNum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    revNum = revNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return revNum;
}
let num = 88352;
console.log(reverseNUm(num));
