const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");

let tasks = [];

function renderTasks() {
  todoList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";

    if (task.completed) {
      listItem.classList.add("completed");
    }

    listItem.textContent = task.name;

    const completeButton = document.createElement("button");
    completeButton.className = "btn btn-success btn-sm me-2";
    completeButton.innerHTML = task.completed
      ? '<span class="checkmark">&#10003;</span>'
      : "Finish";
    completeButton.onclick = () => {
      task.completed = !task.completed;
      renderTasks();
    };

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      tasks.splice(index, 1);
      renderTasks();
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = taskInput.value.trim();
  if (taskName) {
    tasks.push({ name: taskName, completed: false });
    taskInput.value = "";
    renderTasks();
  }
});

renderTasks();
