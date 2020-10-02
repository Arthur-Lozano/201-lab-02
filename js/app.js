'use strict';

var userName = prompt('What is your name?');
console.log('Hi ' + userName);

// Question 1
var yourCity = prompt('Do you like living in Seattle?').toLocaleLowerCase();
if (yourCity === 'yes' || yourCity === 'y') {
  //console.log('Yes! I love living in Seattle.');
  alert('Yes! I love living in Seattle.');
}
// Question 2
var favHobby = prompt('Do you have time these days for your hobbies?').toLocaleLowerCase();
if (favHobby === 'yes' || favHobby === 'y') {
  //console.log('Yes!  Plenty of time.');
  alert('Yes! Plenty of time.');
}
// Question 3
var justRelax = prompt('Is relaxing necessary for you each day?').toLocaleLowerCase();
if (justRelax === 'yes' || justRelax === 'y') {
  //console.log('Yes! If I do not have a chance to relax I will not be able to charge my battery');
  alert('Yes! If I do not have a chance to relax I will not be able to charge my battery');
}
// Question 4
var getReady = prompt('Do you like road trips?').toLocaleLowerCase();
if (getReady === 'yes' || getReady === 'y') {
  //console.log('Yes! A chance to road trip is a chance to see life from a different point of view than my original viewpoint.');
  alert('Yes! A chance to road trip is a chance to see life from a different point of view than my original viewpoint.');
}
// Question 5
var tripLocation = prompt('Would you like to drive along the coast?').toLocaleLowerCase();
if (tripLocation === 'yes' || tripLocation === 'y') {
  //console.log('Yes! The coast would be gorgeous.');
  alert('Yes! The coast would be gorgeous.');
}

alert('Thanks' + userName + 'for visiting my site');
