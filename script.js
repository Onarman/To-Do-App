const input = document.querySelector("#input");
const adder = document.querySelector(".add-task");
const task = document.querySelector(".task");
const ul = document.querySelector("#ul");
const p = document.querySelector("p");


adder.addEventListener("click",addTask);
input.addEventListener("keydown",(e)=>{
    if (e.key == "Enter"){
        adder.click()
    }
})


function addTask(){
    if(input.value == ""){
        alert("Enter a task please!!!")
    }else{
        ul.innerHTML += `<li class="li-task"><i class="fa-solid fa-check fa-2x"></i>
        <p>${input.value}</p>
        <i class="fa-solid fa-trash-can fa-lg"></i></li>`
        input.value="";
    }

}

ul.addEventListener("click",(event)=>{
    // console.log(event.target);
    if(event.target.classList.contains("fa-check")){
        event.target.nextElementSibling.classList.toggle("p-task");
    }else if(event.target.classList.contains("fa-trash-can")){
        event.target.closest(".li-task").remove()
    }else if(event.target.classList.contains("ul"))
})




