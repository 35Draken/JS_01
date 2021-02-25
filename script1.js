$(document).ready(function() {
	let name = "";
	while(name == "") {
	  name = prompt("Wesh c koi ton nom?");
	}
	let output = `Salam ${name} !!`
	console.log(output);
	document.getElementById("demo").textContent += output;
});