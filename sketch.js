var fixedRect,movingRect;




function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(200, 200, 50, 50);
 movingRect=createSprite(300,200,80,80);
 fixedRect.shapeColor="pink";
 movingRect.shapeColor="pink";
 movingRect.debug=true;
 movingRect.setCollider("circle",0,0,45);
 fixedRect.debug=true;
 fixedRect.setCollider("circle",0,0,28);
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  
  if( isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  
  else {
    movingRect.shapeColor="pink";
    fixedRect.shapeColor="pink";
  }

  drawSprites();
}