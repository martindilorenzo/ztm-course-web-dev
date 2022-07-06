var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

setGradient();

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+  ")";

	css.textContent = body.style.backgroundImage + ";";
}

function randomRgb() {
	var a = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var c = Math.floor(Math.random() * 256);
	return "rgb(" + a + "," + b + "," + c + ")";
}

function setGradientRandom() {
	body.style.background = "linear-gradient(to right, "
	+ randomRgb()
	+ ", "
	+ randomRgb()
	+ ")"; 
	css.textContent = body.style.backgroundImage + ";";
}

random.addEventListener("click", setGradientRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Tambien se puede usar atributo onclick=setGradient() en la etiqueta html input
//Tambien se puede usar oninput=setGradient()
