const button = document.querySelector('button');
//const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
    //event.target.disabled = true;
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

/*

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', buttonClickHandler);
});

window.addEventListener('scroll', event => {
    console.log(event);
});
*/

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('mouseenter', event => {
    console.log('CLECKED DIV');
    console.log(event);
})

button.addEventListener('click', event => {
    event.stopPropagation();
    console.log('CLECKED BUTTON');
    console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

/*
315. Triggering DOM Elements Programmatically
listItems.forEach( listItem => {
    listItem.addEventListener('click', event => {
        event.target.classList.toggle('highlight');
    })
});
*/

list.addEventListener('click', event => {
    //event.target.classList.toggle('highlight');
    event.target.classList.toggle('highlight');
    //form.submit();
    button.click();
});