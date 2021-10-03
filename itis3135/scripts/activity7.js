var prevCalc = 0;
var calc = "";

window.onload = function() {
    document.getElementById('0').onclick = showNumber;
    document.getElementById('1').onclick = showNumber;
    document.getElementById('2').onclick = showNumber;
    document.getElementById('3').onclick = showNumber;
    document.getElementById('4').onclick = showNumber;
    document.getElementById('5').onclick = showNumber;
    document.getElementById('6').onclick = showNumber;
    document.getElementById('7').onclick = showNumber;
    document.getElementById('8').onclick = showNumber;
    document.getElementById('9').onclick = showNumber;
    document.getElementById('Decimal').onclick = showNumber;
    document.getElementById('Plus').onclick = add;
    document.getElementById('Minus').onclick = subtract;
    document.getElementById('Times').onclick = multiply;
    document.getElementById('Divide').onclick = divide;
    document.getElementById('Clear').onclick = clear;
    document.getElementById('Calc').onclick = calculate;
}


function showNumber() {
    document.frmCalc.txtNumber.value += this.value;
}



function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = Math.round(num);
        document.frmCalc.txtNumber.value = num;
    }
}

function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Add";
    }
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Subtract";
    }
}


function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multiply";
    }
}

function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}


function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        if (calc == "Add") {
            var total = prevCalc + num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "Subtract") {
            var total = prevCalc - num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "Multiply") {
            var total = prevCalc * num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "Divide") {
            var total = prevCalc / num;
            document.frmCalc.txtNumber.value = total;
        }

    }
}

function clear() {
    document.frmCalc.txtNumber.value = "";
    prevCalc = 0;
    calc = "";
}
var prevCalc = 0;
var calc = "";

window.onload = function() {
    document.getElementById('0').onclick = showNumber;
    document.getElementById('1').onclick = showNumber;
    document.getElementById('2').onclick = showNumber;
    document.getElementById('3').onclick = showNumber;
    document.getElementById('4').onclick = showNumber;
    document.getElementById('5').onclick = showNumber;
    document.getElementById('6').onclick = showNumber;
    document.getElementById('7').onclick = showNumber;
    document.getElementById('8').onclick = showNumber;
    document.getElementById('9').onclick = showNumber;
    document.getElementById('Decimal').onclick = showNumber;
    document.getElementById('Plus').onclick = add;
    document.getElementById('Minus').onclick = subtract;
    document.getElementById('Times').onclick = multiply;
    document.getElementById('Divide').onclick = divide;
    document.getElementById('Clear').onclick = clear;
    document.getElementById('Calc').onclick = calculate;
}


function showNumber() {
    document.frmCalc.txtNumber.value += this.value;
}



function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = Math.round(num);
        document.frmCalc.txtNumber.value = num;
    }
}

function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Add";
    }
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Subtract";
    }
}


function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multiply";
    }
}

function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}


function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        if (calc == "Add") {
            var total = prevCalc + num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "Subtract") {
            var total = prevCalc - num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "Multiply") {
            var total = prevCalc * num;
            document.frmCalc.txtNumber.value = total;
        }
        if (calc == "Divide") {
            var total = prevCalc / num;
            document.frmCalc.txtNumber.value = total;
        }

    }
}

function clear() {
    document.frmCalc.txtNumber.value = "";
    prevCalc = 0;
    calc = "";
}