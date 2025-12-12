console.log("setInterval and setTimeout in JavaScript");

setTimeout(function () {
    alert('Hello, world!');
}, 1000);

var timeoutID = setTimeout(function () {
    alert('This message will never be displayed.');
}, 2000);

clearTimeout(timeoutID);

var count = 0;
var intervalID = setInterval(function () {
    count++;
    console.log('Count: ' + count);
}, 1000);
clearInterval(intervalID);

var intervalID = setInterval(function () {
    console.log('This message will be displayed every second.');
}, 1000);

clearInterval(intervalID);