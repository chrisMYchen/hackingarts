function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  if(accelerationX > 10){
  rect(random(300), random(670),accelerationX, accelerationY)
  }
}