var bubbles = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 30; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(30, 60)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(255);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(05, 80, 890, 100);
    } else {
      fill(25, 020, 50, 80);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 3);
    bubble.x += random(-2, 2);
    bubble.y += random(-2, 2);
  }
}
