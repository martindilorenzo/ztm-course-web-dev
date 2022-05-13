var button = document.getElementById("agregar");
var input = document.getElementById("tarea");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");

function inputLength()  {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var elim = document.createElement("button");
	elim.appendChild(document.createTextNode("eliminar"));
	elim.classList.add("eliminar");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(elim);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

function interaccionLista(element) {
	if (element.target.tagName === "LI") {
		element.target.classList.toggle("hecho");
	}
	else if (element.target.tagName === "BUTTON")  {
		element.target.parentElement.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", interaccionLista);