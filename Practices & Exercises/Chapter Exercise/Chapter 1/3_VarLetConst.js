console.log("Variable declaration in JavaScript")
// var a = 45;
// var a = "p"
var name0 = "Harry";
console.log(name0); //output: Harry

var name1 = "Harry";
name1 = "Ron";
console.log(name1); //output: Ron

var name2 = "Harry";
{
    var name2 = "Ron";
    console.log(name2); //output: Ron
}
console.log(name2); //output: Ron

let b = "Harry";
console.log(b); //output: Harry

b = "Ron";
console.log(b); //output: Ron

let a = 29
console.log(a)

{
let b = "this";
console.log(b); //output: this
}

console.log(b); //output: Harry

const name = " Harry";
name3 = "this";
console.log(name3); //output: Uncaught TypeError: Assignment to constant variable.

b = 4
const harry = 0;
let c = null
let d  = undefined  
{
  let b = 'this'
  console.log(b)
}
console.log(b)