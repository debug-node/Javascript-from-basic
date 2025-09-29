// Q1. What will the following print in JS 
//      console.log("har\"".length)

/*
let str = "har\""
console.log(str.length)
*/

// Q2. Explore the includes, startsWith & endsWith function of a string.

/*
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(sentence.includes(word))

console.log(
    `The word "${word}" ${sentence.includes(word) ? "is" : "is not"
    } in the sentence`,
);
*/

// Q3. Write a program to given string to lowercase.

/*
let str = "ADITYA"
console.log(str.toLowerCase())
*/

// Q4. Extract the amount out of this string  "Please give Rs 1000"

/*
let str = "Please give Rs 1000"
let amount = Number.parseInt(str.slice("Please give Rs ".length))
console.log(amount)
console.log(typeof(amount))
*/

// Q3. Try to change 4th character of a given string were you able to do it.

// string is immutable