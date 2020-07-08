const toDoForm = document.querySelector(".js-toDoForm")
    , toDoInput = toDoForm.querySelector("input")
    , toDoList = document.querySelector(".js-toDoList");

TODO_LS = "todo";

let toDos = [];

function deleteTodo(event){
const btn = event.target;
const li = btn.parentNode;
toDoList.removeChild(li);
const newToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
});
toDos = newToDos;
saveToDo();
}

function showToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteTodo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDosObj = {
        text: text,
        id: newId
    };
    toDos.push(toDosObj);
    saveToDo()
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = "";
}

function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos))
}
function loadToDo() {
    const loadToDos = localStorage.getItem(TODO_LS);
    if (loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(todo){
            showToDo(todo.text)
        });
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();