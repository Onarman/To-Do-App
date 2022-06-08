const todo = document.querySelector("#todo");
const adder = document.querySelector(".add-task");
const task = document.querySelector(".task");
const done = document.querySelector(".done");



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
        task.innerHTML += `
        <i class="fa-solid fa-square-check done"></i>
        <p>${todo.value}</p>
        
        <i class="fa-solid fa-trash"></i>
        <br>`;
        todo.value ="";
    }
}

