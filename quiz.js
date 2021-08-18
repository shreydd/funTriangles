const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const quizOutput = document.querySelector('#quiz-output');

const correctAnswers = ['90°','right-angled'];

function calScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for(let value of formResults.values()){
    if(value === correctAnswers[index]){
      score = score + 1; //the answer is right
    }
    index = index + 1; //the answer need not be right, but has to iterate through
  }
  // console.log(score);
  quizOutput.innerText = 'Your score is ' + score;
}

submitAnswerBtn.addEventListener('click', calScore);