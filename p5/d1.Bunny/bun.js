function setup() {
  createCanvas(400, 400);
}
//let value = 0;
//function mouseMoved() {
//  value = value + 5;
//  if (value > 255) {
//    value = 0;
 // }
//}
function draw() {
  background(0);
  //bunny
    //grass
  fill('#00CC00');
  ellipse(200, 230, 220, 10);
  //
  fill('gray');
  noStroke();
  //tail
  square(155,190,25);
  //body
  square(170,180,50);
  //head
  square(200,190,38);
  square(220,200,22);
  //ears
  fill('gray');
  triangle(215,200,235,200,205,160);
  triangle(205,205,225,205,195,165);
  fill('#FF9999');
  triangle(220,200,230,200,210,170);
  //eye
  fill('#99FFFF');
  stroke('#003366');
  strokeWeight(2);
  circle(233,210,5);
  //stroke('black');
  //point(232,211);
  stroke('white');
  point(231,211);
  //lashes
  stroke('#003366');
  line(230,207,235,207);
  //nose
  fill('pink');
  noStroke();
  triangle(242,213,242,205,245,205);
  //black strikes
  fill('black');
  square(155,190,5);
  square(155,210,5);
  square(170,180,3);
  square(173,180,3);
  square(170,220,5);
  square(172,222,5);
  square(235,188,5);  
  //green strikes
  fill('#00CC00');
  noStroke();
  //square(155,190,5);
  square(175,225,5);
  square(170,225,5);  
  //white strikes
  fill('white');
  square(160,190,5);
  square(155,195,5);
  square(165,212,3);
  square(168,212,3);
  square(168,210,3);
  square(215,212,3);
  square(218,215,3);
  //carrot
  fill('#FF8000');
  circle(300,100,30);
  triangle(284,100,316,100,300,150);
  //stroke('yellow')
  //point(285,100);
  //point(315,100);
  //point(300,150);
  fill('#009900');
  triangle(284,100,316,100,300,80);
  triangle(284,100,300,100,290,80);
  triangle(300,100,310,80,316,100);
  stroke('#663300');
  line(290,120,300,120)
  line(288,110,290,110)
  line(298,130,305,130)
  //title
  textSize(10);
  noStroke();
  fill('white')
  //textStyle(BOLD);
  textAlign(CENTER);
  text('bun', 200, 270);
  //smth
  //fill(value);
  //rect(25, 25, 50, 50);
}