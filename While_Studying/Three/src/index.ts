// console.log('Hello world!');
// let age = 10
// if (age < 40)
//     age += 10;

// let level; // any - when we want to declare but want to not specify the type.
// level = 1;

// let numbers = [1, 2, "three"];
// let numbers1: number[] = [1, 2, 3];

// enum Size {Small, Medium, Large};

// function calculateTax (income: number) : number {
//     return 0;
// }



// function weightCalculator (weight: number | string) : number {
//     if (typeof weight === "number") {
//         return weight * 2.2;
//     } 
//     return (parseInt (weight) * 2.2).toFixed(2) as unknown as number;
// }

// console.log (weightCalculator("100"));



// 1. Create a TypeScript file (todo.ts).
// 2. Define an interface for a to-do item.
// 3. Implement functions to add, remove, and display to-do items.
// 4. Compile the TypeScript file to JavaScript and test it in the console.

interface task {
    taskId: number,
    taskName: string,
    isCompleted: boolean,
    createdDate: Date,
    dueDate: Date
}


let InMemoryAllTasks: task[] = [];
let idStart: number = 1;

function AddTask() {
    let taskId = idStart++;
    let taskName: string | null = prompt("Enter the name of the task: ");
    let createdDate: Date = new Date();
    let dueDate: Date = new Date(prompt("Enter the due date of the task (YYYY-MM-DD): ") || "");
    let isCompleted: boolean = false;

    let task: task = {
        taskId: taskId,
        taskName: taskName || "",
        isCompleted: isCompleted,
        createdDate: createdDate,
        dueDate: dueDate
    };
    InMemoryAllTasks.push(task);
}


function RemoveTask(taskId: number) {
    InMemoryAllTasks = InMemoryAllTasks.filter(task => task.taskId !== taskId);
}


function DisplayTasks () {
    console.log (InMemoryAllTasks.map (task => `ID: ${task.taskId}, Name: ${task.taskName}`));
    console.log (InMemoryAllTasks);
}

function MarkTaskAsCompleted(taskId: number) {
    let task = InMemoryAllTasks.find(task => task.taskId === taskId);
    if (task) {
        task.isCompleted = true;
    } else {
        console.log(`Task with ID ${taskId} not found.`);
    }
}


while (true) {
    console.log ("===========================");
    console.log ("1. Add Task");
    console.log ("2. Remove Task");
    console.log ("3. Display Tasks");
    console.log ("4. Mark Task as Completed");
    console.log ("5. Exit");
    console.log ("===========================");

    let choice: number = parseInt(prompt("Enter your choice: ") || "0");

    switch (choice) {
        case 1:
            AddTask();
            break;
        case 2:
            let removeId: number = parseInt(prompt("Enter the ID of the task to remove: ") || "0");
            RemoveTask(removeId);
            break;
        case 3:
            DisplayTasks();
            break;
        case 4:
            let completeId: number = parseInt(prompt("Enter the ID of the task to mark as completed: ") || "0");
            MarkTaskAsCompleted(completeId);
            break;
        case 5:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}