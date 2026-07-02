button1 = document.getElementsByClassName("AddTaskBtn")[0]
button1.addEventListener("click", () => {
    taskInput = document.getElementById("taskInput").value;
    if (taskInput === "") {
        alert("Please enter a task!");
    } else {
        const newTask = document.createElement("li");
        newTask.classList.add("task");

        const textSpan = document.createElement("span");
        textSpan.textContent = taskInput;
        newTask.appendChild(textSpan);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up to the li element
            const span = e.target.parentElement.querySelector("span");
            const newTaskInput = prompt("Edit your task:", span.textContent);   
            if (newTaskInput !== null && newTaskInput.trim() !== "") {
                span.textContent = newTaskInput;
            }
        });

        newTask.appendChild(editBtn);
        
        newTask.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });

        document.getElementById("taskList").appendChild(newTask);
        document.getElementById("taskInput").value = "";
    }
});