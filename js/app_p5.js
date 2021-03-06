// kod projektu snake
var s;
var scl = 20;
var fr = 20; // startowe FPS
var food;

function setup() {
  // createCanvas(600, 600);
  var snakeCanvas = createCanvas(600, 600)
  snakeCanvas.parent("snakeCanvas")
  s = new Snake();
  frameRate(fr);                            // spowalnianie węża
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}


function draw() {
  background(255, 204, 0);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);         // pojawianie się jedzenia
}

function keyPressed() {                   //reagowanie na wciśnięty klawisz
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === 219) { // nacisnieto klawisz [
    if (fr >= 2) {fr = fr-1}; // min fps 1
    textSize(30);
    text("FPS:"+fr, 1, 30);
    frameRate(fr);
  } else if (keyCode === 221) { // nacisnieto klawisz ]
    if (fr <= 29) {fr = fr+1}; // max fps 30
    textSize(30);
    text("FPS:"+fr, 1, 30);
    frameRate(fr);
  }
}
