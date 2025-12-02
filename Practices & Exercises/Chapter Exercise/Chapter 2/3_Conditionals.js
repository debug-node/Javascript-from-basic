console.log("Conditionals in JavaScript")

let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}

let input1 = prompt("Enter a string");
if(input1 === "Hello"){
    console.log("Hello World");
}
else{
    console.log("Goodbye World");
}

let input2 = prompt("Enter a string");
if(input2 === "Hello"){
    console.log("Hello World");
}
else if(input2 === "Goodbye"){
    console.log("Goodbye World");
}
else{
    console.log("Invalid Input");
}

console.log("Using Ternary Operator");
let input3 = prompt("Enter a string");
input3 === "Hello" ? console.log("Hello World") : console.log("Goodbye World");