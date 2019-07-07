function setup() {
  createCanvas( 1920, 1080);
}

function draw() {
  if(mouseIsPressed) {
    colorMode(HSB);
    fill(255, 50, 100);
  } else {
    fill(255, 112, 190);
  }
  ellipse(mouseX, mouseY, 60, 60);
  
}