let bubbles = [];
let tadpoles = [];
let stripers = [];

function setup() {
  createCanvas(960, 540);
  //the water bacteria
  for (let i = 0; i < 50; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }

  //breeders
  for (let i = 0; i < 50; i++) {
    tadpoles[i] = new Tadpole(
      random(width),
      random(height),
      random(2, 5),
      random(2, 5)
    );
  }

  //harvesters
  for (let i = 0; i < 5; i++) {
    stripers[i] = new Striper(
      random(width),
      random(height),
      random(2, 5),
      random(2, 5)
    );
  }
}

function draw() {
  background("seagreen");

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].jitter();
    bubbles[i].display();
  }

  for (let i = 0; i < tadpoles.length; i++) {
    tadpoles[i].move();
    tadpoles[i].display();
  }

  for (let i = 0; i < stripers.length; i++) {
    stripers[i].move();
    stripers[i].display();
  }
  for (let i = 0; i < tadpoles.length; i++) {
    for (let j = 0; j < stripers.length; j++) {
      if (stripers[j].collidesWith(tadpoles[i])) {
        tadpoles.splice(i, 1);
        i--;
        break;
      }
    }
  }
}

class Tadpole {
  constructor(x, y, speedA, speedB) {
    this.x = x;
    this.y = y;
    this.speedA = speedA;
    this.speedB = speedB;
    this.size = 0.2;
    this.radius = 20;
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.size);
    fill("darkseagreen");
    triangle(25, 215, 145, 215, 145, 175);
    fill("darkolivegreen");
    ellipse(200, 200, 150, 75);
    fill(255, 102, 102);
    fill(0);
    ellipse(250, 190, 20, 20);
    pop();
  }

  move() {
    this.x += this.speedA;
    this.y += this.speedB;
    if (this.x < 0 || this.x > width) {
      this.speedA *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedB *= -1;
    }
  }

  ifCollides(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    if (distance < this.radius + other.radius) {
      for (let i = 0; i < tadpoles.length; i++) {
        if (tadpoles[i] === this) {
          tadpoles.splice(i, 1);
        }
      }
    }
  }
}
class Striper {
  constructor(x, y, speedA, speedB) {
    this.x = x;
    this.y = y;
    this.speedA = speedA;
    this.speedB = speedB;
    this.size = 0.6;
  }
  collidesWith(other) {
    return (
      this.x < other.x + other.width &&
      this.x + this.width > other.x &&
      this.y < other.y + other.height &&
      this.y + this.height > other.y
    );
  }
  display() {
    push();
    noStroke();
    translate(this.x, this.y);
    scale(this.size);
    fill("black");
    ellipse(400, 300, 160, 50);
    fill("darkgrey");
    triangle(450, 300, 560, 285, 550, 310);
    ellipse(400, 300, 200, 40);
    fill("black");
    ellipse(328, 295, 20, 10);
    rect(310, 306, 180, 2);
    pop();
  }

  move() {
    this.x += this.speedA;
    this.y += this.speedB;

    if (this.x < 0 || this.x > width) {
      this.speedA *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.speedB *= -1;
    }
  }
}
class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(1, 10);
    this.speed = 1.5;
  }

  jitter() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

    this.x = constrain(this.x, 0 + this.size, width - this.size);
    this.y = constrain(this.y, 0 + this.size, height - this.size);
  }

  display() {
    stroke("brown");
    ellipse(this.x, this.y, this.size);
    noFill();
    stroke("green");
    ellipse(this.x, this.y, this.size - 10);
    stroke("chocolate");
    ellipse(this.x, this.y, this.size - 20);
    stroke("darkseagreen");
    ellipse(this.x, this.y, this.size - 30);
    stroke("olive");
    ellipse(this.x, this.y, this.size - 40);
    stroke("olivedrab");
    ellipse(this.x, this.y, this.size - 50);
  }
}
