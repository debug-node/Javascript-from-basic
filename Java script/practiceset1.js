// Q1. Create a variable of the type string and try to add a number to it.
let a = "aditya"
let b = 5
console.log(a+b)

// Q2. Use typeof operator to find the datatype of the string in last question.
console.log(typeof (a+b))

// Q3. Create a const objet in javascript. Can you change it to hold a number later?
const c ={
    name: "aditya",
    section:1,
    isPrincipal: false
}
// c = 30       // phir se decleare nhi kr skte

// Q4. Try to add a new key to the const object in problem 3. Were you able to do it?
c['friend'] = "sagar"       // bs add kr skte and replicate kr skte h
console.log(c)

// Q5. Write a JS program to create a word-meaning dictionary of 5 words.

const dict = {
    Abrogate : "Cancel or revoke",
    Anachronism : "Something not fitting the time period",
    Arrant : "Completely and totally",
    Artless : "Honest and straightforward",
    Asperity : "Harshness in tone"
}
// console.log(dict.Abrogate)
console.log(dict['Abrogate'])