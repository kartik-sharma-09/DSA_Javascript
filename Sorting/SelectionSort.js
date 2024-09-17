const arr = [8, 7, 9, 5, 15, 19, 0];

const selectionSort = (arr) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let indexOfMin = i; // 0

    for (let j = i + 1; j < len; j++) { // here len is arr 
      if (arr[j] < arr[indexOfMin]) indexOfMin = j;  
    }
    if (indexOfMin !== i) {
        // swaping the variable 
      const temp = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};

selectionSort(arr);
console.log(arr);
