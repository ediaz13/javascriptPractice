const task3Element = document.getElementById("task-3");

function greet() {
  alert("Hi there!");
}

function greetUser(name) {
  alert("Hi there! " + name);
}

function combine(str1, str2, str3) {
  //const combineText = str1 + str2 + str3;
  const combineText = `${str1} ${str2} ${str3}`;
  return combineText;
}

greet();
greetUser("Ema");

task3Element.addEventListener("click", greet);

const combinedString = combine ('Hi', 'there', '!');

alert(combinedString);