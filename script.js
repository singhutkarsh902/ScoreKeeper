var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var p1Score=0;
var p2Score=0;
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var limit = 5;
var gameOver = false;
var limitDisplay = document.querySelector("#limit");

p1.addEventListener("click",function() {
	if (!gameOver) {
	p1Score++;
	p1display.textContent = p1Score;
	}
	if (p1Score == limit) {
		gameOver = true;
		p1display.style.color = "green";
	}
})

p2.addEventListener("click",function() {
	if (!gameOver) {
	p2Score++;
	p2display.textContent = p2Score;
	}
	if (p2Score == limit) {
		gameOver = true;
		p2display.style.color = "green";
	}
})

reset.addEventListener("click",function() {
	p2Score=0;
	p1Score=0;
	p2display.textContent = p2Score;
	p1display.textContent = p1Score;
	gameOver = false;
	p1display.style.color = "black";
	p2display.style.color = "black";
})

numInput.addEventListener("change",function() {
	limit = numInput.value;
	limitDisplay.textContent = limit;
	p2Score=0;
	p1Score=0;
	p2display.textContent = p2Score;
	p1display.textContent = p1Score;
	gameOver = false;
	p1display.style.color = "black";
	p2display.style.color = "black";
})