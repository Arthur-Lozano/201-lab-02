'use strict';

var userName = prompt('What is your name?');
console.log('Hi ' + userName);

var yourCity = prompt('Do you like living in Seattle?').toLocaleLowerCase();
if (yourCity === 'yes' || yourCity === 'y') {
  //console.log('Yes!  I love living in Seattle.');
  alert('Yes!  I love living in Seattle.');
}

var favHobby = prompt('Do you have time these days for your hobbies?').toLocaleLowerCase();
if (favHobby === 'yes' || favHobby === 'y') {
  //console.log('Yes!  I love living in Seattle.');
  alert('Yes!  Plenty of time.');
}

var justRelax = prompt('Is relaxing necessary for you each day?').toLocaleLowerCase();
if (justRelax === 'yes' || justRelax === 'y') {
  //console.log('Yes!  I love living in Seattle.');
  alert('Yes!  If I do not have a chance to relax I will not be able to charge my battery');
}
var getReady = prompt('Do you like road trips?');
if (getReady === 'yes' || getReady === 'y') {
  //console.log('Yes!  I love living in Seattle.');
  alert('Yes!  A chance to road trip is a chance to see life from a different point of view than my original viewpoint');
}
alert('Hi ' + userName + ',' + ' I have heard great things about ' + yourCity + ' and participating in ' + favHobby + ' must be easy there!' + ' Take your time and ' + justRelax + ' while you view this page.');

