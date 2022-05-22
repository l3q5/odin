const script = document.createElement("script");
script.type = "text/javascript";
const css = document.createElement("link");
css.rel = "stylesheet";
css.type = "text/css";

function dom() {
	script.src = "javascript/basics/DOM.js";
	document.getElementsByTagName("body")[0].replaceChildren();
	document.getElementsByTagName("head")[0].replaceChildren(script);
}
function fizzBuzz() {
	script.src = "javascript/basics/FizzBuzz.js";
	document.getElementsByTagName("body")[0].replaceChildren();
	document.getElementsByTagName("head")[0].replaceChildren(script);
}
function rps() {
	script.src = "javascript/basics/RockPaperScissors.js";
	document.getElementsByTagName("body")[0].replaceChildren();
	document.getElementsByTagName("head")[0].replaceChildren(script);
}
function rpsgui() {
	script.src = "javascript/basics/RockPaperScissorsGUI.js";
	document.getElementsByTagName("body")[0].replaceChildren();
	document.getElementsByTagName("head")[0].replaceChildren(script);
}
function etchASketch() {
	script.src = "javascript/basics/EtchASketch.js";
	css.href = "javascript/basics/EtchASketch.css";
	document.getElementsByTagName("body")[0].replaceChildren();
	document.getElementsByTagName("head")[0].replaceChildren(css, script);
}
