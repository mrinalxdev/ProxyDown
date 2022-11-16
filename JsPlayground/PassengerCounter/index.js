let count = 0
let saveWord = document.getElementById("saveEl")

function plus () {
    count = count + 1
    document.getElementById("main-count").innerText = count
}

function minus() {
    count -= 1 

    if (count < 0) {
        alert("There no passengers in here !")
    }
    else {
    document.getElementById("main-count").innerText = count  
    }
}

function save() {
    let saveFunc = count + " - "
    saveWord.textContent += saveFunc
    count.textContent = 0
    count = 0
}

function reset(){
    count = 0 
    document.getElementById("main-count").innerText = count
}
