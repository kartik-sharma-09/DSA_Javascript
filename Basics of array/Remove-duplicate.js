// function removeDuplicates(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   let j = 0; // 1

//   arr = [1, 1, 2, 2, 3, 4, 4, 5]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[j]) {
//       j = j + 1;
//       arr[j] = arr[i];
//     }
//   }

//   return j + 1;
// }

// const arr = [1, 1, 2, 2, 3, 4, 4, 5];
// const newLength = removeDuplicates(arr);

// console.log("Unique Array Length: ", newLength);
// console.log("Unique Elements: ");
// for (let i = 0; i < newLength; i++) {
//   console.log(arr[i]);
// }

function removeDuplicate(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j = j + 1;
      arr[j] = arr[i];
    }
  }
  return j + 1;
}
const arr = [1, 1, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicate(arr);

console.log("unique Array length: ", newLength); // 1,2,3,4,5
for (let i = 0; i < newLength; i++) {
  console.log(arr[i]);
}
