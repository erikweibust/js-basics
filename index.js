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

// Removing Elements
const numbs = [1, 2, 3, 4, 5, 6];

// End
const last = numbs.pop();
console.log(numbs);

// Beginning
const firstt = numbs.shift();
console.log(numbs);

// Middle
numbers.splice(2, 1);
console.log(numbs);

// 9 - The Spread Operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined1 = first.concat(second); 
// or with the spread operator
const combined2 = [...first, 'a', ...second, 'd'];
console.log(combined2);

// copy an array
const copy1 = combined1.slice();
const copy2 = [...combined1];

// 10 - Iterating an Array
let numbers2 = [1, 2, 3];

for (let number of numbers2)
   console.log(number);

// forEach
numbers1.forEach( function(number) {
   console.log(number);
});

// forEach with =>
numbers1.forEach( number => console.log(number));

// forEach with => and index
numbers1.forEach( (number, index) => console.log(index, number));

// 11 - Joining Arrays
const numbers3 = [1, 2, 3];
console.log(numbers3);
let joined = numbers3.join();
console.log(joined);
let joined2 = numbers3.join('-');
console.log(joined2);

let message = 'This is my first message!';
let parts = message.split(" ");
console.log(parts);
let combined = parts.join('-');
console.log(combined);

// 12 - Sorting Arrays
let unsorted = [
   { id: 1, name: 'Node.js' },
   { id: 2, name: 'javaScript' }
];

console.log(unsorted);

unsorted.sort();
console.log(unsorted);

// this only works when course names are all in caps
unsorted.sort(function(a, b) {
   // a < b => -1
   // a > b => 1
   // a === b => 0
   if (a.name<b.name) return -1;
   if (a.name>b.name) return 1;
   return 0;
});
console.log(unsorted);

// fix sort to handle caps and lowercase names
unsorted.sort(function(a, b) {
   // a < b => -1
   // a > b => 1
   // a === b => 0
   const nameA = a.name.toUpperCase();
   const nameB = b.name.toUpperCase();
   if (nameA<nameB) return -1;
   if (nameA>nameB) return 1;
   return 0;
});
console.log(unsorted);

// 14 - Filtering an Array
let nums = [1, -1, 2, 3];

let filtered = nums.filter(num => num >=0);
console.log(filtered);

// 15 - Mapping an Array
// *** Go back and rewatch this lesson ***
nums = [1, -1, 2, 3];

filtered = nums.filter(num => num >=0);
// use map() to transform each element in array to something else
let items = filtered.map(n => '<li>' + n + '</li>');
let html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// both filter() and map() return new arrays AND are chainable.

// much cleaner way to write the above code
nums = [0, 1, -1, 2, -3, 3];

items = nums
   .filter(n => n >= 0)
   .map(n => ({ value: n }));

console.log(items);

// Reducing an Array
//
// Two options: For loop
//              reduce()

nums = [1, -1, 2, 3];
let sum = 0;
for (let n of nums)
   sum += n;


console.log("Here we go!");
console.log(sum);

// all arrarys have reduce method
/*
   reduce() takes 2 args, the callback function, and the initial
   value for the accumulator. 
   reduce() iterates over all values in array, calls callback() on 
   each element and adds to accumulator. Where there are no more elements it returns the single value.
*/
sum = nums.reduce( (accumulator, currentValue) => {
   return accumulator + currentValue;
}, 0);
console.log(sum);

// we can further clean-up this code to
/*  If you skip passing an initialization value, 
    reduce() initializes the accumulator to the first value,
    and sets the currentValue to the 2nd item in the array.
    Ultimately, this skips a pass through the loop.

    Furthermore, since there is only one line, you can drop the
    return stmt and curly braces and pull up.
*/
sum = nums.reduce(
   (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);

// Exercise 17-1 Array from Range

function arrayFromRange(min, max) {
   const nums = [];
   let num = min;
   while (num <= max) {
      nums.push(num);
      num++
   }
   return nums;
}

function betterFromRange(min, max) {
   const output = [];
   for (let i=min; i<=max; i++)
      output.push(i);
   return output;
}

const exer17 = arrayFromRange(1, 4);
console.log(exer17);

const exer17_2 = betterFromRange(1, 4);
console.log(exer17_2);

// Exercise 17-2 Includes

function includes(array, searchElement) {
   if (array.indexOf(searchElement) == 1)
      return true;
   return false;
}

function includes2(array, searchElement) {
   for (let element of array) 
      if (element === searchElement)
         return true;
      return false;
}

const arr = [1, 2, 3, 4];
console.log(includes(arr, 2));
console.log(includes(arr, -2));

console.log(includes2(arr, 2));
console.log(includes2(arr, -2));

// Exercise 19-3 - Except
const numbers19_3 = [1, 2, 3, 4, 1, 1];

// my except only works when excluded has one element :(
function except(array, excluded) {
   const return_array = [];
   
   for (let number of array) {
      if (number != excluded)
         return_array.push(number);
   }

   return return_array;
}

function except2(array, excluded) {
   const return_array = [];

   for (let element of array) {
      if (!excluded.includes(element)) {
         return_array.push(element);
      }
   }

   return return_array;
}

const output19_3 = except(numbers19_3, [1, 2]);
console.log(output19_3);

const output19_32 = except2(numbers19_3, [1, 2]);
console.log(output19_32);