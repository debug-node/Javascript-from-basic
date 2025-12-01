/*1. Create a Method to check if a number is odd or even.
*/

function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isOddOrEven(4)); // Even
console.log(isOddOrEven(7)); // Odd

/*2. Create a Method to return larger of the two number.
*/

function largerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(largerNumber(10, 20)); // 20
console.log(largerNumber(30, 15)); // 30

/*3. Create a Method to convert Celsius to Fahrenheit.
F = (9/5) * C + 32;
*/
function celsiusToFahrenheit(celsius) {
    return (9 / 5) * celsius + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(100)); // 212