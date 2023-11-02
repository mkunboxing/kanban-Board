function todo() {
    const btn = document.getElementById("todo_add");
    const input = document.getElementById("todo_input");
    const Container = document.getElementById("todo_list");
    addNewTask(btn, input, Container);
    return todo;
}
todo();

function p() {
    const btn = document.getElementById("p_add");
    const input = document.getElementById("p_input");
    const Container = document.getElementById("progress");
    addNewTask(btn, input, Container);
    return p;
}
p();

function done() {
    const btn = document.getElementById("done_add");
    const input = document.getElementById("done_input");
    const Container = document.getElementById("done");
    addNewTask(btn, input, Container);
    return done();
}
done();
