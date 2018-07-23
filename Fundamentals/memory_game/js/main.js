

var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];

var checkForMatch = function(){if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};

checkForMatch();


var flipCard = function(cardID){


console.log("User flipped" + cards[cardId])
 cardsInPlay.push(cards[cardId])

if (cardsInPlay === 2){
cardsInPlay.length = 2;
} else if (cardsInPlay[0] === cardsInPlay[1]){
	alert ("You found a match!");
} else (){
	alert ("Sorry, try again.");
}
};

flipcard(0);
flipcard(2);