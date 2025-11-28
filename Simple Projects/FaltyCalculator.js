// let b = document.body
// console.log("First child of b is: ",b.firstChild)
// console.log("First Element child of b is : ",b.firstElementChild)

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.5) {
    // perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // perform wrong calculation
    c = obj[c]
    console.log(c)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}