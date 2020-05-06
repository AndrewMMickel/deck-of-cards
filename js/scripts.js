$(document).ready(function () {
    $('form#Deck').submit(function (event) {
        var cards = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        var suits = ['clubs', 'spades', 'diamonds', 'hearts'];
        var fullcard = [];
        suits.forEach(function (suit) {
            cards.forEach(function (card) {
                fullcard.push(card + " " + suit)
            });
        });
        fullcard.forEach(function (suit) {
            $("ul").append("<li>" + suit + "</li>")
        });
        event.preventDefault();
    });
});
