//console.log('Hello World!');



// Lecture: variables
//var name = 'John';
//console.log(name);
//var lastName = 'Smith';
//console.log(lastName);
//var age = 26
//console.log(age);
//var fullAge = true;
//console.log(fullAge);


////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: variables 2
//var name = 'John';
//var age = 26;
////console.log(name + ' ' + age);
////console.log(age + age);
//
//var job, isMarried;
////console.log(job);
//
//job = 'teacher';
//isMarried = false;
//console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
//
//age = 'thirty six';
//job = 'driver'
//console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
//
////var lastName = prompt('What is the last name?');
////console.log(lastName);
//
//alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: operators
//var now = 2016;
//var birthYear = now - 26;
//birthYear = now - 26*2; // operator precedence
//
//
//console.log(birthYear);
//
//var ageJohn = 30;
//var ageMark = 30;
//ageJohn = ageMark = (3 + 5) * 4 - 6; // = = operate from right to left (equal case)
//
//ageJohn++;
//ageMark *= 2;
//
//console.log(ageJohn + ' ' + ageMark);


////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: if/else statement
//var name = 'John';
//var age = 26;
//var isMarried = 'no';
//
//if (isMarried === 'yes') {
//    console.log(name + ' is married.');
//} else {
//    console.log(name + ' is not married.');
//}
//
//isMarried = false;
//
//if (isMarried) {
//    console.log(name + ' is married.');
//} else {
//    console.log(name + ' is not married.');
//}
//
//if (22 == '22') { // will convert data type
//    console.log('equal');
//}
//
//if (22 === '22') { // will not convert data type; should use this because === is safer
//    console.log('equal');
//} else {
//    console.log('not equal');
//}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: boolean logic and switch
//var age = 25;
//if (age < 20) {
//    console.log('teenager');
//} else if (age >= 20 && age < 30) {
//    console.log('young man');
//} else {
//    console.log('man');
//}
//
//
//var job = 'teacher';
//switch (job) {
//    case 'teacher':
//        console.log('John teaches kids');
//        break; // DO NOT forget this!!!!
//    case 'driver':
//        console.log('John drives a cab.');
//        break;
//    case 'cop':
//        console.log('John helps fight crime.');
//        break;
//    default:
//        console.log('John does something else.');
//        // no break here
//}

////////////////////////////////////////////////////////////////////////////////////////////////////
// CODING PROBLEM
//var heightJohn = 172;
//var heightMike = 165;
//var ageJohn = 26;
//var ageMike = 29;
//
//var scoreJohn = heightJohn + 5 * ageJohn;
//var scoreMike = heightMike + 5 * ageMike;
//
////if (scoreJohn > scoreMike) {
////    console.log('John wins with ' + scoreJohn + ' points.');
////} else if (scoreJohn < scoreMike) {
////    console.log('Mike wins with ' + scoreMike + ' points.');
////} else { // scoreJohn === scoreMike
////    console.log('There is a draw.');
////}
//
//var heightMary = 158;
//var ageMary = 31;
//var scoreMary = heightMary + 5 * ageMary;
//
//if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//    console.log('John wins with ' + scoreJohn + ' points.');
//} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//    console.log('Mike wins with ' + scoreMike + ' points.');
//} else if (scoreMary > scoreJohn && scoreMary > scoreJohn) {
//    console.log('Mary wins with ' + scoreMary + ' points.');
//} else {
//    console.log('It\'s a draw.');
//}


////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Functions
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn + ' ' + ageMike + ' ' + ageMary);


function yearsUntilRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}

yearsUntilRetirement('John' , 1990);
yearsUntilRetirement('Mike' , 1969);
yearsUntilRetirement('Mary' , 1948);










