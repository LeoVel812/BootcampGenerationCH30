let numbers = [1, 2, 3, 4, 5];
function addAndMultiply(inputNumbers) {
  let addResult = 0;
  let multiplyResult = 1;
  for (let i = 0; i < inputNumbers.length; i++) {
    addResult = addResult + inputNumbers[i];
    multiplyResult = multiplyResult * inputNumbers[i];
  }
  console.log("The sum is:" + addResult);
  console.log("The product is:" + multiplyResult);
}

addAndMultiply(numbers);

//using reduce
var addedNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(addedNumber);

var multipliedNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator * currentNumber
);
console.log(multipliedNumber);
