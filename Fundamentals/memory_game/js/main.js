

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hears.png"
},
{	
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{	
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function(){if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};

checkForMatch();


var flipCard = function(cardID){


console.log("User flipped" + cards[cardId].rank)
 cardsInPlay.push(cards[cardId].rank)

 console.log(cardImage)
 console.log(suit)

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