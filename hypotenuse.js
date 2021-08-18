const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const hypotenuseOutput = document.querySelector('#hypo-output');

function calSumOfSquares(a, b){
  const sumOfSquares = a*a + b*b;
  return sumOfSquares;
}

function calHypotenuse() {
  const sumOfSquares = calSumOfSquares(Number(sides[0].value), Number(sides[1].value));
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  console.log(lengthOfHypotenuse);
  hypotenuseOutput.innerText = "the length of the hypotenuse " + lengthOfHypotenuse+"cm";
}

hypotenuseBtn.addEventListener('click', calHypotenuse);