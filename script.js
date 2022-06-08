const input = document.querySelector("#input");
const adder = document.querySelector(".add-task");
const task = document.querySelector(".task");
const ul = document.querySelector("#ul");

adder.addEventListener("click",addTask)
function addTask(){
    if(input.value == ""){
        alert("Enter a task please!!!")
    }else{
        ul.innerHTML += `<li class="li-task"><i class="fa-solid fa-check fa-2x"></i>
        <p>${input.value}</p>
        <i class="fa-solid fa-trash-can fa-lg"></i></li>`
    }
}




