let fStatus=0;
let posXY=[];
let fCount=0;
let tResponse=[];
const nTrials=30;

function setup() {
  createCanvas(windowWidth,windowHeight*0.95)
  background(64)
  frameRate(60);
}


function draw() {
  background(64)
  fill(255);
  s=(width+height)/2;
  rect(width/2,height/2,s*0.005,s*0.005);
  
  
  switch(fStatus){
    case 0:
      fill(250);
      textSize(s*0.016);
      text("Simple visual field test (ver. 0.1; Shinji Nishimoto)",s*0.01,s*0.03);
      fill(200);
      text("How to use:",s*0.01,s*0.06);
      text("Fixate on the center square.",s*0.01,s*0.08);
      text("Small circles will appear at random positions and timings.",s*0.01,s*0.10);
      text("If you find a circle, press f button.",s*0.01,s*0.12);
      text("A test will take around a minute.",s*0.01,s*0.14);
      fill(50,180,250);
      text("Press s to start",s*0.01,s*0.18);
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
      tWait=random(3000)+300;
      fStatus=2;
      return;
    case 2:
      ms=millis()-tStart;
      //text("Time:"+round(ms/1000),10,10);
      if(ms>tWait & ms<tWait+100){
        ellipse(posXY[fCount][0],posXY[fCount][1],s*0.01,s*0.01);
      }
      if(ms>tWait+1000) {
        fStatus=1;
      }
      return;
    case 3:
      for(ii=1;ii<fCount;ii++) {
        t=tResponse[ii];
        if(t>0) {
          fill(127,255,127);
          ellipse(posXY[ii][0],posXY[ii][1],s*0.002*(t/50+5),s*0.002*(t/50+5));
        } 
        else if(t==0) {
          fill(127,0,0);
          ellipse(posXY[ii][0],posXY[ii][1],s*0.02,s*0.02);          
        } else {
          fill(0,0,0);
          ellipse(posXY[ii][0],posXY[ii][1],s*0.02,s*0.02);          
        }
        
      }
  }
  
}

function keyPressed() {
  if(key=="s") {
    fStatus=1;
  }
  if(key=="f") {
    t=millis()-tStart-tWait;
    tResponse[fCount]=t;
    fStatus=1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight*0.95);
}
