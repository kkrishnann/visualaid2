// Set the question set to use here
const selectedSet = 'Interview'; // change this if needed
let questions = window.questionSets[selectedSet];
const backBtn = document.getElementById('back-btn');

const nextBtn = document.getElementById('next-btn');
const questionSection = document.getElementById('question-section');
const questionText = document.getElementById('question-text');
let currentQuestion = 0;

function showQuestion(index) {
  questionText.textContent = '';
  setTimeout(() => {
    questionText.textContent = questions[index];
    // Don't auto-focus the Next button - let user Tab to it naturally
  }, 100);
}

nextBtn.addEventListener('click', () => {
  currentQuestion = (currentQuestion + 1) % questions.length;
  setTimeout(() => {
    showQuestion(currentQuestion);
  }, 500);
});

showQuestion(currentQuestion);

backBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});