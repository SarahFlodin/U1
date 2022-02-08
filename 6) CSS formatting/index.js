"use strict";


/*
Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.
*/
document.onload = gridMaker(document.querySelector("#grid"), document.querySelector("#inputRows").value, document.querySelector("#inputCols").value);
window.onload = gridMaker(document.querySelector("#grid"), document.querySelector("#inputRows").value, document.querySelector("#inputCols").value);







  
function createNumberDiv () {

  // Create each numberDiv
  let numberDiv = document.createElement("div");
  numberDiv.innerHTML = randomNumber(100);

  // The eventListener so that it reacts on click
  numberDiv.addEventListener("click", function() {

    // Toggle the selected class
    numberDiv.classList.toggle("selected");


  });

  return numberDiv;

}

document.querySelector("button").addEventListener("click", function () {

  let elementReferens = document.querySelector("#grid");
  let nRows = document.querySelector("#inputRows").value;
  let nCols = document.querySelector("#inputCols").value;

  gridMaker( elementReferens, nRows, nCols );

});





function randomNumber (max) {
  return Math.floor(max * Math.random());
}
 


function gridMaker(gridContainer, R, C) {
  gridContainer.style.display = "grid";

  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  let nTotal = R * C;
  gridContainer.innerHTML = "";
  for (let i = 0; i < nTotal; i++) {
    gridContainer.appendChild( createNumberDiv() );
  }
}

document.querySelector("button").addEventListener("click", function () {

  let elementReferens = document.querySelector("#grid");
  let nRows = document.querySelector("#inputRows").value;
  let nCols = document.querySelector("#inputCols").value;

  gridMaker( elementReferens, nRows, nCols );

});