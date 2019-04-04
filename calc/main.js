const results = [];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function randInRange(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function exponentiate(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result = result * a
    }
    return result;
}

function printFunctionName(func) {
    console.log(func.name);
}

function calc(a, b, func) {
    console.log(`Running ${func.name} on ${a} and ${b}`)
    const result = func(a, b);
    results.push(result)
    return result;
}

printFunctionName(calc)

calc(2, 4, add);
calc(2, 4, subtract);
calc(2, 4, multiply);
calc(2, 4, divide);
const answer = calc(2, 4, exponentiate);
calc(2, 4, randInRange);

document.querySelector('#result').innerText = answer;