let numbers = [3, 53, 12, 1, 5];

function doubling(inputNumbers) {
  for (let i = 0; i < inputNumbers.length; i++) {
    numbers[i] = numbers[i] * 2;
  }
  console.log(numbers);
}
doubling(numbers);

//Using map()
let firstsNumbers = [3, 53, 12, 1, 5];
const doubledNumbers = firstsNumbers.map((x) => 2 * x);
console.log(doubledNumbers);
