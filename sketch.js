function setup()
{
	createCanvas(600,600);

	fill(255,212,0);
	stroke(255,255,255);
	ellipse(400, 300, 100, 100);
	
}

function draw()
{
	background(32,145,129);
	ellipse(300, 300,300,300);
	
// draw function
if (mouseX < 100) {
  ellipse(50, 200, 50, 50);
} else if (mouseX < 200){
  ellipse(150, 200, 50, 50);
} else if (mouseX < 300){
  ellipse(250, 200, 50, 50);
} else if (mouseX < 400){
  ellipse(350, 200, 50, 50);
} else if (mouseX < 500){
  ellipse(450, 200, 50, 50);
} else {
  ellipse(550, 200, 50, 50);
}
}