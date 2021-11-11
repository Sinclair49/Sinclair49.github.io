var person = ["Ki-Adi Mundi", "John Wick", "Marcellus Wallace", "Din Djarin"];
var salary = [10000, 20000, 120000, 10000]; 

function addSalary() {
var validEntry = true;
var personName=prompt("Enter a Name: ");
if (personName=="") {
validEntry=false;
      alert("Invalid Entry");
    }
var personSalary=parseInt(prompt("Enter a Salary: "));
 if (isNaN(personSalary)) {
validEntry=false;
      alert("Invalid Entry");
    }
	if(validEntry){
person.push(personName);
salary.push(personSalary);
}
}

function displayResults() {
	var meanSalary = 0;
	var maxSalary = 0;
	var meanElement=document.createElement("h2");
	var maxElement=document.createElement("p");
	var results=document.getElementById("results");
	results.innerHTML="";
	 for (let i=0; i<salary.length; i++) {
        meanSalary += salary[i];
        if(maxSalary < salary[i]) {
            maxSalary = salary[i];
        }
    }
   meanSalary = meanSalary/salary.length;	
	var meanNode = document.createTextNode("Average Salary: " + String(meanSalary));
	meanElement.appendChild(meanNode);
	results.appendChild(meanElement);
	var maxNode = document.createTextNode("Max Salary: " + String(maxSalary));
	maxElement.appendChild(maxNode);
	results.appendChild(maxElement);
}

function displaySalary() { 
var results_table=document.getElementById("results_table");
	results_table.innerHTML="";
var tableHead=document.createElement("thead");
var headRow=document.createElement("tr");
var headName=document.createElement("th");
var titleName = document.createTextNode("Name");
var headSalary=document.createElement("th");
var titleSalary = document.createTextNode("Salary");
headName.appendChild(titleName);
headSalary.appendChild(titleSalary);
headRow.appendChild(headName);
headRow.appendChild(headSalary);
tableHead.appendChild(headRow);
results_table.appendChild(tableHead);


for(let i=0; i<person.length; i++){
var tableRow=document.createElement("tr");
var tableName=document.createElement("td");
var nameNode = document.createTextNode(person[i]);
var tableSalary=document.createElement("td");
var salaryNode = document.createTextNode(salary[i]);
tableName.appendChild(nameNode);
tableSalary.appendChild(salaryNode);
tableRow.appendChild(tableName);
tableRow.appendChild(tableSalary);
results_table.appendChild(tableRow);
}
} 		