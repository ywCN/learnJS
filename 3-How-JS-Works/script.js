///////////////////////////////////////
// Lecture: Hoisting


//calculateAge(1965); // hoisting
//
//function calculateAge(year) {
//    console.log(2016 - year);
//}
//
////calculateAge(1990);
//
////retirement(1965); // not working
//
//var retirement = function(year) { // the function will not be hoisted
//    console.log(65 - (2016 - year));
//}
//
//retirement(1990);

/*
In simplification, variables declarations are "moved to the top" of a function and they are initialized with undefined  value, so they will be undefined until interpreter hits the line of code where the value is assigned to the variable.

It comes from the creation stage, when the function is called, but before the code is executed. The function is scanned i.a. for variables declarations and variables are initialized with undefined. Later, in the activation stage the code is being executed line by line and values are being assigned to variables.

The same thing concerns function expressions. Variable declaration will be hoisted and initialized with undefined, but function will be assigned later, when interpreter hits this line of code.

I don't think there are any benefits from this. The good practice is rather to avoid hoisting.
*/

//console.log(age); // undefined
//var age = 23; // saved in global execution object context
//console.log(age);
//
//function foo() {
//    console.log(age);
//    var age = 65;
//    console.log(age);
//}
//foo();
//console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
//    console.log(a + b + c + d); // b,c are not in this scope
    console.log(a + d);
}



///////////////////////////////////////
// Lecture: The this keyword









