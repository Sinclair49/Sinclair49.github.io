var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers

};
function updateCalorie() {
    var day = document.getElementsByName("day");
    var calorie = document.getElementById("calories").value;
	var index = 0;
	for(var i=0; i<7; i++) {
		if(day[i].checked==true)
		{index=i;
	break;
		}
	}

    if(calorie =='') {
        alert("Enter a valid number")
    }
    else {
        calories[index]  = calorie;
        alert("Your updated Calories details are: " + calorie + " Calories on " + days[index])
    }
}
function showAverageCalories() {
    var avg = 0;
    for(var i=0; i<calories.length; i++) {
        avg += parseInt(calories[i]);
    }
    avg /= 7;

    document.getElementById('avgCalories').value = avg;
    document.getElementById('avgCalories').style.color = 'green';
    document.getElementById('avgCalories').style.backgroundColor = 'transparent';
}
function showMax() {
    var max = document.getElementById("result_here");
var maxVal=0;
  var maxIndex=0;

    max.innerHTML = "Max Cheat Day";
   for(var i=0; i<calories.length; i++) {
        if(maxVal<parseInt(calories[i])){
			maxVal=parseInt(calories[i]);
			maxIndex=i;
    }
   }
     max.innerHTML = "Your maximum consumed calories is " + maxVal + " on " + days[maxIndex] + ".";
    
}