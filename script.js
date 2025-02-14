tasksElement = document.querySelector("#tasks ul")
inputElement = document.querySelector('.input-tasks');
btnRemoveAll = document.querySelector('.btnRemoveAll');
textBoxEmpty = document.querySelector('.text-boxEmpty');

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

        let newTask = {id: tasks.length, text: inputElement.value, check: false};

        tasks.push(newTask);
        inputElement.value = "";

        renderTasks();
        saveData();
    }
}



function renderTasks() {

    if(tasks.length === 0) {
        btnRemoveAll.setAttribute('style', 'display: none');
    }

    if(tasks.length != 0) {
        textBoxEmpty.setAttribute('style', 'display: none');
    } else {
        textBoxEmpty.setAttribute('style', 'display: flex');

    }

    tasksElement.innerHTML = "";

    console.log(tasks)

    tasks.map((toDo) => {

        let liElement = document.createElement("li");
        let taskText = document.createTextNode(toDo.text); 


        let rightColumnLi = document.createElement('div');
        

        let checkboxElement = document.createElement("input");
        checkboxElement.setAttribute("type", "checkbox")
        

        
        if(toDo.check === true) {
            checkboxElement.setAttribute('checked', "")
            liElement.setAttribute('style', 'text-decoration: line-through');
        } else {
            liElement.setAttribute('style', 'text-decoration: none');
        }
        
        
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        
        let iconTrash = document.createElement('i');
        iconTrash.setAttribute('class', 'fa-solid fa-trash');
        
        linkElement.appendChild(iconTrash);
        
        btnRemoveAll.setAttribute('style', 'display: block')
        
        let position = tasks.indexOf(toDo);
        
        linkElement.setAttribute("onclick", `deleteTask(${position})`);
        
        tasksElement.appendChild(liElement);

        liElement.append(checkboxElement)
        liElement.appendChild(taskText);
        liElement.appendChild(rightColumnLi)
        rightColumnLi.appendChild(linkElement);
        
        liElement.addEventListener('change', (event) => {
    
            console.log(event.target.checked);
    
            if(event.target.checked === true) {
                toDo.check = true;
                console.log(`Array Check: ${toDo.check}`)
                liElement.setAttribute('style', 'text-decoration: line-through');
    
            } else {
                toDo.check = false;
                console.log(`Array Check: ${toDo.check}`)
                liElement.setAttribute('style', 'text-decoration: none');
    
            }
            saveData();
        })
    });
}

renderTasks();

function deleteTask(position) {
    tasks.splice(position, 1);
    renderTasks();
    saveData();
}

function textWindow() {
}

function deleteList() {
    tasks = [];
    renderTasks();
    saveData();
}

function registerButton() {
    registerTasks();
    renderTasks();
}


function saveData() {
    // Essa função é responsável por salvar as tarefas no localStorage.
    localStorage.setItem("@toDoList", JSON.stringify(tasks));
}
