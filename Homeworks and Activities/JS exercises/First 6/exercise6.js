// Bubble Sort
let unsortedNumbers = [3, 6, 12, 5, 100, 1]; //input numbers
function bubbleSort(toSort) {
  for (let times = 0; times < toSort.length; times++) {
    for (let i = 0; i < toSort.length; i++) {
      let current = toSort[i];
      let next = toSort[i + 1];
      if (next <= current) {
        toSort[i] = next;
        toSort[i + 1] = current;
      }
    }
  }
  console.log(toSort);
}
bubbleSort(unsortedNumbers);
