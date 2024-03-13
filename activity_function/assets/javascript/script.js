// function para sa add
function addNumbers() {
    let num1 = parseFloat(document.getElementById("num-first-number").value);
    let num2 = parseFloat(document.getElementById("num-second-number").value);
    document.getElementById("num-total").value = (num1 + num2).toFixed(2);
}
// function para sa sub
function subtractNumbers() {
    let num1 = parseFloat(document.getElementById("num-first-number").value);
    let num2 = parseFloat(document.getElementById("num-second-number").value);
    document.getElementById("num-total").value = (num1 - num2).toFixed(2);
}
// function para sa mult
function multiplyNumbers() {
    let num1 = parseFloat(document.getElementById("num-first-number").value);
    let num2 = parseFloat(document.getElementById("num-second-number").value);
    document.getElementById("num-total").value = (num1 * num2).toFixed(2);
}
// function para sa division with if else
function divideNumbers() {
    let num1 = parseFloat(document.getElementById("num-first-number").value);
    let num2 = parseFloat(document.getElementById("num-second-number").value);
    if (num2 !== 0) {
        document.getElementById("num-total").value = (num1 / num2).toFixed(2);
    } else {
        document.getElementById("num-total").value = "Cannot divide by zero";
    }
}