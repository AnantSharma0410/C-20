var movingrect, fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 80);
 // fixedrect.velocityX=2;
  fixedrect.shapeColor="green";
  movingrect = createSprite(800,200,80,30);
 // movingrect.velocityX=-2;
  movingrect.shapeColor="red";
}

function draw() {
  background(0);
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 && fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
 /* if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2){
    fixedrect.velocityX=fixedrect.velocityX*-1;
    movingrect.velocityX=movingrect.velocityX*-1;
  }*/
  drawSprites();
}