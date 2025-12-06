console.log("Searching the DOM in JS");


// const home = document.getElementById('home');
// console.log(home); // <section id="home">...</section>


// const sections = document.querySelectorAll('section');
// console.log(sections); // NodeList(4) [section#home, section#about, section#services, section#contact]

// const home = document.querySelector('#home');
// console.log(home); // <section id="home">...</section>

// const sections = document.getElementsByTagName('section');
// console.log(sections); // HTMLCollection(4) [section#home, section#about, section#services, section#contact]

const sections = document.getElementsByTagName('section');
console.log(sections); // HTMLCollection(4) [section#home, section#about, section#services, section#contact]

const elements = document.getElementsByClassName('some-class-name-from-your-HTML');
console.log(elements);

const items = document.getElementsByName('some-name-attribute-from-your-HTML');
console.log(items);