tasksElement = document.querySelector("#tasks ul")
inputElement = document.querySelector('.input-tasks');

let tasks = JSON.parse(localStorage.getItem("@toDoList")) || [];

function registerTasks() {
    if (inputElement.value === ""){
        alert("Digite algum tarefa");
        return false;
    } else {

        let newTask = inputElement.value;

        tasks.push(newTask);
        inputElement.value = "";

        renderTasks();
        saveData();
    }
}

function renderTasks() {
    // console.log(tasks);
    tasksElement.innerHTML = "";

    tasks.map((toDo) => {
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(toDo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode(" deletar");
        linkElement.appendChild(linkText);

        let position = tasks.indexOf(toDo);

        linkElement.setAttribute("onclick", `deleteTask(${position})`);

        tasksElement.appendChild(liElement);
        liElement.appendChild(taskText);
        liElement.appendChild(linkElement);
    });
}

function deleteTask(position) {
    tasks.splice(position, 1);
    renderTasks();
    saveData();
}


function registerButton() {
    registerTasks();

}


function saveData() {
    localStorage.setItem("@toDoList", JSON.stringify(tasks));
}
