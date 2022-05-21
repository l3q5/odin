function computerPlay() {
	switch (Math.floor(Math.random() * 3)) {
		case 0:
			return "Rock";
		case 1:
			return "Paper";
		default:
			return "Scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == "ROCK") {
		if (computerSelection == "ROCK") {
			return "It's a tie!";
		} else if (computerSelection == "PAPER") {
			computerScore++;
			return "You lose! Paper beats Rock.";
		} else if (computerSelection == "SCISSORS") {
			playerScore++;
			return "You win! Rock beats Scissors.";
		}
	} else if (playerSelection == "PAPER") {
		if (computerSelection == "ROCK") {
			playerScore++;
			return "You win! Paper Beats Rock.";
		} else if (computerSelection == "PAPER") {
			return "It's a tie!";
		} else if (computerSelection == "SCISSORS") {
			computerScore++;
			return "You lose! Scissors beats Paper.";
		}
	} else if (playerSelection == "SCISSORS") {
		if (computerSelection == "ROCK") {
			computerScore++;
			return "You lose! Rock Beats Scissors.";
		} else if (computerSelection == "PAPER") {
			playerScore++;
			return "You win! Scissors beats Paper.";
		} else if (computerSelection == "SCISSORS") {
			return "It's a tie!";
		}
	} else return "Please enter a valid value.";
}

function game(playerSelection) {
	const element = document.querySelector("#container");
	if (element != null) element.remove();
	const container = document.createElement("div");
	container.setAttribute("id", "container");
	const computerSelection = computerPlay().toUpperCase();
	const paragraph = document.createElement("p");
	const paragraph2 = document.createElement("p");
	const paragraph3 = document.createElement("p");
	const paragraph4 = document.createElement("p");
	paragraph.textContent =
		"You chose " +
		playerSelection.charAt(0).toUpperCase() +
		playerSelection.slice(1).toLowerCase();
	container.appendChild(paragraph);
	paragraph2.textContent =
		"The computer chose " +
		computerSelection.charAt(0).toUpperCase() +
		computerSelection.slice(1).toLowerCase();
	container.appendChild(paragraph2);
	paragraph3.textContent = playRound(playerSelection, computerSelection);
	container.appendChild(paragraph3);
	if (playerScore == 5) {
		playerScore = 0;
		computerScore = 0;
		paragraph4.textContent = "You win the game!";
		container.appendChild(paragraph4);
	} else if (computerScore == 5) {
		playerScore = 0;
		computerScore = 0;
		paragraph4.textContent = "You lose the game!";
		container.appendChild(paragraph4);
	}
	score.textContent = "Player: " + playerScore;
	score2.textContent = "Computer: " + computerScore;
	body.appendChild(container);
}

let computerScore = 0;
let playerScore = 0;

const body = document.querySelector("body");

const content = document.createElement("div");
content.classList.add("content");
const score = document.createElement("p");
score.textContent = "Player: " + playerScore;
content.appendChild(score);
const score2 = document.createElement("p");
score2.textContent = "Computer: " + computerScore;
content.appendChild(score2);
const buttonrock = document.createElement("button");
buttonrock.textContent = "Rock";
buttonrock.addEventListener("click", () => {
	game("ROCK");
});
content.appendChild(buttonrock);
const buttonpaper = document.createElement("button");
buttonpaper.textContent = "Paper";
buttonpaper.addEventListener("click", () => {
	game("PAPER");
});
content.appendChild(buttonpaper);
const buttonscissors = document.createElement("button");
buttonscissors.textContent = "Scissors";
buttonscissors.addEventListener("click", () => {
	game("SCISSORS");
});
content.appendChild(buttonscissors);
body.appendChild(content);
