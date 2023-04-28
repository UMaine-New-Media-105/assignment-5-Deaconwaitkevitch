let bubbles = [];

function setup() {
  createCanvas(960, 540);

  for (let i = 0; i < 30; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background("seagreen");
 tadpole(20,100,0.3)
  tadpole(20,200,0.3)
  tadpole(20,300,0.3)
  striper(350,100,0.6)
   striper(350,300,0.6)
   striper(350,200,0.6)

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].jitter();
    bubbles[i].display();
  }
}
function tadpole (x,y,size){
  push()
  translate(x,y)
  scale(size)
  fill("darkseagreen")
  triangle(25, 215, 145, 215, 145, 175); 
  fill("darkolivegreen"); 
  ellipse(200, 200, 150, 75); 
  fill(255, 102, 102); 
  fill(0); 
  ellipse(250, 190, 20, 20);
  pop()
}
function striper (x,y,size){
  push();
  noStroke()
  translate(x,y)
  scale(size)
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
    this.y = constrain(this.y, 0 + this.size, height - this.size );
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
