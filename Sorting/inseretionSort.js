// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = numberToInsert;
//   }
// }

// const arr = [8, 20, -2, 4, -6];
// const arr = [7,3,5,8]
// insertionSort(arr);
// console.log(arr);

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];  // current number pick
    let j = i - 1;  // sorted part ka pichla element pe check kro    

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];  // bade no. ko right shift karega 
      j = j - 1;    // aur piche chale jao 
    }
    arr[j+1] = numberToInsert   // correct position pe dal do 
  }
}

const arr = [7, 3, 5];
insertionSort(arr);
console.log(arr);
