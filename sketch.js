
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1600,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  movingRect2 = createSprite(000, 000,80,30);
  movingRect2.shapeColor = "green";
  movingRect2.velocityX = 3
  movingRect2.velocityY = 1

  fixedRect = createSprite(800, 100, 50, 50);
  fixedRect.shapeColor = "green";

  fixedRect1 = createSprite(600, 100, 50, 50)
  fixedRect1.shapeColor = "green"

  fixedRect2 = createSprite(400, 100, 50, 50)
  fixedRect2.shapeColor = "green"
  
  fixedRect3 = createSprite(200, 100, 50, 50)
  fixedRect3.shapeColor = "green"
  
}
               
function draw() {
 createEdgeSprites()

  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "grey";
    fixedRect.shapeColor = "grey";
  }
  else if(isTouching(movingRect, fixedRect1)){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }
  else if(isTouching(movingRect, fixedRect2)){
    movingRect.shapeColor = "yellow";
    fixedRect2.shapeColor = "yellow";
  }
  else if(isTouching(movingRect, fixedRect3)){
    movingRect.shapeColor = "blue";
    fixedRect3.shapeColor = "blue";
  }
  else if(isTouching(movingRect, movingRect2)){
    movingRect.shapeColor = "yellow";
    movingRect2.shapeColor = "pink";
  }
  else if(isTouching(movingRect2, fixedRect)){
    movingRect2.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect2, fixedRect2)){
    movingRect2.shapeColor = "blue";
    fixedRect2.shapeColor = "blue";
  }
  else if(isTouching(movingRect2, fixedRect3)){
    movingRect2.shapeColor = "blue";
    fixedRect3.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
  fixedRect1.shapeColor = "green"
    fixedRect.shapeColor = "green"
    fixedRect2.shapeColor = "green"
    fixedRect3.shapeColor = "green"
    movingRect2.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



