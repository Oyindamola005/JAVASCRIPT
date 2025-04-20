let Score = prompt("Enter your score");
Score = parseFloat(Score);
if ( Score >=70){
    alert("Congratuations, you are a unicorn🦄");
}
else if (Score >=50 && Score < 69){
    alert("Keep the fire burning 🔥🔥, you are do better next time");
}
else if (Score>=40 && Score <50){
    alert("You need improvement 🤌🤌, Keep believing in your self");
}
else {
    alert("You need serious Punishment 😠💢🤬");
}
