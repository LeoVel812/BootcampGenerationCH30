// For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
// 1.	Write a command that prints out all of the people in the list.
console.log(people);
// 2.	Write the command to remove "Dani" from the array.
// FIRST WAY:
// people.splice(1, 1); //remove "Dani"
// console.log(people);
// SECOND WAY:
daniIndex = people.indexOf("Dani"); //getting index of Dani
people.splice(daniIndex, 1); //remove "Dani"
console.log(people);
// 3.	Write the command to remove "Juan" from the peopleay.
// FIRST WAY:
// people.splice(2, 1); //remove "Juan"
// console.log(people);
// SECOND WAY:
juanIndex = people.indexOf("Juan"); //getting index of Dani
people.splice(juanIndex, 1); //remove "Dani"
console.log(people);
// 4.	Write the command to move "Luis" to the front of the peopleay.
toIndex = 0; // new index of "Luis"
luisIndex = people.indexOf("Luis"); //getting index of Dani
deletedToString = people.splice(luisIndex, 1)[0]; //getting element to move (object) and  extracting its value
// console.log(deleted);
// console.log(typeof(deleted));
people.splice(toIndex, 0, deletedToString);
console.log(people);
// 5.	Write the command to add your name to the end of the array.
people.push("Leonardo");
console.log(people);
// 6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") break;
}
// 7.	Write the command that gives the indexOf where "Maria" is located.
people.indexOf("Maria");
// At the end of the exercise, there should be 4 people in the array.
