//dog
let img1;
//random star png
let img2;
//random ufo png
let img3;
let size = 100;
//stars
let xPos;
let yPos;
let sX=1;
let sY=1;
//ufo
//let shX=1;
let shY=2;
let count =0;

function preload() {
  img1 = loadImage('dog.png');
  //random star png
  //img2=loadImage('star.png');
 img2=loadImage('https://static.vecteezy.com/system/resources/previews/001/189/136/non_2x/christmas-decoration-star-png.png');
  //img3=loadImage('ufo.png');
  img3=loadImage('https://cdn.pixabay.com/photo/2020/04/02/16/22/ufo-4995753_1280.png');
}

function setup() {
  createCanvas(400, 400);
  x= (width-size)/2;
  y= (height-size)/2;
}

function draw() {
  background(20);
  //stars flashing
  xPos=random(400);
  yPos=random(400);
  image(img2, xPos, yPos, size/20,size/20);
  sX+=0.5;
  sY+=0.5;
  //dog just vibing
  image(img1, x, y, size, size+20);
  //ufo descending
  if (shY<=y-80){
  shY+=0.5;
  count+=1;} 
  if (shY>=y-80){
  shY=0;} 
  image(img3, x, shY, size, size+20);
  //lyrics appearing
  if (count>=25){
    //blendMode(DODGE);
    strokeWeight(3);
    textAlign(CENTER);
    stroke('white');
    text('~`call it magic`~', 200, 300);
  }
  if (count>=60){
    textAlign(CENTER);
    stroke('white');
    text('~~ `call it truth` ~~', 200, 320);
  }
  if (count==100){count=0;}
  //itd be cool if it was ascending tho it seems to me that its possible only if i clear the screen and re-add everything
  //or i should think about it a little more to find a better solution
}