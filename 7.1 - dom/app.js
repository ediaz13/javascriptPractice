const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');

  const list = document.querySelector('ul');
  const newLi = document.createElement('li');
  newLi.textContent = 'Learn JavaScript';
  list.appendChild(newLi);
  const newLi_1 = document.createElement('li');
  newLi_1.textContent = 'Master JavaScript';
  list.appendChild(newLi_1);

  //166. Live Node Lists vs Static Node Lists
  /*
  Live Node
  const list = document.getElementsByTagName('ul');

  Static Node
  const list = document.querySelector('ul');

   */
  //167. Removing Elements
  /*const list = document.querySelector('ul');
  list.parentElement.removeChild(list);
  list.remove();
  */
});
