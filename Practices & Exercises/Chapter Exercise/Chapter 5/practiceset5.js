// Q1. Create an array of numbers and take input from the user to add numbers to this array.

/*
let arr = [1,2,3,4,5,6,7,88]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)
*/

// Q2. Keep adding numbers to the array in Q1. until 0 is added.

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 88];
let a;
do {
    a = prompt("Enter a number")
    a = Number.parseInt(a)
    arr.push(a)
}
while (a != 0);
console.log(arr)
*/

// Q3. Filter for numbers divisible by 10 from a given array.

/*
let arr = [1, 2, 3, 4, 10, 20, 30, 50]
let n = arr.filter((x) => {
    return x % 10 == 0
})
console.log(n)
*/

// Q4. Create an array of square of given numbers.

/*
let arr = [1, 2, 3, 4, 10, 20, 30, 50]
let n = arr.map((x) => {
    return x * x
})
console.log(n)
*/

// Q5. Use reduce to calculate factorial of a given number from an array of first n natural numbers(n being the number whose factorial needs to be calculated) 

/*
let arr = [1, 2, 3, 4, 5]
let n = arr.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n)
*/
