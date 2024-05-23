/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: `Everybody just has different steps in their life that they take to do what they should.
    Read more at.`,
    source: `Travis Scott`,
    year: 2020,
    tags: `hip-hop/rap`
  },
  {
    quote: `We always forgive, but we don't forget easily.`,
    source: `Travis Scott`,
    citation: `houstonfornication`,
    year: 2018
  },
  {
    quote: `I pray that the demons go away, they hauntin' us.`,
    source: `Travis Scott`,
    citation: `pray 4 love`,
    year: 2015
  },
  {
    quote: `wish you were here`,
    source: `Travis Scott`,
    year:2018
  },
  {
    quote: `I feel like God put me here to help out with people's soul, man.`,
    source: `Travis Scott`,
    year: 2022,
    tags: `hip-hop/rap`
  }
]


/***
 * `getRandomQuote` function
 * This JavaScript function randomly selects a quote from an array named quotes and returns the chosen quote.
***/

function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}


/***
 * `printQuote` function
 * this function dynamically generates HTML based on a randomly selected quote object, updates the DOM with the generated HTML, and changes the background color of the webpage.
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if (randomQuote.citation) html += `<span class="citation">${randomQuote.citation}</span>`;
  if (randomQuote.year) html += `<span class="year">${randomQuote.year}</span>`;
  if (randomQuote.tags) html += `<span class="tags">${randomQuote.tags}</span>`;

  html += `</p>`;
  
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.background = randomBackgroundColor();
}

/*
This JavaScript code defines a function, randomBackgroundColor(), which generates a random RGB color value.
It then applies this color as the background of the document's body element.
*/

function randomBackgroundColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);



/*
This code automates the change of the quote and color at timed intervals without requiring manual input.
*/

setInterval(printQuote, 10000);