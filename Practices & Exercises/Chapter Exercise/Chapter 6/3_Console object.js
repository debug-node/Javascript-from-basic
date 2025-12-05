console.log("Console Object in Javascript");

console.log("Hello World"); // Prints "Hello World" to the console

console.info("info"); // prints info

console.error("This is an error"); // Prints "This is an error" to the console as an error

console.warn("This is a warning"); // Prints "This is a warning" to the console as a warning

console.clear(); // Clears the console

let x = 5;
console.assert(x == 5, "Error: x is not equal to 5"); // Output: no output
console.assert(x == 6, "Error: x is not equal to 6"); // Output: Assertion failed: Error: x is not equal to 6

let students = [
    { name: "coco", age: 20, city: "New York" },
    { name: "wld", age: 21, city: "London" },
    { name: "ryn", age: 22, city: "Chicago" }
];
console.table(students);

console.time("Time taken");
let a = 5;
let b = 6;
let c = a + b;
console.timeEnd("Time taken"); // time taken by the code between console.time() and console.timeEnd() is printed to the console


console.time("Time taken by for loop");
for (let i = 1; i <= 10000; i++) {
    console.log(i);
}
console.timeEnd("Time taken by for loop");

console.time("Time taken by while loop");
let i = 1;
while (i <= 10000) {
    console.log(i);
    i++;
}
console.timeEnd("Time taken by while loop");