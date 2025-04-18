let firstnumber = prompt("enter first number");
let operator =prompt("enter operator (+, -, *, /)")
let secondnumber = prompt("enter second number");
firstnumber = parseFloat(firstnumber);
secondnumber = parseFloat(secondnumber);
let result;
if (operator == "+") {
    result = firstnumber + secondnumber;
    alert("Result is: " + result);
}
else if (operator == "-") {
    result = firstnumber - secondnumber;
    alert("Result is: " + result);
    
}
else if (operator == "*") {
    result = firstnumber * secondnumber;
    alert("Result is: " + result);
}
else if (operator == "/") {
    result = firstnumber / secondnumber;
    alert("Result is: " + result);
}
else { alert ("invalide operator");}