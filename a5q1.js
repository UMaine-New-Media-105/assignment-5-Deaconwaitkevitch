let bubbles = [];

function setup() {
  createCanvas(960, 540);

  for (let i = 0; i < 5; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background(40);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].jitter();
    bubbles[i].display();
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(50, 90);
    this.speed = 3;
  }

  jitter() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

    this.x = constrain(this.x, 0 + this.size, width - this.size);
    this.y = constrain(this.y, 0 + this.size, height - this.size );
  }

  display() {
    stroke("hotpink");
    ellipse(this.x, this.y, this.size);
    noFill();
    stroke("MediumOrchid");
    ellipse(this.x, this.y, this.size - 10);
    stroke("hotpink");
    ellipse(this.x, this.y, this.size - 20);
    stroke("MediumOrchid");
    ellipse(this.x, this.y, this.size - 30);
    stroke("hotpink");
    ellipse(this.x, this.y, this.size - 40);
    stroke("Fuchsia");
    ellipse(this.x, this.y, this.size - 50);
  }
}
