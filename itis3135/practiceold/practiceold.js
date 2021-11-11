var items = ["Espresso", "Cappuccino"];
var costs = ["1.95", "3.45"];
var details = ["Delicious espresso.  Wanna try it?", "Delicious Cappuccino!"];
var orderTotal = 0;
var orderItems;

window.onload=function() {
	var a = document.getElementsByTagName(qualifiedName: "IMG");
	for (var i = 0; i < a.length; i++) {
		a[i].onclick = clickPic;
		console.log(a[i]);
	}
	}
	var clickPic = function () {
		var image = this.id;
		console.log(image);
		for (i=0; i<items.length; i++) {
			if (image == items[i]){
				itemCost = costs[i];
				itemName = items[i];
				itemDetails = details[i];
				document.getElementById(elementId: "order").innerHTML+= "$" + itemCost + " - " + itemName+ " - " + itemDetails+ "<br>";
				orderTotal += parseFloat{itemCost);
				document.getElementbyId(elementId: "total").innerHTML = "Total: $" + orderTotal.toFixed(fractionDigits: 2);
				}
			}
		}
		;