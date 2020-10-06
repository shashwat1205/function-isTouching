var mrect, frect ,object1, object2, object3, object4;

function setup() {
  
  createCanvas(800,400);
 mrect =  createSprite(600, 300, 50, 50);
 mrect.shapeColor ="red";
 mrect.debug = true;

 frect =  createSprite(400, 200, 50, 50);
 frect.shapeColor ="red";
 frect.debug = true;

 object1 =  createSprite(100, 100, 50, 50);
 object1.shapeColor ="red";
 object1.debug = true;

 object2 =  createSprite(200, 100, 50, 50);
 object2.shapeColor ="red";
 object2.debug = true;

 object3 =  createSprite(300, 100, 50, 50);
 object3.shapeColor ="red";
 object3.debug = true;

 object4 =  createSprite(400, 100, 50, 50);
 object4.shapeColor ="red";
 object4.debug = true;
}

function draw() {
  background(255,255,255); 

  if (isTouching(mrect,frect)|| isTouching(object1,mrect)||isTouching(object2,mrect)||isTouching(object3,mrect)||isTouching(object4,mrect))

  {

    mrect.shapeColor = "green";
    frect.shapeColor ="green";
  }
     else{
    
    mrect.shapeColor = "red";
    frect.shapeColor ="red";

  }
  


  mrect.x =mouseX;
  mrect.y =mouseY;


  drawSprites();
}

function isTouching(obj1,obj2)
{
  
  if(obj1.x-obj2.x <obj1.width/2+obj2.width/2 &&
 obj2.x-obj1.x<obj1.width/2+obj2.width/2&&
  
  obj1.y-obj2.y<obj1.height/2+obj2.height/2 &&
  obj2.y-obj1.y<obj1.height/2+obj2.height/2)

  {
return true
  }
  else{

return false
  }

}







