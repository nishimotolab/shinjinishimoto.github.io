function setup() {
  createCanvas(800,600)
  background(127)
  frameRate(60);
}


function draw() {
  background(127)
  ellipse(400,300,10,10);  
  ms=millis()/1000*60;
  ms=floor(ms);
  text("Time:"+ms,20,20);
  if(ms%0>50){
    ellipse(400,200,10,10);
  }
  return;
}
