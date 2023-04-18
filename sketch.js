let song;
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
  frameRate(20);
}
function preload() {
  millenniumFalcon = loadImage("images/milleniumFalconCockpit.png");
  song = loadSound("sounds/star_wars.mp3");
}


function draw() {
  background(0);
  frameRate(speedSlider.value());
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


