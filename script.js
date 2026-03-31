let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task.text;

        if(task.completed){
            li.classList.add("Completed");
        }

        li.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
        };

        let delBtn = document.createElement("button");
        delBtn.innerHTML = "X";
        delBtn.onclick = (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            saveTasks();
        };

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value === "") return;

    tasks.push({ text: input.value, completed: false });
    input.value = "";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();

document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

}

renderTasks();

   
