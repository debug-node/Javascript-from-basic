let currentDisplay = '';
const display = document.querySelector('#display');

function updateDisplay() {
    display.value = currentDisplay;
}

function press(value) {
    currentDisplay += value;
    updateDisplay();
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    currentDisplay = '';
    updateDisplay();
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay);
    } catch {
        currentDisplay = "Error";
    }
    updateDisplay();
}

updateDisplay();