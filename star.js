class Star {
  constructor(x, y, vx, vy) {
    this.position = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector(0, 0);
    this.rot = random(TWO_PI);
    this.size = random(2, 12);
    this.life = 255;
    this.done = false;
    this. rand = random() < 0.5
  }
  update() {
    this.life -= 3;

    if(this.rand){
      this.acc = p5.Vector.random2D().mult(0.4)
    }
    this.vel.add(this.acc);
    this.position.add(this.vel);
    this.finished();
  }
  draw() {
    push();
    translate(this.position.x, this.position.y);
    rotate(this.rot);

    drawingContext.shadowOffsetX = 7;
    drawingContext.shadowOffsetY = -7;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = color(255, 255, 0);

    noStroke();
    fill(255, this.life);
    beginShape();
    vertex(0, -this.size);
    quadraticVertex(0, 0, this.size, 0);
    quadraticVertex(0, 0, 0, this.size);
    quadraticVertex(0, 0, -this.size, 0);
    quadraticVertex(0, 0, 0, -this.size);

    endShape(CLOSE);

    pop();
  }
  finished() {
    if (this.life < 0) {
      this.done = true;
    }
  }
}
