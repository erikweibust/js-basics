// Control Flow

// If hour is between 6am and 12pm; Good morning!
// If it is between noon and 6pm; Good afternoon!
// Otherwise: Good evening!
let hour = 10;

if (hour >= 6 && hour < 12) {
   console.log('Good morning!');
} else if (hour >= 12 && hour < 18) {
   console.log('Good afternoon!');
} else {
   console.log('Good evening!');
}

// switch and case can be done with if/else so why use it?

// Loops
// for

console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');

for (let i=0; i<5; i++){
   console.log('Hello World!', i+1);
}

const person = {
   name: 'Erik',
   age: 46
};

for (let key in person) {
   console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];

for (let index in colors) {
   console.log(index, colors[index]);
}

// for of
for (let color of colors) {
   console.log(color);
}

// exercise 1
function findMaxNum(num1, num2){
   return num1 > num2 ? num1 : num2;
}

console.log( findMaxNum(4, 2)); // 4
console.log( findMaxNum(2, 4)); // 4


// exercise 2 - Landscape or Portrait
// if width > height return true
function isLandscape(width, height) {
   return (width > height);
}

console.log(isLandscape(600, 400)); // true
console.log(isLandscape(400, 600)); // false
console.log(isLandscape(600, 400)); // true

// Exercise 3 - FizzBuzz
//
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'
//
function fizzBuzz(input) {
   if (typeof input !== 'number') {
      return 'Not a number';
   } else if ((input % 5 == 0) && (input % 3 == 0)) {
      return 'FizzBuzz';
   } else if (input % 5 == 0) {
      return 'Buzz';
   } else if (input % 3 == 0) {
      return 'Fizz';
   } else {
      return input;
   }
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(6));
console.log(fizzBuzz('6'));
console.log(fizzBuzz(7));
console.log(fizzBuzz(15));

// Exercise 4 - Demerit Points
//
// speed limit = 70
// 5 -> 1 point
// Math.floor(1.3) == 1
// Under 12 points -> Point: X (1-11)
// 12 points -> suspended
//
function checkSpeed(speed) {
   if (typeof speed !== 'number') {
      return NaN;
   }

   if (speed <= 70) {
      return 'Ok';
   }

   let overage = speed - 70;

   if (overage / 5 >= 12) {
      return 'suspended';
   } else {
      return "Point: "  + Math.floor((overage/5));
   }
}

console.log('check speed()');
console.log(checkSpeed('erik')); // NaN
console.log(checkSpeed(55)); // Ok
console.log(checkSpeed(555)); // suspended
console.log(checkSpeed(75)); // speeding
console.log(checkSpeed(71)); // 0
console.log(checkSpeed(76)); // 1
console.log(checkSpeed(80)); // 2

// Exercise 5 - Even and Odd Numbers
//
// display all numbers up to limit
// 0 'EVEN'
// 1 'ODD'
//
function showNumbers(limit) {

   for(let jj=0; jj<=limit; jj++) {
      console.log(jj, (jj%2==0) ? "EVEN" : "ODD");
   }
}

showNumbers(10);

// exercise 6 - count truthy
//

function countTruthy(array) {
   let count = 0;

   for (let item of array) {
      if (item) count++;
   }

   return count;
}

const array = [true, 'Erik', 1, false, 0]; //3 truthy
console.log(countTruthy(array)); // 3

// Exercise 7 - String properties
//
function showProperties(object) {
   for(let element in object) {
      if (typeof object[element] === 'string') {
         console.log(element);
         console.log(object[element]);
      }
   }
}

const movie = {
   name: 'Erik',
   age: 46
};

console.log('exercise 7');
showProperties(movie);

// Exercise 8 - Sum of Multiples of 3 and 5
// multiples of 3: 3, 6, 9
// multiples of 5: 5, 10
//
function sum(limit) {
   let sum = 0;

   for (let i=0; i<=limit; i++) {
      if (i % 3 == 0) {
         sum += i;
         console.log(i);
      }
      if (i % 5==0) {
         sum += i;
         console.log(i);
      }
   }

   return sum;
}

console.log(sum(10)); // 55

// Exercise 9 - Grade
//
// 1  - 59:  F
// 60 - 69:  D
// 70 - 79:  C
// 80 - 89:  B
// 90 - 100: A
//
function calculateGrade(marks) {
   let score = 0;

   for (let mark of marks) {
      score += mark;
   }

   score = score / marks.length;

   if (score > 90)
      return 'A';
   else if (score > 80)
      return 'B'
   else if (score > 70)
      return 'C'
   else if (score > 60)
      return 'D'

   return 'F';
}

const marks = [100, 90, 20, 10];
console.log(calculateGrade(marks));

// single responsibility principle
// break into 2 seperate functions
// small, focused on one thing.

// Exercise 10 - Stars
//
function showStars(rows) {

   for(let row=1; row<=rows; row++) {
      let pattern = '';

      for(let i=0; i<row; i++) {
         pattern += '*';
      }

      console.log(pattern);
   }
}

showStars(5);

function showStars2(rows) {

   let pattern = '';

   for(let row=1; row<=rows; row++) {
      pattern += 'x';
      console.log(pattern);
   }
}

showStars2(5);

// Exercise 20 - Prime Numbers
//
// Prime (whose factors are only 1 and itself)
// or you are a Composite number
//
// 12 = 1, 2, 3, 4, 6, 12
// can be divided evenly by its factors
//
// 11 = 1, 11
// 13 = 1, 13
//
function showPrimes(limit) {
   for(let number=2; number<=limit; number++) {

      let isPrime = true;
      
      for (let factor=2; factor<number; factor++) {
         if (number % factor === 0) {
            //isPrime = false;
            //break; // no sense in checking the rest of the numbers
         }
      }

      if (isPrime) console.log(number);
   }   
}
showPrimes(10000);
/*
real    0m58.435s
user    0m24.397s
sys     0m0.503s
*/

/*
showPrimes(1000000);
real    8m29.705s
user    2m56.056s
sys     0m3.328s
*/