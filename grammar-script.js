const continueBtn = document.getElementById('continue-btn');
const backBtn = document.getElementById('back-btn');
const questionText = document.getElementById('grammar-question-text');

let currentQuestion = 0;

function showQuestion(index) {
  questionText.textContent = window.grammarQuestions[index].question;
}

function showAnswerAndNextQuestion(currentIndex, nextIndex) {
  const answer = window.grammarQuestions[currentIndex].answer;
  const nextQuestion = window.grammarQuestions[nextIndex].question;
  
  // Clear the text first to ensure screen reader detects the change
  questionText.textContent = '';
  setTimeout(() => {
    questionText.textContent = answer + '.\n\n Next Question. ' + nextQuestion;
    // Move focus to the continue button after content is updated
    continueBtn.focus();
  }, 100);
}

// Initialize with first question
showQuestion(currentQuestion);

continueBtn.addEventListener('click', () => {
  // Always show answer to current question and next question
  const nextQuestion = (currentQuestion + 1) % window.grammarQuestions.length;
  showAnswerAndNextQuestion(currentQuestion, nextQuestion);
  currentQuestion = nextQuestion;
});

backBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
}); 