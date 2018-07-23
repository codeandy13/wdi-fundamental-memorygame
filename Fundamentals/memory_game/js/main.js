

var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];



var cardOne = [0];
cardsInPlay.push('cardOne');
console.log("user flipped queen");

var cardTwo = [2];
cardsInPlay.push('cardTwo');
console.log("user flipped king");

if (cardsInPlay === 2){
cardsInPlay.length = 2;
} else if (cardsInPlay[0] === cardsInPlay[1]){
	alert ("You found a match!");
} else (){
	alert ("Sorry, try again.");
}
