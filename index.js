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

// Exercise 1 - Address Object
const address = { // object literal
   street: '2341 Boxwood Dr',
   city: 'Allen',
   zipCode: 75013
};

function showAddress(address){
   return `${address.street}
${address.city} ${address.zipCode}`
}

function showAddress2(address) {
   for(let key in address)
      console.log(key, address[key]);
}

console.log(showAddress(address));
showAddress2(address);

// Exercise 2 - Factory and Constructor Functions

// Factory Function
function createAddress(street, city, zipCode) {
   return {
      street:street,
      city:city,
      zipCode // if key and value are same you can drop value
   };
}
const add1 = createAddress('2341 Boxwood', 'Allen', 75013);
console.log(add1);

// Constructor Function
function Address(street, city, zipCode) {
   this.street = street;
   this.city = city;
   this.zipCode = zipCode;
}

const add2 = new Address('2341 Boxwood', 'Allen', 75013);
const add3 = new Address('2341 Boxwood', 'Allen', 75013);
const add4 = new Address('2341 Boxwood', 'Allen', 75012);
const add5 = add4;
console.log(add2);
console.log(add3);

// Exercise 3 - Object Equality

function areEqual(address1, address2) {
   return address1.street === address2.street &&
         address1.city === address2.city &&
         address1.zipCode === address2.zipCode;
}

console.log(`should be true ${areEqual(add2, add3)}`);
console.log(`should be false ${areEqual(add3, add4)}`);

function areSame(address1, address2) {
   return address1 === address2;
}
console.log('should be false ' + areSame(add2, add3));
console.log('should be true ' + areSame(add4, add5));

// Exercise 4 - Blog Post object

let blogPost = {
   title: 'Hello World',
   body: 'This is my Hello World blog post.',
   author: 'Erik Weibust',
   views: 100000,
   comments: [
      { 
         author: 'Katie Weibust',
         body: 'My husband is so smart'
      },
      {
         author: 'Katie Weibust',
         body: 'And... He\'s so cute.'
      }
   ],
   isLive: false
};

console.log(blogPost);