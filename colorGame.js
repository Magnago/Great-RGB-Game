var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("h1 span");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var playAgain = document.querySelector("#playAgain");
var gameOver = false;

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor == pickedColor)
		{
			for (var j = 0; j < squares.length; j++)
			{
				squares[j].style.backgroundColor = pickedColor;
			}
			displayMessage.textContent = "Correct!";
			h1.style.backgroundColor = pickedColor;
			gameOver = true;
			playAgain.textContent = "Play Again";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			displayMessage.textContent = "Try again!";
		}
	});

	playAgain.addEventListener("click", function() {
		if (!gameOver)
		{
			colors = generateRandomColors(6);
			pickedColor = pickColor();

			for (var i = 0; i < squares.length; i++)
			{
				squares[i].style.backgroundColor = colors[i];
			}
			colorDisplay.textContent = pickedColor;
		}
		else
		{
			playAgain.textContent = "New Colors";
			gameOver = false;

			colors = generateRandomColors(6);
			pickedColor = pickColor();
			h1.style.backgroundColor = "steelblue";

			for (var i = 0; i < squares.length; i++)
			{
				squares[i].style.backgroundColor = colors[i];
			}
			colorDisplay.textContent = pickedColor;			
		}
	});
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	console.log(Math.random(), colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];

	for (var i = 0; i < num; i++)
	{ 
		arr[i] = "rgb(" + Math.floor(Math.random() * 256) + ", " 
				+ Math.floor(Math.random() * 256) + ", "  
				+ Math.floor(Math.random() * 256) + ")";
	}

	return arr;
}
