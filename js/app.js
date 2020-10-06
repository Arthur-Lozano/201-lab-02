'use strict';


var points = 0;
var userName = prompt('What is your name?');
console.log('Hi ' + userName);
// Question 1
var yourCity = prompt('Do you like living in Seattle?').toLocaleLowerCase();
if (yourCity === 'yes' || yourCity === 'y') {
  //console.log('Yes! I love living in Seattle.');
  alert('Yes! I love living in Seattle.');
  points++;
}
// Question 2
var favHobby = prompt('Do you have time these days for your hobbies?').toLocaleLowerCase();
if (favHobby === 'yes' || favHobby === 'y') {
  //console.log('Yes!  Plenty of time.');
  alert('Yes! Plenty of time.');
  points++;
}
// Question 3
var justRelax = prompt('Is relaxing necessary for you each day?').toLocaleLowerCase();
if (justRelax === 'yes' || justRelax === 'y') {
  //console.log('Yes! If you do not have a chance to relax you might not be able to re-charge your battery');
  alert('Yes! If you do not have a chance to relax you might not be able to re-charge your battery');
  points++;
}
// Question 4
var getReady = prompt('Do you like road trips?').toLocaleLowerCase();
if (getReady === 'yes' || getReady === 'y') {
  //console.log('Yes! A chance to road trip is a chance to see life from a different point of view other than your original viewpoint.');
  alert('Yes! A chance to road trip is a chance to see life from a different point of view other than your original viewpoint.');
  points++;
}
// Question 5
var tripLocation = prompt('Would you like to drive along the coast?').toLocaleLowerCase();
if (tripLocation === 'yes' || tripLocation === 'y') {
  //console.log('Yes! The coast is gorgeous.');
  alert('Yes! The coast is gorgeous.');
  points++;
}
//Question 6
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

//Question 7
var yourAttempt = 6;
var bestSoup = ['cheese','clam chowder','fish','gumbo','chicken noodle'];
var makeGuess = prompt('Try to guess some of my favorite soups!').toLowerCase();
var correctGuess = false;

while (yourAttempt > 0 && !correctGuess) {
  yourAttempt--;

  //made the correct guess
  for (var j = 0; j < bestSoup.length; j++) {
    if (bestSoup[j] === makeGuess){
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


alert(`Thanks for answering, your score was ${points}`);






