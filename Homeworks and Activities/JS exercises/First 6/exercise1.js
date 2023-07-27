let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  let concatenated = ""; //Creating a empty string
  for (let i = 0; i < arr.length; i++) {
    //looping through arr
    concatenated = concatenated.concat(" ", arr[i]); //concatenating and adding a space
  }
  console.log(concatenated); //printing out the string
}
printOutString(); //calling the function

//using join
let concatenatedString = arr.join(" ");
console.log(concatenatedString);
