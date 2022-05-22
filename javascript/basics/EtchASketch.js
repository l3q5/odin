const body = document.querySelector("body");
const topbar = document.createElement("div");
topbar.classList.add("topbar");
const input = document.createElement("input");
input.setAttribute("placeholder", "Max: 100");
input.setAttribute("id", "input");
topbar.appendChild(input);
const button = document.createElement("button");
button.textContent = "Generate grid";
button.addEventListener("click", () => {
	if (
		document.getElementById("input").value <= 100 &&
		document.getElementById("input").value > 0
	)
		generateGrid(document.getElementById("input").value);
	else alert("Please enter a valid value between 1-100.");
});
topbar.appendChild(button);
const container = document.createElement("div");
container.classList.add("container");
const row = [];
const column = [];
function generateGrid(size) {
	container.replaceChildren();
	for (let j = 0; j < size; j++) {
		row[j] = document.createElement("div");
		row[j].classList.add("row");
		for (let i = 0; i < size; i++) {
			column[i] = document.createElement("div");
			column[i].classList.add("col");
			row[j].appendChild(column[i]);
		}
		container.appendChild(row[j]);
	}
	const columns = document.querySelectorAll(".col");
	columns.forEach((div) => {
		div.addEventListener("mouseover", function (e) {
			e.target.style.background = "red";
		});
	});
}
body.appendChild(topbar);
body.appendChild(container);
