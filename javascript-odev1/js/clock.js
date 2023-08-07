

let userName = prompt("Kullanıcı Adınızı Girin")
let userNameDOM = document.querySelector("#myName")
let dateDOM = document.querySelector("#myClock")

userNameDOM.innerHTML = userName

let date = new Date()
let nowDAte = date.getHours()+":"+date.getMinutes()+"  "+ date.getDate() +"/"+(date.getMonth()+1)+"/"+date.getFullYear()


dateDOM.innerHTML = nowDAte