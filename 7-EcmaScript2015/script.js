// Lecture: let and const


// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'j'; // error
console.log(name6);

// ES5
function driversLicense5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName, yearOfBirth, 'passed.');
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
    // console.log(firstName); // error
    // const yearOfBirth; // cannot assign
    let firstName;
    if (passedTest) {
        firstName = 'John';
        const yearOfBirth = 1990;
        
        console.log(firstName, yearOfBirth, 'passed.');
    }
    // cannot access firstName and yearOfBirth here
}

driversLicense6(true);



let i = 12;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // 12
























