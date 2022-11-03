'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  fetch('/fortune') // first, fetch '/fortune'
    //once response(fortune) is retrieved
    .then((response) => response.text()) // then extract the text from that response(fortune)
    .then((fortuneText)=> { // then take that extraction and call it fortuneText 
      document.querySelector('#fortune-text').innerHTML = fortuneText //select div with id #fortune-text and fill the HTML inside of the div with fortuneText (text extracted from fortune)
    })
}
//select element with id #get-fortune-button, add an event listener, so when
//user clicks, call the function showFortune
document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  // make variable called zipcode and assign it to the element with id #zipcode-field and 
  // call the .value method on it get t
  const zipcode = document.querySelector('#zipcode-field').value;
  fetch('/weather.json')
    .then((response))

  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);




const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};




const handleCorrectGuess = (letter, word) => {
  const letterDivs = document.querySelectorAll(`div.${letter}`);
  for (const div of letterDivs) {
    div.innerHTML = letter;
    correctGuesses += 1;
  }
  if (correctGuesses === word.length) {
    disableAllLetterButtons();
    document.querySelector('#win').style.display = 'block';
  }
};

// def handleCorrectGuess(letter, word): 
//  letterdivs = 

//  for loop 

//  if statement 
 
//  return 





