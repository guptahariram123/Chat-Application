const socket= io("http://localhost:8000")

var name = prompt("Enter your name to join the chat: ")
socket.emit("user-joined",name)
var firstDiv=document.querySelector(".first")

function generateMessage(message,side){
    var p = document.createElement("p")
    if (side==="left"){
    p.classList.add("pbackground")
    p.classList.add("card")
    p.classList.add("text-light")
    p.classList.add("float-start")
    }
    else if (side==="right"){
        p.classList.add("pbackground")
        p.classList.add("card")
        p.classList.add("text-light")
        p.classList.add("text-end")
        p.classList.add("float-end")
        }
    else
    p.classList.add("mid-para")

    p.innerHTML=message
    firstDiv.appendChild(p)
}

socket.on("new-user-joined",name=>{
    generateMessage(`${name} joined the chat `,"mid")
})
function sendMessage(){
    var message=document.getElementById("message").value
    document.getElementById("message").value=""
    socket.emit("send",message)
    generateMessage(`${message} : You `,"right")
}
socket.on("receive",data=>{
    generateMessage(`${data.name} :${data.message}`,"left")
})
socket.on("user-left",name=>{
    generateMessage(`${name} Left the chat`,"mid")
})





// const socket = io("http://localhost:8000")

// var name = prompt("Enter your name to join the chat : ")
// socket.emit("user-joined",name)

// var firstDiv = document.querySelector(".first")

// function generateMessage(message,side){
//    var p = document.createElement("p")
//    if(side==="left"){
//     p.classList.add("pbackground")
//     p.classList.add("card")
//     p.classList.add("text-light")
//     p.classList.add("float-start")
//    }
//    else if(side==="right"){
//     p.classList.add("pbackground")
//     p.classList.add("card")
//     p.classList.add("text-light")
//     p.classList.add("text-end")
//     p.classList.add("float-end")
//    }
//    else{
//     p.classList.add("mid-para")
    
//    }
//    p.innerHTML=message
//    firstDiv.appendChild(p)
// }
// socket.on("new-user-joined",name=>{
//     generateMessage(`${name} joined the chat`,"mid")
// })

// function sendMessage(){
//     var message = document.getElementById("message").value
//     document.getElementById("message").value=""
//     socket.emit("send",message)
//     generateMessage(`${message}: you `,"right")
// }
// socket.on("receive",data=>{
//     generateMessage(`${data.name}:${data.message}`,"left")
// })

// socket.on("user-left",name=>{
//     generateMessage(`${name}:left the chat `,"mid")
// })
