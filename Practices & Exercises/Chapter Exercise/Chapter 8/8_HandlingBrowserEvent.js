console.log("Handling Browser Events")

const btn = document.getElementById('btn');

/* // addEventListener

btn.addEventListener('click', function(e){
    alert("Hello World!");
});

btn.addEventListener('click', function(e){
    alert("Hello World Again!");
});


const x = function(e){
    alert("Hello World!");
};

const y = function(e){
    alert("Hello World Again!");
};

btn.addEventListener('click', x);
btn.addEventListener('click', y);
*/

/* // removeEventListener

const ask = prompt("What is your favorite number?");

const x = function (e) {
    alert("Hello World!");
};

const y = function (e) {
    alert("Hello World Again!");
};

btn.addEventListener('click', x);
btn.addEventListener('click', y);

if (ask === "1") {
    btn.removeEventListener('click', y);
}
*/

// event object

const x = function (e) {
    console.log(e);
    console.log(e.type, e.clientX, e.clientY); // click x y (values will change depending upon where u clicked the button)
    alert("Hello World!");
};

btn.addEventListener('click', x);