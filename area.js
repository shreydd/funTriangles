const sidesValues = document.querySelectorAll('.bh-input');
const areaOutput = document.querySelector('#area-output')
const areabtn = document.querySelector('#area-button');

function computeArea() {
  let calArea = Number(sidesValues[0].value) * Number(sidesValues[1].value);
  calArea = 0.5 * calArea;
  areaOutput.innerText = "The area of the triangle is "+ calArea +"cm²";
}

areabtn.addEventListener('click', computeArea);