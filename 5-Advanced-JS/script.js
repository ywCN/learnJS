// Function constructor

//var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
//};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

};

// add a method in the prototype of Person, so object can still access this method even it is not in the constructor
Person.prototype.calculateAge = function() {
    console.log(2017 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();