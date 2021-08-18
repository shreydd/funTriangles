const inputs = document.querySelectorAll('.angle-input');
const isTrianglebtn = document.querySelector("#is-triangle-btn");
const output1 = document.querySelector('#output');

function calSumOfAngles(angle1, angle2, angle3){
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calSumOfAngles( Number(inputs[0].value),Number( inputs[1].value), Number(inputs[2].value) );
  if(sumOfAngles === 180){
    output.innerText = "They form a triangle";
  }else{
    output.innerText = "They do not form a triangle";
  }
}

isTrianglebtn.addEventListener('click', isTriangle);