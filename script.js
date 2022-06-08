const todo = document.querySelector("#todo");
const adder = document.querySelector(".add-task");
const tasks = document.querySelector(".tasks");




adder.addEventListener("click", adderTask);
todo.addEventListener('keydown',(event)=>{
    if(event.key == "Enter"){
        adderTask();
    }
})

function adderTask(){
    if(todo.value == ""){
        alert("Enter a task please !");
    }else{
        tasks.innerHTML += `${todo.value}`
    }
}