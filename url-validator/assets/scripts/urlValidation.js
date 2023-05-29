var currentURL = `https://www.google.com.ar/agents/common/comboSelect.jsp?pan=chuu&comp=asd%27,%27%27);throw+location;a=(%27`;
//var currentURL = `https://www.google.com.ar/agents/common/comboSelect.jsp?comp=asd&comp=asd%27,%27%27);throw+location;a=(%27&pan=chuu`;
//const currentURL = 'https://www.google.com.ar/agents/common/comboSelect.jsp?comp=asd&pan=chuu';
const MESSAGE_OK = 'No suspicious values detected in the URL.';
const MESSAGE_DANGER = 'Potential security risk: Invalid URL parameters.';

const parsedURL = new URL(currentURL);
const urlSearch = parsedURL.search.replace('?', '');

function parseUrlSearchValues(query) {
  const variables = query.split('&');
  const queryString = {};

  for (const variable of variables) {
    const [key, value] = variable.split('=');
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value);

    if (typeof queryString[decodedKey] === 'undefined') {
      queryString[decodedKey] = decodedValue;
    } else if (typeof queryString[decodedKey] === 'string') {
      queryString[decodedKey] = [queryString[decodedKey], decodedValue];
    } else {
      queryString[decodedKey].push(decodedValue);
    }
  }

  return queryString;
}

const urlSearchValues = parseUrlSearchValues(urlSearch);

function sanitizeParameterValue(value) {
  const sanitizedValue = value.replace(/['";\(\)]/g, '');
  const validPattern = /^[a-zA-Z0-9-_\s,]*$/;
  const isValid = validPattern.test(sanitizedValue);
  return isValid ? sanitizedValue : '';
}

function validateURLSearchValues(urlValues) { 
  for (const key of Object.keys(urlValues)) {
    const value = sanitizeParameterValue(`${urlValues[key]}`);
    value ? console.log(MESSAGE_OK) : console.log(MESSAGE_DANGER);
    if (!value) {
      return false;
    }
  }
  return true;
}

console.log(validateURLSearchValues(urlSearchValues));