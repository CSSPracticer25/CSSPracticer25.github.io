let arrNum = [];

function OddToEven(arr) {
    const evenNum = arr.filter(num => num % 2 === 0).join(",");
    const oddNum = arr.filter(num => num % 2 !== 0).join(",");
    return [evenNum, oddNum];
}

function enterNum() {
    let number = prompt("Enter a Number");

    if (number <= 0) {
        const [evenNum, oddNum] = OddToEven(arrNum);
        console.log("Even numbers:", evenNum);
        console.log("Odd numbers:", oddNum);
        console.log("***End of Program***");
    } else {
        arrNum.push(parseInt(number));
        enterNum();
    }
}

enterNum();
