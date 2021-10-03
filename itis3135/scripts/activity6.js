var entry = parseInt(prompt("The Charming Sloth would like your number (from 1 to 10)"));

while (!validateEntry(entry)) {

    entry = parseInt(prompt("Invalid entry: please enter a number from 1 to 10"));

}
var absval = Math.abs(entry);
var temp = Math.round(absval);
getShape(temp);

function validateEntry(entry) {
    if (isNaN(entry)) {

        return false;
    }
    var absval = Math.abs(entry);
    var temp = Math.round(absval);

    if (temp < 0 || temp > 10) {
        return false;
    }
    return true;
}

function getShape(side) {
    if (side == 0) {
        alert("No sides, not a polygon!");
    }
    if (side == 1) {
        alert("henagon");
    }

    if (side == 2) {
        alert("digon");
    }

    if (side == 3) {
        alert("trigon");
    }

    if (side == 4) {
        alert("tetragon");
    }

    if (side == 5) {
        alert("pentagon");
    }

    if (side == 6) {
        alert("hexagon");
    }

    if (side == 7) {
        alert("heptagon");
    }

    if (side == 8) {
        alert("octagon");
    }

    if (side == 9) {
        alert("enneagon");
    }

    if (side == 10) {
        alert("decagon");
    }
}