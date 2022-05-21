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

function game(playerSelection) {
	const element = document.querySelector("#container");
	if (element != null) element.remove();
	const container = document.createElement("div");
	container.setAttribute("id", "container");
	const computerSelection = computerPlay().toUpperCase();
	const paragraph = document.createElement("p");
	const paragraph2 = document.createElement("p");
	const paragraph3 = document.createElement("p");
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
	body.appendChild(container);
}

const body = document.querySelector("body");

const content = document.createElement("div");
content.classList.add("content");
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
