function sortArr(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

const arr1 = [2, 5, 1, 3, 0];
const arr2 = [8, 10, 5, 7, 9];
console.log(`"The Largest element in the array is: ${sortArr(arr1)}`);
console.log(`"The Largest element in the array is: ${sortArr(arr2)}`);

//-----------using the largest variable------------------

function sortArr2(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    return largest;
  }
}
const arr3 = [2, 5, 1, 3, 0];
const arr4 = [8, 10, 5, 7, 9];
console.log(`"The Largest element in the array is: ${sortArr2(arr3)}`);
console.log(`"The Largest element in the array is: ${sortArr2(arr4)}`);
