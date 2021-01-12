
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	//background("black")


	engine = Engine.create();
	world = engine.world;
	

	
	
	ground = new Ground(200,680,10,1200)
	
	//bin1 = new Bin(585,645,20,70)
	bin2 = new Bin(650,580,150,10)
	//bin3 = new Bin(720,645,20,70)
	ball = new Ball(20,200,30)
	
	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
	console.log(ball.body.velocity.y)
  rectMode(CENTER);
  background("orange");
  ball.display();
  //bin1.display();
  bin2.display();
  //bin3.display();
  ground.display()
  drawSprites();
  keyPressed()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x : 0.1 , y : -1.7 })
	}
	
}


