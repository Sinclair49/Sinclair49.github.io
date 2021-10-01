var name = prompt("What is your name?", "Your Name");
var doing = prompt("How are you doing?", "I'm doing...");
var today = new Date();
document.write("Today is: ");
document.write(today.toDateString());
document.write(", and the time is: ");
document.write(today.toTimeString());
document.write(".");
document.write("  Charming Sloth Hemp wecomes you, ");
document.write(name);
document.write("!");
document.write("  We're glad you are doing " + doing + "!");

function sum() {
    var numOne = prompt("Enter First Number", "First Number");
    var numTwo = prompt("Enter Second Number", "Second Number");

    var intOne = parseInt(numOne);
    var intTwo = parseInt(numTwo);
    var sum = intOne + intTwo;

    alert(sum.toString());
}

function sub() {
    var numOne = prompt("Enter First Number", "First Number");
    var numTwo = prompt("Enter Second Number", "Second Number");

    var intOne = parseInt(numOne);
    var intTwo = parseInt(numTwo);
    var answer = intOne - intTwo;

    alert(answer.toString());
}


function mult() {
    var numOne = prompt("Enter First Number", "First Number");
    var numTwo = prompt("Enter Second Number", "Second Number");

    var intOne = parseInt(numOne);
    var intTwo = parseInt(numTwo);
    var product = intOne * intTwo;

    alert(product.toString());
}


function hotd() {

    alert("Our Hemp of the Day is: Blue Dream");
}


function showprice() {

    alert("Hemp Of The Day current price: $10/gram");
}