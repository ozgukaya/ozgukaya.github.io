function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '0';
    storedNum = '0';
    calculationFinished = true;
    operation = operations.none;
}

function clearPreviousResult() {
    var display = document.getElementById('display');
    if (calculationFinished) {
        display.value = '0';
        calculationFinished = false;
    }
}

function numInput(digit) {
    var display = document.getElementById('display');
    clearPreviousResult();
    // Get rid of a 0 if it's the only thing in there.
    // This particular way of doing it lets you enter a 0 and have it show up,
    // as well as leaving a 0 for the decimal point to snuggle up to.
    if (display.value === '0') display.value = '';
    display.value += digit;
}

function insertDecimal() {
    var display = document.getElementById('display');
    clearPreviousResult();
    if (display.value.indexOf('.') === -1) display.value += '.';
}

operations = {
    // no-op. Takes the right side, and just returns it.  Since the right side is the
    // display value, and calculate() sets display.value, this effectively makes
    // calculate() say "display.value = +display.value".
    none:     function(left, right) { return right; },

    // Math ops.
    add:      function(left, right) { return left + right; },
    subtract: function(left, right) { return left - right; },
    multiply: function(left, right) { return left * right; }
};

function setOperation(command) {
    var display = document.getElementById('display');
    calculate();
    storedNum = display.value;
    if (operations.hasOwnProperty(command))
        operation = operations[command];
}

function calculate() {
    var display = document.getElementById('display');
    display.value = operation(+storedNum, +display.value);
    calculationFinished = true;
    operation = operations.none;
}

if ('addEventListener' in window)
    window.addEventListener('load', clearDisplay);
else
    window.attachEvent('onload', clearDisplay);