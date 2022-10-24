const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    //currentResult = currentResult + parseInt(userInput.value); If I need decimals
    currentResult = currentResult + +userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add)