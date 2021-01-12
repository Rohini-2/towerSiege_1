
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var engine,world;
var block;
function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground(450,380,900,10);

    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);
   block8= new Block(700, 320, 70, 70);
block9 = new Block(920, 320, 70, 70);
block10 = new Block(700, 320, 70, 70);
block11 = new Block(920, 320, 70, 70);
block12 = new Block(700, 320, 70, 70);
block13 = new Block(920, 320, 70, 70);
block14 = new Block(700, 320, 70, 70);
block15 = new Block(920, 320, 70, 70);
block16= new Block(920, 320, 70, 70);

}


function draw() {
    background("skyblue")
    text("SCORE : "+score, 900,50)

    ground.display()
    stand1.display()
    stand2.display()
    Block8.display()
    block9.display()
    Block10.display()
    Block11.display()
    Block12.display()
    Block13.display()
    Block14.display()
    Block15.display()
    Block16.display()
    
    function mouseDragged() {
        Matter.Body.setPosition(plolygon.body, { x: mouseX, y: mouseY })
    }   

}
function mouseReleased() {
    sling.fly()
}
function keyPressed() {
    if (keyCode === 32) {
        sling.attach(plolygon.body)
    }
}