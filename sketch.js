function setup() {
  createCanvas(650,550);
  angleMode(DEGREES);
}

function draw() {

  background(0);

  fill(255);
  textSize(24);
  textStyle("bold");
  text(" Tick - Tock Clock ", 100,400); 

  textSize(24)
  fill("green")
text("Green = Hour Hand",400,200)

textSize(24)
fill("blue")
text("Blue = Second Hand",400,400)

textSize(24)
fill("red")
text("Red = Minute Hand",400,300)
  

translate(200,200)
rotate (-90);

   hr = hour();
   mn = minute();
   sc = second();
  
  strokeWeight(8);
  stroke("blue")
    noFill();
   end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("red");
   end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("green");
   end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("green");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  


  


  }
  