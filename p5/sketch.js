function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  if(accelerationX > 10){
  rect(random(windowWidth), random(windowHeight),accelerationX, accelerationY)
  }
}