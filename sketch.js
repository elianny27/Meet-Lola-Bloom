//The setup function only happens once
var fushling= 20;

function setup() {
	createCanvas(600, 600); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(mouseY,194,193); //an RGB color for the canvas' background
  //circle
  stroke(0,0,0) // an RGB color for the circle's border
  strokeWeight (3);
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(100,100,fushling,fushling); // center of canvas, 20px dia

  fill(238,199,59);
  rect(mouseX-25,mouseY-25,50,50);
  stroke(248,76,19);
  line(fushling,200,400,fushling);
  strokeWeight(0);
  triangle(300,110,230,50,175,mouseX);
  strokeWeight(2);
  fill(random(20,230),197,random(20,130));
  textSize(100);
  textFont("Helvetica");
  text('Lola Bloom', 22, 300);
  stroke(0,0,0);
  triangle(random(width),random(height),10,10);
}

function mousePressed () {
  if (fushling >= 255)  
    {fushling=0;

  } else {
    fushling = fushling +10;
  }

}