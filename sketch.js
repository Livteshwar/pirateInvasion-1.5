const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;
var engine, world;
var canvas, angle, tower, ground, cannon,ball;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 110, 50, angle);
  ball = new Ball(cannon.x,cannon.y);
  

}

function draw() {
  background(189);
  imageMode(CENTER)
  image(backgroundImg, 600,300, width, height);

  

  Engine.update(engine);
  ground.display();
  
  cannon.display();
  tower.display();
  ball.display();
 
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    ball.shoot();
  }

}