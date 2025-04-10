let toDo = []
function addTask(id,title, completed){
    let task = {
        taskId: id,
        title: title,
        completed: completed
    }
    toDo.push(task)
}
addTask(2, "Laundry", false)
addTask(5, "Cook", true)
addTask(6, "Work meeting", false)
addTask(3, "Coding Challenge", false)
addTask(4, "Trade", true)
addTask(1, "Pray", true)
console.log(toDo)

function markToDo(id){
    for(let i=0; i < toDo.length; i++){
        if (toDo[i].taskId===id){
            if (toDo[i].completed){
                console.log(`${toDo[i].title} has been done`)
            }
            else{
                console.log(`${toDo[i].title} has not been done`)
            }
            return;
        }
    }
console.log("Task not found")
}
markToDo(1)
markToDo(2)
markToDo(3)
markToDo(4)
markToDo(5)
markToDo(6)


function filterTasks(status) {
    console.log(`\n${status === "completed" ? "Completed Tasks" : "Pending Tasks"}:`);

    for (let i = 0; i < toDo.length; i++) {
        if (status === "completed" && toDo[i].completed) {
            console.log(`- ${toDo[i].title}`);
        }
        else if (status === "pending" && !toDo[i].completed) {
            console.log(`- ${toDo[i].title}`);
        }
    }
}
filterTasks("completed");
filterTasks("pending");


toDo.splice(3, 1)
console.log(toDo)