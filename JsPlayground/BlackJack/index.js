
let firstCard = 6
let secondCard = 11
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sumel")
let cards = [firstCard , secondCard]
let hasBlackJack = false 
let sum = firstCard + secondCard
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")


function startGame () {
    render()
}

function render() {
    cardsEl.textContent = "Cards : " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        isAlive = false
        message = "You are in the Game Boii 😃"
    }
    else if ( sum == 21 ){
        hasBlackJack = true
        message ="You are winning Boii 🥳"
    }
    else {
        isAlive = false
        message = "What are you doing" 
    }
    messageEl.textContent = message
}

function newCard() {

    let newCard = 4 

    cards.push(newCard)
    alert (cards)

    sum += newCard
    render()
}