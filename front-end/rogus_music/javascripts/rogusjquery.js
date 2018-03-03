//SETUP
window.onload = onDocumentLoad;

$(document).ready(function(){
	onDocumentLoad();
});

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
	var total = $("#total").text();
	return moneyTextToFloat(total);
}
function writeTotal(value) {
	$("#total").text(floatToMoneyText(value));
}

//function calculateTotalProducts(){
	
//	totalProdutos = 0;
//	var produtos = $(".produto");
	
//	for (it =0; it < produtos.length; it ++){
	
		// retrieve value using jquery lib
//		var priceNum = moneyTextToFloat(($(produtos[it])).find(".price").text());

		// retrieve value using jquery lib
//		var quantityNum = moneyTextToFloat(($(produtos[it])).find(".quantity").val());
		
		// build the total
//		totalProdutos +=(priceNum * quantityNum);

//	}
//	return totalProdutos;
//}

function calculateTotalProducts(){
	
	totalProducts = 0;
	var produtos = $(".produto");
	
	$(produtos).each(function(pos, produto){
		var quantity = moneyTextToFloat($(produto).find(".quantity").val());
		var price = moneyTextToFloat($(produto).find(".price").text());
		
		totalProducts += (quantity*price);
		
	});
	
	return totalProducts;
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
	
	$(".quantity").change(function (){
		writeTotal(calculateTotalProducts())}
		);
	
	//for (var i =0; i < editText.length; i ++) {
	//	editText[i].onchange = function(){
	//		writeTotal(calculateTotalProducts());
	//	};
	//}
}
 