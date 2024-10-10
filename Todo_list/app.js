const inputtodo = document.querySelector(".todo-input");
const ul = document.querySelector(".todoList .ul");
const addbtn = document.querySelector(".addbtn");
let delbtn = "";
console.log(delbtn)

const addTask = () => {
    let newli = inputtodo.value;
    console.log(newli);
    if (newli.trim() === "") {
        alert("Type something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = `${newli}<span><button class="delbtn">Delete</button></span>`;
        ul.append(li);
        delbtn = document.querySelectorAll(".delbtn");
        li.querySelector(".delbtn").addEventListener("click", function () {
            const li = this.parentElement.parentElement;
            li.remove(); // Remove the <li> when delete button is clicked
        });
        inputtodo.value = '';

    }
}

inputtodo.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevents default behavior of form submission
        addTask();          // Calls the addTask function
    }
});

addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
})
