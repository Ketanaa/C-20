//creating variables for the animations,sprites and back ground
var astronaut
var bg
var sleep
var brush
var gym
var eat
var drink
var bath
var move

function preload () {
  //loading the necessary images and animations
  scene = loadImage("Astronaut's daily routine/iss.png");
  sleep= loadAnimation("Astronaut's daily routine/sleep.png");
  brush= loadAnimation("Astronaut's daily routine/brush.png");
  gym= loadAnimation("Astronaut's daily routine/gym1.png","Astronaut's daily routine/gym2.png","Astronaut's daily routine/gym11.png","Astronaut's daily routine/gym12.png");
  eat= loadAnimation("Astronaut's daily routine/eat1.png","Astronaut's daily routine/eat2.png");
  drink= loadAnimation("Astronaut's daily routine/drink1.png","Astronaut's daily routine/drink2.png");
  bath= loadAnimation("Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath2.png");
  move= loadAnimation("Astronaut's daily routine/move.png","Astronaut's daily routine/move1.png");  
}

function setup() {
  createCanvas(800,400);

  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addAnimation("walking",move);
  astronaut.scale=0.1;
}

function draw() {
  background(scene); 
  
  fill("white");
  textSize(20);
  text("Instructions:",0,0);
  text("Up Arrow = Brushing",0,15);
  text("Down Arrow = Gymming",0,30);
  text("Left Arrow = Eating",0,45);
  text("Right Arrow = Bathing",0,60);
  text("M key = Moving",0,75);


  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocity.X = 0;
    astronaut.velocity.Y = 0;
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocity.X = 0;
    astronaut.velocity.Y = 0;
  }

  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocity.X = 0;
    astronaut.velocity.Y = 0;
  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocity.X = 0;
    astronaut.velocity.Y = 0;
  }

  if(keyDown("m")) {
    astronaut.changeAnimation("walking");
    astronaut.y=350;
    astronaut.velocity.X = -5;
    astronaut.velocity.Y = 5;
  }
  
  drawSprites();
}