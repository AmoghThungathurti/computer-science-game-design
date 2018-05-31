var buttonx = 900;
var buttony = 600;

var button = {
  x:900,
  y:600
}

var theButton = function() {
  
  
  fill(255, 250, 0);
  rect(buttonx, buttony, 200, 100);
  fill(0, 0, 0);
  textSize(25);
  text("Start!", 950, 650);
};

var drawScene1 = function() {
  background(200, 175, 175);
  text("Select character", 500, 150);
  fill(9, 255, 0);
  rect(250, 500, 200, 100);
  fill(0, 0, 0);
  textSize(25);
  text("Select", 320, 550);
};

function setup() {
  createCanvas(1250, 900);
  background(92, 86, 92); 

  theButton();
  textSize(34);
  text("The Ultimate Racer", 500, 450);
};

function mouseClicked() {
  if (mouseX > 900 && mouseX < 900 + 200
    && mouseY > 600 && mouseY < 700) {
    background(98, 86, 92);


    drawScene1();
  }
}

function draw() {

};var buttonx = 900;
var buttony = 600;

var button = {
  x:900,
  y:600
}

var theButton = function() {
  
  
  fill(255, 250, 0);
  rect(buttonx, buttony, 200, 100);
  fill(0, 0, 0);
  textSize(25);
  text("Start!", 950, 650);
};

var drawScene1 = function() {
  background(200, 175, 175);
  text("Select character", 500, 150);
  fill(9, 255, 0);
  rect(250, 500, 200, 100);
  fill(0, 0, 0);
  textSize(25);
  text("Select", 320, 550);
};

function setup() {
  createCanvas(1250, 900);
  background(92, 86, 92); 

  theButton();
  textSize(34);
  text("The Ultimate Racer", 500, 450);
};

function mouseClicked() {
  if (mouseX > 900 && mouseX < 900 + 200
    && mouseY > 600 && mouseY < 700) {
    background(98, 86, 92);


    drawScene1();
  }
}

function draw() {

};
