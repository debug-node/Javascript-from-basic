console.log("DOM, BOM, and Window Object");

console.log(window); // prints the Window object

window.console.log("Hello World!"); // same as console.log("Hello World!");
window.alert("This is an alert!"); // same as alert("This is an alert!");

console.log(document); // prints the DOM object

console.log(document.title); // prints the document's title
console.log(document.body); // prints the document's body element

document.body.style.backgroundColor = "red"; // sets the background color of the body element to red


console.log(window.location.href); // prints the current URL of the page