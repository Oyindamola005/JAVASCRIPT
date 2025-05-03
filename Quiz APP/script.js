
const question = [
    {
        questiona:"what is thw capital of Lagos State?",
        answer: ["Abuja" , "Abeokuta" , "Ikeja", "Ibadan"],
        correct:2
    },
    {
        questionb:"When did Nigeria receive her Independence?",
        answer: ["1960" , "1953" , "1900", "1920"],
        correct:0
    },
    {
        questionc:"What is the captal of Abuja?",
        answer: ["Lagos","Jos","FCT", "Ekiti"],
        correct:2
    },
    {
        questiond:"what is thw capital of Lagos State?",
        answer: ["Abuja" , "Abeokuta" , "Ikeja", "Ibadan"],
        correct:2
    },
    {
        questione:"What is the captal of Abuja?",
        answer: ["Lagos","Jos","FCT", "Ekiti"],
        correct:2
    }
    
];
let firstQeustn=0;
let score =0;
let firstAnswer = new Array(question.lenght).fill([]);
const question1 = document.getElementById("question");
const answer1 =document.getElementById("answer");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById ("previous");

function newQuestions(index)
{
    const q = question [index];
    question1.textcontent=q.questiona;
    answer1.innerHTML =`
     <ul>
    ${q.answer.map((ans, i) => `
      <li>
        <label>
          <input type="checkbox" class="check" value="${i}"
            ${firstAnswer[index].includes(i) ? "checked" : ""}>
          ${ans}
        </label>
      </li>
    `).join("")}
  </ul>
`;

document.querySelectorAll('.check').forEach(input => {
    input.addEventListener("change", () => {
      const selected = Array.from(document.querySelectorAll('.check'))
        .filter(box => box.checked)
        .map(box => parseInt(box.value));
      firstAnswer[firstQeustn]= selected;
    });
  });
}
  function calculateScore() {
  let score = 0;
 firstAnswer.forEach((selected, i) => {
    const correct = question[i].correct;
    if (
      selected.length === correct.length &&
      selected.every(val => correct.includes(val))
    ) {
      score++;
    }
  });
  return score;
}

nextButton.addEventListener("click", () => {
    if (firstAnswer[firstQeustn].length===0){
      alert("Please select an answer.");
      return;
    }
  firstQeustn++;

  if (firstQeustn < question.length) {
    newQuestions(firstQeustn);
} else {

   const score = calculateScore();
    document.querySelector(".quiz_container").innerHTML = `
      <h2>Quiz Completed</h2>
      <p>You scored ${score} out of ${questions.length}.</p>
      `;
  }
});
previousButton.addEventListener("click",() => {
    if (firstQeustn > 0) {
        firstQeustn--;
        newQuestions(firstQeustn);
    }
    });

    newQuestions(firstQeustn);
