var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80); //not moving
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = 3;

  movingRect = createSprite(400,200,80,30); //moving with mouse
  movingRect.shapeColor = "blue";
  movingRect.velocityX = -3;
}

function draw() {
  background("teal");  
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 && 
  fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2 ){
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.velocityX = fixedRect.velocityX * (-1);
  movingRect.velocityX = movingRect.velocityX * (-1);
}
else{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
}

  console.log(movingRect.x-fixedRect.x); //400-200=200
  console.log(movingRect.width/2+fixedRect.width/2);//40+25=65
  drawSprites();
}