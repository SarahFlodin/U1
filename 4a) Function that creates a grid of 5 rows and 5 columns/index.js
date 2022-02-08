"use strict";


/*

The console is quite powerful
You can for instance call a function that you have defined
in your JS-file from the console. Check the video.

*/

function testConsole (p1) { 
  document.querySelector("body").style.backgroundColor = p1;
}


/*

Exercise
Code a function F25 that fills a 5x5 grid with random numbers.
F25 must take one parameter: container. This is the reference to the HTML-element
that is the grid to which all the random numbers will be appended.

We have already done something like this in a previous exercise (Lektion 3, 4a).
You need however to place it in a function and you need to use the parameter
when appending the numbers (the divs that contain the numbers) to the gridContainer.

Test the function by calling it from the console.


VIDEO:  Record a video where you explain how F25 works line by line. Max 3 minutes.
        This video must be called F25Explanation.
        The video must also show how you call F25 from the console.

*/

function F25 (container) { //deklarerar en funktion som heter F25 med parametern container

  for ( let i = 0; i < 25; i++ ) { //skapar loop där countern börjar på 0, och inkrementerar +1 för varje iteration, detta görs 
    // tills villkoren uppfylls (så länge i är mindre än 25) 
    let gridContainer = document.querySelector(container); // let reserverar plats på minnet, deklarerar variabeln conatiner för function call 
    let div = document.createElement( "div" ); //skapar en div som reserveras på en plats som vi ger variabeln div
    div.innerHTML = Math.floor(Math.random() * 100); //berättar att variabeln div ska ha ett innehåll (innerHTML), alltså vad som ska stå i diven, 
    //alltså math vilket säger att den får en random siffra i varje box som man gångar med 100, floor är heltal
  
    gridContainer.appendChild( div ); //säger att våra 25 divar som vi skapat är barn och ska finnas på föräldern som är gridContainer
  
  }
}

F25("#gridContainer") //kallar på den, gör så den händer :) anropar funktionen och refererar till vår div med id gridContainer som 
// finns i vårt html dokument// 

console.log(F25);


