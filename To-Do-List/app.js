let todo = JSON.parse(localStorage.getItem("todo") || []);
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.querySelector(".deleteButton");

document.addEventListener("DOMContentLoaded", () => {
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener("keydown", (evt) => {
        if (evt.key === "Enter") {
            evt.preventDefault();
            addTask();
        }
    });
    deleteButton.addEventListener("click", displayTasks());
})

function addTask() {
    const newTask = todoInput.ariaValueMax.trim();
    if (newTask != "") {
        todo.push({ text: newTask, disabled: false });
        saveToLocalStorage();
        todoInput.value = "";
        displayTasks();
    }
}
const displayTasks = () => {
    todoList.innerHTML = "";
    todo.forEach((task, index) => {
        const p = document.createElement("p");
        p.innerHTML = `<div class="todo-container">
        <input type="checkbox" class="todo-checkbox"
        id="input-${index}" ${item.disabled ? "disabled" : ""}
        onclick="editTask(${index})">${item.text}</p>
        </div>
    }`;
        p.querySelector(".todo-checkbox").addEventListener("cahnge", () => {
            toggleTask(index);
            todoList.appendChild(p);
        });
        todoCount.textContent = todo.length;
    }
    function editTask(index) {
        const todoItem = document.getElementById(`todo-${index}`)
        const existingText = todo[index].text;
        const inputElement = document.createElement("input");
        inputElement.addEventListener("blur", () => {
            const updatedText = inputElement.value.trim();
            if (updatedText) {
                todo[index].text = updatedText;
                saveToLocalStorage();
            }
            displayTasks();
        })
    }
    );
}