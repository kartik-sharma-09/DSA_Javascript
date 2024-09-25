//Bubble sort :> Push the maximum to the last by adjacent swaps

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

// const arr = [2, 7, 4, 1, 5, 3];
// const arr = [8, 20, -2, 4, -6];
// bubbleSort(arr);
// console.log(arr);

// --------------------///-----------------------
// const arr2 = [8, 5, 3, 6, 2, 4, 1];

// function bubbleSort2(arr2) {
//   let swapped;
//   do {
//     swapped = false
//     for (let i = 0; i < arr2.length - 1; i++) {
//       if (arr2[i] > arr2[i + 1]) {
//         let temp = arr2[i];
//         arr2[i] = arr2[i + 1];
//         arr2[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// const arr2 = [8, 5, 3, 6, 2, 4, 1];
// bubbleSort2(arr2);
// console.log(arr2);

// -------------- with console to understand the code flow----------------------

// function bubbleSort2(arr2) {
//   let swapped;
//   let pass = 0; // To track how many passes we make over the array
//   do {
//     swapped = false;
//     console.log(`\nPass ${pass + 1}: Starting array:`, arr2); // Show the array at the start of each pass
//     for (let i = 0; i < arr2.length - 1; i++) {
//       console.log(
//         `  Comparing arr2[${i}] = ${arr2[i]} and arr2[${i + 1}] = ${
//           arr2[i + 1]
//         }`
//       );
//       if (arr2[i] > arr2[i + 1]) {
//         // Swapping the elements
//         let temp = arr2[i];
//         arr2[i] = arr2[i + 1];
//         arr2[i + 1] = temp;
//         swapped = true;
//         console.log(`  Swapped! New array:`, arr2); // Show the array after each swap
//       }
//     }
//     console.log(`Pass ${pass + 1}: End of pass, array:`, arr2); // Show the array after the full pass
//     pass++;
//   } while (swapped);
//   console.log(`\nFinal sorted array:`, arr2);
// }

// const arr2 = [8, 5, 3, 6, 2];
// bubbleSort2(arr2);

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [7, 5, 9, 1, 2];
bubbleSort(arr);
console.log(arr);
