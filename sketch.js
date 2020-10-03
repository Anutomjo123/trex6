var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200,200,80,50);
  fixedrect=createSprite(300,200,50,80);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x===movingrect.width/2+fixedrect.width/2){
    movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  }
  drawSprites();
}