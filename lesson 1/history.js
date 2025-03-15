const forwardButton = document.querySelector(".forwardButton");
const backButton = document.querySelector(".backButton");

backButton.addEventListener("click", (event) => {
	window.history.back();
});

forwardButton.addEventListener("click", (event) => {
	window.history.forward();
});
