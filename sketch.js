
var fixedrect,movingrect;


function setup() {
  createCanvas(1200,800);
 
  //if you want to make them bounce off verticaly so x position will same and y will be different.
  //if you want to make them bounce off horizontaly so y position will same and x will be different.
  fixedrect = createSprite(100,100,50,50);
   movingrect = createSprite(800,100,50,50);
 
  movingrect.shapeColor = "orange";
  fixedrect.shapeColor = "orange";
 
  //give x velocity when you want them to bounce off horizontaly.
  //give y velocity when you want them to bounce off verticaly.
  fixedrect.velocityX = 5;
  movingrect.velocityX = -5;

}

function draw() {
  background(0);  
 
   //Calling the function bounceoff.
  bounceoff(movingrect,fixedrect);

  
  drawSprites();
}



  
