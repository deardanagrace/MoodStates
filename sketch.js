/***********************************************************************************
	Mood States
	by. Dana Capistrano

	A bunch of transparent mood images. When you click from 1-5,
	the image changes to different moods. 

***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 60;

//color of "postit background"
var offwhite = '#dcdaa9';

//color of text color
var orangetext = '#f96b03';

// load all images into an array
function preload() {
    images[0] = loadImage('assets/moodintro.png');
    images[1] = loadImage('assets/mood1.png');
    images[2] = loadImage('assets/mood2.png');
    images[3] = loadImage('assets/mood3.png');
    images[4] = loadImage('assets/mood4.png');
    images[5] = loadImage('assets/mood5.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
    createCanvas(windowWidth, windowHeight);

    // Center our drawing objects
    imageMode(CENTER);
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(24);

    // set to one for startup
    drawFunction = drawOne;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
    background('#01633d');

    // will call your state machine function
    drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
    //image
    image(images[0], width / 2, height / 2);
    //text
    fill(orangetext);
    text("Press The number keys to start", width / 2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
    //background
    noStroke();
    fill(offwhite);
    square(width / 2, height / 2, 700);
    //image
    image(images[1], width / 2, height / 2);
    //text
    fill(orangetext);
    text("Are you motived?", width / 2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
    //background
    noStroke();
    fill(orangetext);
    square(width / 2, height / 2, 700);
    //image
    image(images[2], width / 2, height / 2);
    //text
    fill(offwhite);
    text("Are you over caffinated?", width / 2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
    //background
    noStroke();
    fill(offwhite);
    square(width / 2, height / 2, 700);
    //image
    image(images[3], width / 2, height / 2);
    //text
    fill(orangetext);
    text("Are you Anxious?", width / 2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
    //background
    noStroke();
    fill(orangetext);
    square(width / 2, height / 2, 700);
    //Images
    image(images[4], width / 2, height / 2);
    //text
    fill(offwhite);
    text("Are you lonely?", width / 2, height - gTextOffset);
}

// -- drawOne() will draw the image at index 5 from the array

drawSix = function() {
    //background
    noStroke();
    fill(offwhite);
    square(width / 2, height / 2, 700);
    //image
    image(images[5], width / 2, height / 2);
    //text
    fill(orangetext);
    text("Are you Overworked?", width / 2, height - gTextOffset);
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
    if (key === '1') {
        drawFunction = drawTwo;
    } else if (key === '2') {
        drawFunction = drawThree;
    } else if (key === '3') {
        drawFunction = drawFour;
    } else if (key === '4') {
        drawFunction = drawFive;
    } else if (key === '5') {
        drawFunction = drawSix;
    }
}