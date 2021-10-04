//bg
//blue sky of 300 iterations, deepdream p2
let img1;
//butterfly
//descr: beautiful blue batterfly of Hokusai, 100 iterations
let img2;
//kitten
//descr: beautiful orange kitten of Hokusai, 80 iterations
let img3;
let size = 100;
//to move a kitten
let x;
let y;
//to move butterfly
let xP;
let yP;
//to check if
let x_d;
let y_d;

function preload() {
  //bg
  img1 = loadImage('sky4.png');
  //butterfly
  img2=loadImage('r_b100.png');
  //kitten
  img3=loadImage('r_c80.png');
}

function setup() {
  createCanvas(500, 246);
  x= (width-size)/2;
  y= (height-size)/2*2;
  xP=(width-size)/2;
  yP=(height-size)/2-30;
}
function draw() {
  background(20);
  //adding bg
  image(img1, 0, 0);
  //adding a kitten
  image(img3, x, y,size/3*2,size/3*2);
  //adding a butterfly
  image(img2, xP, yP,size/3,size/3);
  //instruction
  rect(25, 25, 105,75);
  strokeWeight(1);
    textAlign(CENTER);
    stroke('black');
    text('to move kitten:', 75, 43);
    text('arrows:Up&Down', 80, 56);
    text('to move b.fly:', 75, 73);
    text('ASDW:', 75, 86);
  
  x_d=Math.abs(x-xP);
  y_d=Math.abs(y-yP);
  if (x_d<=10 & y_d<=10)
  {
    ellipse(300, 76, 80, 40);
    strokeWeight(1);
    textAlign(CENTER);
    stroke('black');
    text('~`a kith <3`~', 300, 80);
  }
}

function keyPressed(){
  //to move a kitten upper and lower
   if (key==='ArrowDown'){
    y+=1;
  }
  if (key==='ArrowUp'){
    y-=1;
  }

  if (key==='S'||key==='s'){
    yP+=1;
  }
  if (key==='W'||key==='w'){
    yP-=1;
  }
  if (key==='D'||key==='d'){
    xP+=1;
  }
  if (key==='A'||key==='a'){
    xP-=1;
  }
 }