let ClickToStart = document.getElementById("ClickToStart");

// COMPUTER RPSLS CODE START
var PlayerChoice;
var computerChoice;

function compare(comChoice) {
	if (PlayerChoice === comChoice) {
    return "The computer also chose " + computerChoice + ":" + "<br>" + "the result is a tie! :\|";
	} else if (PlayerChoice === "rock") {
		if (comChoice === "paper") {
      return "paper covers rock <br> You Lose :\(";
		} else if (comChoice === "scissors") {
      return "rock crushes scissors <br> You Win! :\)";
		} else if (comChoice === "lizard") {
			return "rock crushes lizard <br> You Win! :\) ";
		} else {
			return "spock vaporizes rock <br> You Lose :\(";
		}
	} else if (PlayerChoice === "paper") {
		if (comChoice === "rock") {
			return "paper covers rock <br> You Win! :\)";
		} else if (comChoice === "scissors") {
			return "scissors cut paper <br> You Lose :\(";
		} else if (comChoice === "lizard") {
			return "lizard eats paper <br> You Lose :\(";
		} else {
			return "paper disproves spock <br> You Win! :\)";
		}
	}else if (PlayerChoice === "scissors") {
		if (comChoice === "rock") {
			return "rock crushes scissors <br> You Lose :\(";
		} else if (comChoice === "paper") {
			return "scissors cut paper <br> You Win! :\)";
		} else if (comChoice === "lizard") {
			return "scissors decapitate lizard <br> You Win! :\)";
		} else {
			return "spock smashes scissors <br> You Lose :\(";
		}
	} else if (PlayerChoice === "lizard") {
		if (comChoice === "rock") {
			return "rock crushes lizard <br> You Lose :\(";
		} else if (comChoice === "paper") {
			return "lizard eats paper <br> You Win! :\)";
		} else if (comChoice === "scissors") {
			return "scissors decapitate lizard <br> You Lose :\(";
		} else {
			return "lizard poisons spock <br> You Win! :\)";
		}
	} else if (PlayerChoice === "spock") {
		if (comChoice === "rock") {
			return "spock vaporizes rock <br> You Win! :\)";
		} else if (comChoice === "paper") {
			return "paper disproves spock <br> You Lose :\(";
		} else if (comChoice === "scissors") {
			return "spock smashes scissors <br> You Win! :\) ";
		} else {
			return "lizard poisons spock <br> You Lose :\(";
		}
	}
};

$(document).ready(function(){
	$("button").click(function(){
		PlayerChoice = this.id;
		computerChoice = Math.floor(Math.random() * 5);
     switch (computerChoice) { 
       case 0: computerChoice = "rock"; 
         break; 
       case 1: computerChoice = "paper"; 
         break; 
       case 2: computerChoice = "scissors"; 
         break; 
       case 3: computerChoice = "lizard";
         break;
       case 4: computerChoice = "spock"; 
         break; 
     }


		var result = compare(computerChoice).toUpperCase();

		$(".result").html("<h1>Result:</h1><p>User: " + PlayerChoice.toUpperCase() + "<br>" +
											"Computer: " + computerChoice.toUpperCase() + "</p>" + "<p>" + result + "</p>");
	});
});

// COMPUTER RPSLS CODE START