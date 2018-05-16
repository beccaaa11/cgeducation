var teacherName = "Sally Jones";
var teacherDepartment = "Physics";
var teacherRating1 = 3.5;
var teacherRating2 = 1.0;
var teacherRating3 = 5.0;
var teacherRating = ["3.5", "1.0", "5.0"];

var teacherAvgRating = (teacherRating1 + teacherRating2 + teacherRating3) / 3;
teacherAvgRating = Math.round( teacherAvgRating * 10 ) / 10;

console.log(teacherAvgRating);
