
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sumel")
let cards = [firstCard, secondCard]
let hasBlackJack = false 
let sum = 0
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")
let profileEl = document.getElementById("profile-el")

let player = {
    name: "Utkarsh", 
    chip: 123, 
    age: 18
}

profileEl.textContent = player.name + " " + ": $" + player.chip



function getRandomCard() {
   let getRandom = Math.floor (Math.random () * 13 ) + 1

   if (getRandom > 10) {
    return 10
   } 
   else if ( getRandom == 1 ) {
    return 11
   }
   else {
    return getRandom
   }
}

function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    render()
}

function render() {

    for (let i = 0; i < cards.length ; i++ ){
        cardsEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        isAlive = true
        hasBlackJack = false
        message = "Do You Need Another Card !😃"
    }
    else if ( sum == 21 ){
        hasBlackJack = true
        message ="PerfectO 🥳"
    }
    else {
        isAlive = false
        message = "You are Out of the Game ! 😢" 
    }
    messageEl.textContent = message
}


function newCard() {

    if (isAlive == true && hasBlackJack == false){
        let newCard = getRandomCard()

    cards.push(newCard)
    alert (cards)

    sum += newCard
    render()
    }
}


