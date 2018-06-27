 /*var teacherName = "Sally Jones";
var teacherDepartment = "Science";
var teacherRating1 = 3.5;
var teacherRating2 = 1.0;
var teacherRating3 = 5.0;
var teacherRating = ["3.5", "1.0", "5.0"];

var teacherAvgRating = (teacherRating1 + teacherRating2 + teacherRating3) / 3;
teacherAvgRating = Math.round( teacherAvgRating * 10 ) / 10;

console.log(teacherAvgRating);

function getRatingAvg(ratings) {

var sum = 0;
for (var i = 0; i<= getRatingAvg.length; i++) {
sum = sum + ratings[i];
  }

console.log (sum);

}

getRatingAvg([3.5, 1.0, 5.0]);


function addTeacherRating (teacherRating, newRating){

var teacherRating = ["3.5", "1.0", "5.0"];
teacherRating.push(newRating);
console.log(teacherRating);
}
addTeacherRating ( teacherRating, 3);

var ratingAvg = prompt ("We would like for you to review. Please enter a rating between 0 and 5.");

while (ratingAvg > 5) {
ratingAvg = prompt ("Please enter a number between 0-5");
}

addTeacherRating(teacherRating, ratingAvg)
alert("Thanks for your review! " + teacherName + " new rating is " + ratingAvg);

var courses = [
              {course:"Astronomy", dept:"Science"},
              {course:"Biology", dept:"Science"},
              {course:"Painting", dept:"Fine Art"},
              {course:"Drawing", dept:"Fine Art"}
              ];


var courseS = [];



  for (var i = 0; i < courses.length ; i++) {
      if (courses[i].dept === "Fine Art") {
          courseS.push(courses[i]);
    }
}
  console.log(courseS); */




var teacher = {
name: "Sally Jones"
department: "Science"
ratings: [3.5, 1.0, 5]
addTeacherRating: function (newRating){
this.teacherRating.push(newRating);
},
}

var course = {
name:"Biology"
department: "Science"
teacher: "Sally Jones"
semester: "Fall"
}

var course = {
name:"Painting"
department: "Fine Art"
teacher: "Olli Droans"
semester: "Fall"
}

var course = {
name:"Drawing"
department: "Fine Art"
teacher: "Holly Groans"
semester: "Fall"
}
