function setup() {
  createCanvas(windowWidth, windowHeight)
  blendMode(BURN)
}

function draw() {
  background(255,5)
 noStroke()
  if (accelerationX > 1 && accelerationX < 3) {
    fill(255,87,159)
    rect(random(windowWidth), random(windowHeight), accelerationX * 10, accelerationY * 10)
  } else if (accelerationX >= 3 && accelerationX <10) {
    noStroke();
    fill(155,77,253)
    ellipse(random(windowWidth), random(windowHeight), (accelerationX*10)^2, (accelerationX*10)^2)
  }
}