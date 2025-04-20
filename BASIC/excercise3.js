let Age = prompt ("enter your name");
if (Age >= 18){
    alert("Congratulations, you are eligible, Proceed to cast your vote");
}
else {
    let RemaingYears = 18 - Age
    alert("Sorry, you are not eligible, come back in " + RemaingYears + "  years");
}
