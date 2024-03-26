let arrNum = [];

function OddToEven(arr) {
    const evenNum = arr.filter(num => num % 2 === 0);
    const oddNum = arr.filter(num => num % 2 !== 0);
    return [evenNum, oddNum];
}

function enterNum() {
    let number = prompt("Enter a Number");

    if (number <= 0) {
        const [evenNum, oddNum] = OddToEven(arrNum);
        console.log("Even numbers:", evenNum);
        console.log("Odd numbers:", oddNum);
    } else {
        arrNum.push(number);
        enterNum();
    }
}

enterNum();
