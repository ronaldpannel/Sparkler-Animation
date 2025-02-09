let stars = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  for (let i = stars.length - 1; i > 0; i--) {
    stars[i].draw();
    stars[i].update();

    if (stars[i].done) {
      stars.splice(i, 1);
    }
  }
}
function mouseDragged() {
  stars.push(new Star(mouseX, mouseY, 0, 0));
}

function mousePressed() {
  let num = random(20, 60);
  for (let i = 0; i < num; i++) {
    let vel = p5.Vector.random2D().mult(random(2, 5));
    stars.push(new Star(mouseX, mouseY, vel.x, vel.y));
  }
}

function touchStarted(){
   let num = random(20, 60);
   for (let i = 0; i < num; i++) {
     let vel = p5.Vector.random2D().mult(random(2, 5));
     stars.push(new Star(touch.x, touch.y, vel.x, vel.y));
   }
  
}
