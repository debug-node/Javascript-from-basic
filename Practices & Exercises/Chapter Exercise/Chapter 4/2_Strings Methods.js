console.log("String Methods in JavaScript");

// Length of a string
let name1 = "Harry";
console.log(name1.length); // Output: 5

// Convert to uppercase and lowercase
let name2 = "Harry";
console.log(name2.toUpperCase()); // Output: HARRY
console.log(name2.toLowerCase()); // Output: harry

// Slicing a string
let name3 = "Harry";
console.log(name3.slice(2, 4)); // Output: rr
console.log(name3.slice(1, 3)); // Output: ar
console.log(name3.slice(2)); // Output: rry

// Replacing parts of a string
let name4 = "Harry";
console.log(name4.replace("ry", "is")); // Output: Hais
console.log(name4.replace("Ry", "is")); // This will not work because "Ry" is not present in the string

// Trimming whitespace
let spacedName = "       Harry        ";
console.log(spacedName.trim()); // Output: Harry

// Finding the index of a character
let name5 = "Harry";
console.log(name5.indexOf("r")); // Output: 2
console.log(name5.indexOf("R")); // This will give -1 because "R" is not present in the string

// Accessing characters by index
let name6 = "Harry";
console.log(name6); // Output: Harry
console.log(name6[0]); // Output: H
console.log(name6[1]); // Output: a
console.log(name6[2]); // Output: r
console.log(name6[3]); // Output: r
console.log(name6[4]); // Output: y

// Demonstrating immutability of strings
let name7 = "Harry";
let upperCaseName = name7.toUpperCase();
console.log(upperCaseName); // Output: HARRY
console.log(name7); // Output: Harry (original string is unchanged)