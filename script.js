tasksElement = document.querySelector("#tasks ul")
inputElement = document.querySelector('.input-tasks');

let tasks = [];

function registerTasks() {
    if (inputElement.value === ""){
        alert("Digite algum tarefa");
        return false;
    } else {

        let newTask = inputElement.value;

        tasks.push(newTask);
        inputElement.value = "";

        renderTasks();
    }
}

function renderTasks() {
    // console.log(tasks);
    tasksElement.innerHTML = "";

    tasks.map((toDo) => {
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(toDo);

        tasksElement.appendChild(liElement);
        liElement.appendChild(taskText);

    });
}


function registerButton() {
    registerTasks();
    
}

