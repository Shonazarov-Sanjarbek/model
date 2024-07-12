import { USERS } from "../db/server.js";
// POUP start 
console.log(USERS);
const btnOpen = document.querySelector(".btn__open")
const btnClose = document.querySelector(".btn__close")
const popap = document.querySelector(".popap")
const overlay = document.querySelector(".overlay")

btnOpen.addEventListener("click", ()=>{
    popap.style.display = "flex"
})

btnClose.addEventListener("click", ()=>{
    popap.style.display = "none"
})

overlay.addEventListener("click", ()=>{
    popap.style.display = "none"
})  
// POPUP end

// Model start 
const model = document.querySelector(".model")
const modelName = document.querySelector(".model__name")
const modelUsername = document.querySelector(".model__username")
const modelPassword = document.querySelector(".model__password")
const modelPasswordConfirm = document.querySelector(".model__password-confirm")

model.addEventListener("submit", (event) => {
    event.preventDefault()
    let name =  modelName.value
    let username =  modelUsername.value
    let password =  modelPassword.value
    let passwordConfirm =  modelPasswordConfirm.value

    if(password !== passwordConfirm){
        return alert("parol bir xil emas")
    } 
    console.log("ok");  
}
)
// Model end

