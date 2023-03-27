const cardArray = [
    {
        name: "1",
        img: 'images/1.jpeg'
    },
    {
        name: "2",
        img: 'images/2.jpeg'
    },
    {
        name: "3",
        img: 'images/3.jpeg'
    },
    {
        name: "4",
        img: 'images/4.jpeg'
    },
    {
        name: "5",
        img: 'images/5.jpeg'
    },
    {
        name: "6",
        img: 'images/6.jpeg'
    },
    {
        name: "1",
        img: 'images/1.jpeg'
    },
    {
        name: "2",
        img: 'images/2.jpeg'
    },
    {
        name: "3",
        img: 'images/3.jpeg'
    },
    {
        name: "4",
        img: 'images/4.jpeg'
    },
    {
        name: "5",
        img: 'images/5.jpeg'
    },
    {
        name: "6",
        img: 'images/6.jpeg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/pokeball.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/pokeball.png')
        cards[optionTwoId].setAttribute('src', 'images/pokeball.png')
        alert('You clicked the same Image!')
    }

    else if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a Match!')
        cards[optionOneId].setAttribute('src', 'images/branco.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/branco.jpeg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/pokeball.png')
        cards[optionTwoId].setAttribute('src', 'images/pokeball.png')
        alert('Sorry Try Again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all'
    }
}

function flipCard () {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}