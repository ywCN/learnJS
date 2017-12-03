// Lecture: Function constructor

//var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
//};
/*
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

};

// add a method in the prototype of Person, so object can still access this method even it is not in the constructor
Person.prototype.c1alculateAge = function() {
    console.log(2017 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith'; // all objects will inherit this property

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName, jane.lastName, mark.lastName); 
*/
/*
In console:

john.__proto__ === Person.prototype
true

john.hasOwnProperty('name')
true

john.hasOwnProperty('lastName')
false

john instanceof Person
true

john instanceof Object
true

*/

// Lecture: Object.create
// This is not the most popular way of creating objects, but it allows use to implenment really complex inheritance structures. It allows us to specify which object should be a prototype.
/*
var personProto = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/


// Lecture: Primitives vs. Objects
/*
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj2.age = 30;
console.log(obj1, obj2);

//Functions
var age = 27;
var obj = {
    name: 'John',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age); // 27
console.log(city); // San Francisco
*/

// Lecture: Passing functions as arguments
/*
A function is an instance of the Object type.
A function behaves like any other object.
We can store functions in a variable.
We can pass a function as an argument to another function.
We can return a function from a function.
*/

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2017 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));    
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge); // no () for it is a callback function
var fullAge = arrayCalc(ages, isFullAge)
var rates = arrayCalc(ages, maxHeartRate)
console.log(ages, fullAge, rates);

































