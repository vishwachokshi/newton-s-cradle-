
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var rope,roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,400,20);


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  drawsprites();
  roof.display();
}
