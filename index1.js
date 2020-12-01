// Rules about variable names
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

// use let; var is no longer recommended

const interestRate = 0.3;
//interestRate = 1;

// Primitives / values types
let name = 'Erik' // string literal
let age = 46; // number literal
let isApproved = false; // boolean literal
let firstName = undefined; 
let selectedColor = null; // used to clear the value of a var

// Reference types
//    Object
//    Array
//    Function

// object literal
let person = {
   name: 'Erik',
   age: 46
}
console.log(person);

// dot notation
person.name = 'John';

// bracket notation
person['name'] = 'Mary';

console.log(person.name);

// arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors.length);

// functions
//
// name is a parameter to the greet function
function greet(name, lastName) {
   console.log('hello ' + name);
}
// erik is an argument passed to the greet function at runtime
greet('erik');
greet('katie');

// other functions
// calculating a value
function square(number) {
   return number * number;
}

console.log(square(2));

//
// JavaScript Operators
//
let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// strict equality (type + value)
console.log(1 === 1);
console.log('1' === 1);

// lose equality
console.log(1 == 1);
console.log('1' == 1);

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.
// ternary operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver'
console.log(type);

// Logical AND (&&)
console.log(true && true);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything not flasy == Truthy
false || true
false || 'Mosh'
false || 1

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// bitwise operator
console.log(1 | 2);
console.log(1 & 2);

let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;


console.log(a); //blue
console.log(b); //red
