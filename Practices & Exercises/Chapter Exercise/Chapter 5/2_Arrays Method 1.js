console.log("Arrays Method in JavaScript");

//converting an array to a string
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.toString()); // Apple,Orange,Banana
console.log(typeof fruits.toString()); // string

// Converting an array to a string using join
console.log(fruits.join("-")); // Apple-Orange-Banana
console.log(typeof fruits.join("-")); // string

console.log(fruits.join(" and ")); // Apple and Orange and Banana

// Pop method
console.log(fruits.pop()); // Banana
console.log(fruits); // ["Apple", "Orange"]

// Push method
fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.push("Pineapple")); // 4
console.log(fruits); // ["Apple", "Orange", "Banana", "Pineapple"]

// Shift method
fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.shift()); // Apple
console.log(fruits); // ["Orange", "Banana"]

// Unshift method
fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.unshift("Grapes")); // 4
console.log(fruits); // ["Grapes", "Apple", "Orange", "Banana"]

//delete operator
fruits = ["Apple", "Orange", "Banana"];
console.log(delete fruits[1]); // true
console.log(fruits); // ["Apple", <1 empty item>, "Banana"]

// concat method
fruits = ["Apple", "Orange", "Banana"];
let vegetables = ["Potato", "Tomato", "Onion"];
let food = fruits.concat(vegetables);
console.log(food); // ["Apple", "Orange", "Banana", "Potato", "Tomato", "Onion"]

// sort Method
fruits = ["Banana", "Orange", "Apple"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]

// sort number
let compare = (a, b) => {
    return a - b;
}
let numbers = [40, 100, 1, 5, 29, 10, 2907];
numbers.sort(compare);
console.log(numbers); // [1, 5, 10, 29, 40, 100, 2907]

// reverse method
fruits = ["Apple", "Orange", "Banana"];
fruits.reverse();
console.log(fruits); // ["Banana", "Orange", "Apple"]

// slice method
fruits = ["Apple", "Orange", "Banana"];
let copy = fruits.slice();
console.log(copy); // ["Apple", "Orange", "Banana"]

// splice method
fruits = ["Apple", "Orange", "Banana"];
fruits.splice(0, 1);
console.log(fruits); // ["Orange", "Banana"]

// indexOf method
fruits = ["Apple", "Orange", "Banana"];
let index = fruits.indexOf("Banana");
console.log(index); // 2