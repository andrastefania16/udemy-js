// create secretNumber

var secretNumber= 4;


// ask user to guess

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check if  guess is right
// number(guess) helps us transform  guess = "4" ( a string) in number "4"

if(guess === secretNumber){

	alert("you got is right");
}
// otherwise check if higher 
else if(guess > secretNumber){
	alert("To high.Guess again");
}
// otherwise check if lower
else {
	alert("To low .Guess again");
 }

