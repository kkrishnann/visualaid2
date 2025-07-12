// Set the question set to use here
const selectedSet = 'Interview'; // change this if needed
let questions = window.questionSets[selectedSet];

//const interviewBtn = document.getElementById('interview-btn');
//const grammarBtn = document.getElementById('grammar-btn');
const nextBtn = document.getElementById('next-btn');
const questionSection = document.getElementById('question-section');
const questionText = document.getElementById('question-text');
//const welcomeMessage = document.getElementById('welcome-message');
//const grammarWelcMessage = document.getElementById('grammar-message');

let currentQuestion = 0;

function showQuestion(index) {
  questionText.textContent = '';
  setTimeout(() => {
    questionText.textContent = questions[index];
    // Don't auto-focus the Next button - let user Tab to it naturally
  }, 100);
}

//interviewBtn.addEventListener('click', () => {
//  welcomeMessage.style.display = 'none';
//  interviewBtn.style.display = 'none';
//  questionSection.style.display = 'block';
//  grammarBtn.style.display = 'none'
//  grammarWelcMessage.style.display = 'none'
//  currentQuestion = 0;
//  setTimeout(() => {
//    showQuestion(currentQuestion);
//  }, 500);
//});

nextBtn.addEventListener('click', () => {
  currentQuestion = (currentQuestion + 1) % questions.length;
//  showQuestion(currentQuestion);
  setTimeout(() => {
    showQuestion(currentQuestion);
  }, 500);
});

//grammarBtn.addEventListener('click', () => {
//  window.location.href = 'grammar.html';
//});

showQuestion(currentQuestion);
