console.log("Arrays in JavaScript");

// Create an array of numbers
let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

let marks = [90, 85, 95, 80];
console.log(marks); // [90, 85, 95, 80]

// Create an array of strings
let fruit = ["Apple", "Banana", "Cherry"];
console.log(fruit); // ["Apple", "Banana", "Cherry"]

// Create an array with mixed data types
let arr1 = ["Hello", 10, true];
console.log(arr1); // ["Hello", 10, true]

// Create an empty array
let arr2 = [];
console.log(arr2); // []

// Accessing elements in an array
let marks1 = [90, 85, 95, 80];
console.log(marks1[0]); // 90

// Accessing elements in an array of strings
let fruits1 = ["Apple", "Orange", "Banana"];
console.log(fruits1[0]); // Apple
console.log(fruits1[1]); // Orange
console.log(fruits1[2]); // Banana

console.log(fruits1[-1]); // Banana

//length property of an array
console.log(fruits1.length); // 3

// Adding elements to an array
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits); // ["Apple", "Orange", "Banana"]
console.log(fruits.length); // 3
fruits[3] = "Grapes";
console.log(fruits); // ["Apple", "Orange", "Banana", "Grapes"]
console.log(fruits.length); // 4

// Modifying elements in an array
fruits = ["Apple", "Orange", "Banana"];
console.log(fruits); // ["Apple", "Orange", "Banana"]
console.log(fruits.length); // 3
fruits[0] = "Pinapple";
console.log(fruits); // ["Pinapple", "Orange", "Banana"]
console.log(fruits.length); // 3

//typeof operator
console.log(typeof fruits); // object