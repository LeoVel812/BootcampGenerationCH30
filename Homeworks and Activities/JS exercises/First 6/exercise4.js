let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

function checkOverlap(set1, set2) {
  for (var i = 0; i < set1.length; i++) {
    for (var j = 0; j < set2.length; j++) {
      // console.log(i, j, set1[i], set2[j]);
      if (set1[i] === set2[j]) {
        console.log("Common course: " + set1[i]);
      }
    }
  }
}
checkOverlap(student1Courses, student2Courses);



