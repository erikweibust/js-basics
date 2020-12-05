// Arrays

const numbers = [3, 4];

// End
numbers.push(5, 6);
console.log(numbers);

// Beginning
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

// Finding elements (primitives)
const numbers1 = [1, 2, 3, 1, 4];
console.log(numbers1.indexOf('1'));
console.log(numbers1.indexOf(1));
console.log(numbers1.lastIndexOf(1));

console.log(numbers1.indexOf(1) !== -1);
console.log(numbers1.includes(1)); // new call in JS arrays

// Finding elements (Reference Types)
const courses = [
   { id: 1, name: 'Intro to Math' },
   { id: 2, name: 'English 101' }
];

const course1 = courses.find(function(course) {
   return course.name === 'English 101';
});
console.log(course1);

const course2 = courses.find(function(course) {
   return course.name === 'English';
});
console.log(course2);

const course3 = courses.find(function(course) {
   return course.name === 'Intro to Math';
});
console.log(course3);

// Arrow Functions
const coursess = [
   { id: 1, name: 'Physics' },
   { id: 2, name: 'English 101' }
];
// arrow functions improve on the find/function by simplifying the syntax
const course4 = coursess.find(function(course) {
   return course.name === 'Intro to Math';
});
console.log(course4);
/* step by step
1. remove the keyword function and use => to seperate the parameter from function body 
*/
const course5 = coursess.find((course) => {
   return course.name === 'English 101';
});
console.log(course5);

// we can do better... with a single parameter we can remove the parentheses
const course6 = courses.find( course => {
   return course.name === 'English 101';
});
console.log(course6);
// if there were no params, you would use empty ()
const course7 = courses.find( () => {
   //return course.name === 'English 101';
});
console.log(course7);

// finally, if it's a single line of code returning a value,
// you can remove the return keyword and drop the {}
// you read this as: course goes to (expression) or...
// you are finding a course with the id of 1
const course8 = coursess.find(course => course.id === 1);
console.log(course8);