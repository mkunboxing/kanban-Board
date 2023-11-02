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
        addTaskToContainer(todoContainer, value);
        updateToLocalStorage();
        input.value = "";
        e.preventDefault();
    })
}

function addTaskToContainer(container, value) {
    const p = document.createElement("p");
    p.setAttribute('draggable', 'true');
    p.classList.add("tasks");
    p.innerText = value;
    attachDragListner(p);
    container.appendChild(p);
    updateCount(container.id);
}
//   // Function to update the count for a specific container
//   function updateCount(containerId) {
//     const container = document.getElementById(containerId);
//     const tasks = container.getElementsByClassName("tasks");
//     const countElement = container.querySelector(".count");
//     countElement.textContent = tasks.length;
// }
