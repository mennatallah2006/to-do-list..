let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    if (task !== "") {
        tasks.push({task: task, completed: false});
        updateTaskList();
        taskInput.value = "";
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function updateTaskList() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("onchange", `toggleTask(${index})`);
        li.appendChild(checkbox);
        let taskText = document.createElement("span");
        taskText.textContent = task.task;
        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }
        li.appendChild(taskText);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        deleteButton.setAttribute("onclick", `deleteTask(${index})`);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
