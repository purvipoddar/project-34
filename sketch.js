const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pendulum1,slingshot;
var pendulum2,slingshot1;
var pendulum3,slingshot2;
var pendulum4,slingshot3;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  pendulum1=new Pendulum(100,100,"red")
  slingshot=new Sling(pendulum1.body,{x:200,y:100})

  pendulum2=new Pendulum(100,100,"red")
  slingshot1=new Sling(pendulum2.body,{x:300,y:100})

  pendulum3=new Pendulum(100,100,"red")
  slingshot2=new Sling(pendulum3.body,{x:400,y:100})

  pendulum4=new Pendulum(100,100,"red")
  slingshot3=new Sling(pendulum4.body,{x:500,y:100})

  Engine.run(engine);
}

function draw() {
  background(0);

  pendulum1.display();
  slingshot.display();

  pendulum2.display();
  slingshot1.display();

  pendulum3.display();
  slingshot2.display();

  pendulum4.display();
  slingshot3.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
}