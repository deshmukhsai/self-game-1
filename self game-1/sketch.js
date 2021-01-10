var leprechaunImage , leprechaun , soilImage , soil , bgImage , bg;
var sprite1 , sprite2;
var block1;

function setup() {
  createCanvas(displayWidth,displayHeight);
  leprechaun = createSprite(displayWidth-1450,displayHeight-100, 50, 50);
  leprechaun.addImage(leprechaunImage);
  leprechaun.scale = 0.3;
  for(var i = displayWidth-1200;i<displayWidth-1000;i = i+50){
    var blocks = createSprite(i,displayHeight-150,50,50);
    blocks.addImage(soilImage);
    blocks.scale = 0.3;
  }
  for(var i = displayWidth-1000;i<displayWidth-800;i = i+50){
    block1 = createSprite(i,displayHeight-350,50,50);
    block1.addImage(soilImage);
    block1.velocityX = 2;
    block1.scale = 0.3;
  }
  sprite1 = createSprite(displayWidth-1300,displayHeight-350,10,200);
 // sprite1.visible = false;
  sprite2 = createSprite(displayWidth-600,displayHeight-350,10,200);
  //sprite2.visible = false;
  block1.bounceOff(sprite1);
  block1.bounceOff(sprite2);

 for(var i = displayWidth-600;i<displayWidth-300;i = i+50){
   var block2 = createSprite(i,displayHeight-100,50,50)
   block2.addImage(soilImage);
    block2.scale = 0.3;
 }
 for(var i = displayHeight-150;i<displayWidth-350;i = i+50){
   var block3 = createSprite(displayWidth-1000,i,50,70);
   block3.addImage(soilImage);
   block3.scale = 0.3;
 }
 //for(var i = displayWidth-900;i<displayHeight-20;i = i+50){
  // var block4 = createSprite(i,displayHeight-50,50,50);
  // block4.addImage(soilImage);
   //block4.scale=0.3;
 //}
 for(var i = displayHeight-250;i<displayWidth-100;i = i+50){
   var block4 = createSprite(displayWidth-250,i,50,70);
   block4.addImage(soilImage);
   block4.scale = 0.3;
 }
 
}

function preload(){
 bgImage = loadImage("images/bgImage.png");
 leprechaunImage = loadImage("images/player.png");
 soilImage = loadImage("images/ground/sprite_0.png");
}

function draw() {
  background(bgImage);  
  drawSprites();
}