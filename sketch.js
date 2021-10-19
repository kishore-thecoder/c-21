
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var groundBottom,groundTop,groundRight,groundLeft;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);


  groundBottom = new ground(200,390,400,20)
  groundTop = new ground(200,10,400,20)
  groundRight = new ground(390,200,20,400)
  groundLeft = new ground(10,200,20,400)
  
 var ballOption= {
   restitution:1

 }
 ball = Bodies.circle(200,100,20,ballOption);
 World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  groundBottom.display();
  groundTop.display();
  groundRight.display();
  groundLeft.display();

  ellipse(ball.position.x,ball.position.y,20)
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.5})
}
