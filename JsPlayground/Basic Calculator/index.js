let count1 = 20
let count2 = 4

document.getElementById("count1-El").textContent = count1 
document.getElementById("count2-El").textContent = count2 


function myAdd () {
    let countSum = count1 + count2 
    document.getElementById("answer").innerText = countSum
}

function mySubtract () {
    let countDiff = count1 - count2 
    document.getElementById("answer").innerText = countDiff
}

function myDivide () {
    let countDivid = count1 / count2 
    document.getElementById("answer").innerText = countDivid
}

function myMultiply() {
    let countMult = count1 * count2 
    document.getElementById("answer").innerText = countMult
}
