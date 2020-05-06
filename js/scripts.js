$(document).ready(function() {
    $('#Deck form').submit(function(event) {
    var cards = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    var suits = ['clubs', 'spades', 'diamonds', 'hearts']
    var fullcard = [];
    cards.forEach(card); {
        fullcard.push(cards + suits)}
    });

    alert(fullcard)
});
