const body = document.querySelector("body");
const br = document.createElement("br");

const content = document.createElement("div");
content.classList.add("content");
const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey i'm red!";
content.appendChild(paragraph);
const header = document.createElement("h3");
header.style.color = "blue";
header.textContent = "i'm a blue h3!";
content.appendChild(header);

const container = document.createElement("div");
container.classList.add("container");
container.style.border = "1em solid black";
container.style.backgroundColor = "pink";
const header2 = document.createElement("h1");
header2.textContent = "i'm in a div!";
container.appendChild(header2);
const paragraph2 = document.createElement("p");
paragraph2.textContent = "Me too!";
container.appendChild(paragraph2);
content.appendChild(container);

const container2 = document.createElement("div");
container2.classList.add("container2");
container2.appendChild(br);
const button = document.createElement("button");
button.textContent = "Click Me";
function alertFunction(text) {
	alert(text);
}
button.addEventListener("click", () => {
	alertFunction("bruh");
});
container2.appendChild(button);
const button2 = document.createElement("button");
button2.textContent = "Click Me";
button2.addEventListener("click", function (button) {
	button.target.style.background = "blue";
});
container2.appendChild(button2);
content.appendChild(container2);

body.appendChild(content);
