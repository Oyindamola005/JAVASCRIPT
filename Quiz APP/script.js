const questions = [
  {
      question: "what is thw capital of Lagos State?",
      answer: ["Abuja" , "Abeokuta" , "Ikeja", "Ibadan"],
      correct:2
  },
  {
      question: "When did Nigeria receive her Independence?",
      answer: ["1960" , "1953" , "1900", "1920"],
      correct:0
  },
  {
      question: "What is the captal of Abuja?",
      answer: ["Lagos","Jos","FCT", "Ekiti"],
      correct:2
  },
  {
      question: "what is thw capital of Lagos State?",
      answer: ["Abuja" , "Abeokuta" , "Ikeja", "Ibadan"],
      correct:2
  },
  
];
let firstQeustn=0;
let score =0;
let firstAnswer = [];
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