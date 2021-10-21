//Create variables here
var dogimg
var dog
var dogimg1
var database
var foodS
var foodStock
function preload()
{
	//load images here
  dogimg=loadImage("images/dogimg.png");
  dogimg1=loadImage("images/dogimg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite(250,300,150,150);
  dog.addImage("standing", dogimg);
  dog.scale=0.15;
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() {  
  background("white")
  if(keyDown(UP_ARROW))
  {
    writeStock(foodS)
    dog.addImage("dogimg1",dogimg1)
  }
  drawSprites();
  //add styles here
  text("Pres up arrow key to feed the dog",130,10)
  text(mouseX+","+mouseY,mouseX,mouseY);
}
// function readStock reads value fromm database.
function readStock(data)
{
foodS=data.val()
}
// function writeStock writes the value in database
function writeStock(x)
{
if(x<=0)
{
x=0
}
else
{
x=x-1
}
database.ref("/").update({Food:x})
}

