
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(500,545,1000,10);
	boy=new Boy(200,540,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  boy.display();
  
  drawSprites();
 
}



