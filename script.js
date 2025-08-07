const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value.trim();
  const task = document.getElementById("taskText").value.trim();

  if (name && task) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `<strong>${name}:</strong> ${task}`;
    taskList.prepend(taskDiv);
    form.reset();
  }
});