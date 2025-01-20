tasksElement = document.querySelector("#tasks ul")
inputElement = document.querySelector('.input-tasks');
textBox = document.querySelector('.text-boxEmpty')
btnRemoveAll = document.querySelector('.removeAll');



let tasks = JSON.parse(localStorage.getItem("@toDoList")) || [];



document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const btn = document.querySelector('.btnRegister');
        btn.click()
    }
})

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
    tasksElement.innerHTML = "";

    tasks.map((toDo) => {
        if(tasks.length != 0) {
            textBox.innerHTML = "";
            console.log(textBox)
        }

        let liElement = document.createElement("li");
        let taskText = document.createTextNode(toDo);

        let checkboxElement = document.createElement("input");
        checkboxElement.setAttribute("type", "checkbox")

        checkboxElement.addEventListener('change', (event) => {
            console.log(event.target.checked);

            if(event.target.checked === true) {
                console.log("Marcado");

                liElement.setAttribute('style', 'text-decoration: line-through');
            } else {
                console.log("Desmarcado");
                liElement.setAttribute('style', 'text-decoration: none');
            }
        })

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        
        // Criar lógica do botão de remover tudo
        btnRemoveAll.setAttribute('style', 'display: block')
        

        let linkText = document.createTextNode("deletar");
        linkElement.appendChild(linkText);

        let position = tasks.indexOf(toDo);

        linkElement.setAttribute("onclick", `deleteTask(${position})`);

        liElement.append(checkboxElement)
        tasksElement.appendChild(liElement);
        liElement.appendChild(taskText);
        liElement.appendChild(linkElement);

    });
}


renderTasks();

function deleteTask(position) {
    tasks.splice(position, 1);
    renderTasks();
    saveData();
}

function deleteList() {
    tasks = [];
    renderTasks();
    saveData();
}

function registerButton() {
    registerTasks();
}


function saveData() {
    localStorage.setItem("@toDoList", JSON.stringify(tasks));

    // Adicionar checkbox no localStorage
}
