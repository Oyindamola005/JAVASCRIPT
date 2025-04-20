let Randomnumber =prompt("Guess the number");
Randomnumber =parseInt(Randomnumber);
let  newrandom = Math.floor(Math.random()*5)+1;
if (Randomnumber==newrandom){
    alert("You are a star🌟🌟🌟🌟🌟🌟");
}
else{
    alert("Oops, you are almost there ↕️↕️↕️↕️ but the correct number is " + newrandom);
}

