console.log("-index.js-")


//----------------------------------------
// using DOM API
//----------------------------------------

const box = document.querySelector(".alert")
const greetBtn = document.querySelector('.btn-primary');
const showBtn = document.querySelector('.btn-warning');
const hideBtn = document.querySelector('.btn-danger');

greetBtn.addEventListener('click', e => {
    box.innerText = "good evening"
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = ''
})



//----------------------------------------
// using DOM API + XHR/Fetch API
//----------------------------------------


const todosBtn = document.getElementById('todos-btn')
const todosList = document.querySelector("#todos")

todosBtn.addEventListener('click', e => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    const promise = fetch(apiUrl);
    promise
        .then(response => response.json())
        .then(todos => {
            const todoListElements = todos.map(todo => {
                return `
                    <li class="list-group-item">
                        <span class="badge badge-dark">${todo.id}</span>
                        <span>${todo.title}</span>
                        <span class="bg bg-warning">${todo.completed?'completed':'incomplete'}</span>
                    </li>
                `
            })
            todosList.innerHTML = todoListElements.join(" ")
        })

})



//----------------------------------------
// using DOM API + Timer API
//----------------------------------------

const timeElement=document.getElementById('time');
setInterval(()=>{
    timeElement.innerText=new Date().toLocaleTimeString('en-US',{timeZone:'Asia/Kolkata'})
},1000);