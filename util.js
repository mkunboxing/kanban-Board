function attachDragListner(taskEl) {
    if (!taskEl) return;

    // Listen to Drag Start Events
    taskEl.addEventListener("dragstart", (e) => {
        taskEl.classList.add("is-dragging");
    });

    //   Listen to Drag End Events
    taskEl.addEventListener("dragend", (e) => {
        taskEl.classList.remove("is-dragging");
    });
}

function addNewTask(btn, input, todoContainer) {
    btn.addEventListener("click", (e) => {
        const value = input.value.trim();

        if (!value) {
            return;
        }
        const p = document.createElement("p");
        p.setAttribute('draggable', 'true');
        p.classList.add("tasks");
        p.innerText = value;
        attachDragListner(p);
        todoContainer.appendChild(p);
        input.value = "";
        updateCount(todoContainer.id);
        e.preventDefault();

    })
}
//   // Function to update the count for a specific container
//   function updateCount(containerId) {
//     const container = document.getElementById(containerId);
//     const tasks = container.getElementsByClassName("tasks");
//     const countElement = container.querySelector(".count");
//     countElement.textContent = tasks.length;
// }
