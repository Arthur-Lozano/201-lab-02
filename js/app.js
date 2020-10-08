'use strict';


var points = 0;
var userName = prompt('What is your name?');
console.log('Hi ' + userName);

// Question 1
function questionOne() {
  var yourCity = prompt('Do you like living in Seattle?').toLocaleLowerCase();
  if (yourCity === 'yes' || yourCity === 'y') {
    //console.log('Yes! I love living in Seattle.');
    alert('Yes! I love living in Seattle.');
    points++;
  }
  else if (yourCity === 'no' || yourCity === 'n') {
    alert('I am sorry to hear that!');
  }
}
questionOne();

// Question 2
function questionTwo() {
  var favHobby = prompt('Do you have time these days for your hobbies?').toLocaleLowerCase();
  if (favHobby === 'yes' || favHobby === 'y') {
    //console.log('Yes!  Plenty of time.');
    alert('Yes! Plenty of time.');
    points++;
  }
  else if (favHobby === 'no' || favHobby === 'n') {
    alert('I am sorry to hear that!');
  }
}
questionTwo();

// Question 3
function questionThree() {
  var justRelax = prompt('Is relaxing necessary for you each day?').toLocaleLowerCase();
  if (justRelax === 'yes' || justRelax === 'y') {
    //console.log('Yes! If you do not have a chance to relax you might not be able to re-charge your battery');
    alert('Yes! If you do not have a chance to relax you might not be able to re-charge your battery');
    points++;
  }
  else if (justRelax === 'no' || justRelax === 'n') {
    alert('Maybe you should try to learn how to relax in order to re-charge your battery');
  }
}
questionThree();

// Question 4
function questionFour() {
  var getReady = prompt('Do you like road trips?').toLocaleLowerCase();
  if (getReady === 'yes' || getReady === 'y') {
    //console.log('Yes! A chance to road trip is a chance to see life from a different point of view other than your original viewpoint.');
    alert('Yes! A chance to road trip is a chance to see life from a different point of view other than your original viewpoint.');
    points++;
  }
  else if (justRelax === 'no' || justRelax === 'n') {
    alert('Road tripping isn\'t for everyone');
  }
}
questionFour();


// Question 5
function questionFive() {
  var tripLocation = prompt('Would you like to drive along the coast?').toLocaleLowerCase();
  if (tripLocation === 'yes' || tripLocation === 'y') {
    //console.log('Yes! The coast is gorgeous.');
    alert('Yes! The coast is gorgeous.');
    points++;
  }
  else if (justRelax === 'no' || justRelax === 'n') {
    alert('That is too bad, you could always drive inland as well.');
  }
}
questionFive();

//Question 6
function questionSix() {
  var i = 0;
  var guessMe = 4;

  while (i < 4) {
    var guess = parseInt(prompt('Guess a number from 1 to 4 please'));

    if (guess > 3) {
      alert('Sorry, that number is too high');
    }

    else if (guess < 3) {
      alert('Sorry, that number is too low');
    }

    else if (guess === 3) {
      alert('Correct! You guessed the right number');
      points++;
      break;
    }

    i++;
    if (i === guessMe) {
      alert('Sorry you maxed out your attempt, the correct answer was 3');
    }
  }
}
questionSix();


//Question 7
function questionSeven() {
  var yourAttempt = 6;//6 attempts
  var bestSoup = ['cheese', 'clam chowder', 'fish', 'gumbo', 'chicken noodle'];//Array Creation
  var makeGuess = prompt('Try to guess some of my favorite soups!').toLowerCase();//User enters guess which is stored within (makeGUESS) Variable
  var correctGuess = false;//Boolean value

  while (yourAttempt > 0 && !correctGuess) {
    yourAttempt--;

    //made the correct guess
    for (var j = 0; j < bestSoup.length; j++) {//loops though until a specified number is reached
      if (bestSoup[j] === makeGuess) {
        correctGuess = true;
        alert(`Exactly!  I love ${makeGuess}`); //Notice the back ticks make this work not single quotes
        points++;
      }
    }

    // if wrong
    if (yourAttempt > 0 && !correctGuess) {
      makeGuess = prompt('Guess again').toLowerCase();
    }
    // No more attempts
    if (yourAttempt === 0 && !correctGuess) {
      alert(`Sorry, the correct answers were: ${bestSoup}`);
    }
  }
}
questionSeven();

alert(`Thanks for answering, your score was ${points}`);






