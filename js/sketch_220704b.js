let fStatus=0;
let posXY=[];
let fCount=0;
let tResponse=[];
const nTrials=30;

function setup() {
  createCanvas(windowWidth,windowHeight*0.8)
  background(64)
  frameRate(60);
}


function draw() {
  background(64)
  fill(255);
  rect(width/2,height/2,5,5);
  
  switch(fStatus){
    case 0:
      fill(250);
      text("Simple visual field test (ver. 0.1; Shinji Nishimoto)",20,20);
      fill(200);
      text("How to use:",20,50);
      text("Fixate on the center square.",20,70);
      text("Small circles will appear at random positions and timings.",20,90);
      text("If you find a circle, press f button.",20,110);
      text("A test will take around a minute.",20,130);
      fill(50,180,250);
      text("Press s to start",20,160);
      fCount=0;
      return;
    case 1:
      fCount=fCount+1;
      if(fCount>nTrials) {
        fStatus=3;
        return;
      }
      
      posXY[fCount]=[];
      posXY[fCount][0]=random(width);
      posXY[fCount][1]=random(height);
      tResponse[fCount]=0;
      tStart=millis();
      tWait=random(3000)+500;
      fStatus=2;
      return;
    case 2:
      ms=millis()-tStart;
      //text("Time:"+round(ms/1000),10,10);
      if(ms>tWait & ms<tWait+100){
        ellipse(posXY[fCount][0],posXY[fCount][1],5,5);
      }
      if(ms>tWait+1000) {
        fStatus=1;
      }
      return;
    case 3:
      for(ii=1;ii<fCount;ii++) {
        s=tResponse[ii];
        if(s>0) {
          fill(127,255,127);
          ellipse(posXY[ii][0],posXY[ii][1],s/50+5,s/50+5);
        } 
        else if(s==0) {
          fill(127,0,0);
          ellipse(posXY[ii][0],posXY[ii][1],20,20);          
        } else {
          fill(0,0,0);
          ellipse(posXY[ii][0],posXY[ii][1],10,10);          
        }
        
      }
  }
  
}

function keyPressed() {
  if(key=="s") {
    fStatus=1;
  }
  if(key=="f") {
    s=millis()-tStart-tWait;
    tResponse[fCount]=s;
    fStatus=1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight*0.8);
}
