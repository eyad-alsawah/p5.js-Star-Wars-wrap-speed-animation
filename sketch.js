var leftShootingLineHypotenuseStart = 40;
  var leftShootingLineHypotenuseEnd =45;
let song;
let blasterSound;
let button;
let allowShootLeft=true;
let allowShootRight=true;
let speedSlider;
let centerX = 250;
let centerY = 150;
let startX = 250;
let startY = 250;
let starsCount =300;
let radiusList = Array.from({ length: starsCount }, () => Math.floor(Math.random() * 250) + 10);

function setup() {
  song.play();
  let canvas = createCanvas(500, 400);
  canvas.position(400, 100);
  speedSlider = createSlider(1, 4, 4, 0.1);
  button =createButton('shoot'
  );
  button.mousePressed(allowShooting);
  frameRate(20);
}

function shootLeft(){
  if(!allowShootLeft){return;}
  if(leftShootingLineHypotenuseEnd ==115|| leftShootingLineHypotenuseStart==110){
    leftShootingLineHypotenuseStart=40;
    leftShootingLineHypotenuseEnd=45;
    
    allowShootLeft=false;
    return;
  }
  
  leftShootingLineHypotenuseStart =leftShootingLineHypotenuseStart+10;
  leftShootingLineHypotenuseEnd=leftShootingLineHypotenuseEnd+10;


  
}
function shootRight(){
  if(!allowShootRight){return;}
  if(rightShootingLineHypotenuseEnd ==45|| rightShootingLineHypotenuseStart==40){
    rightShootingLineHypotenuseStart=110;
   rightShootingLineHypotenuseEnd=115;
    
   allowShootRight=false;
    return;
  }
  
  rightShootingLineHypotenuseStart = rightShootingLineHypotenuseStart-10;
  rightShootingLineHypotenuseEnd= rightShootingLineHypotenuseEnd-10;


  
}

function allowShooting(){
  allowShootLeft =true;
  allowShootRight =true;
  blasterSound.play();
  // s=40;
  //    d=45;
}
function preload() {
  millenniumFalcon = loadImage("images/milleniumFalconCockpit.png");
  song = loadSound("sounds/star_wars.mp3");
  blasterSound = loadSound("sounds/blaster_effect.mp3");
}

var rightShootingLineHypotenuseStart = 40;
var rightShootingLineHypotenuseEnd =45;
function draw() {
  shootLeft();
  shootRight();
  background(0);
  frameRate(40);

  //-------------------------------------
 var leftShootingAngle =80;
  stroke(255,165,0);
  if(leftShootingLineHypotenuseEnd==55){circle(136,136,50);}
 var x =  sin(radians(leftShootingAngle)) *leftShootingLineHypotenuseStart+130;
 var ex =sin(radians(leftShootingAngle)) *leftShootingLineHypotenuseEnd+130;
 var y = cos(radians(leftShootingAngle))*leftShootingLineHypotenuseStart+130;
 var ey = cos(radians(leftShootingAngle))*leftShootingLineHypotenuseEnd+130;
  strokeWeight(5);
  line(x, y, ex, ey);
  //-----------------------------------------------------

  var rightShootingAngle =100;
  stroke(255,165,0);
  if(rightShootingLineHypotenuseEnd==95){circle(315,135,50);}
 var x =  sin(radians(rightShootingAngle)) *rightShootingLineHypotenuseStart+210;
 var ex =sin(radians(rightShootingAngle)) *rightShootingLineHypotenuseEnd+210;
 var y = cos(radians(rightShootingAngle))*rightShootingLineHypotenuseStart+156;
 var ey = cos(radians(rightShootingAngle))*rightShootingLineHypotenuseEnd+156;
  strokeWeight(5);
  line(x, y, ex, ey);
  //----------------------------------------------------

  strokeWeight(1);
 console.log(rightShootingLineHypotenuseEnd,rightShootingLineHypotenuseStart);
  stroke(194, 211, 228);
  radiusList.forEach(radius => {
    var angle = Math.floor(Math.random() * 360);
    var startX = centerX + radius * cos(radians(angle));
    var startY = centerY + radius * sin(radians(angle));
    var endX = centerX + radius * speedSlider.value() * cos(radians(angle));
    var endY = centerY + radius * speedSlider.value() * sin(radians(angle));
    line(startX, startY, endX, endY);
  });
image(millenniumFalcon, 0, 0, 500, 500);
}


