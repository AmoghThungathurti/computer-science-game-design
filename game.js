var buttonx = 900;
var buttony = 600;
var img;
function preload() {
	img  = loadImage('assets/pictures/car_one.jpg');
}

var button = {
  x: 900, 
  y:600
  }

var theButton = function() {


  fill(255, 250, 0);
  rect(buttonx, buttony, 200, 100);
  fill(0, 0, 0);
  textSize(25);
  text("Start!", 965, 650);
};

var drawScene1 = function() {
  background(200, 175, 175);
  text("Select your car", 500, 150);
  fill(9, 255, 0);
  rect(250, 500, 200, 100);
  fill(0, 0, 0);
  textSize(25);
  image(img, 605, 560);
  text("Car 1", 305, 560);
  fill(9, 255, 0);
  rect(750, 500, 200, 100);
  fill(0, 0, 0);
  textSize(25);
  text("Car 2", 800, 560);
  fill(0, 0, 0);
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

  if (mouseX > 250 && mouseX < 450 
    && mouseY > 500 && mouseY < 600) {
    background(128, 116, 128);
    drawScene2();
  }
  if (mouseX > 750 && mouseX < 950
    && mouseY > 500 && mouseY <  600) {
    background(128, 116, 128);
    drawScene3();
  }
};

function draw() {
};
