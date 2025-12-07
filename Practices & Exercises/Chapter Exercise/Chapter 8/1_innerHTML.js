console.log("ineerHTML and outerHTML in js");

let first = document.getElementsByTagName('span')[0]

console.log(first);

console.dir(first);

// console.log(document.body.firstChild.nodeName)

// console.log(document.body.firstElementChild.nodeName)

// console.log(first.innerHTML); // output: Hey I am span

// first.innerHTML = "Hey I am changed"; // reload the page to see the change

// console.log(first.outerHTML); // output: <span>Hey I am span</span>

// first.outerHTML = "<h1>Hey I am changed</h1>"; // reload the page to see the change

// first.outerHTML = "<div>Hey</div>";
// console.log(document.body.firstChild); // " Hello World "

// console.log(document.body.firstChild.nodeValue); // "\n  Hello world\n"

// console.log(first.textContent); // output: Hey I am span

// first.textContent = "Hey I am changed"; // reload the page to see the change

// first.hidden = true;