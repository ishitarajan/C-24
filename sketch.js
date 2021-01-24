
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(800, 600);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,600,800,20);
  paper = new Paper(100,595,10);
  dustbin1 = new Dustbin(700,590,100,10);
  dustbin2 = new Dustbin(750,570,10,50);
  dustbin3 = new Dustbin(650,570,10,50);  

  Engine.run(engine);
  }
function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-10});
	}
}