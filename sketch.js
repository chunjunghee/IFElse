function setup()
{
	createCanvas(600,600);
	background(32,145,129);

	fill(255,212,0);
	stroke(255,255,255);
	
}

function draw()
{
	ellipse(300, 300,300,300);
	// draw function
if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
}
}