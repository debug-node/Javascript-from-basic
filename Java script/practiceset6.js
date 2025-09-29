// Q1. Wirte a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!

// Q2. In Q1. use confirm to ask the user if he wants to see the prompt again.

// Q3. In the previous question, use console.error to log the error if the age entered is negative.

/*
const canDrive = (age) => {
    return age >= 18 ? true : false
}
let runAgain = true;
while (runAgain) {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("Plaease enter a valid age");
        break;
    }
    if (canDrive(age)) {
        alert("you can drive")
    }
    else {
        alert("you cannot drive")
    }
    runAgain = confirm("Do you want to play again")
}
*/

// Q4. Write a program to change the url to google.com(redirection) if user enters a number greater than 4.

/*
let number = prompt("Enter any number")
number = Number.parseInt(number)
if (number > 4) {
    location.href = "https://google.com"
}
*/

// Q5. Change the background of the page to yellow, red or any other color based on user input through prompt.

/*
let color = prompt("Enter the page background color")
document.body.style.background = color
*/