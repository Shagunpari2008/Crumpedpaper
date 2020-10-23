const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;
var ground, paper;
var box1,box2,box3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(200,390,2000,20,ground_options);
	World.add(world,ground);

    var paper_options ={
        restitution: 1.1
    }
    paper = Bodies.circle(200,100,20,paper_options);
    World.add(world,paper);

    box1 = new Box(800,100,20,100);
    box2 = new Box(900,100,150,30);
    box3 = new Box(1000,100,20,100);

}

function draw(){
    background(0);
    box1.display();
    box2.display();
    box3.display();

    push();
    strokeWeight(30);
    stroke("yellow");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,2000,20);
    pop(); 
    
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,2000,20);


    ellipseMode(RADIUS);
    ellipse(paper.position.x,paper.position.y, 20, 20);

}
function keyPressed(){
    if (keyCode === UP_ARROW) {
        paper.x=paper.x+20;
        translation={x:20,y:0}
        Matter.Body.translate(paper, translation)
}
else if (keyCode === RIGHT_ARROW) {
    paper.x=paper.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(paper, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
} 

