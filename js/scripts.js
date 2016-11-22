// My Scripts
// Store & Generate Number

var maxRand = 3;
var numRand = Math.floor(Math.random() * maxRand);

//console.log(numRand);

// Store images
var img0 = 'img/fullsize/';
var img1 = 'img/fullsize/';
var img2 = 'img/fullsize/';

// Show Images
$('header img').attr('src', eval('img' + numRand));