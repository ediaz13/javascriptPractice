//const button = document.querySelector('button');
const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
    event.target.disabled = true;
    console.log(event);
}

const anotherButtonClickHandler = () => {
    console.log('Console Button was clicked!');
}


//button.addEventListener('click', buttonClickHandler);

/*
setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler)
}, 2000);
*/


buttons.forEach(btn => {
    btn.addEventListener('click', buttonClickHandler);
});