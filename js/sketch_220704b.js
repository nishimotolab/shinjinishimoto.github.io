let fStatus=0;
let posXY=[];
let fCount=0;
let tResponse=[];
const nTrials=10;

function setup() {
  createCanvas(800,600)
  background(64)
  frameRate(60);
}


function draw() {
  background(64)
  fill(255);
  ellipse(width/2,height/2,5,5);
  
  switch(fStatus){
    case 0:
      text("Push S to Start",20,20);
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
  if(key==" ") {
    s=millis()-tStart-tWait;
    tResponse[fCount]=s;
    fStatus=1;
  }
}
