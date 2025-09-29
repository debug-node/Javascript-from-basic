// Q1. Write a program to print the marks of a student in an object using for loop.
//  obj = {harry:98, rohan:70, akash:73}

/*
let marks = {
    harry: 90,
    shubham: 70,
    aditya: 95,
    aliya:65
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
*/

// Q2. Write a program in Q1. using for in loop.

/*
let marks = {
    harry: 90,
    shubham: 70,
    aditya: 95,
    aliya:65
}
for(let key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}
*/

// Q3. Write a program to print "try again" until the user enters a correct number.

/*
let cn = 41
let i
while(i != cn){
    i = prompt("Enter a number")
    console.log("Try again")
}
console.log("You have entered a correct number")
*/

// Q4. Write a function to find mean of 5 numbers.

/*
const mean = (a,b,c,d) => {
    return (a + b + c + d) / 4
}
console.log(mean(4,7,6,8))
*/