function computerPlay() {
	switch (Math.floor(Math.random() * 3)) {
		case 0:
			return "Rock";
			break;
		case 1:
			return "Paper";
			break;
		default:
			return "Scissors";
			break;
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == "ROCK") {
		if (computerSelection == "ROCK") {
			return "It's a tie!";
		} else if (computerSelection == "PAPER") {
			return "You lose! Paper beats Rock.";
		} else if (computerSelection == "SCISSORS") {
			return "You win! Rock beats Scissors.";
		}
	} else if (playerSelection == "PAPER") {
		if (computerSelection == "ROCK") {
			return "You win! Paper Beats Rock.";
		} else if (computerSelection == "PAPER") {
			return "It's a tie!";
		} else if (computerSelection == "SCISSORS") {
			return "You lose! Scissors beats Paper.";
		}
	} else if (playerSelection == "SCISSORS") {
		if (computerSelection == "ROCK") {
			return "You lose! Rock Beats Scissors.";
		} else if (computerSelection == "PAPER") {
			return "You win! Scissors beats Paper.";
		} else if (computerSelection == "SCISSORS") {
			return "It's a tie!";
		}
	} else return "Please enter a valid value.";
}

function game(rounds) {
	for (let i = 0; i < rounds; i++) {
		const playerSelection = prompt(
			"Rock, Paper or Scissors?"
		).toUpperCase();
		const computerSelection = computerPlay().toUpperCase();
		console.log(
			"You chose",
			playerSelection.charAt(0).toUpperCase() +
				playerSelection.slice(1).toLowerCase()
		);
		console.log(
			"The computer chose",
			computerSelection.charAt(0).toUpperCase() +
				computerSelection.slice(1).toLowerCase()
		);
		console.log(playRound(playerSelection, computerSelection));
	}
}

game(prompt("How many rounds?"));
