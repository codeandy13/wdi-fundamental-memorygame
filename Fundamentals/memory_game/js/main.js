

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


var flipCard = function(){
var cardId;

this.getAttribute('data-id');
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



var createBoard = function(){
	for(var i = 0; i < createBoard.length; i ++){
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', "i");	
	}
};

createBoard();



