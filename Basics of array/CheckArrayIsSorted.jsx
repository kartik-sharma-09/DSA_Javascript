

//-----------------------

function isArraySorted(arr) {
  // Traverse the array and compare each element with the next one
  for (let i = 0; i < arr.length - 1; i++) {
    // If the current element is greater than the next element, the array is not sorted
    if (arr[i] > arr[i + 1]) {
      return false; // Array is not sorted
    }
  }
  return true; // Array is sorted
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 2, 1];

console.log(isArraySorted(arr1)); // Output: true (Array is sorted)
console.log(isArraySorted(arr2)); // Output: false (Array is not sorted)
