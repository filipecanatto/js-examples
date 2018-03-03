//SETUP
window.onload = onDocumentLoad;

//document.addEventListener("DOMContentLoaded", function(event) {
//  onDocumentLoad();
//});

//VARIABLES DECLARATIONS
var totalProdutos;


// FUNCTIONS

// convert a text to number
function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

// convert a number to text
function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
	var total = document.getElementById("total");
	return moneyTextToFloat(total.innerHTML);
}
function writeTotal(value) {
	var total = document.getElementById("total");
	total.innerHTML = floatToMoneyText(value);
}

function calculateTotalProducts(){
	
	totalProdutos = 0;
	var produtos = document.getElementsByClassName("produto");
	
	for (it =0; it < produtos.length; it ++){
	
		// get price
		var priceArray = produtos[it].getElementsByClassName("price");
		var priceNum = moneyTextToFloat(priceArray[0].innerHTML);
		
		// get quantity
		var quantityArray = produtos[it].getElementsByClassName("quantity");
		var quantityNum = moneyTextToFloat(quantityArray[0].value);
		
		// build the total
		totalProdutos = totalProdutos + (priceNum * quantityNum);
		
		// log
		//console.log(priceNum);
		//console.log(quantityNum);
	}
	return totalProdutos;
}

function quantityWasChanged(){
	writeTotal(calculateTotalProducts());
}

//function onDocumentLoad(){
//	var editText = document.getElementsByClassName("quantity");
//
//	for (var i =0; i < editText.length; i ++) {
//		editText[i].onchange = quantityWasChanged;
//	}
//}

function onDocumentLoad(){
	var editText = document.getElementsByClassName("quantity");

	for (var i =0; i < editText.length; i ++) {
		editText[i].onchange = function(){
			writeTotal(calculateTotalProducts());
		};
	}
}
 