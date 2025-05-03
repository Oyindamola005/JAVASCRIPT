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
    {
        question: "What is the captal of Abuja?",
        answer: ["Lagos","Jos","FCT", "Ekiti"],
        correct:2
    }
    
];
let firstQeustn=0;
let score =0;
let firstAnswer = new Array(questions.lenght).fill(null);
const question1 = document.getElementById("question");
const answer1 =document.getElementById("answer");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById ("previous");

function newQuestions(index){
    const q = questions [index];
    question1.textcontent=q.question;
    answersEl.innerHTML = q.answer.map((ans, i) => `
    <li>
      <label>
        <input type="checkbox" name="answer" value="${i}" class="check"
          ${selected[index] === i ? "checked" : ""}>
        ${ans}
      </label>
    </li>
  `).join("");
  document.querySelectorAll('input[name="answer"]').forEach(input => {
    input.addEventListener("change", (e) => {
      document.querySelectorAll('input[name="answer"]').forEach(box => {
        if (box !== e.target) box.checked = false;
      });
    });
  });
}
nextButton.addEventListener("click", () => {
    const selected = getfirstAnswer()
  
    if (selected === null) {
      alert("Please select an answer.");
      return;
    }
   firstAnswer[firstQeustn] = selected;

  firstQeustn++;

  if (firstQeustn < questions.length) {
    renderQuestion(firstQeustn);
} else {
    // Calculate score
   firstAnswer.forEach((ans, i) => {
      if (ans === questions[i].correct) score++;
    });
    document.querySelector(".quiz_container").innerHTML = `
      <h2>Quiz Completed</h2>
      <p>You scored ${score} out of ${questions.length}.</p>
    `;
  }
});
previousButton.addEventListener("click",() => {
    if (firstQeustn > 0) {
        firstQeustn--;
        renderQuestion(firstQeustn);
    }
    });
