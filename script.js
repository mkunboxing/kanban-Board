const task_drag = document.querySelectorAll(".tasks");
const drop = document.querySelectorAll(".todo_items");

task_drag.forEach((task)=>{
    attachDragListner(task)
});

drop.forEach((zone)=>{
    zone.addEventListener("dragover" , (e)=>{
        e.preventDefault();

        const bottomTask = insertAboveTask(zone,e.clientY);

        const curTask = document.querySelector(".is-dragging");
        if(!bottomTask){
            zone.appendChild(curTask);
        }else{
            zone.insertBefore(curTask,bottomTask);
        }
        
    });


    zone.addEventListener("dragend", (e) => {        
        updateCount("progress")
        updateCount("done")
        updateCount("todo_list")

        updateToLocalStorage()
    })
});

function updateToLocalStorage() {
    const doneList = document.querySelector("#done").querySelectorAll(".tasks");
    const todoList = document.querySelector("#todo_list").querySelectorAll(".tasks");
    const progressList = document.querySelector("#progress").querySelectorAll(".tasks");

    const doneTexts = []
    for(const tasks of doneList) {
        doneTexts.push(tasks.innerText);
    }
    const todoTexts = []
    for(const tasks of todoList) {
        todoTexts.push(tasks.innerText);
    }
    const progressTexts = []
    for(const tasks of progressList) {
        progressTexts.push(tasks.innerText);
    }
    localStorage.setItem("done", JSON.stringify(doneTexts))
    localStorage.setItem("progress", JSON.stringify(progressTexts))
    localStorage.setItem("todo", JSON.stringify(todoTexts))
}

const insertAboveTask = (zone,mouseY)=>{
    const els = zone.querySelectorAll(".tasks:not(.is-dragging)");

    let closestTask = null;
    let closestoffset = Number.NEGATIVE_INFINITY;

    els.forEach((task)=>{
        const {top} = task.getBoundingClientRect();

        const offset = mouseY-top;
        
        if(offset<0 && offset>closestoffset){
            closestoffset =offset;
            closestTask = task;
        }
    });
    return closestTask;


};


