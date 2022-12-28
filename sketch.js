var path,car;
var c1,c2,c3;
var pathImg

var Restartb;
var gameOverImg

var C1G, C2G,C3G; 

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver

function preload(){
  pathImg = loadImage("rd.jpg");
  gameOverImg = loadImage("gameOver.png");
  img=loadImage("r.png")
  carImg = loadImage("car.png");

  
  c1i = loadImage("c1.png");
  
  c2i= loadImage("c2.png");
  c3i= loadImage("c3.png");
  
  
 
}

function setup(){
  
createCanvas(windowWidth, windowHeight);

path=createSprite(width/2,height,width,2);
path.addImage(pathImg);
path.scale=1
path.velocityY = 5;
gameOver = createSprite(width/2,70);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
Restartb = createSprite(width/2,130)
Restartb.addImage(img);
Restartb.scale=0.2
Restartb.visible = false;

car  = createSprite(200,height/1);
car.addImage(carImg);
car.scale=1
  

car.setCollider("rectangle",0,0,40,40);


  

C1G = new Group();
C2G = new Group();
C3G= new Group();
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  
  if(gameState===PLAY){
    
   distance = distance + Math.round(getFrameRate()/50);
   path.velocityY = (6 + 2*distance/150);
  
   car.x = World.mouseX;
  
   
  
  
  if(path.y > 400){
    path.y = 40;
  }
  var select_car = Math.round(random(1,3));
if (World.frameCount % 60 == 0) {
  switch(select_car ){
      case 1: c1m()
      break;
      case 2: c2m() 
      break;
      case 3: c3m()
      break;
      default:break;

    }

}
    

if(C1G.isTouching(car) || C2G.isTouching(car) || C3G.isTouching(car)){
  gameState = END;
  
  
 }
  
  }
  else if (gameState === END) {
    gameOver.visible = true;
    Restartb.visible = true;
    
  
    path.velocityY = 0;
    car.velocityY = 0;

  
    C1G.setVelocityYEach(0);
    C1G.setLifetimeEach(-1);
  
    C2G.setVelocityYEach(0);
    C2G.setLifetimeEach(-1);
  
    C3G.setVelocityYEach(0);
    C3G.setLifetimeEach(-1);
    
    if(mousePressedOver(Restartb)){
      reset(); 
  }

  
}
}


function c1m(){
        c1 =createSprite(1000,0)
        c1.scale =1
        c1.velocityY = (6 + 2*distance/150);
        c1.addImage(c1i);
        c1.setLifetime=170;
        C1G.add(c1);
}

function c2m(){
        c2 =createSprite(200, 0)
        c2.scale =1
        c2.velocityY = (6 + 2*distance/150);
        c2.addImage(c2i);
        c2.setLifetime=170;
        C2G.add(c2);
}

function c3m(){
        c3 =createSprite(width/2, 0)
        c3.scale =1
        c3.velocityY = (6 + 2*distance/150);
        c3.addImage(c3i);
        c3.setLifetime=170;
        C3G.add(c3);
}




function reset(){
  gameState = PLAY;
 gameOver.visible = false;
 Restartb.visible = false; 
  
  C1G.destroyEach();
 C2G.destroyEach();
C3G.destroyEach();
  
  distance = 0;
 }



