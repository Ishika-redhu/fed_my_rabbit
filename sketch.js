var rabbit,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
var bg,bgImg;


function preload(){
 rabbitImg = loadImage("rabbit.png");
 appleImg = loadImage("apple.png");
 leafImg = loadImage("leaf.png");
 bgImg = loadImage("garden.png");
}


function setup() {
 createCanvas(400, 400);
 bg = createSprite(200,200);
 bg.addImage(bgImg);
 rabbit=createSprite(180,340,20,20);
 rabbit.scale=0.09;
 rabbit.addImage(rabbitImg);

}

function draw() {
 background(0);
 edges = createEdgeSprites();
 
 rabbit.collide(edges);
  rabbit.x=World.mouseX
 
 var abc = Math.round(random(1,3));
 if(frameCount % 80 == 0 ) {
 if(abc == 1)
 { createApples(); }
 else if (abc == 2)            {createApples(); }
else {   createApples();} }
   drawSprites(); 
   var abc = Math.round(random(1,3));
if(frameCount%100 == 0 ) {
  if(abc == 1){ createLeaves(); }
  else if (abc == 2){          createLeaves(); }
 else{    createLeaves();} }

 
drawSprites();
}

 function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY=5;
  apple.lifetime=150;
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale=0.1;
  leaf.velocityY=5;
  leaf.lifetime=150;
}


