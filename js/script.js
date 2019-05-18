'use strict'

// const list = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
const list = ['1', '2', '3', 'sea', 'user', 23];

const createList = (array => {
    const ul = document.createElement('ul');
    array.map(item => {
        const li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
        return ul;
    });
    document.body.appendChild(ul);
    const span = document.createElement('span');
    span.innerText = '10';
    span.style.fontWeight = 'bold';
    span.style.fontSize = '30px';
    document.body.appendChild(span);
    let interval = setInterval(() => {
        if (span.innerText != 0) {
            span.innerText = span.innerText - 1;
        } else {
            document.body.removeChild(ul);
            document.body.removeChild(span);
            clearInterval(interval);
        }
    }, 1000);
});

createList(list);