let currentDisplay = '';
const display = document.querySelector('#display');

function updateDisplay() {
    display.value = currentDisplay;
}

function press(value) {
    currentDisplay += value;
    updateDisplay();
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