const taskList = document.getElementById("taskList");
const clearEl = document.querySelector(".clear-button");

taskList.addEventListener("click", (event) => {
	if (event.target.classList.contains("delete-button")) {
		const taskItem = event.target.closest("li");
		taskItem.remove();

		localStorage.setItem("taskList", taskList.innerHTML);
	}

	if (event.target.classList.contains("clone-button")) {
		const taskItem = event.target.closest("li");
		const clonnedTaskItem = taskItem.cloneNode(true);
		taskItem.after(clonnedTaskItem);

		localStorage.setItem("taskList", taskList.innerHTML);
	}
});

if (localStorage.getItem("taskList")) {
	taskList.innerHTML = localStorage.getItem("taskList");
}

clearEl.addEventListener("click", function (e) {
	localStorage.clear();
	location.reload();
	console.log("Я нажимаю кнопку рефреш");
});
