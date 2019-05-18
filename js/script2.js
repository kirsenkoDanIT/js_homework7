'use strict'

const list = [
    [1, 2, 3, [4, 5, 6, [7, 8, 9]]], 'hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'
];


function addList(arr) {
    const ul = document.createElement('ul');
    arr.map(function (item) {
        if (typeof item != 'object') {
            const li = document.createElement('li');
            li.innerText = item;
            ul.appendChild(li);
            // return ul;
        } else {
            addList(item);
            console.log(ul)
        }
    })
    document.body.appendChild(ul);
}

addList(list)

// list.map(function (item) {
//     if (typeof item != 'object') {
//         console.log(item);
//     } else {
//         item.map(function (item) {
//             console.log(item);
//         })
//     }
// })

// const ul = document.createElement('ul');
// list.map(item => {
//     if ((typeof item) !== 'object') {
//         const li = document.createElement('li');
//         li.innerText = item;
//         ul.appendChild(li);
//         return ul;
//     } else {
//         const li = document.createElement('li');
//         item.map(item => {
//             const ul = document.createElement('ul');
//             const li = document.createElement('li');
//             li.innerText = item;
//             ul.appendChild(li);
//             return ul;
//         });
//         li.appendChild(ul);
//     };

// });




// function getObjectTitle(object) {

//     for (let key in object) {
//         if (typeof object[key] != 'object') {
//             console.log(object[key]);
//         } else {
//             getObjectTitle(object[key]);
//         }
//     }
// }

// document.body.appendChild(ul);