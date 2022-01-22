const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
};

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo)
    
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTodo);
};

toDoForm.addEventListener("submit", handleTodoSubmit);
