const xhr = new XMLHttpRequest();

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';

xhr.onload = function() {
    //const listOfPosts = JSON.parse(xhr.response);
    const listOfPosts = xhr.response;
    for(post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);
    }

    console.log(listOfPosts);
}

xhr.send();