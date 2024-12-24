const form = document.getElementById("form");
const task = document.getElementById("task");
const addTaskBtn = document.getElementById("addTaskBtn");
const userTaskContainer = document.getElementById("userTaskContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  task.value = "";
});

addTaskBtn.addEventListener("click", () => {
  if (task.value !== "") {
    const taskElementWrapper = document.createElement("div");
    const taskElementText = document.createElement("p");
    const taskElementRemove = document.createElement("img");

    taskElementWrapper.classList.add(
      "py-3",
      "flex",
      "align-middle",
      "items-center",
      "justify-between",
      "rounded-2xl",
      "mb-4",
      "px-5",
      "bg-cruise-300",
      "text-cruise-800"
    );

    taskElementText.textContent = task.value;
    taskElementRemove.src = "./img/cross.png";

    taskElementRemove.addEventListener("click", () => {
      taskElementWrapper.remove();
    });

    taskElementWrapper.appendChild(taskElementText);
    taskElementWrapper.appendChild(taskElementRemove);
    userTaskContainer.appendChild(taskElementWrapper);
  } else {
    alert("Please enter a task");
  }
});
