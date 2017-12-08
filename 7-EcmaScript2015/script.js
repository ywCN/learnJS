// Lecture: let and const
/*

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


*/


//////////////////////////////////////////////////////////////////////
// Lecture: Blocks and IIFEs


// ES5
/*


(function() {
    var c = 3;
})();


// ES6
{
    let b = 3;
}

*/

//////////////////////////////////////////////////////////////////////
// Lecture: Strings

/*

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);



const n = `${firstName} ${lastName}`;
console.log(n.startsWith('Jo'));
console.log(n.endsWith('th'));
console.log(n.includes('Sm'));

console.log(firstName.repeat(3));
console.log(`${firstName} `.repeat(3));

*/



//////////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions

/*

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});

console.log(ages5);


// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);


ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);


ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${2016 - el}.`;
})
console.log(ages6);

*/

//////////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions 2




















