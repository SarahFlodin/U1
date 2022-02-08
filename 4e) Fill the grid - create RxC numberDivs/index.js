"use strict";


/*
We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".
You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?
VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer
*/



// TEST
gridMaker(
  document.querySelector("#grid"),
  4,
  6
);


function createNumberDiv () {

  // Create each numberDiv
  let numberDiv = document.createElement("div");
  numberDiv.innerHTML = randomNumber(100);

  return numberDiv;

}
function gridMaker (gridContainer, R, C) {

  // Update the CSS properties to give the grid the correct dimensions
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;


  // Fill the container with divs

  // WITH NESTED LOOPS
  // A loop for the C columns
  // for (let c = 0; c < C; c++) {

 NESTED: // nested loops fungerar på det sättet att den första loopen itereras en gång och sedan itereras den inre loopen 
// den inre loopen itereras tills den uppnåt alla inkrement för att den första loopen sedan ska itereras igen
// den yttre loopen skapar en column och den inre loopen skapar alla raderna och dess innehåll för just denna column

  //   // For each column we need to create R rows
  //   for (let r = 0; r < R; r++) {
  //     gridContainer.appendChild( createNumberDiv() );
  //   }

  // }
  
  VANLIG: // jag reserverar en plats på minnet för nTotal som har värdet av rows * columns som i detta fallet ger resultatet 24
  // i min for-loop meddelar jag att vi ska starta på 0 (i=0) och fortsätta loopen tills vi når 24 (i<nTotal(24))
  // och varje loop som körs ska det plusas på 1 på resultatet (i++)
  // innuti loopen meddelar jag att den ska skapa ett element, i detta fallet en div som jag meddelat i 
  // function createNumberDiv och att detta element ska läggas till i föräldern (gridContainer)
  // för att skapa siffrorna i elementen har jag deklarerat detta genom (numberDiv.innerHTML) och där meddelat att 
  // det ska vara ett random nummer mellan 0 till 99

  // WITH ONE LOOP
  let nTotal = R * C;
  for (let i = 0; i < nTotal; i++) {
    gridContainer.appendChild( createNumberDiv() );
  }

}
function randomNumber (max) {
  return Math.floor(max * Math.random());
}

