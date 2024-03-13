function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num-first-number").value);
    let num2 = parseFloat(document.getElementById("num-second-number").value);
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "You are dividing 0";
        }
    } else {
        result = "Invalid operation";
    }

    document.getElementById("num-total").value = typeof result === "number" ? result.toFixed(2) : result;
}
