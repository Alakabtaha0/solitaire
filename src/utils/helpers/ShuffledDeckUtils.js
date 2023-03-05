//Removes cards from Shuffled Deck 
export function removeCard(deck, cardToRemove, setShuffledDeck, currentCard, setCurrentCard) {
    let tempDeck = [...deck];
    let newShuffledDeck = [];
    for (let i = 0; i < tempDeck.length; i++) {
        if (tempDeck[i] !== cardToRemove) {
            newShuffledDeck.push(tempDeck[i]);
        }
    }
    decreaseCurrentCard(deck, currentCard, setCurrentCard);
    setShuffledDeck(newShuffledDeck);
}

//Move to next card in shuffled deck
export function decreaseCurrentCard(shuffledDeck, currentCard, setCurrentCard) {
    let nextCard = shuffledDeck[currentCard - 2]
    if (nextCard === undefined && shuffledDeck.length > 1) {
        setCurrentCard(shuffledDeck.length - 1)
    } else {
        setCurrentCard(currentCard - 1);
    }
}


export function checkEndGame(acePile) {
    let counter = 0;
    acePile.forEach((pile) => {
        if (pile.length === 13) {
            counter += 1;
        } else {
            return;
        }
    });

    if (counter === 4) {
        alert('Congratulations! You Win!');
    }
}

//Checks one card against another if it's 1 less and opposite color
export function checkOppositeColor(firstCard, secondCard) {
    if (firstCard.color !== secondCard[secondCard.length - 1].color) {
        if (firstCard.number - secondCard[secondCard.length - 1].number === -1) {
            return true;
        }
    }

}