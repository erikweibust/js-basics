// Objects

const circles = {
   radius: 1,
   location: {
      x: 1,
      y: 1
   },
   isVisible: true,
   draw: function() {
      console.log('draw');
   }
};

// factory functions
//
// need a way to create circle objects without copying the whole object
function createCircle(radius) {
   return {
      // this can be simplified when key and value match
      //radius: radius,
      radius, 
      draw() {
         console.log('draw');
      }
   };
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

// Constructor Functions
function Circle(radius) {
   this.radius = radius;
   this.draw = function() {
      console.log('draw');
   }
}

const ccircle = new Circle(1);
console.log( ccircle === circle1);
console.log( ccircle == circle1);

// Value vs Reference Types
//
// Primitives are copied by their value
// Objects are copied by their reference
let number = 10;

function increase(number) {
   number++;
   console.log('in increase ' + number);
}
increase(number);
console.log(number);

let obj = { value: 10 };
function increase2(obj) {
   obj.value++;
   console.log('in increase2 ' + obj.value);
}
increase2(obj);
console.log(obj.value);

// Enumerating Properies of an Object
//
// for-in for-of loops

const circle = {
   radius: 1,
   draw() {
      console.log('draw');
   }
};
circle.draw();

// for-in
// to get the value of a property you use the bracket notation
for (let key in circle) {
   console.log(key);
   console.log(key, circle[key]);
}

// for-of
// works on an iteratable; not an object
// but we can make it work....
for (let key of Object.keys(circle)) {
   console.log(key);
}
/*
   can use for-of w/ Object.entries or Object.keys
*/ 
for (let key of Object.keys(circle) )
   console.log(key); // keys as String[]

for (let entry of Object.entries(circle) )
   console.log(entry); // each key=value pair as array

// if you want to know if an object has a property
if ('radius' in circle) console.log('yes');
if ('draw' in circle) console.log('yes');

// Cloning an Object
// 3 different methods
const anotherCircle = {};
for (let key in circle)
   anotherCircle[key] = circle[key];

const anotherCircle2 = Object.assign({}, circle);

// spread operator
const anotherCircle3 = { ...circle };

console.log( anotherCircle );

// Math examples
function getRandomArbitrary(min, max) {
   return Math.random() * (max - min) + min;
 }
 console.log(getRandomArbitrary(1, 11));

 // String examples
 // string primitive
let message = 'hi'; //typeof 'string'

 // string object
 const another = new String('hi'); // using string constructor we get a typeof 'object'

message = 'This is my first message';
message.split(' ');

// String template literals
const name = 'Erik';
const greeting = `Hi ${name},`

// Date
const now = new Date(); // new date with the constructor function.
const date1 = new Date('May 11 2018');
const date2 = new Date(2018, 4, 11, 9);
console.log(now);
console.log(date1);
console.log(date2);