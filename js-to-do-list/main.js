const ulDOM = document.querySelector("#list")
const inputDOM = document.querySelector("#task")
const errorToastDOM = document.querySelector("#liveToastError")
const successToastDOM = document.querySelector("#liveToastSuccess")
const addBtnDOM = document.querySelector("#liveToastBtn")


addBtnDOM.addEventListener("click",newElement)

showTask()

function newElement() {
    if(inputDOM.value.trim() ===""){
        const toast = new bootstrap.Toast(errorToastDOM);
        toast.show();

    }else {
        let li = document.createElement("li")
        li.innerHTML = inputDOM.value
        ulDOM.appendChild(li)
        inputDOM.value = ""
        saveData()

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)


        const toast = new bootstrap.Toast(successToastDOM);
        toast.show();
    }
    
}

function saveData() {
    localStorage.setItem("veri", ulDOM.innerHTML)
}
function showTask(){
    ulDOM.innerHTML=localStorage.getItem("veri")
}

ulDOM.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName==="SPAN") {
        e.target.parentElement.remove()
        saveData()
    }

},false)