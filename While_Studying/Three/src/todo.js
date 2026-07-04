// 1. Create a TypeScript file (todo.ts).
// 2. Define an interface for a to-do item.
// 3. Implement functions to add, remove, and display to-do items.
// 4. Compile the TypeScript file to JavaScript and test it in the console.
import promptSync from 'prompt-sync';
const prompt = promptSync();
let InMemoryAllTasks = [];
let idStart = 1;
function AddTask() {
    let taskId = idStart++;
    let taskName = prompt("Enter the name of the task: ");
    let createdDate = new Date();
    let dueDate = new Date(prompt("Enter the due date of the task (YYYY-MM-DD): ") || "");
    let isCompleted = false;
    let task = {
        taskId: taskId,
        taskName: taskName || "",
        isCompleted: isCompleted,
        createdDate: createdDate,
        dueDate: dueDate
    };
    InMemoryAllTasks.push(task);
}
function RemoveTask(taskId) {
    let check = InMemoryAllTasks.some(task => task.taskId === taskId) || false;
    if (!check) {
        console.log(`Task with ID ${taskId} not found.`);
        return;
    }
    InMemoryAllTasks = InMemoryAllTasks.filter(task => task.taskId !== taskId);
}
function DisplayTasks() {
    console.log(InMemoryAllTasks.map(task => `ID: ${task.taskId}, Name: ${task.taskName}`));
    console.log(InMemoryAllTasks);
}
function MarkTaskAsCompleted(taskId) {
    let task = InMemoryAllTasks.find(task => task.taskId === taskId);
    if (task) {
        task.isCompleted = true;
    }
    else {
        console.log(`Task with ID ${taskId} not found.`);
    }
}
let checkcheck = true;
while (checkcheck) {
    console.log("===========================");
    console.log("1. Add Task");
    console.log("2. Remove Task");
    console.log("3. Display Tasks");
    console.log("4. Mark Task as Completed");
    console.log("5. Exit");
    console.log("===========================");
    let choice = parseInt(prompt("Enter your choice: ") || "0");
    switch (choice) {
        case 1:
            AddTask();
            break;
        case 2:
            let removeId = parseInt(prompt("Enter the ID of the task to remove: ") || "0");
            RemoveTask(removeId);
            break;
        case 3:
            DisplayTasks();
            break;
        case 4:
            let completeId = parseInt(prompt("Enter the ID of the task to mark as completed: ") || "0");
            MarkTaskAsCompleted(completeId);
            break;
        case 5:
            console.log("Exiting...");
            checkcheck = false;
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}
