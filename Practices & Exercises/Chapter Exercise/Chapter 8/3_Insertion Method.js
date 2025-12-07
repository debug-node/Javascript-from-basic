console.log("HTML Insertion Methods in JS");

// Using innerHTML
let a = document.getElementsByTagName('div')[0];
a.innerHTML = '<h1>Hello World</h1>';

// Using createElement and appendChild
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (append)</h1>';
a.appendChild(div);

// Using prepend
div.innerHTML = '<h1>Hello World (prepend)</h1>';
a.prepend(div);

// Using before
div.innerHTML = '<h1>Hello World (before)</h1>';
a.before(div);

// Using after
div.innerHTML = '<h1>Hello World (after)</h1>';
a.after(div);

// Using replaceWith
div.innerHTML = '<h1>Hello World (replaced)</h1>';
a.replaceWith(div);