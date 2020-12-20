
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;
var paper;
var dash1,dash2,dash3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	paper = new paper(700,320,70,70);

	dash1 = new dash1(100,20,100,5);
	dash2 = new dash2(100,20,70,5);
	dash3 = new dash3(100,20,70,5);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=createSprite(1,700,800,10);
	ground.shapeColor=color(blue);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
  dash1.display();
  dash2.display();
  dash3.display();
  paper.display();
  ground.display();
}



