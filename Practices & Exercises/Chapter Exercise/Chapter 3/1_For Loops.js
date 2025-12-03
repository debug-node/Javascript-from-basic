console.log("For Loops in JavaScript");

for (let i = 1; i <= 29; i++) {
    console.log(i);
}

// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i + 1)
    // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)



/*
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Harry") {
  console.log(b)
}

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

*/