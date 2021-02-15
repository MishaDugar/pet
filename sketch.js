var dog,HappyDog,database;
var foodS,foodStock;

function preload()
{
dog=loadImage("image/doglmg.png")
HappyDog=loadImage("image/doglmg1.png")
}

function setup() {
	createCanvas(500, 500);
  database= firebase.database();
 dog= createSprites(250,250,20,30)
 dog.addImage("dog",doglmg.png)
 foodStock=database.ref("Food");
 foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(HappyDog)
                 
}

  drawSprites();
Text("Note:Press Up_Arrow Key To Feed The Dog")
textSize(100);
fill("black");
stroke();
}
function readStock (data){
foodS=data.val;
}
function writeStock(x){
database.ref('/').update()
if(x<=0){
x-0;
}else {
x=x-1
}
Food:x 

}












