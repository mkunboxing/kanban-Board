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
});

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


