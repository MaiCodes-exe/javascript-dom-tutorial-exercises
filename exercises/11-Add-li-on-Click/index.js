let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let element = document.createElement("li");
	document.querySelector("#myList").appendChild(element);
});
