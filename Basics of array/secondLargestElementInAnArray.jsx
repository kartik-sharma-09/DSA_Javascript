// function getElements(arr) {
//   if (arr.length === 0 || arr.length === 1) {
//     console.log(-1 + " " + -1); // Edge case when only one element is present in the array
//     return;
//   }

//   arr.sort((a, b) => a - b);
//   let small = arr[1];
//   let large = arr[arr.length - 2];
//   console.log("Second smallest is " + small);
//   console.log("Second largest is " + large);
// }

// const arr = [1, 2, 4, 6, 7, 5];
// getElements(arr);

// ---------Edge cases-------------

// Edge Cases:
// If the array has only one element, there is no second largest.
// If all elements are equal, there’s no second largest.

// function findSecondLargest(arr) {
//   if (arr.length < 2) {
//     return "Array has fewer than 2 elements.";
//   }

//   let largest = null;
//   let secondLargest = null;

//   for (let i = 0; i < arr.length; i++) {
//     if (largest === null || arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (
//       (secondLargest === null || arr[i] > secondLargest) &&
//       arr[i] !== largest
//     ) {
//       secondLargest = arr[i];
//     }
//   }

//   if (secondLargest === null) {
//     return "No second largest element found.";
//   }

//   return secondLargest;
// }

// let arr = [3, 5, 1, 8, 2];
// console.log(findSecondLargest(arr));

function sorttemp(arr) {
  if (arr.length === 0 || arr.length === 1) {
    console.log(-1 + " " - 1);
    return;
  }
  arr.sort((a, b) => a - b);
  let small = arr[1];
  let secondLargest = arr[arr.length - 2];
  console.log("small is ", small);
  console.log("secondLargest is ", secondLargest);
}

const arr = [1, 5, 7, 9];
sorttemp(arr);
