console.log("HTML Attributes and their methods in JS");

let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a); // it will print "hey" 

// console.log(first.hasAttribute("class")); // true
// console.log(first.hasAttribute("style")); // false

// first.setAttribute("hidden", "true"); // reload the page to see the changes, it will hide the div

// first.removeAttribute("hidden"); // removed the hidden attribute

first.setAttribute("class", "true forReal");

console.log(a)

first.removeAttribute("class");

console.log(first.attributes);

console.log(first.dataset);

console.log(first.dataset.game);