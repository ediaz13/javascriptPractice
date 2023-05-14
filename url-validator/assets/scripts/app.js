const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if (operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
  } else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else {
    currentResult /= enteredNumber;
    operator = '/';
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));

var currentURL = `https://www.google.com.ar/agents/common/comboSelect.jsp?comp=asd%27,%27%27);throw+location;a=(%27`;
//var currentURL = `https://www.google.com.ar/agents/common/comboSelect.jsp?comp=asd&pan=chuu`;

const parsedURL = new URL(currentURL);
let search = parsedURL.search.replace('?', '');

function parseQueryString(query) {
  const variables = query.split("&");
  const queryString = {};

  for (let i = 0; i < variables.length; i++) {
    const pair = variables[i].split("=");
    const key = decodeURIComponent(pair.shift());
    const value = decodeURIComponent(pair.join("="));

    if (typeof queryString[key] === "undefined") {
      queryString[key] = value;
    } else if (typeof queryString[key] === "string") {
      const arr = [queryString[key], value];
      queryString[key] = arr;
    } else {
      queryString[key].push(value);
    }
  }

  return queryString;
}

const queryObject = parseQueryString(search);

function sanitizeParameterValue(value) {
  const sanitizedValue = value.replace(/['";\(\)]/g, '');
  const validPattern = /^[a-zA-Z0-9-_]*$/;
  const isValid = validPattern.test(sanitizedValue);
  return isValid ? sanitizedValue : '';
}

for (const key of Object.keys(queryObject)) {
  const value = sanitizeParameterValue(`${queryObject[key]}`);
  value ? console.log("URL VALUE IS CLEAN!") : console.log("URL VALUE IS DIRTY!");
}


