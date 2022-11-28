const msgEl = document.getElementById('msg')
const myWordsEl = document.getElementById('myWords')
const btnEl = document.getElementById('btnStart')
const timeTaken = new Date()
let startTime, endTime

myWordsEl.setAttribute('disabled', 'disabled')



const  setOfWords = [
    "My name is Jadugar . Hello my work is to do jaddu all the time for aeveryone", 
    "He sat across from her trying to imagine it was the first time",
    "It wasn't. Had it been a hundred? It quite possibly could have been",
    "His mind wandered until he caught himself and again tried to imagine it was the first time"
]


const playGame = () => {
    let showMsg = Math.floor(Math.random()*setOfWords.length)
    let showMsgBox = (setOfWords[showMsg])

    msgEl.innerText = showMsgBox
    startTime = timeTaken.getTime()
    btnEl.innerText = "Done" 
}
const endPlay = () => {
    let timeGone = new Date()
    endTime = timeGone.getTime()
    let totalTimeTaken = ((endTime - startTime)/ 1000)
    // console.log(totalTimeTaken)

    let totalWords = myWordsEl.value
    let wordCount = wordCounter(totalWords)

    let speed = Math.round((wordCount / totalTimeTaken)*60)
    console.log(speed)

    const speedCheck = () => {
        if (speed > 20) {
            let speedAmaze = "Your Speed is Amazing"
            return speedAmaze
        }
        else {
            let speedImprove = "Your speed is Improving keep it up"
        }
    }

    let speedChecker = speedCheck(speed)

    let finalMsg = `Your Speed is ${speed} WPM and Time Taken to complete all the Words are ${totalTimeTaken}s ` 
    msgEl.innerText = finalMsg


}

const wordCounter = (str) => {
    let response = str.split(" ").length
    // console.log (response)
    return response
}

btnEl.addEventListener ("click" , function (){
    if (this.innerText == 'Start') {
        myWordsEl.disabled = false 
        playGame()
    } 
    else if (this.innerText == 'Done') {
        btnEl.innerText = 'Start'
        endPlay()
    }
})
