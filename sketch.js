var cash,cashImg,cashGroup;
var monster1,monster1Img,monster1Group;
var monster2,monster2Img,monster2Group;
var life1,life2,life3,life4,lifeImg;
var lives=0;
var boy,boy_Animation;
var safeZone,safeZoneImg,safeZoneGroup;
var track,trackImg;
var hp=200;
var score=0;
var gameState=PLAY;
var PLAY=1
var END=0;

function preload(){

  trackImg=loadImage("track.png");
  boyImg=loadImage("bike1.png");
  safeZoneImg=loadImage("sh.png");
  monster1Img=loadImage("Monster-01.png");
  monster2Img=loadImage("sword.png");
  cashImg=loadImage("cash.png");
  lifeImg=loadImage("life.png");
}
function setup() {
  createCanvas(displayWidth-10,displayHeight-120);


track=createSprite(630,300)
track.addImage(trackImg);
track.scale=1.9;
track.velocityY = 6;


boy = createSprite(640,450,20,20);
boy.addImage(boyImg);
boy.scale=0.2;

monsterGroup=new Group();

cashGroup=new Group();
safeZoneGroup=new Group();
lifeGroup=new Group();
}

function draw() {
  background(255);

  if(track.y>600){
    track.y=height/2
     }
    
  if(keyDown("RIGHT_ARROW")){
    boy.x=boy.x+8;
  }

  if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-8;
    }
    if(lifeGroup.isTouching(boy)){
      lives=lives+1;
      lifeGroup.destroyEach();
      if(lives===4&&monsterGroup.isTouching(boy)){
        score=score+50;
  
        monsterGroup.destroyEach();
      }
    }
  
  if(cashGroup.isTouching(boy)){
    cashGroup.destroyEach();
    score=score+20;
  }
  if(monsterGroup.isTouching(boy)){
    monsterGroup.destroyEach();
    score=score-10;
    hp=hp-20;
  }
  
  if(safeZoneGroup.isTouching(boy)){
    safeZoneGroup.destroyEach();
    hp=hp+60;
  }
  
spawnMonster1();

spawnCash();
spawnsafeZone();
spawnLife();
  
 
  drawSprites();
  fill("black");
  textSize(28);
  text("Score: "+ score,1000,50);

  fill("black");
  textSize(28);
  text("HP = "+ hp,1000,100);

  fill("black");
  textSize(28);
  text("Lives = "+ lives,1000,200);
  


}
function spawnMonster1 (){
if(frameCount%300===0){
  monster1=createSprite(Math.round(random(100,1000),40,10,10));
  monster1.velocityY=6;
  monster1.addImage(monster1Img);
  monster1.scale=0.07;
  monster1.lifetime=200;

  monsterGroup.add(monster1);
  
}
}
  function spawnCash(){
    if(frameCount%200===0){
      cash=createSprite(Math.round(random(200,900),40,10,10));
      cash.velocityY=6;
      cash.addImage(cashImg);
      cash.scale=0.15;
      cash.lifetime=200;
    
      cashGroup.add(cash);
      
    }
    }

    function spawnsafeZone(){
      if(frameCount===800){
        safeZone=createSprite(650,100,500,250);
        safeZone.shapeColor="cyan";
        safeZone.addImage(safeZoneImg);
        safeZone.scale=0.9;
        safeZone.velocityY=6;
        safeZone.lifetime=200;
        safeZoneGroup.add(safeZone);
  
  }
  else if(frameCount===1600){
    safeZone=createSprite(650,100,500,250);
    safeZone.shapeColor="cyan";
    safeZone.addImage(safeZoneImg)
    safeZone.scale=0.3;
    safeZone.velocityY=6;
    safeZone.lifetime=200;

    safeZoneGroup.add(safeZone);
  }
    }

    function spawnLife(){
      if(frameCount===500){
        life1=createSprite(200,200,10,10);
        life1.addImage(lifeImg);
        life1.velocityY=6;
        life1.lifetime=200;
        life1.scale=0.1;

        lifeGroup.add(life1);

      }
      else if(frameCount===900){
        life2=createSprite(800,200,20,20);
        life2.addImage(lifeImg);
        life2.velocityY=6;
        life2.lifetime=200;
        life2.scale=0.1;

        lifeGroup.add(life2);

      }
      else if(frameCount===1200){
        life3=createSprite(500,200,30,30);
        life3.addImage(lifeImg);
        life3.velocityY=6;
        life3.lifetime=200;
        life3.scale=0.1;

        lifeGroup.add(life3);

      }
      else if(frameCount===1600){
        life4=createSprite(1100,200,40,40);
        life4.addImage(lifeImg);
        life4.velocityY=6;
        life4.lifetime=200;
        life4.scale=0.1;

        lifeGroup.add(life4);

      }
    }