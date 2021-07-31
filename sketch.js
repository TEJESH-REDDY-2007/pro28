const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bin1, bin2, bin3, dustBinImage;
var ball, ball2;
var ground, ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1110, 400);
  
	engine = Engine.create();
	world = engine.world;

  ball = new Ball(100, 370, PI/2);

	bin1 = new Bin(988, 315, 10, 100);
	bin2 = new Bin (943, 370, 100, 10);
	bin3 = new Bin (898, 315, 10, 100);
  dustBinImage = new Binimage (938, 300, 80, 100);
	
  // wall for paper not to bounce off of the canvase
	wall = new Ground (1110,200,10,400);
  wall2 = new Ground (0,200,10,400);
  wallUp = new Ground (555,0,1110,10)
  ground = new Ground (550, 391, 1119, 20);

	Engine.run(engine);
  
  fill("red")
  Thread = new Thread(ball.body,{x:199, y:100});
}


function draw() {
  rectMode(CENTER);
  background(300);

  bin1.display();
  bin2.display();
  bin3.display();
  dustBinImage.display();

  ball.display();
  
  wall.display();
  wall2.display();
  wallUp.display();
  ground.display();

  Thread.display();

  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }

function mouseReleased() {
  Thread.fly();
}
  
//function keyPressed() {
  //if (keyDown("UP_ARROW")) {
	  //Matter.Body.applyForce(ball.object, ball.object, ball.position,{x:5, y:-5})
    //}
//}