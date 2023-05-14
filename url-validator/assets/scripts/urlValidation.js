//var currentURL = `https://www.google.com.ar/agents/common/comboSelect.jsp?pan=chuu&comp=asd%27,%27%27);throw+location;a=(%27`;
//var currentURL = `https://www.google.com.ar/agents/common/comboSelect.jsp?comp=asd&comp=asd%27,%27%27);throw+location;a=(%27&pan=chuu`;
var currentURL = `https://www.google.com.ar/agents/common/comboSelect.jsp?comp=asd&pan=chuu`;
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


function validateURLSearchValues(urlValues) { 
  for (const key of Object.keys(urlValues)) {
    const value = sanitizeParameterValue(`${urlValues[key]}`);
    value ? console.log("URL VALUE IS CLEAN!") : console.log("URL VALUE IS DIRTY!");
    if (!value) {
      return false;
    }
  }
  return true;
}

console.log(validateURLSearchValues(queryObject));