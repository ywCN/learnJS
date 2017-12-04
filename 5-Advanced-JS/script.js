///////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////
// Lecture: Passing functions as arguments
/*
A function is an instance of the Object type.
A function behaves like any other object.
We can store functions in a variable.
We can pass a function as an argument to another function.
We can return a function from a function.
*/
/*
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
*/

// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ' , what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');


// a different way
interviewQuestion('teacher')('Mark'); // since it returns a function, so just call it like regular function()

*/
///////////////////////////////////////////////////////////
// Lecture: IIFE(Immediately Invoked Function Expressions)
// for data privacy
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

/*

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();



(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck); // always true
})(5);
*/


///////////////////////////////////////////////////////////
// Lecture: Closures
// An inner function has always access to the variables and  parameters of its outer function, even after the outer function has returned.
// Unlike stack, scope chain is always intact
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';// still available after return because a is in scope chain
    return function(yearOfBirth) {
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

//retirement(66)(1990);


function interviewQuestion(job) {
    var designerQuestion = ', can you explain what UX design is?';
    var teacherQuestion = ', what subject do you teach?';
    var otherQuestion = ', what do you do?';
    
    return function(name) {
        if (job === 'designer') {
            console.log(name + designerQuestion);
        } else if (job === 'teacher') {
            console.log(name + teacherQuestion);
        } else {
            console.log('Hello ' + name + otherQuestion);
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Jane');
interviewQuestion('chief')('Mark');

*/

///////////////////////////////////////////////////////////
// Lecture: Bind, call amd apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, 'friendly', 'afternoon'); // borrow method
john.presentation.apply(emily, ['friendly', 'afternoon']); // another way to borrow

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

// bind creates a copy of function
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
emilyFormal('evening');




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

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/

///////////////////////////////////////////////////////////
// CODING CHALLENGE

var Question = function () {
    
};















