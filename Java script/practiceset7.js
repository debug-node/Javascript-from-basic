// Q1. Create a navbar and change the color of its first element to red.
 
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// Q2. Create a table without tbody. Now use "view page source" button to check whether it has a tbody or Not.

// No

// Q3. Create an element with 3 Children. Now change the color of first and last element to green. 

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"


// Q4. Write a JS code to change background of all <li> tags to cyan.

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
});