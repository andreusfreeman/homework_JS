'use strict'
function Human(name, age, sex, height, weight) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight = weight;
}
function Worker(name, age, sex, height, weight, workPlace, salary) {
 	Human.call(this, name, age, sex, height, weight);
  this.workPlace = workPlace;
  this.salary = salary;
}
Worker.prototype = new Human();
Worker.prototype.work = function() {
    return "I am worker";
  }
function Student(name, age, sex, height, weight, studyPlace, stipend) {
  Human.call(this, name, age, sex, height, weight);
  this.studyPlace = studyPlace;
  this.stipend = stipend;
}
Student.prototype = new Human();
Student.prototype.relax = function() {
    return "I am watching serial";
  }

var worker = new Worker('Andrew', 31, 'man', 185, 90, 'web-developer', 2000);
var student = new Student('Bob', 18, 'man', 185, 70, 'KPI', 100);
console.log(worker.work());
console.log(student.relax());
console.log(student.name);
console.log(student.stipend);
console.log(worker.name);
console.log(worker.age);
console.log(worker.salary);
