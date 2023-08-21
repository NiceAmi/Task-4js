document.getElementById("addbtn").addEventListener("click", addTask)
document.getElementById("showbtn").addEventListener("click", showTasks)
document.getElementById("namebtn").addEventListener("click", Sname)
document.getElementById("desbtn").addEventListener("click", Sdescription)
document.getElementById("probtn").addEventListener("click", Spriority)


let allTasksArr = [];

let xhr = new XMLHttpRequest();
xhr.open("GET", "../data/tasks.json", true);
xhr.onload = function () {
    let data = JSON.parse(this.responseText);
    let tasksArr = data.todoList;
    allTasksArr.push(...tasksArr);
    console.log(allTasksArr);
}

xhr.send();

class Tasks {
    constructor(name, description, priority) {
        this.name = name;
        this.description = description;
        this.priority = priority;
    }
}

function addTask() {
bar.style.display ='block';

    setTimeout(function(){
        let name = document.getElementById("name");
    let description = document.getElementById("description");
    let priority = document.getElementById("priority");

    if (name.value == "" || description.value == "" || priority.value == "") {
        alert("Missing data!")
    } else {
        let flag = false;
        for (let i in allTasksArr) {
            if (description.value == allTasksArr[i].description) {
                flag = true;
                break;
            }
        }
        if (flag == true) {
            alert("Task allready exist!")
        } else {
            let newTask = new Tasks(name.value, description.value, priority.value);
            allTasksArr.push(newTask);
        }
    }
bar.style.display ='none';
name.value ="";
description.value = "";
    },2000)
}

let bar = document.getElementById('bar');
bar.style.display = 'none';



function showTasks() {
bar.style.display = 'block';
    setTimeout(function () {
        let element = document.getElementById("showtasks");
        element.innerHTML = "";

        for (let x in allTasksArr) {
            let obj = allTasksArr[x]
            let newElement = document.createElement("div");

            newElement.innerHTML += `<ul><li>${obj.name}</li><li>${obj.description}</li><li>${obj.priority}</li></ul>
         <button id = "delBtn" onClick = "deleteTask(${x})">Delete Task</button>`;
            newElement.className = "newdiv";
            element.insertAdjacentElement("beforeend", newElement);
        }
        bar.style.display='none';
    },2000)

}


function Sname() {
    allTasksArr.sort((a, b) => a.name.localeCompare(b.name));
    showTasks();
}

function Sdescription() {
    allTasksArr.sort((a, b) => a.description.localeCompare(b.description));
    showTasks();
}

function Spriority() {
    allTasksArr.sort((a, b) => a.priority.localeCompare(b.priority));
    showTasks();
}



function deleteTask(arg) {
    allTasksArr.splice(arg, 1);
    showTasks()
}
function log_out() {
    localStorage.clear();
    window.location.href = "../pages/log.html";
}