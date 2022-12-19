// const myInput = document.getElementById('myInput');
// const myUL = document.getElementById('myUL');
// const tasks = myUL.querySelectorAll('li');

// var api = "http://10.0.154.123:8080/"

// function getData(urlTail) {
//     let options = {
//         method: 'GET',
//         redirect: 'follow'
//     }
//     return new Promise(function(resolve) {
//         fetch('http://10.0.154.123:8080/todos', options)
//             .then(response => response.json())
//             .then(response => {
//                 console.log(response)
//                 resolve(response);
//             })
//     });
// }

// function addCheckedState(taskItem) {
//     taskItem.addEventListener('click', (event) => {
//         event.target.classList.toggle('checked');
//     });
// }


// function addCloseButton(taskItem) {
//     let closeButton = document.createElement('div');
//     closeButton.innerHTML = 'X';
//     closeButton.classList.add('close');
//     closeButton.setAttribute("style", "font-family: cursive; font-size: 15px;");
    
//     closeButton.addEventListener('click', (event) => {
//         event.target.parentElement.remove();
//     })

//     taskItem.appendChild(closeButton);
// }


// function newElement() {
//     let taskContent = myInput.value;
//     myInput.value = ""
//     let newTaskElement = document.createElement('li');
//     newTaskElement.innerHTML = taskContent;
//     myUL.appendChild(newTaskElement);

//     addCheckedState(newTaskElement);
//     addCloseButton(newTaskElement);
// }

// for (let taskItem of tasks) {
//     addCheckedState(taskItem);
//     addCloseButton(taskItem);
// };

// getData('todos')
//     .then(response => {
//         console.log(response)
//     })
let options = {
    // mode: 'no-cors',
    method: 'GET'
};
fetch('http://10.0.154.123:8080/todos', options)
            // .then(response => response.json())
            // .catch(err => {
            //     console.log("err: ",err)
            // })
            .then(response => {
                console.log(response);
            })