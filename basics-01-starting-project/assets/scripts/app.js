const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNUmberInput() {
    return parseInt(userInput.value);
}

function createWriteLog(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNUmberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createWriteLog('+', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
}

function subtract() {
    const enteredNumber = getUserNUmberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createWriteLog('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNUmberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createWriteLog('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNUmberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
