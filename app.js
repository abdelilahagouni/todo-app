// selectors 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



// event listeners 
todoButton.addEventListener("click", addTodo);

// functions
function addTodo(event){
    // prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoList.classList.add("todo")
    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTod.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    

}
