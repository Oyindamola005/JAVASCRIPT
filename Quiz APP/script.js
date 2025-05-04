const questions = [
  {
      question1: "what is thw capital of Lagos State?",
      answer1: ["Abuja" , "Abeokuta" , "Ikeja", "Ibadan"],
      correct:2
  },
  {
      question2: "When did Nigeria receive her Independence?",
      answer2: ["1960" , "1953" , "1900", "1920"],
      correct:0
  },
  {
      question3: "What is the captal of Abuja?",
      answer3: ["Lagos","Jos","FCT", "Ekiti"],
      correct:2
  },
  {
      question4: "what is thw capital of Lagos State?",
      answer4: ["Abuja" , "Abeokuta" , "Ikeja", "Ibadan"],
      correct:2
  },
  
];
let firstQeustn=question1;
let score =0;
let firstAnswer = answer1;
const question1 = document.getElementById.innerHTML("question");
const answer1 =document.getElementById.innerHTML("answer");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById ("previous");

nextButton.addEventListener("click", function () {


  if (selected === null) {
    alert("Please select an answer.");
    return;
  }
firstQeustn++;

if (firstQeustn < questions.length) {
  questions(firstQeustn);
} else {

 const score = calculateScore();
  document.querySelector(".quiz_container").innerHTML = `
    <h2>Quiz Completed</h2>
    <p>You scored ${score} out of ${questions.length}.</p>
    `;
}
});
previousButton.addEventListener("click",function () {
  if (firstQeustn > 0) {
      firstQeustn--;
      questions(firstQeustn);
  }
  });